import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import watchMovie from "../assets/watch movie.mp4";
import { GL, Tag, SectionHeader, NewsModal, FocusModal } from "../components/ConservationComp.jsx";
import {
  GOLD, G, bg, cream, dim, gBtn, cardStyle,
  SLIDES, FOCUS, FOCUS_MODALS, STATS, THREATS,
  WINS, ANIMALS, MIGRATION, HELP_ACTIONS,
  VOLUNTEER_ROLES, NEWS, ORGS,
} from "../data/ConservationData.js";
import {
  Leaf, Heart, Droplet, ExternalLink, Play, ArrowDown, X,
  Users, BookOpen, Twitter, Instagram, Youtube, Facebook, ChevronRight,
} from "lucide-react";

const FOCUS_ICONS = { Leaf, Droplet, Heart };

export default function Conservation() {
  const [slide, setSlide]                   = useState(0);
  const [focusModal, setFocusModal]         = useState(null);
  const [newsArticle, setNewsArticle]       = useState(null);
  const [video, setVideo]                   = useState(null);
  const [expandedWin, setExpandedWin]       = useState(null);
  const [migrationModal, setMigrationModal] = useState(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const py = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        background: bg.main,
        color: cream,
        fontFamily: "'Cinzel',Georgia,serif",
        overflowX: "hidden",
      }}
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
      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <motion.div style={{ y: py, position: "absolute", inset: 0, scale: 1.1 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${SLIDES[slide].img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>
        </motion.div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right,rgba(6,10,7,0.92) 0%,rgba(6,10,7,0.6) 55%,transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top,${bg.main},transparent 40%)`,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            height: "100%",
            padding: "0 5rem",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.9 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ height: 1, width: 36, background: G }} />
                <span
                  style={{
                    color: GOLD,
                    fontSize: "0.65rem",
                    letterSpacing: "0.5em",
                    textTransform: "uppercase",
                    fontFamily: "Courier New,monospace",
                  }}
                >
                  {SLIDES[slide].label}
                </span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(4rem,10vw,8rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  marginBottom: "1.5rem",
                }}
              >
                {SLIDES[slide].title}
              </h1>

              <p
                style={{
                  color: dim,
                  fontSize: "1.2rem",
                  lineHeight: 1.8,
                  maxWidth: "34rem",
                  marginBottom: "2.5rem",
                  opacity: 0.8,
                }}
              >
                Every action we take today shapes the world our children will inherit.
              </p>

              <div style={{ display: "flex", gap: "1rem" }}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201,168,76,0.3)" }}
                  onClick={() => document.getElementById("act-now").scrollIntoView({ behavior: "smooth" })}
                  style={{
                    padding: "0.9rem 2.2rem",
                    background: G,
                    color: bg.main,
                    border: "none",
                    borderRadius: "3rem",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Take Action
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setVideo(watchMovie)}
                  style={{
                    padding: "0.9rem 2.2rem",
                    background: "rgba(201,168,76,0.07)",
                    color: cream,
                    border: "1px solid rgba(201,168,76,0.35)",
                    borderRadius: "3rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.8rem",
                    letterSpacing: "0.2em",
                  }}
                >
                  <Play size={13} /> Watch Film
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.6rem",
            zIndex: 10,
          }}
        >
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
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "3rem",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
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
        style={{
          overflow: "hidden",
          background: bg.deep,
          padding: "13px 0",
          borderTop: "1px solid rgba(201,168,76,0.12)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}
      >
        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            display: "flex",
            gap: "3rem",
            whiteSpace: "nowrap",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            fontFamily: "Courier New,monospace",
          }}
        >
          {Array(12).fill(["✦ Protect Wildlife", "◆ Restore Habitats", "✦ Clean Oceans", "◆ Save Species", "✦ Plant Forests"]).flat().map((t, i) => (
            <span key={i} style={{ color: i % 2 === 0 ? GOLD : dim, flexShrink: 0 }}>{t}</span>
          ))}
        </motion.div>
      </div>

      {/* ── 3. MISSION ── */}
      <section
        style={{
          padding: "7rem 2rem",
          background: "linear-gradient(160deg,#060d09,#0a150c,#060d09)",
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.65rem",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                fontFamily: "Courier New,monospace",
                marginBottom: "0.75rem",
              }}
            >
              Our Mission
            </p>
            <GL />
            <h2
              style={{
                fontSize: "clamp(2.2rem,3.5vw,3rem)",
                color: cream,
                fontWeight: 400,
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              One Planet. One Chance. Act Together.
            </h2>
            <p
              style={{
                color: dim,
                fontSize: "1.1rem",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
                opacity: 0.85,
              }}
            >
              Green Nature is a conservation awareness platform dedicated to educating, inspiring, and connecting people with the organisations and actions that protect our planet's wildlife and wild places.
            </p>
            <p
              style={{
                color: dim,
                fontSize: "1.05rem",
                lineHeight: 1.9,
                opacity: 0.7,
                marginBottom: "2rem",
              }}
            >
              We believe informed people make better choices — for animals, ecosystems, and the future of all life on Earth. Every section of this platform is designed to turn awareness into action.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                ["🌍", "Global Reach",   "Covering conservation across 6 continents"],
                ["🔬", "Science-Backed", "All data from peer-reviewed research"],
                ["🤝", "Community",      "Connecting you to front-line conservationists"],
                ["💡", "Action-Focused", "Every page ends with a way to help"],
              ].map(([ic, t, d]) => (
                <div
                  key={t}
                  style={{
                    padding: "1rem",
                    borderRadius: "0.75rem",
                    background: "rgba(201,168,76,0.04)",
                    border: "1px solid rgba(201,168,76,0.1)",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{ic}</span>
                  <p style={{ color: cream, fontSize: "0.95rem", fontWeight: 500, margin: "0.4rem 0 0.2rem" }}>{t}</p>
                  <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>{d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            <div
              style={{ ...cardStyle, height: "32rem", border: "1px solid rgba(201,168,76,0.12)" }}
              className="hi"
            >
              <img
                src="https://i0.wp.com/charities2love.org/wp-content/uploads/2023/04/One-Earth-One-Chance-Logo.png?fit=500%2C500&ssl=1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                padding: "1.25rem 1.75rem",
                borderRadius: "1rem",
                background: "rgba(3,6,5,0.9)",
                border: "1px solid rgba(201,168,76,0.2)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div style={{ height: 2, background: G, marginBottom: "0.6rem" }} />
              <p style={{ fontSize: "2rem", color: GOLD, fontFamily: "'Cinzel',serif" }}>Since 2018</p>
              <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>Raising awareness for wildlife</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHAT WE PROTECT ── */}
      <section style={{ padding: "7rem 2rem", background: bg.main }}>
        <div style={{ maxWidth: "78rem", margin: "0 auto" }}>
          <SectionHeader label="Our Focus" title="What We Protect" center />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1.5rem",
            }}
          >
            {FOCUS.map((f, i) => {
              const Icon = FOCUS_ICONS[f.icon];
              return (
                <motion.div
                  key={f.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="hi"
                  onClick={() => setFocusModal(f.key)}
                  style={{
                    ...cardStyle,
                    position: "relative",
                    height: "25rem",
                    cursor: "pointer",
                  }}
                >
                  <img src={f.img} alt={f.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top,rgba(6,10,7,0.94) 0%,rgba(6,10,7,0.3) 55%,transparent 100%)",
                    }}
                  />
                  <div style={{ position: "absolute", bottom: 0, padding: "2rem" }}>
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "0.6rem",
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.28)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      {Icon && <Icon size={20} color={GOLD} />}
                    </div>
                    <h3 style={{ fontSize: "1.7rem", color: cream, fontWeight: 400 }}>{f.title}</h3>
                    <GL />
                    <span
                      style={{
                        color: GOLD,
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
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
        style={{
          padding: "7rem 2rem",
          background: "linear-gradient(160deg,#060d09,#0a1a0e,#060d09)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
              marginBottom: "5rem",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  color: GOLD,
                  fontSize: "0.65rem",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  fontFamily: "Courier New,monospace",
                  marginBottom: "0.75rem",
                }}
              >
                The Crisis
              </p>
              <GL />
              <h2
                style={{
                  fontSize: "clamp(2.2rem,3.5vw,3rem)",
                  color: cream,
                  fontWeight: 400,
                  marginBottom: "1.5rem",
                }}
              >
                Why Animal Conservation Matters
              </h2>
              <p
                style={{
                  color: dim,
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                  marginBottom: "1.25rem",
                  opacity: 0.85,
                }}
              >
                Every species plays a crucial role in maintaining ecological balance. When one disappears, it disrupts the entire food chain. Biodiversity ensures clean air, clean water, and climate stability for all life.
              </p>
              <p
                style={{
                  color: dim,
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  opacity: 0.7,
                }}
              >
                We are currently in the sixth mass extinction — the first one driven not by asteroids or volcanoes, but by human activity. The good news: it can be stopped.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
            >
              <div
                style={{ ...cardStyle, height: "24rem", border: "1px solid rgba(201,168,76,0.1)" }}
                className="hi"
              >
                <img
                  src="https://img.volunteerworld.com/img/default/1b8ff06780f2c238d9cbef775e9a4309b6b3eefb/IMG4648.jpg?Height=317&Width=562"
                  alt="Wildlife"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  left: "-1.5rem",
                  padding: "1.25rem 1.75rem",
                  borderRadius: "1rem",
                  background: "rgba(3,6,5,0.88)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div style={{ height: 2, background: G, marginBottom: "0.6rem" }} />
                <p style={{ fontSize: "2.2rem", color: GOLD, fontFamily: "'Cinzel',serif" }}>3,682</p>
                <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>Tigers in India — up from 1,200</p>
              </motion.div>
            </motion.div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "1.25rem",
              marginBottom: "4rem",
            }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: "2rem 1.25rem",
                  textAlign: "center",
                  borderRadius: "1rem",
                  background: "rgba(201,168,76,0.04)",
                  border: "1px solid rgba(201,168,76,0.14)",
                }}
              >
                <p style={{ fontSize: "2.6rem", color: GOLD, fontWeight: 400, marginBottom: "0.4rem" }}>{s.val}</p>
                <div style={{ height: 1, width: 24, background: G, margin: "0.4rem auto" }} />
                <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>{s.label}</p>
              </motion.div>
            ))}
          </div>

          <h3 style={{ fontSize: "1.8rem", fontWeight: 400, color: cream, marginBottom: "1.5rem" }}>
            Major Threats to Wildlife
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {THREATS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  padding: "1.75rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(201,168,76,0.1)",
                  transition: "all 0.3s",
                }}
              >
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>{t.icon}</span>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 400, color: cream, marginBottom: "0.5rem" }}>{t.title}</h4>
                <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.7 }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CONSERVATION WINS ── */}
      <section
        style={{
          padding: "7rem 2rem",
          background: "linear-gradient(160deg,#060d09,#071a0e,#060d09)",
        }}
      >
        <div style={{ maxWidth: "78rem", margin: "0 auto" }}>
          <SectionHeader
            label="Proof It Works"
            title="Conservation Wins"
            sub="The crisis is real — but so is the recovery. These stories prove conservation works when we commit to it."
            center
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {WINS.map((w, i) => {
              const isOpen = expandedWin === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    borderRadius: "1rem",
                    overflow: "hidden",
                    border: `1px solid ${isOpen ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.08)"}`,
                    background: bg.card,
                    transition: "border-color 0.3s",
                    cursor: "pointer",
                  }}
                  onClick={() => setExpandedWin(isOpen ? null : i)}
                >
                  {/* Image area */}
                  <div className="hi" style={{ position: "relative", height: "22rem", overflow: "hidden" }}>
                    <img src={w.img} alt={w.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top,rgba(3,6,5,0.97) 0%,rgba(3,6,5,0.45) 55%,transparent 100%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        right: "1rem",
                        background: "rgba(201,168,76,0.15)",
                        border: "1px solid rgba(201,168,76,0.4)",
                        borderRadius: "2rem",
                        padding: "0.25rem 0.75rem",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <span
                        style={{
                          color: GOLD,
                          fontSize: "0.6rem",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          fontFamily: "Courier New,monospace",
                        }}
                      >
                        ✦ Success
                      </span>
                    </div>
                    <div style={{ position: "absolute", bottom: 0, padding: "1.5rem", width: "100%" }}>
                      <span style={{ fontSize: "1.5rem" }}>{w.emoji}</span>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 400, color: cream, margin: "0.4rem 0 0.2rem" }}>{w.title}</h3>
                      <p style={{ fontSize: "1.9rem", color: GOLD, fontFamily: "'Cinzel',serif", margin: "0 0 0.15rem" }}>{w.stat}</p>
                      <p style={{ color: dim, fontSize: "0.82rem", opacity: 0.8, margin: "0 0 0.25rem" }}>{w.unit}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <p
                          style={{
                            color: "rgba(196,187,166,0.45)",
                            fontSize: "0.75rem",
                            fontFamily: "Courier New,monospace",
                            margin: 0,
                          }}
                        >
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

                  {/* Expandable content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ padding: "1.75rem", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
                          {/* Description */}
                          <p
                            style={{
                              color: cream,
                              fontSize: "0.97rem",
                              lineHeight: 1.8,
                              marginBottom: "1.5rem",
                              opacity: 0.88,
                              borderLeft: `3px solid ${GOLD}`,
                              paddingLeft: "1rem",
                            }}
                          >
                            {w.desc}
                          </p>

                          {/* How it happened */}
                          <div style={{ marginBottom: "1.5rem" }}>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                                marginBottom: "0.6rem",
                              }}
                            >
                              <div style={{ height: 1, width: 20, background: G }} />
                              <span
                                style={{
                                  color: GOLD,
                                  fontSize: "0.6rem",
                                  letterSpacing: "0.4em",
                                  textTransform: "uppercase",
                                  fontFamily: "Courier New,monospace",
                                }}
                              >
                                How It Happened
                              </span>
                            </div>
                            <p style={{ color: dim, fontSize: "0.92rem", lineHeight: 1.8, opacity: 0.78, margin: 0 }}>{w.how}</p>
                          </div>

                          {/* Key facts */}
                          <div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                                marginBottom: "0.75rem",
                              }}
                            >
                              <div style={{ height: 1, width: 20, background: G }} />
                              <span
                                style={{
                                  color: GOLD,
                                  fontSize: "0.6rem",
                                  letterSpacing: "0.4em",
                                  textTransform: "uppercase",
                                  fontFamily: "Courier New,monospace",
                                }}
                              >
                                Key Facts
                              </span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                              {w.facts.map((f, j) => (
                                <div
                                  key={j}
                                  style={{
                                    display: "flex",
                                    gap: "0.75rem",
                                    alignItems: "flex-start",
                                    padding: "0.6rem 0.85rem",
                                    borderRadius: "0.5rem",
                                    background: "rgba(201,168,76,0.04)",
                                    border: "1px solid rgba(201,168,76,0.1)",
                                  }}
                                >
                                  <span style={{ color: GOLD, fontSize: "0.7rem", marginTop: "0.15rem", flexShrink: 0 }}>✦</span>
                                  <p style={{ color: dim, fontSize: "0.88rem", lineHeight: 1.6, margin: 0, opacity: 0.82 }}>{f}</p>
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
        style={{
          padding: "7rem 2rem",
          background: `linear-gradient(180deg,${bg.main},${bg.mid})`,
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <SectionHeader
            label="In Focus"
            title="Animals Worth Saving"
            sub="Each of these species faces an uncertain future. Their survival depends on the actions we take today."
            center
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
            {ANIMALS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="hi"
                style={{ ...cardStyle, position: "relative", height: "22rem" }}
              >
                <img src={a.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top,rgba(3,6,5,0.92) 0%,rgba(0,0,0,0.15) 55%,transparent 100%)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "2rem",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: a.color,
                    background: `${a.color}18`,
                    border: `1px solid ${a.color}44`,
                    fontFamily: "Courier New,monospace",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {a.status}
                </span>
                <h3
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: cream,
                  }}
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
        style={{
          padding: "7rem 2rem",
          background: "linear-gradient(180deg,#040d07,#071408,#040d07)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>
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
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "1.25rem",
              height: "28rem",
              marginBottom: "4rem",
              border: "1px solid rgba(201,168,76,0.1)",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/0c30ac_b35519427750445db2618fb0dcc22853~mv2.png/v1/fill/w_1110,h_624,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/0c30ac_b35519427750445db2618fb0dcc22853~mv2.png"
              alt="Great Migration"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top,rgba(4,13,7,0.92) 0%,rgba(0,0,0,0.2) 60%,transparent 100%)",
              }}
            />
            <div style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1rem" }}>
                {["1.5M Wildebeest", "250K Zebra", "500km Journey", "Annual Event"].map(t => (
                  <span
                    key={t}
                    style={{
                      padding: "0.3rem 0.85rem",
                      borderRadius: "2rem",
                      color: GOLD,
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontFamily: "Courier New,monospace",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 style={{ fontSize: "2.4rem", fontWeight: 400, color: cream }}>The Great Wildebeest Migration</h3>
              <p style={{ color: dim, marginTop: "0.5rem", opacity: 0.7, fontSize: "1.05rem" }}>
                The largest terrestrial migration on Earth — Serengeti to Masai Mara and back, every single year.
              </p>
            </div>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "4rem" }}>
            {MIGRATION.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="hi"
                onClick={() => setMigrationModal(s)}
                style={{
                  ...cardStyle,
                  background: bg.card,
                  border: "1px solid rgba(201,168,76,0.1)",
                  cursor: "pointer",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.1)"}
              >
                <div style={{ position: "relative", height: "13rem", overflow: "hidden" }}>
                  <img src={s.img} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to bottom,transparent 40%,${bg.card} 100%)`,
                    }}
                  />
                  <span style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "1.75rem" }}>{s.icon}</span>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      right: "1rem",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "2rem",
                      background: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span
                      style={{
                        color: GOLD,
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontFamily: "Courier New,monospace",
                      }}
                    >
                      View Details →
                    </span>
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h4 style={{ fontSize: "1.4rem", fontWeight: 400, color: cream, marginBottom: "0.75rem" }}>{s.name}</h4>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
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
            style={{
              borderRadius: "1.25rem",
              padding: "3rem",
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.14)",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "1.7rem",
                fontWeight: 400,
                color: cream,
                marginBottom: "2.5rem",
              }}
            >
              Migration by the Numbers
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "2rem",
                textAlign: "center",
              }}
            >
              {[
                { v: "1.5B",   l: "Birds migrate each year in North America", i: "🐦" },
                { v: "90K km", l: "Distance Arctic Tern travels annually",     i: "🗺️" },
                { v: "500+",   l: "Species undertake long-distance migrations", i: "🌍" },
                { v: "30%",    l: "Migratory species in decline",               i: "📉" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.6rem" }}>{s.i}</div>
                  <p style={{ fontSize: "1.9rem", color: GOLD, fontFamily: "'Cinzel',serif", marginBottom: "0.4rem" }}>{s.v}</p>
                  <div style={{ height: 1, width: 20, background: G, margin: "0.4rem auto" }} />
                  <p style={{ color: dim, fontSize: "0.82rem", lineHeight: 1.6, opacity: 0.65 }}>{s.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 9. HOW YOU CAN HELP ── */}
      <section
        style={{
          padding: "7rem 2rem",
          background: "linear-gradient(160deg,#060d09,#0a1a0e,#060d09)",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <SectionHeader
            label="Daily Actions"
            title="How You Can Help"
            sub="You don't have to donate to make a difference. These everyday actions have real, measurable impact on wildlife and ecosystems."
            center
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1.25rem",
              marginBottom: "4rem",
            }}
          >
            {HELP_ACTIONS.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="hov-card"
                style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(201,168,76,0.1)",
                }}
              >
                <span style={{ fontSize: "2.2rem", display: "block", marginBottom: "0.75rem" }}>{a.icon}</span>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 400, color: cream, marginBottom: "0.5rem" }}>{a.title}</h4>
                <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.75, opacity: 0.7 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              padding: "2.5rem 3rem",
              borderRadius: "1.25rem",
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.15)",
              textAlign: "center",
              position: "relative",
            }}
          >
            <span
              style={{
                fontSize: "4rem",
                color: "rgba(201,168,76,0.12)",
                position: "absolute",
                top: "1rem",
                left: "2rem",
                fontFamily: "Georgia,serif",
                lineHeight: 1,
              }}
            >
              "
            </span>
            <p
              style={{
                fontSize: "1.4rem",
                color: cream,
                lineHeight: 1.7,
                fontStyle: "italic",
                maxWidth: "48rem",
                margin: "0 auto",
                opacity: 0.9,
              }}
            >
              The Earth does not belong to us. We belong to the Earth. What we do to the web of life, we do to ourselves.
            </p>
            <div style={{ height: 1, width: 50, background: G, margin: "1.5rem auto 0.75rem" }} />
            <p
              style={{
                color: GOLD,
                fontSize: "0.8rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontFamily: "Courier New,monospace",
              }}
            >
              Chief Seattle
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 10. VOLUNTEER ── */}
      <section style={{ padding: "7rem 2rem", background: bg.main }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <SectionHeader
            label="Get Involved"
            title="Volunteer for Wildlife"
            sub="Go beyond awareness — give your time, skills, and energy directly to conservation in the field or from home."
            center
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1.25rem",
              marginBottom: "4rem",
            }}
          >
            {VOLUNTEER_ROLES.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="hov-card"
                style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(201,168,76,0.1)",
                }}
              >
                <span style={{ fontSize: "2.2rem", display: "block", marginBottom: "0.75rem" }}>{r.icon}</span>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 400, color: cream, marginBottom: "0.4rem" }}>{r.title}</h4>
                <p style={{ color: dim, fontSize: "0.92rem", lineHeight: 1.75, opacity: 0.7, marginBottom: "1rem" }}>{r.desc}</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
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
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "2rem",
              alignItems: "center",
              padding: "2.5rem 3rem",
              borderRadius: "1.25rem",
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.22)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: G }} />
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <Users size={20} color={GOLD} />
                <span
                  style={{
                    color: GOLD,
                    fontSize: "0.65rem",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    fontFamily: "Courier New,monospace",
                  }}
                >
                  Join the Movement
                </span>
              </div>
              <h3 style={{ fontSize: "1.7rem", fontWeight: 400, color: cream, marginBottom: "0.5rem" }}>
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
              style={{
                padding: "1.1rem 2.5rem",
                background: G,
                color: bg.main,
                borderRadius: "3rem",
                textDecoration: "none",
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              Find a Role
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── 11. ORGANISATIONS ── */}
      <section
        style={{
          padding: "7rem 2rem",
          background: "linear-gradient(180deg,#060a07,#0a120a)",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <SectionHeader
            label="Partners"
            title="Leading the Movement"
            sub="These organisations protect animals, restore habitats, and safeguard biodiversity globally."
            center
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "7rem" }}>
            {ORGS.map((o, i) => {
              const ImgCol = (
                <div
                  className="hi"
                  onClick={() => setVideo(o.vid)}
                  style={{
                    position: "relative",
                    height: "22rem",
                    borderRadius: "1.1rem",
                    overflow: "hidden",
                    border: "1px solid rgba(201,168,76,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <img src={o.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top,rgba(3,6,5,0.55),transparent)",
                    }}
                  />
                  <div
                    className="po"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "50%",
                      background: G,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  >
                    <Play size={18} color={bg.main} style={{ marginLeft: 2 }} />
                  </div>
                </div>
              );
              const TextCol = (
                <div>
                  <GL />
                  <h3 style={{ fontSize: "2rem", fontWeight: 400, marginBottom: "1rem", color: cream }}>{o.name}</h3>
                  <p style={{ color: dim, fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.5rem", opacity: 0.75 }}>{o.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" }}>
                    {o.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <a
                    href={o.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={gBtn}
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
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                  }}
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
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              background: "rgba(3,6,5,0.95)",
              backdropFilter: "blur(24px)",
            }}
            onClick={() => setVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.84 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.84 }}
              onClick={e => e.stopPropagation()}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "54rem",
                aspectRatio: "16/9",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              {/* Gold top bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: G,
                  zIndex: 2,
                }}
              />

              {/* Local asset video OR YouTube — auto detected */}
              {typeof video === "string" && (video.startsWith("/") || video.startsWith("blob") || video.includes("assets") || video.endsWith(".mp4")) ? (
                <video
                  src={video}
                  autoPlay
                  controls
                  style={{ width: "100%", height: "100%", objectFit: "cover", background: "#000" }}
                />
              ) : (
                <iframe
                  style={{ width: "100%", height: "100%" }}
                  src={`https://www.youtube.com/embed/${video}?autoplay=1`}
                  title="Video"
                  allowFullScreen
                  allow="autoplay"
                />
              )}

              {/* Close button */}
              <button
                onClick={() => setVideo(null)}
                style={{
                  position: "absolute",
                  top: "0.6rem",
                  right: "0.6rem",
                  padding: "0.35rem",
                  borderRadius: "50%",
                  background: "rgba(6,10,7,0.85)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  cursor: "pointer",
                  color: cream,
                  zIndex: 3,
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
        style={{
          padding: "7rem 2rem",
          background: "linear-gradient(160deg,#060d09,#0a150c,#060d09)",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "3.5rem",
            }}
          >
            <SectionHeader label="Stay Informed" title="Latest News" />
            <motion.a
              href="https://iucn.org/news-events"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ ...gBtn, marginBottom: "3.5rem" }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = bg.main; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}
            >
              View All Stories <BookOpen size={13} />
            </motion.a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {NEWS.map((n, i) => (
              <motion.div
                key={n.title || i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="hi news-card hov-card"
                onClick={() => setNewsArticle(n)}
                style={{
                  ...cardStyle,
                  background: bg.card,
                  border: "1px solid rgba(201,168,76,0.1)",
                  transition: "all 0.35s",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", height: "13rem", overflow: "hidden", flexShrink: 0 }}>
                  <img src={n.img} alt={n.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to bottom,transparent 50%,${bg.card} 100%)`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0.9rem",
                      right: "0.9rem",
                      padding: "0.2rem 0.65rem",
                      borderRadius: "2rem",
                      background: "rgba(6,10,7,0.8)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(201,168,76,0.7)",
                        fontSize: "0.62rem",
                        fontFamily: "Courier New,monospace",
                      }}
                    >
                      ⏱ {n.readTime}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <Tag>{n.tag}</Tag>
                    <span
                      style={{
                        color: "rgba(196,187,166,0.4)",
                        fontSize: "0.75rem",
                        fontFamily: "Courier New,monospace",
                      }}
                    >
                      {n.date}
                    </span>
                  </div>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 400, color: cream, marginBottom: "0.75rem", lineHeight: 1.4 }}>{n.title}</h4>
                  <p style={{ color: dim, fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.65, flex: 1 }}>{n.excerpt}</p>
                  <div
                    style={{
                      marginTop: "1.1rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid rgba(201,168,76,0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                    }}
                  >
                    <div
                      style={{
                        width: "1.8rem",
                        height: "1.8rem",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,rgba(201,168,76,0.18),rgba(201,168,76,0.04))",
                        border: "1px solid rgba(201,168,76,0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.65rem",
                        color: GOLD,
                        flexShrink: 0,
                      }}
                    >
                      {n.author.charAt(0)}
                    </div>
                    <p
                      style={{
                        color: cream,
                        fontSize: "0.78rem",
                        margin: 0,
                        opacity: 0.8,
                        flex: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {n.author}
                    </p>
                    <motion.div
                      whileHover={{ x: 3 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        color: GOLD,
                        fontSize: "0.75rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: "Courier New,monospace",
                        flexShrink: 0,
                      }}
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
        style={{
          padding: "9rem 2rem",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg,#0a1a08,#142810,#0a1a08)",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }}
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "40rem",
            height: "40rem",
            borderRadius: "50%",
            background: "rgba(201,168,76,0.08)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "5rem" }}
          >
            <p
              style={{
                color: GOLD,
                fontSize: "0.65rem",
                letterSpacing: "0.55em",
                textTransform: "uppercase",
                fontFamily: "Courier New,monospace",
                marginBottom: "1rem",
              }}
            >
              The Time Is Now
            </p>
            <div style={{ height: 1, width: 70, background: G, margin: "0 auto 1.25rem" }} />
            <h2 style={{ fontSize: "clamp(3.5rem,8vw,6rem)", lineHeight: 0.9, marginBottom: "1.5rem", color: cream }}>
              Act Now.
            </h2>
            <p
              style={{
                color: dim,
                fontSize: "1.15rem",
                lineHeight: 1.85,
                maxWidth: "38rem",
                margin: "0 auto",
                opacity: 0.75,
              }}
            >
              The window to protect our planet's biodiversity is narrowing. Choose how you want to make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              borderRadius: "1.25rem",
              padding: "3rem",
              marginBottom: "2rem",
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.25)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: G }} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>🌍</span>
                  <span
                    style={{
                      color: GOLD,
                      fontSize: "0.65rem",
                      letterSpacing: "0.4em",
                      textTransform: "uppercase",
                      fontFamily: "Courier New,monospace",
                    }}
                  >
                    Featured Platform
                  </span>
                </div>
                <h3 style={{ fontSize: "1.9rem", fontWeight: 400, color: cream, marginBottom: "0.75rem" }}>
                  Wildlife Conservation Network
                </h3>
                <p
                  style={{
                    color: dim,
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    marginBottom: "1.25rem",
                    opacity: 0.8,
                    maxWidth: "42rem",
                  }}
                >
                  A hub for wildlife conservation projects worldwide. Choose which animal, habitat, or program you want to support — from elephants to sea turtles to front-line conservationists.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {["💰 Donate to Projects", "🐘 Support Specific Animals", "🌳 Fund Habitats", "🎯 Run Fundraisers", "🎓 Join Communities"].map(t => (
                    <span
                      key={t}
                      style={{
                        padding: "0.3rem 0.85rem",
                        borderRadius: "2rem",
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "1.4rem 2.2rem",
                  background: G,
                  color: bg.main,
                  borderRadius: "1rem",
                  textDecoration: "none",
                  textAlign: "center",
                  minWidth: "10rem",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>🐾</span>
                <span style={{ fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Take Action</span>
                <span style={{ fontSize: "0.72rem", opacity: 0.65 }}>wildnet.org</span>
              </motion.a>
            </div>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.25rem" }}>
            {[
              { emoji: "🌱", name: "GlobalGiving", desc: "Choose from hundreds of conservation projects worldwide.", tag: "Fund Projects", url: "https://www.globalgiving.org", color: "#7aab82" },
              { emoji: "🌿", name: "Rainforest Trust", desc: "Protect critical rainforest habitats and biodiversity.", tag: "Protect Habitats", url: "https://www.rainforesttrust.org", color: "#2a8c7a" },
              { emoji: "✊", name: "Change.org", desc: "Sign petitions to stop illegal wildlife trade globally.", tag: "Sign Petitions",   url: "https://www.change.org", color: GOLD },
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
                style={{
                  display: "block",
                  padding: "2rem",
                  borderRadius: "1rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(201,168,76,0.1)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>{p.emoji}</span>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 400, color: cream, marginBottom: "0.5rem" }}>{p.name}</h4>
                <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.7, marginBottom: "1.25rem" }}>{p.desc}</p>
                <Tag color={p.color}>{p.tag} →</Tag>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. FOOTER ── */}
      <footer style={{ background: bg.deep, borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div
          style={{
            padding: "2.5rem 2rem",
            borderBottom: "1px solid rgba(201,168,76,0.06)",
            display: "flex",
            justifyContent: "center",
            gap: "1.25rem",
          }}
        >
          {[
            { Icon: Instagram, label: "Instagram", url: "https://www.instagram.com/wwf/?hl=en" },
            { Icon: Twitter,   label: "Twitter",   url: "https://x.com/nature_org" },
            { Icon: Facebook,  label: "Facebook",  url: "https://www.facebook.com/conservation.intl/" },
            { Icon: Youtube,   label: "YouTube",   url: "https://www.youtube.com/c/CaptPaulWatson" },
          ].map(({ Icon, label, url }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -3 }}
              style={{
                width: "2.8rem",
                height: "2.8rem",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.07)",
                border: "1px solid rgba(201,168,76,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(201,168,76,0.6)",
                transition: "all 0.3s",
                textDecoration: "none",
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

        <div
          style={{
            padding: "2rem 2.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: G,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Leaf size={12} color={bg.main} />
            </div>
            <span style={{ fontSize: "0.8rem", letterSpacing: "0.25em" }}>
              GREEN <span style={{ color: GOLD }}>NATURE</span>
            </span>
          </div>
          <p style={{ color: "rgba(201,168,76,0.25)", fontSize: "0.82rem" }}>
            © 2026 Green Nature Conservation. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.75rem" }}>
            {["Privacy", "Terms", "Contact"].map(t => (
              <a
                key={t}

                style={{
                  color: "rgba(201,168,76,0.3)",
                  fontSize: "0.82rem",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
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
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              background: "rgba(3,6,5,0.95)",
              backdropFilter: "blur(28px)",
            }}
            onClick={() => setMigrationModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: bg.card,
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "1.5rem",
                maxWidth: "50rem",
                width: "100%",
                maxHeight: "92vh",
                overflowY: "auto",
                position: "relative",
              }}
            >
              {/* Gold top bar */}
              <div
                style={{
                  height: 2,
                  background: G,
                  borderRadius: "1.5rem 1.5rem 0 0",
                  position: "sticky",
                  top: 0,
                  zIndex: 10,
                }}
              />

              {/* Hero image */}
              <div style={{ position: "relative", height: "20rem", overflow: "hidden" }}>
                <img
                  src={migrationModal.heroImg}
                  alt={migrationModal.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top,rgba(12,20,16,1) 0%,rgba(12,20,16,0.3) 60%,transparent 100%)",
                  }}
                />
                <button
                  onClick={() => setMigrationModal(null)}
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    width: "2.4rem",
                    height: "2.4rem",
                    borderRadius: "50%",
                    background: "rgba(6,10,7,0.85)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    cursor: "pointer",
                    color: cream,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <X size={15} />
                </button>
                <div style={{ position: "absolute", bottom: "1.75rem", left: "2rem" }}>
                  <span style={{ fontSize: "2.5rem" }}>{migrationModal.icon}</span>
                  <h2 style={{ fontSize: "2.2rem", fontWeight: 400, color: cream, margin: "0.25rem 0 0.5rem" }}>
                    {migrationModal.name}
                  </h2>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <Tag>📍 {migrationModal.route}</Tag>
                    <Tag color="#a8c9ad">📏 {migrationModal.dist}</Tag>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "2.5rem 3rem 3rem" }}>
                {/* Description */}
                <p
                  style={{
                    color: cream,
                    fontSize: "1.05rem",
                    lineHeight: 1.85,
                    opacity: 0.9,
                    borderLeft: `3px solid ${GOLD}`,
                    paddingLeft: "1.1rem",
                    marginBottom: "2rem",
                  }}
                >
                  {migrationModal.desc}
                </p>

                {/* Key Facts */}
                <div style={{ marginBottom: "2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div style={{ height: 1, width: 24, background: G }} />
                    <span
                      style={{
                        color: GOLD,
                        fontSize: "0.6rem",
                        letterSpacing: "0.45em",
                        textTransform: "uppercase",
                        fontFamily: "Courier New,monospace",
                      }}
                    >
                      Key Facts
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                    {migrationModal.facts.map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 }}
                        style={{
                          display: "flex",
                          gap: "0.75rem",
                          alignItems: "flex-start",
                          padding: "0.85rem 1rem",
                          borderRadius: "0.6rem",
                          background: "rgba(201,168,76,0.04)",
                          border: "1px solid rgba(201,168,76,0.12)",
                        }}
                      >
                        <span style={{ color: GOLD, fontSize: "0.7rem", marginTop: "0.15rem", flexShrink: 0 }}>✦</span>
                        <p style={{ color: dim, fontSize: "0.88rem", lineHeight: 1.6, margin: 0, opacity: 0.82 }}>{f}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Threats */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    padding: "1.75rem",
                    borderRadius: "1rem",
                    background: "rgba(220,68,68,0.04)",
                    border: "1px solid rgba(220,68,68,0.18)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "linear-gradient(135deg,#dd4444,#e87070)",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>⚠️</span>
                    <span
                      style={{
                        color: "#e87070",
                        fontSize: "0.6rem",
                        letterSpacing: "0.45em",
                        textTransform: "uppercase",
                        fontFamily: "Courier New,monospace",
                      }}
                    >
                      Threats to Migration
                    </span>
                  </div>
                  <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.8, opacity: 0.82, margin: 0 }}>
                    {migrationModal.threats}
                  </p>
                </motion.div>

                {/* Close */}
                <div style={{ marginTop: "2rem", textAlign: "right" }}>
                  <button
                    onClick={() => setMigrationModal(null)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.65rem 1.6rem",
                      border: "1px solid rgba(201,168,76,0.25)",
                      color: dim,
                      borderRadius: "3rem",
                      fontSize: "0.78rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      background: "transparent",
                      cursor: "pointer",
                      fontFamily: "Courier New,monospace",
                      transition: "all 0.3s",
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