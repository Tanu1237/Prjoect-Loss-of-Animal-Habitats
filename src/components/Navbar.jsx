import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Leaf } from "lucide-react";

let _listeners = [];
export function setNavbarVisible(v) { _listeners.forEach((fn) => fn(v)); }
function subscribeNavbar(fn) {
  _listeners.push(fn);
  return () => { _listeners = _listeners.filter((l) => l !== fn); };
}

/* Each link has its own accent pulled from the gold-green palette */
const NAV_LINKS = [
  { label: "Home",         path: "/home",         color: "#c9a84c", glow: "rgba(201,168,76,0.35)"  },
  { label: "Extinct",      path: "/extinct",      color: "#b5895a", glow: "rgba(181,137,90,0.35)"  },
  { label: "Endangered",   path: "/endangered",   color: "#e8d87f", glow: "rgba(232,216,127,0.35)" },
  { label: "Threats",      path: "/threats",      color: "#a3c46a", glow: "rgba(163,196,106,0.35)" },
  { label: "Conservation", path: "/conservation", color: "#8fad58", glow: "rgba(143,173,88,0.35)"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible,  setVisible]  = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered,  setHovered]  = useState(null);
  const lastY  = useRef(0);
  const ticking = useRef(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  /* Reset on route change */
  useEffect(() => {
    lastY.current = 0;
    setScrolled(false);
    setVisible(true);
    setMenuOpen(false);
  }, [location.pathname]);

  /* ── Fixed scroll direction detection ── */
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        setScrolled(y > 30);

        if (y < 80) {
          // Always show near top
          setVisible(true);
        } else if (delta > 5) {
          // Scrolling DOWN — hide
          setVisible(false);
          setMenuOpen(false);
        } else if (delta < -5) {
          // Scrolling UP — show immediately, anywhere on the page
          setVisible(true);
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => subscribeNavbar((v) => { setVisible(v); if (!v) setMenuOpen(false); }), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&display=swap');

        .nb-gradient-text {
          font-family: 'Cinzel', Georgia, serif;
          font-weight: 800;
          background: linear-gradient(90deg, #c9a84c, #e8d87f, #8fad58);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nb-gold-bar     { background: linear-gradient(90deg, #c9a84c, #e8d87f, #8fad58); }
        .nb-progress-bar { background: linear-gradient(90deg, #c9a84c, #e8d87f, #8fad58); }

        /* ─── Nav link wrapper ─── */
        .nb-link-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          isolation: isolate;
        }

        /* Raised pill behind link */
        .nb-link-pill {
          position: absolute;
          inset: 3px 2px 6px 2px;
          border-radius: 9px;
          border: 1px solid transparent;
          background: transparent;
          box-shadow: none;
          opacity: 0;
          transform: translateY(3px) scaleX(0.78) scaleY(0.85);
          transition:
            opacity      0.22s ease,
            transform    0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
            background   0.22s ease,
            border-color 0.22s ease,
            box-shadow   0.32s ease;
          pointer-events: none;
          z-index: 0;
        }
        .nb-link-wrap:hover .nb-link-pill,
        .nb-link-wrap.nb-active .nb-link-pill {
          opacity: 1;
          transform: translateY(-4px) scaleX(1) scaleY(1);
        }

        /* Text label */
        .nb-link-label {
          position: relative;
          z-index: 1;
          display: block;
          transition:
            transform   0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
            color       0.22s ease,
            text-shadow 0.28s ease;
        }
        .nb-link-wrap:hover .nb-link-label  { transform: translateY(-4px); }
        .nb-link-wrap.nb-active .nb-link-label { transform: translateY(-3px); }

        /* Glowing dot underline */
        .nb-link-dot {
          position: absolute;
          bottom: 1px;
          height: 2px;
          width: 18px;
          border-radius: 2px;
          opacity: 0;
          transform: scaleX(0.15) translateY(0px);
          transition:
            opacity    0.28s ease,
            transform  0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
            background 0.22s ease,
            box-shadow 0.28s ease;
          z-index: 2;
        }
        .nb-link-wrap:hover .nb-link-dot,
        .nb-link-wrap.nb-active .nb-link-dot {
          opacity: 1;
          transform: scaleX(1) translateY(-4px);
        }
        .nb-link-wrap.nb-active .nb-link-dot {
          transform: scaleX(1) translateY(-3px);
          width: 22px;
        }
      `}</style>

      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: visible ? 0 : -115, opacity: 1 }}
        transition={
          visible
            ? { type: "spring", stiffness: 340, damping: 28, mass: 0.9 }
            : { duration: 0.28, ease: [0.4, 0, 0.6, 1] }
        }
        className={[
          "fixed top-0 left-0 right-0 z-[200] backdrop-blur-2xl",
          scrolled
            ? "bg-gradient-to-br from-[rgba(4,9,4,0.94)] to-[rgba(8,16,8,0.91)] border-b border-[rgba(201,168,76,0.2)] shadow-[0_6px_50px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-br from-[rgba(4,9,4,0.52)] to-[rgba(8,16,8,0.40)] border-b border-white/5",
          "transition-[background,box-shadow,border-color] duration-400",
        ].join(" ")}
      >
        {/* Gold top accent */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] nb-gold-bar transition-opacity duration-400 ${scrolled ? "opacity-90" : "opacity-50"}`} />

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="absolute bottom-0 left-0 right-0 h-[1.5px] nb-progress-bar opacity-65"
        />

        <div className="max-w-[1360px] mx-auto px-8 h-[70px] flex items-center justify-between gap-6">

          {/* Logo */}
          <NavLink to="/home" className="flex items-center gap-3 shrink-0 no-underline">
            <div className="bg-green-300/15 p-2 rounded-full border border-green-300/20">
              <Leaf className="w-5 h-5 text-green-300" />
            </div>
            <div className="leading-none">
              <div className="nb-gradient-text text-[14px] tracking-[0.22em]">Loss of Animal Habitat</div>
              <div
                className="text-[10px] tracking-[0.14em] text-[rgba(175,210,135,0.5)] mt-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}
              >
                Wildlife Awareness.. WildSide..
              </div>
            </div>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive  = location.pathname === link.path;
              const isHovered = hovered === link.path;
              const lit       = isActive || isHovered;

              return (
                <div
                  key={link.path}
                  className={`nb-link-wrap${isActive ? " nb-active" : ""}`}
                  onMouseEnter={() => setHovered(link.path)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Raised pill coloured per link */}
                  <div
                    className="nb-link-pill"
                    style={{
                      background: lit ? `linear-gradient(175deg, ${link.color}28 0%, ${link.color}12 100%)` : "transparent",
                      borderColor: lit ? `${link.color}44` : "transparent",
                      boxShadow: lit
                        ? `0 0 18px 4px ${link.glow}, 0 6px 0px rgba(0,0,0,0.55), inset 0 1px 0 ${link.color}30`
                        : "none",
                    }}
                  />

                  <NavLink to={link.path} className="no-underline px-[15px] pb-[13px] pt-[10px]">
                    <span
                      className="nb-link-label font-[Cinzel,Georgia,serif] font-bold text-[11px] tracking-[0.22em] uppercase"
                      style={{
                        color: lit ? link.color : "rgba(196,187,166,0.58)",
                        textShadow: lit
                          ? `0 0 10px ${link.glow}, 0 0 26px ${link.color}55, 0 0 50px ${link.color}22`
                          : "none",
                      }}
                    >
                      {link.label}
                    </span>
                  </NavLink>

                  {/* Glowing underline dot */}
                  <div
                    className="nb-link-dot"
                    style={{
                      background: `linear-gradient(90deg, ${link.color}aa, ${link.color}, ${link.color}aa)`,
                      boxShadow: `0 0 8px 2px ${link.glow}, 0 0 20px 4px ${link.color}44`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            className={[
              "md:hidden flex items-center justify-center",
              "border border-[rgba(201,168,76,0.28)] rounded-lg p-[8px_9px] cursor-pointer",
              "text-[#c9a84c] transition-[background] duration-200",
              menuOpen ? "bg-[rgba(201,168,76,0.12)]" : "bg-transparent",
            ].join(" ")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="13" y1="17" x2="21" y2="17"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden bg-[rgba(3,7,3,0.98)] border-t border-[rgba(201,168,76,0.12)] md:hidden"
            >
              <div className="px-3.5 pt-2.5 pb-5">
                <div
                  className="text-[11px] tracking-[0.14em] text-[rgba(201,168,76,0.32)] px-[18px] pt-2 pb-1.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300 }}
                >
                  Navigate
                </div>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.055, ease: "easeOut" }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) => [
                        "block font-[Cinzel,Georgia,serif] font-bold text-[12px] tracking-[0.25em] uppercase no-underline",
                        "px-[18px] py-[13px] rounded-[10px] border-l-2 transition-all duration-200",
                        isActive
                          ? "bg-[rgba(201,168,76,0.09)] border-l-[#c9a84c]"
                          : "border-l-transparent hover:bg-[rgba(201,168,76,0.05)]",
                      ].join(" ")}
                      style={({ isActive }) => ({ color: isActive ? link.color : "rgba(196,187,166,0.68)" })}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}