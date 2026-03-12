import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import watchMovie from "../assets/watch movie.mp4";
import { GL, Tag, SectionHeader, NewsModal, FocusModal } from "../components/ConservationComp.jsx";
import {
  GOLD, G, bg, cream, dim, gBtn,
  SLIDES, FOCUS, FOCUS_MODALS, STATS, THREATS, WINS,
  ANIMALS, MIGRATION, HELP_ACTIONS, VOLUNTEER_ROLES, NEWS, ORGS,
} from "../data/ConservationData.js";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

// emoji fallbacks since we removed lucide
const focusIcons = { Leaf: "🌿", Droplet: "💧", Heart: "♥" };

export default function Conservation() {
  const [slide, setSlide] = useState(0);
  const [focusModal, setFocusModal] = useState(null);
  const [newsArticle, setNewsArticle] = useState(null);
  const [video, setVideo] = useState(null);
  const [expandedWin, setExpandedWin] = useState(null);
  const [migrationModal, setMigrationModal] = useState(null);

  // auto-cycle slides
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-x-hidden" style={{ background: bg.main, color: cream, fontFamily: "'Cinzel', Georgia, serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
        .img-zoom img { transition: transform 0.6s ease; }
        .img-zoom:hover img { transform: scale(1.05); }
        .card-hover { transition: border-color 0.3s; }
        .card-hover:hover { border-color: rgba(201,168,76,0.35) !important; }
      `}</style>

      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDES[slide].img})` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,10,7,0.92) 0%, rgba(6,10,7,0.55) 55%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${bg.main}, transparent 40%)` }} />

        <div className="relative z-10 flex items-center h-full px-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase mb-4" style={{ color: GOLD, letterSpacing: "0.5em", fontFamily: "Courier New, monospace" }}>
              {SLIDES[slide].label}
            </p>
            <h1 className="leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", letterSpacing: "-0.02em" }}>
              {SLIDES[slide].title}
            </h1>
            <p className="mb-10 text-lg" style={{ color: dim, maxWidth: "32rem", lineHeight: 1.8, opacity: 0.8 }}>
              Every action we take today shapes the world our children will inherit.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById("act-now").scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-full text-xs uppercase font-semibold cursor-pointer border-none"
                style={{ background: G, color: bg.main, letterSpacing: "0.2em" }}
              >
                Take Action
              </button>
              <button
                onClick={() => setVideo(watchMovie)}
                className="px-8 py-4 rounded-full cursor-pointer flex items-center gap-2 text-xs uppercase"
                style={{ background: "rgba(201,168,76,0.07)", color: cream, border: "1px solid rgba(201,168,76,0.35)", letterSpacing: "0.2em" }}
              >
                ▶ Watch Film
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setSlide(i)}
              animate={{ width: i === slide ? 32 : 6, backgroundColor: i === slide ? GOLD : "rgba(240,234,216,0.25)" }}
              transition={{ duration: 0.3 }}
              style={{ height: 2, border: "none", borderRadius: 4, cursor: "pointer" }}
            />
          ))}
        </div>

        <p className="absolute bottom-10 right-12 z-10" style={{ color: "rgba(201,168,76,0.45)", fontFamily: "Courier New, monospace", fontSize: "0.6rem", letterSpacing: "0.3em" }}>
          SCROLL ↓
        </p>
      </section>

      {/* MISSION */}
      <section className="py-28 px-8" style={{ background: "linear-gradient(160deg, #060d09, #0a150c, #060d09)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUp}>
            <p className="text-xs uppercase mb-3" style={{ color: GOLD, fontFamily: "Courier New, monospace", letterSpacing: "0.5em" }}>Our Mission</p>
            <GL />
            <h2 className="font-normal mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: cream, lineHeight: 1.15 }}>
              One Planet. One Chance. Act Together.
            </h2>
            <p className="mb-5" style={{ color: dim, lineHeight: 1.9, opacity: 0.85 }}>
              Green Nature is a conservation awareness platform dedicated to educating, inspiring, and connecting
              people with the organisations and actions that protect our planet's wildlife and wild places.
            </p>
            <p className="mb-8" style={{ color: dim, fontSize: "1.05rem", opacity: 0.7, lineHeight: 1.9 }}>
              We believe informed people make better choices — for animals, ecosystems, and the future of all life on Earth.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["🌍", "Global Reach", "Covering conservation across 6 continents"],
                ["🔬", "Science-Backed", "All data from peer-reviewed research"],
                ["🤝", "Community", "Connecting you to front-line conservationists"],
                ["💡", "Action-Focused", "Every page ends with a way to help"],
              ].map(([icon, title, desc]) => (
                <div key={title} className="p-4 rounded-xl" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}>
                  <span className="text-2xl">{icon}</span>
                  <p className="font-medium mt-1 mb-1" style={{ color: cream, fontSize: "0.95rem" }}>{title}</p>
                  <p className="m-0" style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="relative">
            <div className="img-zoom overflow-hidden rounded-2xl" style={{ height: "32rem", border: "1px solid rgba(201,168,76,0.12)" }}>
              <img src="https://i0.wp.com/charities2love.org/wp-content/uploads/2023/04/One-Earth-One-Chance-Logo.png?fit=500%2C500&ssl=1" className="w-full h-full object-cover" />
            </div>
            <motion.div
              {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 px-7 py-5 rounded-2xl backdrop-blur-xl"
              style={{ background: "rgba(3,6,5,0.9)", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <div className="h-0.5 mb-2" style={{ background: G }} />
              <p style={{ fontSize: "2rem", color: GOLD, fontFamily: "'Cinzel', serif" }}>Since 2018</p>
              <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>Raising awareness for wildlife</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE PROTECT */}
      <section className="py-28 px-8" style={{ background: bg.main }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Our Focus" title="What We Protect" center />
          <div className="grid grid-cols-3 gap-6">
            {FOCUS.map((item, i) => (
              <motion.div
                key={item.key}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="img-zoom relative cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setFocusModal(item.key)}
                style={{ height: "25rem" }}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,10,7,0.94) 0%, rgba(6,10,7,0.25) 55%, transparent 100%)" }} />
                <div className="absolute bottom-0 p-8">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.28)" }}>
                    {focusIcons[item.icon]}
                  </div>
                  <h3 className="font-normal mb-2" style={{ fontSize: "1.7rem", color: cream }}>{item.title}</h3>
                  <GL />
                  <span className="uppercase text-xs" style={{ color: GOLD, letterSpacing: "0.15em" }}>Explore →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CRISIS */}
      <section className="py-28 px-8" style={{ background: "linear-gradient(160deg, #060d09, #0a1a0e, #060d09)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-20 items-center mb-20">
            <motion.div {...fadeUp}>
              <p className="text-xs uppercase mb-3" style={{ color: GOLD, fontFamily: "Courier New, monospace", letterSpacing: "0.5em" }}>The Crisis</p>
              <GL />
              <h2 className="font-normal mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: cream }}>
                Why Animal Conservation Matters
              </h2>
              <p className="mb-5" style={{ color: dim, lineHeight: 1.9, opacity: 0.85 }}>
                Every species plays a crucial role in maintaining ecological balance. When one disappears, it disrupts the entire food chain.
              </p>
              <p style={{ color: dim, fontSize: "1.05rem", lineHeight: 1.9, opacity: 0.7 }}>
                We are currently in the sixth mass extinction — the first one driven not by asteroids or volcanoes, but by human activity.
                The good news: it can be stopped.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="relative">
              <div className="img-zoom overflow-hidden rounded-2xl" style={{ height: "24rem", border: "1px solid rgba(201,168,76,0.1)" }}>
                <img src="https://img.volunteerworld.com/img/default/1b8ff06780f2c238d9cbef775e9a4309b6b3eefb/IMG4648.jpg?Height=317&Width=562" alt="Wildlife" className="w-full h-full object-cover" />
              </div>
              <motion.div
                {...fadeUp} transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 px-7 py-5 rounded-2xl backdrop-blur-xl"
                style={{ background: "rgba(3,6,5,0.88)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div className="h-0.5 mb-2" style={{ background: G }} />
                <p style={{ fontSize: "2.2rem", color: GOLD, fontFamily: "'Cinzel', serif" }}>3,682</p>
                <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>Tigers in India — up from 1,200</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid grid-cols-4 gap-5 mb-16">
            {STATS.map((stat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }} className="py-8 px-5 text-center rounded-2xl" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.14)" }}>
                <p className="font-normal mb-1" style={{ fontSize: "2.4rem", color: GOLD }}>{stat.val}</p>
                <div className="h-px w-6 mx-auto my-2" style={{ background: G }} />
                <p style={{ color: dim, fontSize: "0.85rem", opacity: 0.7 }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="font-normal mb-6" style={{ fontSize: "1.8rem", color: cream }}>Major Threats to Wildlife</h3>
          <div className="grid grid-cols-2 gap-4">
            {THREATS.map((threat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.07, duration: 0.5 }} className="card-hover p-7 rounded-2xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}>
                <span className="text-4xl block mb-3">{threat.icon}</span>
                <h4 className="font-normal mb-2" style={{ fontSize: "1.2rem", color: cream }}>{threat.title}</h4>
                <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.7 }}>{threat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSERVATION WINS */}
      <section className="py-28 px-8" style={{ background: "linear-gradient(160deg, #060d09, #071a0e, #060d09)" }}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Proof It Works" title="Conservation Wins" sub="These stories prove conservation works when we commit to it." center />
          <div className="grid grid-cols-3 gap-6">
            {WINS.map((win, i) => {
              const isOpen = expandedWin === i;
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="rounded-2xl overflow-hidden cursor-pointer transition-colors duration-300"
                  style={{ border: `1px solid ${isOpen ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.08)"}`, background: bg.card }}
                  onClick={() => setExpandedWin(isOpen ? null : i)}
                >
                  <div className="img-zoom relative overflow-hidden" style={{ height: "22rem" }}>
                    <img src={win.img} alt={win.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,6,5,0.96) 0%, rgba(3,6,5,0.4) 55%, transparent 100%)" }} />
                    <div className="absolute top-4 right-4 rounded-full px-3 py-1 backdrop-blur-md" style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}>
                      <span className="uppercase" style={{ color: GOLD, fontSize: "0.6rem", letterSpacing: "0.2em", fontFamily: "Courier New, monospace" }}>✦ Success</span>
                    </div>
                    <div className="absolute bottom-0 p-6 w-full">
                      <span className="text-2xl">{win.emoji}</span>
                      <h3 className="font-normal mt-1 mb-1" style={{ fontSize: "1.2rem", color: cream }}>{win.title}</h3>
                      <p style={{ fontSize: "1.9rem", color: GOLD, fontFamily: "'Cinzel', serif", margin: "0 0 0.15rem" }}>{win.stat}</p>
                      <p style={{ color: dim, fontSize: "0.82rem", opacity: 0.8, margin: "0 0 0.25rem" }}>{win.unit}</p>
                      <div className="flex justify-between items-center">
                        <p style={{ color: "rgba(196,187,166,0.45)", fontSize: "0.75rem", fontFamily: "Courier New, monospace", margin: 0 }}>↑ {win.before}</p>
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ color: GOLD, fontSize: "0.75rem" }}>▾</motion.span>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-7" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
                          <p className="mb-5 pl-4" style={{ color: cream, fontSize: "0.95rem", lineHeight: 1.8, opacity: 0.88, borderLeft: `3px solid ${GOLD}` }}>{win.desc}</p>
                          <p className="mb-3" style={{ color: dim, fontSize: "0.9rem", lineHeight: 1.8, opacity: 0.78 }}>{win.how}</p>
                          <div className="flex flex-col gap-2 mt-4">
                            {win.facts.map((fact, j) => (
                              <div key={j} className="flex gap-3 items-start px-3 py-2 rounded-lg" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}>
                                <span style={{ color: GOLD, fontSize: "0.7rem", marginTop: 2 }}>✦</span>
                                <p className="m-0" style={{ color: dim, fontSize: "0.88rem", lineHeight: 1.6, opacity: 0.82 }}>{fact}</p>
                              </div>
                            ))}
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

      {/* ANIMALS */}
      <section className="py-28 px-8" style={{ background: `linear-gradient(180deg, ${bg.main}, ${bg.mid})` }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="In Focus"
            title="Animals Worth Saving"
            sub="Each of these species faces an uncertain future. Their survival depends on the actions we take today."
            center
          />
          <div className="grid grid-cols-3 gap-5">
            {ANIMALS.map((animal, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }} className="img-zoom relative overflow-hidden rounded-2xl" style={{ height: "22rem" }}>
                <img src={animal.img} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,6,5,0.92) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)" }} />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full uppercase backdrop-blur-md"
                  style={{ color: animal.color, background: `${animal.color}18`, border: `1px solid ${animal.color}44`, fontSize: "0.6rem", letterSpacing: "0.2em", fontFamily: "Courier New, monospace" }}
                >
                  {animal.status}
                </span>
                <h3 className="absolute bottom-6 left-6 font-normal" style={{ fontSize: "1.5rem", color: cream }}>{animal.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MIGRATION */}
      <section className="py-28 px-8" style={{ background: "linear-gradient(180deg, #040d07, #071408, #040d07)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Nature's Greatest Journey"
            title="Wildlife Migration"
            sub="Every year, billions of animals undertake extraordinary journeys driven by seasons, food, and survival."
            center
          />

          <motion.div {...fadeUp} className="relative overflow-hidden rounded-2xl mb-16" style={{ height: "28rem", border: "1px solid rgba(201,168,76,0.1)" }}>
            <img
              src="https://static.wixstatic.com/media/0c30ac_b35519427750445db2618fb0dcc22853~mv2.png/v1/fill/w_1110,h_624,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/0c30ac_b35519427750445db2618fb0dcc22853~mv2.png"
              alt="Great Migration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,13,7,0.92) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />
            <div className="absolute bottom-10 left-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {["1.5M Wildebeest", "250K Zebra", "500km Journey", "Annual Event"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full uppercase backdrop-blur-md" style={{ color: GOLD, background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", fontSize: "0.65rem", letterSpacing: "0.15em", fontFamily: "Courier New, monospace" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-normal" style={{ fontSize: "2.4rem", color: cream }}>The Great Wildebeest Migration</h3>
              <p className="mt-2" style={{ color: dim, opacity: 0.7, fontSize: "1.05rem" }}>The largest terrestrial migration on Earth — Serengeti to Masai Mara and back.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 mb-16">
            {MIGRATION.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="img-zoom overflow-hidden rounded-2xl cursor-pointer card-hover"
                onClick={() => setMigrationModal(item)}
                style={{ background: bg.card, border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <div className="relative overflow-hidden" style={{ height: "13rem" }}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, ${bg.card} 100%)` }} />
                  <span className="absolute top-4 right-4 text-3xl">{item.icon}</span>
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full backdrop-blur-md" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}>
                    <span className="uppercase" style={{ color: GOLD, fontSize: "0.6rem", letterSpacing: "0.2em", fontFamily: "Courier New, monospace" }}>View Details →</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-normal mb-3" style={{ fontSize: "1.4rem", color: cream }}>{item.name}</h4>
                  <div className="flex gap-2 flex-wrap mb-3">
                    <Tag>📍 {item.route}</Tag>
                    <Tag color="#a8c9ad">📏 {item.dist}</Tag>
                  </div>
                  <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.75, opacity: 0.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="rounded-2xl p-12" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.14)" }}>
            <h3 className="text-center font-normal mb-10" style={{ fontSize: "1.7rem", color: cream }}>Migration by the Numbers</h3>
            <div className="grid grid-cols-4 gap-8 text-center">
              {[
                { v: "1.5B",   l: "Birds migrate each year in North America", i: "🐦" },
                { v: "90K km", l: "Distance Arctic Tern travels annually",    i: "🗺️" },
                { v: "500+",   l: "Species undertake long-distance migrations", i: "🌍" },
                { v: "30%",    l: "Migratory species in decline",             i: "📉" },
              ].map((stat, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08, duration: 0.5 }}>
                  <div className="text-3xl mb-2">{stat.i}</div>
                  <p style={{ fontSize: "1.9rem", color: GOLD, fontFamily: "'Cinzel', serif", marginBottom: "0.4rem" }}>{stat.v}</p>
                  <div className="h-px w-5 mx-auto my-1" style={{ background: G }} />
                  <p style={{ color: dim, fontSize: "0.82rem", lineHeight: 1.6, opacity: 0.65 }}>{stat.l}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW YOU CAN HELP */}
      <section className="py-28 px-8" style={{ background: "linear-gradient(160deg, #060d09, #0a1a0e, #060d09)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Daily Actions"
            title="How You Can Help"
            sub="You don't have to donate to make a difference. These everyday actions have real, measurable impact."
            center
          />
          <div className="grid grid-cols-3 gap-5 mb-16">
            {HELP_ACTIONS.map((action, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.07, duration: 0.5 }} className="card-hover p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}>
                <span className="text-4xl block mb-3">{action.icon}</span>
                <h4 className="font-normal mb-2" style={{ fontSize: "1.2rem", color: cream }}>{action.title}</h4>
                <p style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.75, opacity: 0.7 }}>{action.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="px-12 py-10 rounded-2xl text-center relative" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <span className="absolute top-4 left-8 leading-none" style={{ fontSize: "4rem", color: "rgba(201,168,76,0.12)", fontFamily: "Georgia, serif" }}>"</span>
            <p className="italic mx-auto" style={{ fontSize: "1.35rem", color: cream, lineHeight: 1.7, maxWidth: "46rem", opacity: 0.9 }}>
              The Earth does not belong to us. We belong to the Earth. What we do to the web of life, we do to ourselves.
            </p>
            <div className="h-px w-12 mx-auto mt-6 mb-3" style={{ background: G }} />
            <p className="uppercase tracking-widest" style={{ color: GOLD, fontSize: "0.8rem", letterSpacing: "0.3em", fontFamily: "Courier New, monospace" }}>Chief Seattle</p>
          </motion.div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="py-28 px-8" style={{ background: bg.main }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Get Involved" title="Volunteer for Wildlife" sub="Go beyond awareness — give your time, skills, and energy directly to conservation." center />
          <div className="grid grid-cols-3 gap-5 mb-16">
            {VOLUNTEER_ROLES.map((role, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.07, duration: 0.5 }} className="card-hover p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}>
                <span className="text-4xl block mb-3">{role.icon}</span>
                <h4 className="font-normal mb-1" style={{ fontSize: "1.15rem", color: cream }}>{role.title}</h4>
                <p className="mb-4" style={{ color: dim, fontSize: "0.92rem", lineHeight: 1.75, opacity: 0.7 }}>{role.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <Tag color="#7aab82">⏱ {role.time}</Tag>
                  <Tag color="#a8c9ad">📍 {role.loc}</Tag>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="grid gap-8 items-center px-12 py-10 rounded-2xl relative overflow-hidden" style={{ gridTemplateColumns: "1fr auto", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.22)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: G }} />
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span style={{ color: GOLD, fontSize: "1.1rem" }}>👥</span>
                <span className="uppercase" style={{ color: GOLD, fontSize: "0.65rem", letterSpacing: "0.4em", fontFamily: "Courier New, monospace" }}>Join the Movement</span>
              </div>
              <h3 className="font-normal mb-2" style={{ fontSize: "1.7rem", color: cream }}>12,000+ volunteers active worldwide</h3>
              <p style={{ color: dim, fontSize: "1rem", opacity: 0.7 }}>Connect with conservation programs that match your skills, availability, and location.</p>
            </div>
            <a
              href="https://www.volunteerworld.com/en/volunteer-abroad/wildlife-conservation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full no-underline uppercase font-bold whitespace-nowrap"
              style={{ background: G, color: bg.main, fontSize: "0.85rem", letterSpacing: "0.15em" }}
            >
              Find a Role
            </a>
          </motion.div>
        </div>
      </section>

      {/* ORGANISATIONS */}
      <section className="py-28 px-8" style={{ background: "linear-gradient(180deg, #060a07, #0a120a)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader label="Partners" title="Leading the Movement" sub="These organisations protect animals, restore habitats, and safeguard biodiversity globally." center />
          <div className="flex flex-col gap-24">
            {ORGS.map((org, i) => {
              const isEven = i % 2 === 0;

              const ImageCol = (
                <div
                  className="img-zoom relative overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setVideo(org.vid)}
                  style={{ height: "22rem", border: "1px solid rgba(201,168,76,0.1)" }}
                >
                  <img src={org.img} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,6,5,0.55), transparent)" }} />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ background: G }}
                  >
                    <span style={{ color: bg.main, fontSize: "1rem", marginLeft: 2 }}>▶</span>
                  </div>
                </div>
              );

              const TextCol = (
                <div>
                  <GL />
                  <h3 className="font-normal mb-4" style={{ fontSize: "2rem", color: cream }}>{org.name}</h3>
                  <p className="mb-6" style={{ color: dim, fontSize: "1.05rem", lineHeight: 1.85, opacity: 0.75 }}>{org.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {org.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                  </div>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={gBtn}
                    onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = bg.main; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}
                  >
                    Visit Website ↗
                  </a>
                </div>
              );

              return (
                <motion.div key={i} {...fadeUp} transition={{ delay: 0.05, duration: 0.5 }} className="grid grid-cols-2 gap-16 items-center">
                  {isEven ? <>{ImageCol}{TextCol}</> : <>{TextCol}{ImageCol}</>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-28 px-8" style={{ background: "linear-gradient(160deg, #060d09, #0a150c, #060d09)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-14">
            <SectionHeader label="Stay Informed" title="Latest News" />
            <a
              href="https://iucn.org/news-events"
              target="_blank"
              rel="noopener noreferrer"
              className={`mb-14 ${gBtn}`}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = bg.main; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = GOLD; }}
            >
              View All Stories 📖
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {NEWS.map((article, i) => (
              <motion.div
                key={article.title || i}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="img-zoom card-hover overflow-hidden rounded-2xl cursor-pointer flex flex-col"
                onClick={() => setNewsArticle(article)}
                style={{ background: bg.card, border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <div className="relative overflow-hidden shrink-0" style={{ height: "13rem" }}>
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 50%, ${bg.card} 100%)` }} />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full backdrop-blur-md" style={{ background: "rgba(6,10,7,0.8)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <span style={{ color: "rgba(201,168,76,0.7)", fontSize: "0.62rem", fontFamily: "Courier New, monospace" }}>⏱ {article.readTime}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <Tag>{article.tag}</Tag>
                    <span style={{ color: "rgba(196,187,166,0.4)", fontSize: "0.75rem", fontFamily: "Courier New, monospace" }}>{article.date}</span>
                  </div>
                  <h4 className="font-normal mb-3" style={{ fontSize: "1.15rem", color: cream, lineHeight: 1.4 }}>{article.title}</h4>
                  <p className="flex-1" style={{ color: dim, fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.65 }}>{article.excerpt}</p>
                  <div className="mt-4 pt-4 flex items-center gap-2" style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.04))", border: "1px solid rgba(201,168,76,0.18)", color: GOLD, fontSize: "0.65rem" }}>
                      {article.author.charAt(0)}
                    </div>
                    <p className="flex-1 m-0 truncate" style={{ color: cream, fontSize: "0.78rem", opacity: 0.8 }}>{article.author}</p>
                    <span className="uppercase shrink-0" style={{ color: GOLD, fontSize: "0.75rem", letterSpacing: "0.12em", fontFamily: "Courier New, monospace" }}>Read →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACT NOW */}
      <section id="act-now" className="py-36 px-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1a08, #142810, #0a1a08)" }}>
        <div className="max-w-5xl mx-auto relative">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="uppercase mb-4" style={{ color: GOLD, fontSize: "0.65rem", letterSpacing: "0.55em", fontFamily: "Courier New, monospace" }}>The Time Is Now</p>
            <div className="h-px w-16 mx-auto mb-5" style={{ background: G }} />
            <h2 className="leading-none mb-6" style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", color: cream }}>Act Now.</h2>
            <p className="mx-auto" style={{ color: dim, fontSize: "1.15rem", lineHeight: 1.85, maxWidth: "36rem", opacity: 0.75 }}>
              The window to protect our planet's biodiversity is narrowing. Choose how you want to make a difference.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.5 }} className="rounded-2xl p-12 mb-8 relative overflow-hidden" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: G }} />
            <div className="grid gap-8 items-center" style={{ gridTemplateColumns: "1fr auto" }}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🌍</span>
                  <span className="uppercase" style={{ color: GOLD, fontSize: "0.65rem", letterSpacing: "0.4em", fontFamily: "Courier New, monospace" }}>Featured Platform</span>
                </div>
                <h3 className="font-normal mb-3" style={{ fontSize: "1.9rem", color: cream }}>Wildlife Conservation Network</h3>
                <p className="mb-5" style={{ color: dim, fontSize: "1.05rem", lineHeight: 1.8, opacity: 0.8, maxWidth: "42rem" }}>
                  A hub for wildlife conservation projects worldwide. Choose which animal, habitat, or program you want to support.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["💰 Donate to Projects", "🐘 Support Animals", "🌳 Fund Habitats", "🎯 Run Fundraisers"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full" style={{ fontSize: "0.8rem", color: dim, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>{tag}</span>
                  ))}
                </div>
              </div>
              <a
                href="https://wildnet.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 px-9 py-6 rounded-2xl no-underline text-center"
                style={{ background: G, color: bg.main, minWidth: "10rem" }}
              >
                <span className="text-2xl">🐾</span>
                <span className="font-bold uppercase" style={{ fontSize: "0.85rem", letterSpacing: "0.1em" }}>Take Action</span>
                <span style={{ fontSize: "0.72rem", opacity: 0.65 }}>wildnet.org</span>
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-5">
            {[
              { emoji: "🌱", name: "GlobalGiving",     desc: "Choose from hundreds of conservation projects worldwide.", tag: "Fund Projects",    url: "https://www.globalgiving.org",   color: "#7aab82" },
              { emoji: "🌿", name: "Rainforest Trust",  desc: "Protect critical rainforest habitats and biodiversity.",  tag: "Protect Habitats", url: "https://www.rainforesttrust.org", color: "#2a8c7a" },
              { emoji: "✊", name: "Change.org",        desc: "Sign petitions to stop illegal wildlife trade globally.", tag: "Sign Petitions",   url: "https://www.change.org",         color: GOLD     },
            ].map((platform, i) => (
              <motion.a
                key={i}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="block p-8 rounded-2xl no-underline card-hover"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <span className="text-3xl block mb-3">{platform.emoji}</span>
                <h4 className="font-normal mb-2" style={{ fontSize: "1.3rem", color: cream }}>{platform.name}</h4>
                <p className="mb-5" style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.7, opacity: 0.7 }}>{platform.desc}</p>
                <Tag color={platform.color}>{platform.tag} →</Tag>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: bg.deep, borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="px-10 py-8 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm" style={{ background: G, color: bg.main }}>🌿</div>
            <span className="uppercase tracking-widest" style={{ fontSize: "0.8rem", letterSpacing: "0.25em" }}>
              Loss Of Animal <span style={{ color: GOLD }}>Habitats</span>
            </span>
          </div>
          <p style={{ color: "rgba(201,168,76,0.25)", fontSize: "0.82rem" }}>© 2026 Loss Of Animal Habitat Project. All rights reserved.</p>
          <div className="flex gap-7">
            {["Privacy", "Terms", "Contact"].map(link => (
              <a key={link} href="#" className="no-underline transition-colors duration-300" style={{ color: "rgba(201,168,76,0.3)", fontSize: "0.82rem" }}
                onMouseEnter={e => (e.target.style.color = GOLD)}
                onMouseLeave={e => (e.target.style.color = "rgba(201,168,76,0.3)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* video lightbox */}
      <AnimatePresence>
        {video && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-6 backdrop-blur-2xl"
            style={{ background: "rgba(3,6,5,0.95)" }}
            onClick={() => setVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ maxWidth: "54rem", aspectRatio: "16/9", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 z-10" style={{ background: G }} />
              {typeof video === "string" && (video.endsWith(".mp4") || video.startsWith("/") || video.includes("assets"))
                ? <video src={video} autoPlay controls className="w-full h-full object-cover bg-black" />
                : <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video}?autoplay=1`} title="Video" allowFullScreen allow="autoplay" />
              }
              <button
                onClick={() => setVideo(null)}
                className="absolute top-2 right-2 p-1.5 rounded-full cursor-pointer flex items-center justify-center z-10 backdrop-blur-md"
                style={{ background: "rgba(6,10,7,0.85)", border: "1px solid rgba(201,168,76,0.25)", color: cream }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* migration detail modal */}
      <AnimatePresence>
        {migrationModal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-3xl"
            style={{ background: "rgba(3,6,5,0.95)", zIndex: 400 }}
            onClick={() => setMigrationModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-y-auto rounded-3xl"
              style={{ background: bg.card, border: "1px solid rgba(201,168,76,0.2)", maxHeight: "92vh" }}
            >
              <div className="h-0.5 rounded-t-3xl sticky top-0 z-10" style={{ background: G }} />
              <div className="relative overflow-hidden" style={{ height: "20rem" }}>
                <img src={migrationModal.heroImg} alt={migrationModal.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,20,16,1) 0%, rgba(12,20,16,0.3) 60%, transparent 100%)" }} />
                <button
                  onClick={() => setMigrationModal(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md"
                  style={{ background: "rgba(6,10,7,0.85)", border: "1px solid rgba(201,168,76,0.25)", color: cream }}
                >
                  ×
                </button>
                <div className="absolute bottom-7 left-8">
                  <span className="text-4xl">{migrationModal.icon}</span>
                  <h2 className="font-normal mt-1 mb-2" style={{ fontSize: "2.2rem", color: cream }}>{migrationModal.name}</h2>
                  <div className="flex gap-2 flex-wrap">
                    <Tag>📍 {migrationModal.route}</Tag>
                    <Tag color="#a8c9ad">📏 {migrationModal.dist}</Tag>
                  </div>
                </div>
              </div>
              <div className="px-12 pt-10 pb-12">
                <p className="mb-8 pl-4" style={{ color: cream, fontSize: "1.05rem", lineHeight: 1.85, opacity: 0.9, borderLeft: `3px solid ${GOLD}` }}>
                  {migrationModal.desc}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {migrationModal.facts.map((fact, i) => (
                    <div key={i} className="flex gap-3 items-start px-4 py-3 rounded-xl" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.12)" }}>
                      <span style={{ color: GOLD, fontSize: "0.7rem", marginTop: 2 }}>✦</span>
                      <p className="m-0" style={{ color: dim, fontSize: "0.88rem", lineHeight: 1.6, opacity: 0.82 }}>{fact}</p>
                    </div>
                  ))}
                </div>
                <div className="p-7 rounded-2xl relative overflow-hidden" style={{ background: "rgba(220,68,68,0.04)", border: "1px solid rgba(220,68,68,0.18)" }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(135deg, #dd4444, #e87070)" }} />
                  <p className="mb-2 uppercase" style={{ color: "#e87070", fontSize: "0.6rem", letterSpacing: "0.45em", fontFamily: "Courier New, monospace" }}>⚠️ Threats to Migration</p>
                  <p className="m-0" style={{ color: dim, fontSize: "0.95rem", lineHeight: 1.8, opacity: 0.82 }}>{migrationModal.threats}</p>
                </div>
                <div className="mt-8 text-right">
                  <button
                    onClick={() => setMigrationModal(null)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full uppercase cursor-pointer transition-colors duration-200"
                    style={{ border: "1px solid rgba(201,168,76,0.25)", color: dim, background: "transparent", fontSize: "0.78rem", letterSpacing: "0.15em", fontFamily: "Courier New, monospace" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.color = dim; }}
                  >
                    × Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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