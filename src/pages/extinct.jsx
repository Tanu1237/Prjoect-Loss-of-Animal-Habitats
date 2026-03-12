import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import extinctvid2 from "../assets/extinctvid2.mp4";
import extinctData from "../data/extinctData";
import SlideUpInfo from "../components/SlideUpInfo";
import SpeciesListSidebar from "../components/SpeciesListSidebar";
import { BookOpen, Globe, ShieldAlert, ExternalLink } from "lucide-react";

// ───────────────────────── DATA ─────────────────────────

const intro = {
  title: "Echoes of the Wild: A Tribute to the Lost",
  subtitle: "The Silent Forest",
  content: `Earth's history is a 4.5-billion-year masterpiece of biological diversity, yet today we stand at a critical turning point. While extinction is a natural part of evolution, the current rate of loss is 1,000 to 10,000 times higher than the natural background rate. From the silent flight of the Passenger Pigeon to the deep-sea mysteries of Steller's Sea Cow, the animals we have lost are not just names in a textbook—they are missing threads in the intricate web of life that supports us all.

Our Mission

This digital archive is dedicated to documenting the world's recently extinct, missing, and rediscovered species. By exploring their stories, we do more than just reminisce; we seek to understand the human-driven causes—from habitat destruction to climate change—that led to their disappearance.

Why It Matters

Every species plays a role in keeping our planet balanced and healthy. To understand the past is to protect the future. We believe that by honoring those that have vanished, we can inspire a new generation to act now to safeguard the millions of species that still have hope to survive and flourish.`,
};

const stats = [
  { number: "99%+", label: "Species gone forever",  description: "Of all species that ever lived" },
  { number: "1M+",  label: "Species at risk today",  description: "Driven by human activity" },
  { number: "68%",  label: "Population decline",     description: "Since 1970" },
  { number: "365",  label: "Species lost per day",   description: "Current estimates" },
];

const sections = [
  { id: "mammals",   title: "Mammals",        subtitle: "Warm-blooded giants lost to time",       bg: "https://images.pexels.com/photos/26689570/pexels-photo-26689570.jpeg", species: extinctData.filter(s => s.type === "Mammals") },
  { id: "birds",     title: "Birds",           subtitle: "Songs that will never be heard again",   bg: "https://images.pexels.com/photos/987947/pexels-photo-987947.jpeg",    species: extinctData.filter(s => s.type === "Birds") },
  { id: "reptiles",  title: "Reptiles",        subtitle: "Cold-blooded survivors of a lost era",   bg: "https://images.pexels.com/photos/15444977/pexels-photo-15444977.jpeg", species: extinctData.filter(s => s.type === "Reptiles") },
  { id: "amphibian", title: "Amphibian Life",  subtitle: "Extinction beneath the waves",           bg: "https://images.pexels.com/photos/8919558/pexels-photo-8919558.jpeg",  species: extinctData.filter(s => s.type === "Amphibian") },
  { id: "fish",      title: "Fish",            subtitle: "Ancient swimmers lost forever",          bg: "https://images.pexels.com/photos/14264284/pexels-photo-14264284.jpeg", species: extinctData.filter(s => s.type === "Fish") },
  { id: "insects",   title: "Insects",         subtitle: "Tiny lives with massive impact",         bg: "https://images.pexels.com/photos/32934278/pexels-photo-32934278.jpeg", species: extinctData.filter(s => s.type === "Insects") },
];

// ───────────────────── FADE EFFECTS ─────────────────────

const Fade = ({ direction = "top" }) =>
  direction === "top" ? (
    <div
      className="pointer-events-none absolute top-0 inset-x-0 h-40 z-10"  // was z-20
      style={{ background: "linear-gradient(to bottom, #060d09 0%, rgba(6,13,9,0.6) 60%, transparent 100%)" }}
    />
  ) : (
    <div
      className="pointer-events-none absolute bottom-0 inset-x-0 h-40 z-10"  // was z-20
      style={{ background: "linear-gradient(to top, #060d09 0%, rgba(6,13,9,0.6) 60%, transparent 100%)" }}
    />
  );

const SpeciesCard = ({ item, onClick }) => (
  <div
    onClick={onClick}
    className="relative h-48 cursor-pointer overflow-hidden rounded-xl transition-transform hover:scale-[1.03]"
    role="button"
    tabIndex={0}
    onKeyPress={e => e.key === "Enter" && onClick()}
  >
    <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h4 className="font-serif text-lg" style={{ color: "#f0ead8" }}>{item.title}</h4>
      <p className="text-sm mt-1" style={{ color: "#c4bba6" }}>{item.subtitle}</p>
    </div>
  </div>
);

const StatCard = ({ stat }) => (
  <div
    className="py-8 px-5 text-center rounded-2xl"
    style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.14)" }}
  >
    <p className="font-serif mb-1" style={{ fontSize: "2.6rem", color: "#c9a84c" }}>{stat.number}</p>
    <div className="w-6 h-px mx-auto my-2" style={{ background: "linear-gradient(90deg,#c9a84c,#e8d87f,#8fad58)" }} />
    <h3 className="text-base font-semibold mb-1" style={{ color: "#f0ead8" }}>{stat.label}</h3>
    <p className="text-sm" style={{ color: "#c4bba6", opacity: 0.65 }}>{stat.description}</p>
  </div>
);

// ───────────────────── MAIN COMPONENT ─────────────────────

export default function Extinct() {
  const sectionRefs = useRef([]);
  const [activeSpecies, setActiveSpecies] = useState(null);
  const [activeIndex, setActiveIndex]     = useState(null);
  const [sidebarOpen, setSidebarOpen]     = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen || activeSpecies ? "hidden" : "";
  }, [sidebarOpen, activeSpecies]);

  const openSpecies = item => {
    const idx = extinctData.findIndex(s => s.id === item.id);
    setActiveSpecies(item);
    setActiveIndex(idx);
  };

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const found = extinctData.find(a => a.id === hash);
      if (found) {
        setTimeout(() => {
          openSpecies(found);
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <main style={{ background: "#060d09", color: "#f0ead8" }}>

      {/* ── HERO ── */}
      <section className="relative h-screen overflow-hidden flex items-center">
        <video src={extinctvid2} autoPlay loop muted className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/50" />
        <Fade />
        <Fade direction="bottom" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl px-6"
        >
          <p
            className="uppercase text-sm"
            style={{ color: "#c4bba6", letterSpacing: "0.35em", fontFamily: "Courier New,monospace" }}
          >
            Extinction Archive
          </p>
          <h1 className="mt-4 text-6xl font-serif" style={{ color: "#f0ead8" }}>
            Extinct,<br />but remembered
          </h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: "#c4bba6", opacity: 0.82 }}>
            A visual record of species erased from Earth.
          </p>
          <button
            onClick={() => setSidebarOpen(true)}
            className="mt-8 px-6 py-3 text-sm uppercase transition-all duration-300"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              color: "#c9a84c",
              background: "transparent",
              letterSpacing: "0.2em",
              fontFamily: "Courier New,monospace",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            Open Species List
          </button>
        </motion.div>
      </section>

      {/* ── INTRO ── */}
      <section
        className="relative py-32"
        style={{ background: "linear-gradient(160deg,#060d09,#0a150c,#060d09)" }}
      >
        <Fade />
        <Fade direction="bottom" />

        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className="uppercase text-xs mb-4"
            style={{ color: "#c9a84c", letterSpacing: "0.5em", fontFamily: "Courier New,monospace" }}
          >
            Extinction Archive
          </p>
          <div
            className="w-10 h-px mx-auto mb-6"
            style={{ background: "linear-gradient(90deg,#c9a84c,#e8d87f,#8fad58)" }}
          />
          <h2 className="text-5xl font-serif mb-2" style={{ color: "#f0ead8" }}>{intro.title}</h2>
          <h3 className="text-2xl font-serif mb-10" style={{ color: "#c9a84c" }}>{intro.subtitle}</h3>
          <p
            className="max-w-4xl mx-auto whitespace-pre-line mb-16"
            style={{ color: "#c4bba6", opacity: 0.82, lineHeight: 1.9 }}
          >
            {intro.content}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => <StatCard key={i} stat={s} />)}
          </div>
        </div>
      </section>

      {/* ── SPECIES SECTIONS ── */}
      {sections.map((sec, i) => (
        <section
          key={sec.id}
          ref={el => sectionRefs.current[i] = el}
          className="relative py-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${sec.bg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <Fade />
          <Fade direction="bottom" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-serif" style={{ color: "#f0ead8" }}>{sec.title}</h2>
              <p className="mt-2" style={{ color: "#c4bba6", opacity: 0.75 }}>{sec.subtitle}</p>
              <div
                className="w-16 h-px mx-auto mt-6 rounded"
                style={{ background: "linear-gradient(90deg,#c9a84c,#e8d87f,#8fad58)" }}
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {sec.species.map(sp => (
                <div id={sp.id} key={sp.id}>
                  <SpeciesCard item={sp} onClick={() => openSpecies(sp)} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── ABOUT THIS PAGE ── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative py-28"
        style={{ background: "linear-gradient(160deg,#060d09,#0a150c,#060d09)" }}
      >
        {/* gold gradient top divider */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.4),transparent)" }}
        />

        <div className="max-w-5xl mx-auto px-6">
          {/* heading */}
          <div className="text-center mb-16">
            <p
              className="uppercase text-xs font-medium mb-3"
              style={{ color: "#c9a84c", letterSpacing: "0.5em", fontFamily: "Courier New,monospace" }}
            >
              Documentation
            </p>
            {/* gold rule */}
            <div
              className="w-10 h-px mx-auto mb-5"
              style={{ background: "linear-gradient(90deg,#c9a84c,#e8d87f,#8fad58)" }}
            />
            <h2 className="text-4xl font-serif mb-4" style={{ color: "#f0ead8" }}>
              About This Page
            </h2>
          </div>

          {/* three info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                Icon: BookOpen,
                title: "Our Archive",
                body: "This page serves as a curated digital memorial for species that have vanished from Earth. Every entry is researched from peer-reviewed sources, IUCN Red List records, and scientific publications to ensure accuracy and respect for the subject matter.",
              },
              {
                Icon: ShieldAlert,
                title: "Why It Exists",
                body: "Extinction is permanent. By visualising and documenting each lost species, we create a lasting record that educates visitors about biodiversity loss, the consequences of human activity, and the urgency of conservation action before more species follow.",
              },
              {
                Icon: Globe,
                title: "Data Sources",
                body: "Species data is drawn from the IUCN Red List, WWF Living Planet Report, the Smithsonian Institution, and peer-reviewed ecology journals. Population statistics are updated annually to reflect the most current scientific consensus.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.32)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)"}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.22)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#c9a84c" }} />
                </div>
                <h3 className="text-lg font-serif" style={{ color: "#f0ead8" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#c4bba6", opacity: 0.75 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Resources */}
          <div
            className="rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden"
            style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg,#c9a84c,#e8d87f,#8fad58)" }}
            />
            <div className="flex-1">
              <p
                className="text-xs uppercase mb-3"
                style={{ color: "rgba(201,168,76,0.6)", letterSpacing: "0.4em", fontFamily: "Courier New,monospace" }}
              >
                Resources
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "IUCN Red List",     href: "https://www.iucnredlist.org" },
                  { label: "WWF Living Planet", href: "https://www.worldwildlife.org" },
                  { label: "Smithsonian",       href: "https://www.si.edu" },
                  { label: "Conservation.org",  href: "https://www.conservation.org" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm no-underline transition-all duration-200"
                    style={{
                      color: "rgba(196,187,166,0.7)",
                      border: "1px solid rgba(201,168,76,0.15)",
                      background: "rgba(255,255,255,0.02)",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#c9a84c"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(196,187,166,0.7)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; }}
                  >
                    {label} <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── MODALS ── */}
      {activeSpecies && (
        <SlideUpInfo species={activeSpecies} onClose={() => setActiveSpecies(null)} />
      )}

      <SpeciesListSidebar
        sections={sections}
        species={extinctData}
        currentIndex={activeIndex}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSpeciesClick={i => openSpecies(extinctData[i])}
        onTypeClick={i => sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" })}
      />
    </main>
  );
}