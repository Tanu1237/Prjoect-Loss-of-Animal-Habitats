import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import watchMovie from "../assets/watch movie.mp4";
import { GL, Tag, SectionHeader, NewsModal, FocusModal } from "../components/ConservationComp.jsx";
import {GOLD, G, bg, cream, dim, gBtn,SLIDES, FOCUS, FOCUS_MODALS, STATS, THREATS,WINS, ANIMALS, MIGRATION, HELP_ACTIONS,VOLUNTEER_ROLES, NEWS, ORGS,} from "../data/ConservationData.js";
import {Leaf, Heart, Droplet, ExternalLink, Play, ArrowDown, X,Users, BookOpen, Twitter, Instagram, Youtube, Facebook, ChevronRight,} from "lucide-react";

const FOCUS_ICONS = { Leaf, Droplet, Heart };

export default function Conservation() {
  const [slide, setSlide]= useState(0);
  const [focusModal, setFocusModal]= useState(null);
  const [newsArticle, setNewsArticle]= useState(null);
  const [video, setVideo]= useState(null);
  const [expandedWin, setExpandedWin]= useState(null);
  const [migrationModal, setMigrationModal] = useState(null);

  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const py = useTransform(scrollY, [0, 600], ["0%", "35%"]);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="overflow-x-hidden"
      style={{ background: bg.main, color: cream, fontFamily: "'Cinzel',Georgia,serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        body{margin:0}*{box-sizing:border-box}
        p,span,a,li{font-family:'Cormorant Garamond',Palatino,serif}
        ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:#c9a84c}
        .hi img{transition:transform 0.7s ease}.hi:hover img{transform:scale(1.07)!important}
        .hi:hover .po{opacity:1!important}
        input::placeholder{color:rgba(196,187,166,0.4)}input{outline:none}
        .hov-card{transition:all 0.3s;cursor:pointer}.hov-card:hover{border-color:rgba(201,168,76,0.3)!important;transform:translateY(-4px)}
        .news-card:hover{border-color:rgba(201,168,76,0.28)!important;transform:translateY(-5px)}
      `}</style>

      {/* ── 1. HERO ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: py }} className="absolute inset-0 scale-110">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${SLIDES[slide].img})` }}
            />
          </AnimatePresence>
        </motion.div>

        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right,rgba(6,10,7,0.92) 0%,rgba(6,10,7,0.6) 55%,transparent 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top,${bg.main},transparent 40%)` }}
        />

        <div className="relative z-10 flex items-center h-full px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-9" style={{ background: G }} />
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: GOLD, fontFamily: "Courier New,monospace", letterSpacing: "0.5em" }}
                >
                  {SLIDES[slide].label}
                </span>
              </div>

              <h1
                className="leading-none tracking-tight mb-6"
                style={{ fontSize: "clamp(4rem,10vw,8rem)", letterSpacing: "-0.02em" }}
              >
                {SLIDES[slide].title}
              </h1>

              <p
                className="text-xl leading-relaxed mb-10"
                style={{ color: dim, maxWidth: "34rem", opacity: 0.8, lineHeight: 1.8 }}
              >
                Every action we take today shapes the world our children will inherit.
              </p>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201,168,76,0.3)" }}
                  onClick={() => document.getElementById("act-now").scrollIntoView({ behavior: "smooth" })}
                  className="px-9 py-4 rounded-full border-none cursor-pointer text-xs uppercase font-semibold tracking-widest"
                  style={{ background: G, color: bg.main, letterSpacing: "0.2em" }}
                >
                  Take Action
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setVideo(watchMovie)}
                  className="px-9 py-4 rounded-full cursor-pointer flex items-center gap-2 text-xs uppercase tracking-widest"
                  style={{
                    background: "rgba(201,168,76,0.07)",
                    color: cream,
                    border: "1px solid rgba(201,168,76,0.35)",
                    letterSpacing: "0.2em",
                  }}
                >
                  <Play size={13} /> Watch Film
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setSlide(i)}
              animate={{
                width: i === slide ? 34 : 6,
                backgroundColor: i === slide ? GOLD : "rgba(240,234,216,0.25)",
              }}
              style={{ height: 2, border: "none", borderRadius: 4, cursor: "pointer" }}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-10 right-12 z-10 flex flex-col items-center gap-1"
          style={{
            color: "rgba(201,168,76,0.45)",
            fontFamily: "Courier New,monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
          }}
        >
          SCROLL <ArrowDown size={13} />
        </motion.div>
      </section>

      {/* ── 2. TICKER ── */}
      <div
        className="overflow-hidden py-3"
        style={{
          background: bg.deep,
          borderTop: "1px solid rgba(201,168,76,0.12)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap uppercase"
          style={{ fontSize: "0.75rem", letterSpacing: "0.3em", fontFamily: "Courier New,monospace" }}
        >
          {Array(12).fill(["✦ Protect Wildlife", "◆ Restore Habitats", "✦ Clean Oceans", "◆ Save Species", "✦ Plant Forests"]).flat().map((t, i) => (
            <span key={i} style={{ color: i % 2 === 0 ? GOLD : dim, flexShrink: 0 }}>{t}</span>
          ))}
        </motion.div>
      </div>

      {/* ── 3. MISSION ── */}
      <section
        className="py-28 px-8"
        style={{ background: "linear-gradient(160deg,#060d09,#0a150c,#060d09)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: GOLD, fontFamily: "Courier New,monospace", letterSpacing: "0.5em" }}
            >
              Our Mission
            </p>
            <GL />
            <h2
              className="font-normal mb-6"
              style={{ fontSize: "clamp(2.2rem,3.5vw,3rem)", color: cream, lineHeight: 1.1 }}
            >
              One Planet. One Chance. Act Together.
            </h2>
            <p className="text-lg leading-loose mb-5" style={{ color: dim, opacity: 0.85, lineHeight: 1.9 }}>
              Green Nature is a conservation awareness platform dedicated to educating, inspiring, and connecting people with the organisations and actions that protect our planet's wildlife and wild places.
            </p>
            <p className="leading-loose mb-8" style={{ color: dim, fontSize: "1.05rem", opacity: 0.7, lineHeight: 1.9 }}>
              We believe informed people make better choices — for animals, ecosystems, and the future of all life on Earth. Every section of this platform is designed to turn awareness into action.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["🌍", "Global Reach","Covering conservation across 6 continents"],
                ["🔬", "Science-Backed", "All data from peer-reviewed research"],
                ["🤝", "Community","Connecting you to front-line conservationists"],
                ["💡", "Action-Focused", "Every page ends with a way to help"],
              ].map(([ic, t, d]) => (
                <div
                  key={t}
                  className="p-4 rounded-xl"
                  style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}
                >
                  <span className="text-2xl">{ic}</span>
                  <p className="font-medium mt-1 mb-1" style={{ color: cream, fontSize: "0.95rem" }}>{t}</p>
                  <p className="m-0" style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>{d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="hi overflow-hidden rounded-2xl"
              style={{ height: "32rem", border: "1px solid rgba(201,168,76,0.12)" }}
            >
              <img
                src="https://i0.wp.com/charities2love.org/wp-content/uploads/2023/04/One-Earth-One-Chance-Logo.png?fit=500%2C500&ssl=1"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 px-7 py-5 rounded-2xl backdrop-blur-xl"
              style={{
                background: "rgba(3,6,5,0.9)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div className="h-0.5 mb-2" style={{ background: G }} />
              <p style={{ fontSize: "2rem", color: GOLD, fontFamily: "'Cinzel',serif" }}>Since 2018</p>
              <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>Raising awareness for wildlife</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHAT WE PROTECT ── */}
      <section className="py-28 px-8" style={{ background: bg.main }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Our Focus" title="What We Protect" center />
          <div className="grid grid-cols-3 gap-6">
            {FOCUS.map((f, i) => {
              const Icon = FOCUS_ICONS[f.icon];
              return (
                <motion.div
                  key={f.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="hi relative cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setFocusModal(f.key)}
                  style={{ height: "25rem" }}
                >
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(6,10,7,0.94) 0%,rgba(6,10,7,0.3) 55%,transparent 100%)" }}
                  />
                  <div className="absolute bottom-0 p-8">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.28)" }}
                    >
                      {Icon && <Icon size={20} color={GOLD} />}
                    </div>
                    <h3 className="font-normal" style={{ fontSize: "1.7rem", color: cream }}>{f.title}</h3>
                    <GL />
                    <span
                      className="flex items-center gap-1 uppercase"
                      style={{ color: GOLD, fontSize: "0.75rem", letterSpacing: "0.15em" }}
                    >
                      Explore <ChevronRight size={13} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. THE CRISIS ── */}
      <section
        className="py-28 px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg,#060d09,#0a1a0e,#060d09)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: GOLD, fontFamily: "Courier New,monospace", letterSpacing: "0.5em" }}
              >
                The Crisis
              </p>
              <GL />
              <h2
                className="font-normal mb-6"
                style={{ fontSize: "clamp(2.2rem,3.5vw,3rem)", color: cream }}
              >
                Why Animal Conservation Matters
              </h2>
              <p className="text-lg mb-5" style={{ color: dim, lineHeight: 1.9, opacity: 0.85 }}>
                Every species plays a crucial role in maintaining ecological balance. When one disappears, it disrupts the entire food chain. Biodiversity ensures clean air, clean water, and climate stability for all life.
              </p>
              <p style={{ color: dim, fontSize: "1.05rem", lineHeight: 1.9, opacity: 0.7 }}>
                We are currently in the sixth mass extinction — the first one driven not by asteroids or volcanoes, but by human activity. The good news: it can be stopped.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="hi overflow-hidden rounded-2xl"
                style={{ height: "24rem", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <img
                  src="https://img.volunteerworld.com/img/default/1b8ff06780f2c238d9cbef775e9a4309b6b3eefb/IMG4648.jpg?Height=317&Width=562"
                  alt="Wildlife"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 px-7 py-5 rounded-2xl backdrop-blur-xl"
                style={{ background: "rgba(3,6,5,0.88)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div className="h-0.5 mb-2" style={{ background: G }} />
                <p style={{ fontSize: "2.2rem", color: GOLD, fontFamily: "'Cinzel',serif" }}>3,682</p>
                <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>Tigers in India — up from 1,200</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid grid-cols-4 gap-5 mb-16">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-8 px-5 text-center rounded-2xl"
                style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.14)" }}
              >
                <p className="font-normal mb-1" style={{ fontSize: "2.6rem", color: GOLD }}>{s.val}</p>
                <div className="h-px w-6 mx-auto my-1" style={{ background: G }} />
                <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>{s.label}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="font-normal mb-6" style={{ fontSize: "1.8rem", color: cream }}>
            Major Threats to Wildlife
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {THREATS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-7 rounded-2xl transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <span className="text-4xl block mb-3">{t.icon}</span>
                <h4 className="font-normal mb-2" style={{ fontSize: "1.25rem", color: cream }}>{t.title}</h4>
                <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.7 }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CONSERVATION WINS ── */}
      <section
        className="py-28 px-8"
        style={{ background: "linear-gradient(160deg,#060d09,#071a0e,#060d09)" }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Proof It Works"
            title="Conservation Wins"
            sub="The crisis is real — but so is the recovery. These stories prove conservation works when we commit to it."
            center
          />
          <div className="grid grid-cols-3 gap-6">
            {WINS.map((w, i) => {
              const isOpen = expandedWin === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden cursor-pointer transition-colors duration-300"
                  style={{
                    border: `1px solid ${isOpen ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.08)"}`,
                    background: bg.card,
                  }}
                  onClick={() => setExpandedWin(isOpen ? null : i)}
                >
                  <div className="hi relative overflow-hidden" style={{ height: "22rem" }}>
                    <img src={w.img} alt={w.title} className="w-full h-full object-cover" />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top,rgba(3,6,5,0.97) 0%,rgba(3,6,5,0.45) 55%,transparent 100%)" }}
                    />
                    <div
                      className="absolute top-4 right-4 rounded-full px-3 py-1 backdrop-blur-md"
                      style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}
                    >
                      <span
                        className="uppercase"
                        style={{ color: GOLD, fontSize: "0.6rem", letterSpacing: "0.2em", fontFamily: "Courier New,monospace" }}
                      >
                        ✦ Success
                      </span>
                    </div>
                    <div className="absolute bottom-0 p-6 w-full">
                      <span className="text-2xl">{w.emoji}</span>
                      <h3 className="font-normal mt-1 mb-1" style={{ fontSize: "1.2rem", color: cream }}>{w.title}</h3>
                      <p style={{ fontSize: "1.9rem", color: GOLD, fontFamily: "'Cinzel',serif", margin: "0 0 0.15rem" }}>{w.stat}</p>
                      <p style={{ color: dim, fontSize: "0.82rem", opacity: 0.8, margin: "0 0 0.25rem" }}>{w.unit}</p>
                      <div className="flex justify-between items-center">
                        <p style={{ color: "rgba(196,187,166,0.45)", fontSize: "0.75rem", fontFamily: "Courier New,monospace", margin: 0 }}>
                          ↑ {w.before}
                        </p>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ color: GOLD, fontSize: "0.75rem", fontFamily: "Courier New,monospace" }}
                        >
                          ▾
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="p-7"
                          style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}
                        >
                          <p
                            className="mb-6 pl-4"
                            style={{
                              color: cream,
                              fontSize: "0.97rem",
                              lineHeight: 1.8,
                              opacity: 0.88,
                              borderLeft: `3px solid ${GOLD}`,
                            }}
                          >
                            {w.desc}
                          </p>

                          <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="h-px w-5" style={{ background: G }} />
                              <span
                                className="uppercase"
                                style={{ color: GOLD, fontSize: "0.6rem", letterSpacing: "0.4em", fontFamily: "Courier New,monospace" }}
                              >
                                How It Happened
                              </span>
                            </div>
                            <p className="m-0" style={{ color: dim, fontSize: "0.92rem", lineHeight: 1.8, opacity: 0.78 }}>{w.how}</p>
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="h-px w-5" style={{ background: G }} />
                              <span
                                className="uppercase"
                                style={{ color: GOLD, fontSize: "0.6rem", letterSpacing: "0.4em", fontFamily: "Courier New,monospace" }}
                              >
                                Key Facts
                              </span>
                            </div>
                            <div className="flex flex-col gap-2">
                              {w.facts.map((f, j) => (
                                <div
                                  key={j}
                                  className="flex gap-3 items-start px-3 py-2 rounded-lg"
                                  style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}
                                >
                                  <span className="shrink-0 mt-0.5" style={{ color: GOLD, fontSize: "0.7rem" }}>✦</span>
                                  <p className="m-0" style={{ color: dim, fontSize: "0.88rem", lineHeight: 1.6, opacity: 0.82 }}>{f}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. ANIMALS ── */}
      <section
        className="py-28 px-8"
        style={{ background: `linear-gradient(180deg,${bg.main},${bg.mid})` }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="In Focus"
            title="Animals Worth Saving"
            sub="Each of these species faces an uncertain future. Their survival depends on the actions we take today."
            center
          />
          <div className="grid grid-cols-3 gap-5">
            {ANIMALS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="hi relative overflow-hidden rounded-2xl"
                style={{ height: "22rem" }}
              >
                <img src={a.img} className="w-full h-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(3,6,5,0.92) 0%,rgba(0,0,0,0.15) 55%,transparent 100%)" }}
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full uppercase backdrop-blur-md"
                  style={{
                    color: a.color,
                    background: `${a.color}18`,
                    border: `1px solid ${a.color}44`,
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    fontFamily: "Courier New,monospace",
                  }}
                >
                  {a.status}
                </span>
                <h3
                  className="absolute bottom-6 left-6 font-normal"
                  style={{ fontSize: "1.5rem", color: cream }}
                >
                  {a.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. MIGRATION ── */}
      <section
        className="py-28 px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg,#040d07,#071408,#040d07)" }}
      >
        <div className="max-w-5xl mx-auto relative">
          <SectionHeader
            label="Nature's Greatest Journey"
            title="Wildlife Migration"
            sub="Every year, billions of animals undertake extraordinary journeys driven by seasons, food, and the ancient pull of survival."
            center
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl mb-16"
            style={{ height: "28rem", border: "1px solid rgba(201,168,76,0.1)" }}
          >
            <img
              src="https://static.wixstatic.com/media/0c30ac_b35519427750445db2618fb0dcc22853~mv2.png/v1/fill/w_1110,h_624,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/0c30ac_b35519427750445db2618fb0dcc22853~mv2.png"
              alt="Great Migration"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top,rgba(4,13,7,0.92) 0%,rgba(0,0,0,0.2) 60%,transparent 100%)" }}
            />
            <div className="absolute bottom-10 left-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {["1.5M Wildebeest", "250K Zebra", "500km Journey", "Annual Event"].map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full uppercase backdrop-blur-md"
                    style={{
                      color: GOLD,
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      fontFamily: "Courier New,monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-normal" style={{ fontSize: "2.4rem", color: cream }}>The Great Wildebeest Migration</h3>
              <p className="mt-2" style={{ color: dim, opacity: 0.7, fontSize: "1.05rem" }}>
                The largest terrestrial migration on Earth — Serengeti to Masai Mara and back, every single year.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 mb-16">
            {MIGRATION.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="hi overflow-hidden rounded-2xl cursor-pointer transition-colors duration-300"
                onClick={() => setMigrationModal(s)}
                style={{
                  background: bg.card,
                  border: "1px solid rgba(201,168,76,0.1)",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"}
              >
                <div className="relative overflow-hidden" style={{ height: "13rem" }}>
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom,transparent 40%,${bg.card} 100%)` }}
                  />
                  <span className="absolute top-4 right-4 text-3xl">{s.icon}</span>
                  <div
                    className="absolute bottom-4 right-4 px-3 py-1 rounded-full backdrop-blur-md"
                    style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    <span
                      className="uppercase"
                      style={{ color: GOLD, fontSize: "0.6rem", letterSpacing: "0.2em", fontFamily: "Courier New,monospace" }}
                    >
                      View Details →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-normal mb-3" style={{ fontSize: "1.4rem", color: cream }}>{s.name}</h4>
                  <div className="flex gap-2 flex-wrap mb-3">
                    <Tag>📍 {s.route}</Tag>
                    <Tag color="#a8c9ad">📏 {s.dist}</Tag>
                  </div>
                  <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.75, opacity: 0.7 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-12"
            style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.14)" }}
          >
            <h3 className="text-center font-normal mb-10" style={{ fontSize: "1.7rem", color: cream }}>
              Migration by the Numbers
            </h3>
            <div className="grid grid-cols-4 gap-8 text-center">
              {[
                { v: "1.5B",l: "Birds migrate each year in North America", i: "🐦" },
                { v: "90K km", l: "Distance Arctic Tern travels annually",i: "🗺️" },
                { v: "500+", l: "Species undertake long-distance migrations", i: "🌍" },
                { v: "30%",l: "Migratory species in decline",i: "📉" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl mb-2">{s.i}</div>
                  <p style={{ fontSize: "1.9rem", color: GOLD, fontFamily: "'Cinzel',serif", marginBottom: "0.4rem" }}>{s.v}</p>
                  <div className="h-px w-5 mx-auto my-1" style={{ background: G }} />
                  <p style={{ color: dim, fontSize: "0.82rem", lineHeight: 1.6, opacity: 0.65 }}>{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 9. HOW YOU CAN HELP ── */}
      <section
        className="py-28 px-8"
        style={{ background: "linear-gradient(160deg,#060d09,#0a1a0e,#060d09)" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Daily Actions"
            title="How You Can Help"
            sub="You don't have to donate to make a difference. These everyday actions have real, measurable impact on wildlife and ecosystems."
            center
          />
          <div className="grid grid-cols-3 gap-5 mb-16">
            {HELP_ACTIONS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="hov-card p-8 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <span className="text-4xl block mb-3">{a.icon}</span>
                <h4 className="font-normal mb-2" style={{ fontSize: "1.2rem", color: cream }}>{a.title}</h4>
                <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.75, opacity: 0.7 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-12 py-10 rounded-2xl text-center relative"
            style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}
          >
            <span
              className="absolute top-4 left-8 leading-none"
              style={{ fontSize: "4rem", color: "rgba(201,168,76,0.12)", fontFamily: "Georgia,serif" }}
            >
              "
            </span>
            <p
              className="italic mx-auto"
              style={{ fontSize: "1.4rem", color: cream, lineHeight: 1.7, maxWidth: "48rem", opacity: 0.9 }}
            >
              The Earth does not belong to us. We belong to the Earth. What we do to the web of life, we do to ourselves.
            </p>
            <div className="h-px w-12 mx-auto mt-6 mb-3" style={{ background: G }} />
            <p
              className="uppercase tracking-widest"
              style={{ color: GOLD, fontSize: "0.8rem", letterSpacing: "0.3em", fontFamily: "Courier New,monospace" }}
            >
              Chief Seattle
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 10. VOLUNTEER ── */}
      <section className="py-28 px-8" style={{ background: bg.main }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Get Involved"
            title="Volunteer for Wildlife"
            sub="Go beyond awareness — give your time, skills, and energy directly to conservation in the field or from home."
            center
          />
          <div className="grid grid-cols-3 gap-5 mb-16">
            {VOLUNTEER_ROLES.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="hov-card p-8 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <span className="text-4xl block mb-3">{r.icon}</span>
                <h4 className="font-normal mb-1" style={{ fontSize: "1.15rem", color: cream }}>{r.title}</h4>
                <p className="mb-4" style={{ color: dim, fontSize: "0.92rem", lineHeight: 1.75, opacity: 0.7 }}>{r.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <Tag color="#7aab82">⏱ {r.time}</Tag>
                  <Tag color="#a8c9ad">📍 {r.loc}</Tag>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-8 items-center px-12 py-10 rounded-2xl relative overflow-hidden"
            style={{
              gridTemplateColumns: "1fr auto",
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.22)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: G }} />
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Users size={20} color={GOLD} />
                <span
                  className="uppercase"
                  style={{ color: GOLD, fontSize: "0.65rem", letterSpacing: "0.4em", fontFamily: "Courier New,monospace" }}
                >
                  Join the Movement
                </span>
              </div>
              <h3 className="font-normal mb-2" style={{ fontSize: "1.7rem", color: cream }}>
                12,000+ volunteers active worldwide
              </h3>
              <p style={{ color: dim, fontSize: "1rem", opacity: 0.7 }}>
                Connect with conservation programs that match your skills, availability, and location.
              </p>
            </div>
            <motion.a
              href="https://www.volunteerworld.com/en/volunteer-abroad/wildlife-conservation"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201,168,76,0.3)" }}
              className="px-10 py-4 rounded-full no-underline uppercase font-bold whitespace-nowrap"
              style={{ background: G, color: bg.main, fontSize: "0.85rem", letterSpacing: "0.15em" }}
            >
              Find a Role
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── 11. ORGANISATIONS ── */}
      <section
        className="py-28 px-8"
        style={{ background: "linear-gradient(180deg,#060a07,#0a120a)" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Partners"
            title="Leading the Movement"
            sub="These organisations protect animals, restore habitats, and safeguard biodiversity globally."
            center
          />
          <div className="flex flex-col gap-28">
            {ORGS.map((o, i) => {
              const ImgCol = (
                <div
                  className="hi relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setVideo(o.vid)}
                  style={{ height: "22rem", border: "1px solid rgba(201,168,76,0.1)" }}
                >
                  <img src={o.img} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top,rgba(3,6,5,0.55),transparent)" }}
                  />
                  <div
                    className="po absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: G, opacity: 0, transition: "opacity 0.3s" }}
                  >
                    <Play size={18} color={bg.main} style={{ marginLeft: 2 }} />
                  </div>
                </div>
              );
              const TextCol = (
                <div>
                  <GL />
                  <h3 className="font-normal mb-4" style={{ fontSize: "2rem", color: cream }}>{o.name}</h3>
                  <p className="mb-6" style={{ color: dim, fontSize: "1.05rem", lineHeight: 1.85, opacity: 0.75 }}>{o.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {o.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <a
                    href={o.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={gBtn}
                    onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = bg.main; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}
                  >
                    Visit Website <ExternalLink size={13} />
                  </a>
                </div>
              );
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-2 gap-16 items-center"
                >
                  {i % 2 === 0 ? <>{ImgCol}{TextCol}</> : <>{TextCol}{ImgCol}</>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VIDEO LIGHTBOX ── */}
      <AnimatePresence>
        {video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-300 flex items-center justify-center p-6 backdrop-blur-2xl"
            style={{ background: "rgba(3,6,5,0.95)", zIndex: 300 }}
            onClick={() => setVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.84 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.84 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                maxWidth: "54rem",
                aspectRatio: "16/9",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 z-10" style={{ background: G }} />

              {typeof video === "string" && (video.startsWith("/") || video.startsWith("blob") || video.includes("assets") || video.endsWith(".mp4")) ? (
                <video
                  src={video}
                  autoPlay
                  controls
                  className="w-full h-full object-cover bg-black"
                />
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video}?autoplay=1`}
                  title="Video"
                  allowFullScreen
                  allow="autoplay"
                />
              )}

              <button
                onClick={() => setVideo(null)}
                className="absolute top-2 right-2 p-1.5 rounded-full cursor-pointer flex items-center justify-center z-10 backdrop-blur-md"
                style={{
                  background: "rgba(6,10,7,0.85)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  color: cream,
                }}
              >
                <X size={15} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 12. LATEST NEWS ── */}
      <section
        className="py-28 px-8"
        style={{ background: "linear-gradient(160deg,#060d09,#0a150c,#060d09)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-14">
            <SectionHeader label="Stay Informed" title="Latest News" />
            <motion.a
              href="https://iucn.org/news-events"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`mb-14 ${gBtn}`}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = bg.main; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}
            >
              View All Stories <BookOpen size={13} />
            </motion.a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {NEWS.map((n, i) => (
              <motion.div
                key={n.title || i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="hi news-card hov-card overflow-hidden rounded-2xl cursor-pointer flex flex-col transition-all duration-300"
                onClick={() => setNewsArticle(n)}
                style={{ background: bg.card, border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <div className="relative overflow-hidden shrink-0" style={{ height: "13rem" }}>
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom,transparent 50%,${bg.card} 100%)` }}
                  />
                  <div
                    className="absolute top-3 right-3 px-2 py-0.5 rounded-full backdrop-blur-md"
                    style={{ background: "rgba(6,10,7,0.8)", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <span style={{ color: "rgba(201,168,76,0.7)", fontSize: "0.62rem", fontFamily: "Courier New,monospace" }}>
                      ⏱ {n.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <Tag>{n.tag}</Tag>
                    <span style={{ color: "rgba(196,187,166,0.4)", fontSize: "0.75rem", fontFamily: "Courier New,monospace" }}>
                      {n.date}
                    </span>
                  </div>
                  <h4 className="font-normal mb-3" style={{ fontSize: "1.15rem", color: cream, lineHeight: 1.4 }}>{n.title}</h4>
                  <p className="flex-1" style={{ color: dim, fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.65 }}>{n.excerpt}</p>
                  <div
                    className="mt-4 pt-4 flex items-center gap-2"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg,rgba(201,168,76,0.18),rgba(201,168,76,0.04))",
                        border: "1px solid rgba(201,168,76,0.18)",
                        color: GOLD,
                        fontSize: "0.65rem",
                      }}
                    >
                      {n.author.charAt(0)}
                    </div>
                    <p
                      className="flex-1 m-0 truncate"
                      style={{ color: cream, fontSize: "0.78rem", opacity: 0.8 }}
                    >
                      {n.author}
                    </p>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-1 uppercase shrink-0"
                      style={{ color: GOLD, fontSize: "0.75rem", letterSpacing: "0.12em", fontFamily: "Courier New,monospace" }}
                    >
                      Read <ChevronRight size={11} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. ACT NOW ── */}
      <section
        id="act-now"
        className="py-36 px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0a1a08,#142810,#0a1a08)" }}
      >
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute pointer-events-none rounded-full"
          style={{
            top: "20%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "40rem",
            height: "40rem",
            background: "rgba(201,168,76,0.08)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p
              className="uppercase mb-4"
              style={{ color: GOLD, fontSize: "0.65rem", letterSpacing: "0.55em", fontFamily: "Courier New,monospace" }}
            >
              The Time Is Now
            </p>
            <div className="h-px w-16 mx-auto mb-5" style={{ background: G }} />
            <h2 className="leading-none mb-6" style={{ fontSize: "clamp(3.5rem,8vw,6rem)", color: cream }}>
              Act Now.
            </h2>
            <p
              className="mx-auto"
              style={{ color: dim, fontSize: "1.15rem", lineHeight: 1.85, maxWidth: "38rem", opacity: 0.75 }}
            >
              The window to protect our planet's biodiversity is narrowing. Choose how you want to make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-12 mb-8 relative overflow-hidden"
            style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: G }} />
            <div className="grid gap-8 items-center" style={{ gridTemplateColumns: "1fr auto" }}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🌍</span>
                  <span
                    className="uppercase"
                    style={{ color: GOLD, fontSize: "0.65rem", letterSpacing: "0.4em", fontFamily: "Courier New,monospace" }}
                  >
                    Featured Platform
                  </span>
                </div>
                <h3 className="font-normal mb-3" style={{ fontSize: "1.9rem", color: cream }}>
                  Wildlife Conservation Network
                </h3>
                <p className="mb-5" style={{ color: dim, fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.8, maxWidth: "42rem" }}>
                  A hub for wildlife conservation projects worldwide. Choose which animal, habitat, or program you want to support — from elephants to sea turtles to front-line conservationists.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["💰 Donate to Projects", "🐘 Support Specific Animals", "🌳 Fund Habitats", "🎯 Run Fundraisers", "🎓 Join Communities"].map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full"
                      style={{
                        fontSize: "0.8rem",
                        color: dim,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(201,168,76,0.15)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <motion.a
                href="https://wildnet.org"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, boxShadow: "0 0 50px rgba(201,168,76,0.3)" }}
                className="flex flex-col items-center gap-1 px-9 py-6 rounded-2xl no-underline text-center"
                style={{ background: G, color: bg.main, minWidth: "10rem" }}
              >
                <span className="text-2xl">🐾</span>
                <span className="font-bold uppercase" style={{ fontSize: "0.85rem", letterSpacing: "0.1em" }}>Take Action</span>
                <span style={{ fontSize: "0.72rem", opacity: 0.65 }}>wildnet.org</span>
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-5">
            {[
              { emoji: "🌱", name: "GlobalGiving",desc: "Choose from hundreds of conservation projects worldwide.", tag: "Fund Projects",url: "https://www.globalgiving.org",     color: "#7aab82" },
              { emoji: "🌿", name: "Rainforest Trust", desc: "Protect critical rainforest habitats and biodiversity.",tag: "Protect Habitats", url: "https://www.rainforesttrust.org",   color: "#2a8c7a" },
              { emoji: "✊", name: "Change.org",desc: "Sign petitions to stop illegal wildlife trade globally.", tag: "Sign Petitions",url: "https://www.change.org",           color: GOLD },
            ].map((p, i) => (
              <motion.a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="block p-8 rounded-2xl no-underline transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <span className="text-3xl block mb-3">{p.emoji}</span>
                <h4 className="font-normal mb-2" style={{ fontSize: "1.3rem", color: cream }}>{p.name}</h4>
                <p className="mb-5" style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.7 }}>{p.desc}</p>
                <Tag color={p.color}>{p.tag} →</Tag>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. FOOTER ── */}
      <footer style={{ background: bg.deep, borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div
          className="py-10 px-8 flex justify-center gap-5"
          style={{ borderBottom: "1px solid rgba(201,168,76,0.06)" }}
        >
          {[
            { Icon: Instagram, label: "Instagram", url: "https://instagram.com" },
            { Icon: Twitter, label: "Twitter", url: "https://twitter.com" },
            { Icon: Facebook,label: "Facebook",url: "https://facebook.com" },
            { Icon: Youtube,label: "YouTube",url: "https://youtube.com" },
          ].map(({ Icon, label, url }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -3 }}
              className="w-11 h-11 rounded-full flex items-center justify-center no-underline transition-all duration-300"
              style={{
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.18)",
                color: "rgba(201,168,76,0.6)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(201,168,76,0.18)";
                e.currentTarget.style.color = GOLD;
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(201,168,76,0.07)";
                e.currentTarget.style.color = "rgba(201,168,76,0.6)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.18)";
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        <div className="px-10 py-8 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: G }}
            >
              <Leaf size={12} color={bg.main} />
            </div>
            <span className="uppercase tracking-widest" style={{ fontSize: "0.8rem", letterSpacing: "0.25em" }}>
              GREEN <span style={{ color: GOLD }}>NATURE</span>
            </span>
          </div>
          <p style={{ color: "rgba(201,168,76,0.25)", fontSize: "0.82rem" }}>
            © 2026 Green Nature Conservation. All rights reserved.
          </p>
          <div className="flex gap-7">
            {["Privacy", "Terms", "Contact"].map(t => (
              <a
                key={t}
                href="#"
                className="no-underline transition-colors duration-300"
                style={{ color: "rgba(201,168,76,0.3)", fontSize: "0.82rem" }}
                onMouseEnter={e => e.target.style.color = GOLD}
                onMouseLeave={e => e.target.style.color = "rgba(201,168,76,0.3)"}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── MIGRATION MODAL ── */}
      <AnimatePresence>
        {migrationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-3xl"
            style={{ background: "rgba(3,6,5,0.95)", zIndex: 400 }}
            onClick={() => setMigrationModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-y-auto rounded-3xl"
              style={{
                background: bg.card,
                border: "1px solid rgba(201,168,76,0.2)",
                maxHeight: "92vh",
              }}
            >
              <div className="h-0.5 rounded-t-3xl sticky top-0 z-10" style={{ background: G }} />

              <div className="relative overflow-hidden" style={{ height: "20rem" }}>
                <img
                  src={migrationModal.heroImg}
                  alt={migrationModal.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(12,20,16,1) 0%,rgba(12,20,16,0.3) 60%,transparent 100%)" }}
                />
                <button
                  onClick={() => setMigrationModal(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md"
                  style={{
                    background: "rgba(6,10,7,0.85)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: cream,
                  }}
                >
                  <X size={15} />
                </button>
                <div className="absolute bottom-7 left-8">
                  <span className="text-4xl">{migrationModal.icon}</span>
                  <h2 className="font-normal mt-1 mb-2" style={{ fontSize: "2.2rem", color: cream }}>
                    {migrationModal.name}
                  </h2>
                  <div className="flex gap-2 flex-wrap">
                    <Tag>📍 {migrationModal.route}</Tag>
                    <Tag color="#a8c9ad">📏 {migrationModal.dist}</Tag>
                  </div>
                </div>
              </div>

              <div className="px-12 pt-10 pb-12">
                <p
                  className="mb-8 pl-4"
                  style={{
                    color: cream,
                    fontSize: "1.05rem",
                    lineHeight: 1.85,
                    opacity: 0.9,
                    borderLeft: `3px solid ${GOLD}`,
                  }}
                >
                  {migrationModal.desc}
                </p>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px w-6" style={{ background: G }} />
                    <span
                      className="uppercase"
                      style={{ color: GOLD, fontSize: "0.6rem", letterSpacing: "0.45em", fontFamily: "Courier New,monospace" }}
                    >
                      Key Facts
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {migrationModal.facts.map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex gap-3 items-start px-4 py-3 rounded-xl"
                        style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}
                      >
                        <span className="shrink-0 mt-0.5" style={{ color: GOLD, fontSize: "0.7rem" }}>✦</span>
                        <p className="m-0" style={{ color: dim, fontSize: "0.88rem", lineHeight: 1.6, opacity: 0.82 }}>{f}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-7 rounded-2xl relative overflow-hidden"
                  style={{ background: "rgba(220,68,68,0.04)", border: "1px solid rgba(220,68,68,0.18)" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: "linear-gradient(135deg,#dd4444,#e87070)" }}
                  />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">⚠️</span>
                    <span
                      className="uppercase"
                      style={{ color: "#e87070", fontSize: "0.6rem", letterSpacing: "0.45em", fontFamily: "Courier New,monospace" }}
                    >
                      Threats to Migration
                    </span>
                  </div>
                  <p className="m-0" style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.8, opacity: 0.82 }}>
                    {migrationModal.threats}
                  </p>
                </motion.div>

                <div className="mt-8 text-right">
                  <button
                    onClick={() => setMigrationModal(null)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full uppercase cursor-pointer transition-all duration-300"
                    style={{
                      border: "1px solid rgba(201,168,76,0.25)",
                      color: dim,
                      background: "transparent",
                      fontSize: "0.78rem",
                      letterSpacing: "0.15em",
                      fontFamily: "Courier New,monospace",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = GOLD;
                      e.currentTarget.style.color = GOLD;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
                      e.currentTarget.style.color = dim;
                    }}
                  >
                    <X size={12} /> Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MODALS ── */}
      <AnimatePresence>
        {focusModal && (
          <FocusModal focusKey={focusModal} modalsData={FOCUS_MODALS} onClose={() => setFocusModal(null)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {newsArticle && (
          <NewsModal article={newsArticle} onClose={() => setNewsArticle(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}