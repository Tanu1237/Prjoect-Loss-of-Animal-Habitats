import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import extinctData from "../data/extinctData";
import endangeredData from "../data/endangeredData";

// ── Build unified animal index ──────────────────────────────────────────────
const buildAnimals = () => {
  const extinct = extinctData.map(a => ({
    id:       a.id,
    title:    a.title || a.name || "",
    page:     "extinct",
    type:     a.type || "",
    keywords: Array.isArray(a.keywords) ? a.keywords : [],
    status:   "Extinct",
    subtitle: a.subtitle || "",
  }));

  const endangered = endangeredData.map(a => ({
    id:       a.id,
    title:    a.name || a.title || "",
    page:     "endangered",
    type:     a.type || "",
    keywords: Array.isArray(a.keywords) ? a.keywords : [],
    status:   "Endangered",
    subtitle: a.habitat ? a.habitat.split(".")[0] : "",
  }));

  return [...extinct, ...endangered];
};

const ALL_ANIMALS = buildAnimals();

const TYPE_ICONS = {
  Mammals:        "🦁",
  Birds:          "🦅",
  Reptiles:       "🦎",
  Amphibian:      "🐸",
  Fish:           "🐟",
  Insects:        "🦋",
  "Marine Life":  "🐋",
};

const scoreMatch = (animal, query) => {
  const q = query.toLowerCase();
  const t = animal.title.toLowerCase();
  if (t === q)                                                   return 100;
  if (t.startsWith(q))                                           return 90;
  if (t.includes(q))                                             return 70;
  if (animal.type.toLowerCase().includes(q))                     return 50;
  if (animal.keywords.some(k => k?.toLowerCase().includes(q)))   return 30;
  return -1;
};

const Highlight = ({ text = "", query = "" }) => {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-emerald-300 font-semibold">
        {text.slice(idx, idx + query.length)}
      </span>
      {text.slice(idx + query.length)}
    </>
  );
};

export default function AnimalSearch() {
  const [query,       setQuery]       = useState("");
  const [focused,     setFocused]     = useState(false);
  const [activeIdx,   setActiveIdx]   = useState(0);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });

  const wrapperRef = useRef(null);
  const inputRef   = useRef(null);
  const listRef    = useRef(null);
  const itemRefs   = useRef([]);
  const blurTimer  = useRef(null);
  const navigate   = useNavigate();

  // ── Filter & rank ──────────────────────────────────────────────────────────
  const results = query.trim().length > 0
    ? ALL_ANIMALS
        .map(a => ({ ...a, _score: scoreMatch(a, query.trim()) }))
        .filter(a => a._score > 0)
        .sort((a, b) => b._score - a._score)
        .slice(0, 12)
    : [];

  const showDropdown = focused && query.trim().length > 0;

  // ── Fixed dropdown position — recalculate on scroll/resize ────────────────
  useEffect(() => {
    if (!showDropdown || !wrapperRef.current) return;
    const update = () => {
      const r = wrapperRef.current.getBoundingClientRect();
      setDropdownPos({ top: r.bottom + 10, left: r.left, width: r.width });
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [showDropdown]);

  // ── Navigate to animal page ────────────────────────────────────────────────
  const go = useCallback((animal) => {
    navigate(`/${animal.page}#${animal.id}`);
    setQuery("");
    setFocused(false);
    setActiveIdx(0);
  }, [navigate]);

  const handleKeyDown = (e) => {
    if (!showDropdown || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx(i => (i < results.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx(i => (i > 0 ? i - 1 : results.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const idx = activeIdx >= 0 && activeIdx < results.length ? activeIdx : 0;
      if (results[idx]) go(results[idx]);
    } else if (e.key === "Escape") {
      setFocused(false);
      setActiveIdx(0);
      inputRef.current?.blur();
    }
  };

  useEffect(() => { setActiveIdx(0); itemRefs.current = []; }, [query]);

  useEffect(() => {
    if (activeIdx >= 0 && itemRefs.current[activeIdx]) {
      itemRefs.current[activeIdx].scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeIdx]);

  useEffect(() => () => { if (blurTimer.current) clearTimeout(blurTimer.current); }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-xl mx-auto"
      style={{ zIndex: 9999 }}
    >
      {/* ── Input bar ── */}
      <div
        className={`flex items-center overflow-hidden rounded-2xl border backdrop-blur-xl
          bg-black/40 transition-all duration-200
          ${focused
            ? "border-emerald-400/50 shadow-[0_0_0_3px_rgba(52,211,153,0.12),0_8px_40px_rgba(0,0,0,0.4)]"
            : "border-white/10 shadow-lg"
          }`}
      >
        {/* Search icon */}
        <span className="pl-5 pr-3 flex items-center shrink-0">
          <svg
            width="17" height="17" viewBox="0 0 24 24" fill="none"
            stroke={focused ? "#34d399" : "rgba(255,255,255,0.35)"}
            strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
            className="transition-all duration-200"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </span>

        {/* Text input */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Search any animal…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => { clearTimeout(blurTimer.current); setFocused(true); }}
          onBlur={() => { blurTimer.current = setTimeout(() => setFocused(false), 200); }}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
          className="flex-1 bg-transparent text-white placeholder-white/30 text-sm font-medium
            py-4 pr-2 outline-none border-none caret-emerald-400 tracking-wide"
        />

        {/* Count badge */}
        {query.trim() && results.length > 0 && (
          <span className="mr-2 shrink-0 text-xs font-semibold tracking-wider
            px-2.5 py-1 rounded-full
            bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
            {results.length}
          </span>
        )}

        {/* Clear button */}
        {query && (
          <button
            onMouseDown={e => e.preventDefault()}
            onClick={() => { setQuery(""); setActiveIdx(0); inputRef.current?.focus(); }}
            className="px-4 py-4 shrink-0 text-white/30 hover:text-white/70 transition-colors duration-150"
            aria-label="Clear search"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Dropdown — position:fixed so it never affects page layout ── */}
      {showDropdown && (
        <div
          ref={listRef}
          role="listbox"
          style={{
            position: "fixed",
            top:      dropdownPos.top,
            left:     dropdownPos.left,
            width:    dropdownPos.width,
            zIndex:   99999,
          }}
          className="rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl
            shadow-[0_24px_60px_rgba(0,0,0,0.8)]
            max-h-96 overflow-y-auto overflow-x-hidden"
        >
          {results.length > 0 ? (
            <>
              {results.map((animal, i) => {
                const isActive  = i === activeIdx;
                const typeIcon  = TYPE_ICONS[animal.type] || "🐾";
                const isExtinct = animal.status === "Extinct";

                return (
                  <div
                    key={`${animal.page}-${animal.id}`}
                    ref={el => (itemRefs.current[i] = el)}
                    role="option"
                    aria-selected={isActive}
                    onMouseDown={e => { e.preventDefault(); go(animal); }}
                    onMouseEnter={() => setActiveIdx(i)}
                    className={`relative flex items-center gap-3 px-4 py-2.5 cursor-pointer
                      transition-colors duration-100
                      border-b border-white/[0.04] last:border-b-0
                      ${isActive ? "bg-emerald-400/[0.07]" : "hover:bg-white/[0.04]"}`}
                  >
                    {/* Active left accent bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r bg-emerald-400" />
                    )}

                    {/* Type icon tile */}
                    <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center
                      text-base bg-white/5 border border-white/[0.08]">
                      {typeIcon}
                    </div>

                    {/* Name + subtitle */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-white/90 truncate leading-snug">
                        <Highlight text={animal.title} query={query.trim()} />
                      </p>
                      <p className="text-[11px] text-white/35 truncate mt-0.5">
                        {animal.type}
                        {animal.subtitle
                          ? ` · ${animal.subtitle.slice(0, 50)}${animal.subtitle.length > 50 ? "…" : ""}`
                          : ""}
                      </p>
                    </div>

                    {/* Status pill + chevron */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full border
                        ${isExtinct
                          ? "bg-red-950/80 text-red-300 border-red-700/40"
                          : "bg-amber-950/80 text-amber-300 border-amber-700/40"
                        }`}>
                        {isExtinct ? "💀" : "⚠️"} {animal.status}
                      </span>
                      <svg
                        width="13" height="13" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                        className={`transition-all duration-150
                          ${isActive ? "text-emerald-400 translate-x-0.5" : "text-white/20"}`}
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </div>
                );
              })}

              {/* Footer */}
              <div className="sticky bottom-0 flex items-center justify-between
                px-4 py-2 bg-black/95 border-t border-white/[0.06]">
                <span className="text-[11px] text-white/25">
                  {ALL_ANIMALS.length} animals indexed
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-white/25">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 font-mono text-[10px]">↑↓</kbd>
                  <span>navigate</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 font-mono text-[10px]">↵</kbd>
                  <span>open</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 font-mono text-[10px]">esc</kbd>
                  <span>close</span>
                </div>
              </div>
            </>
          ) : (
            <div className="py-8 text-center">
              <p className="text-2xl mb-2 opacity-40">🔍</p>
              <p className="text-[13px] text-white/35">
                No animals match{" "}
                <span className="text-white/70 font-medium">"{query}"</span>
              </p>
              <p className="text-[11px] text-white/25 mt-1">
                Try a species name, type, or keyword
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}