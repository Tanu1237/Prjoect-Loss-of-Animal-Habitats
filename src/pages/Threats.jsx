import { useState, useEffect, useRef } from "react";
import threatsData from "../data/threatsData";

// Sources: IUCN Red List, WWF Living Planet Report 2022, UN Biodiversity Report 2019
const STATS = [
  { value: "1M+", label: "Species at Risk", sub: "of extinction right now" },
  { value: "10B+", label: "Animals Killed", sub: "every year by humans" },
  { value: "68%", label: "Wildlife Decline", sub: "since 1970 — in one lifetime" },
  { value: "80%", label: "Habitat Destroyed", sub: "of Earth's forests are gone" },
];

const WAYS_TO_HELP = [
  "🌱 Support conservation organizations and wildlife charities",
  "🚫 Refuse products made from endangered species",
  "🌳 Plant native trees and restore local habitats",
  "📢 Raise awareness — share, educate, and advocate",
  "🥦 Reduce meat consumption to lower deforestation pressure",
  "♻️ Cut plastic use to protect ocean ecosystems",
];

const STAT_VISIBILITY_THRESHOLD = 0.3;

function StatCard({ value, label, sub, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: STAT_VISIBILITY_THRESHOLD }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="stat-card"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={`stat-number ${visible ? "stat-visible" : ""}`}>
        {value}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{sub}</div>
    </div>
  );
}

const Threats = () => {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div className="fixed inset-0 text-white overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="/threats.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="fixed inset-0 bg-black/60 -z-10" />

      <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth scroll-pt-20">

        {/* 🔥 INTRO SECTION */}
        <section className="snap-start min-h-screen flex items-start pt-16 justify-start px-8">
          <div className="max-w-5xl">

            <h1 className="text-5xl md:text-7xl font-extrabold text-green-200 leading-tight hero-line1">
              The Silent War
            </h1>

            <h1 className="text-5xl md:text-7xl font-extrabold text-green-200 leading-tight mt-6 hero-line2">
              Against Wildlife
            </h1>

            <p className="mt-24 text-lg md:text-xl text-gray-200 max-w-4xl hero-para">
              Forests are disappearing. Oceans are polluted. Habitats are collapsing.
              Human expansion, climate change, and uncontrolled exploitation are
              pushing countless species toward extinction every single day.
            </p>

          </div>
        </section>

        {/* 📊 IMPACT STATISTICS SECTION */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center px-6 py-16">
          <h2 className="stats-heading">
            The Scale of Destruction
          </h2>
          <p className="stats-subheading">
            These numbers are not just statistics — they are species, families, and futures erased forever.
          </p>
          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </section>

        {/* 🔎 Threat Sections */}
        {threatsData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <section
              key={item.id}
              className="snap-start min-h-screen flex items-center justify-center px-6 py-10"
            >
              <div className="threat-card">

                {/* LEFT SIDE IMAGES */}
                <div className="space-y-6">
                  <div className="threat-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 object-cover rounded-xl threat-img"
                    />
                    <div className="threat-img-overlay" />
                  </div>

                  {isOpen &&
                    item.extraImages?.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="Extra"
                        className="w-full h-72 object-cover rounded-xl"
                      />
                    ))}
                </div>

                {/* RIGHT SIDE TEXT */}
                <div>
                  <h2 className="threat-title">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-green-300/80 font-medium text-sm tracking-wide uppercase">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-gray-200 leading-relaxed">
                    {item.short}
                  </p>

                  {!isOpen ? (
                    <button
                      onClick={() => setOpenId(item.id)}
                      className="read-more-btn"
                    >
                      Read More
                    </button>
                  ) : (
                    <div className="mt-6 space-y-4 slide-up">

                      <p className="text-gray-200 leading-relaxed">
                        {item.long}
                      </p>

                      {item.causes && (
                        <>
                          <h3 className="text-xl font-semibold text-green-300 mt-4">
                            Causes
                          </h3>
                          <ul className="space-y-1 text-gray-300">
                            {item.causes.map((cause, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">▸</span>
                                {cause}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.effects && (
                        <>
                          <h3 className="text-xl font-semibold text-green-300 mt-4">
                            Effects
                          </h3>
                          <ul className="space-y-1 text-gray-300">
                            {item.effects.map((effect, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">▸</span>
                                {effect}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.example && (
                        <>
                          <h3 className="text-xl font-semibold text-green-300 mt-4">
                            Example
                          </h3>
                          <p className="text-gray-300 border-l-2 border-green-500 pl-4 italic">
                            {item.example}
                          </p>
                        </>
                      )}

                      <button
                        onClick={() => setOpenId(null)}
                        className="mt-6 px-6 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition"
                      >
                        Show Less
                      </button>

                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}

        {/* 💚 EMOTIONAL ENDING SECTION */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
          <h2 className="ending-heading">
            Every Species Lost Is Forever
          </h2>

          <blockquote className="ending-quote">
            &ldquo;In the end, we will conserve only what we love,
            we will love only what we understand,
            and we will understand only what we are taught.&rdquo;
            <span className="ending-quote-author">— Baba Dioum</span>
          </blockquote>

          <p className="ending-body">
            The extinction crisis is not a distant problem — it is happening right now, in our lifetime.
            Every creature that vanishes takes with it a unique story written over millions of years of evolution.
            But there is still time. <strong className="text-green-300">Your actions matter.</strong>
          </p>

          <div className="ways-to-help">
            <h3 className="ways-heading">Ways You Can Help</h3>
            <ul className="ways-list">
              {WAYS_TO_HELP.map((way, i) => (
                <li key={i} className="ways-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  {way}
                </li>
              ))}
            </ul>
          </div>

          <p className="ending-footer">
            🌍 The wild world is counting on us. Act now — before silence is all that remains.
          </p>
        </section>
      </div>

      {/* 🎬 ANIMATIONS */}
      <style>
        {`
          /* ── Hero Animations ─────────────────────── */
          .hero-line1 {
            opacity: 0;
            transform: translateX(-120px);
            animation: slideLeft 1s ease-out forwards;
          }
          .hero-line2 {
            opacity: 0;
            transform: translateX(-120px);
            animation: slideLeft 1s ease-out forwards;
            animation-delay: 0.4s;
          }
          .hero-para {
            opacity: 0;
            transform: translateX(-120px);
            animation: slideLeft 1s ease-out forwards;
            animation-delay: 0.8s;
          }
          @keyframes slideLeft {
            to { opacity: 1; transform: translateX(0); }
          }

          /* ── Stats Section ───────────────────────── */
          .stats-heading {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 900;
            background: linear-gradient(135deg, #bbf7d0, #4ade80, #16a34a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            text-align: center;
          }
          .stats-subheading {
            color: #d1fae5;
            max-width: 600px;
            text-align: center;
            margin-bottom: 3rem;
            font-size: 1.1rem;
            line-height: 1.7;
            opacity: 0.85;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.5rem;
            width: 100%;
            max-width: 900px;
          }
          .stat-card {
            background: linear-gradient(135deg, rgba(22,163,74,0.15), rgba(6,78,59,0.25));
            border: 1px solid rgba(74,222,128,0.25);
            border-radius: 1.25rem;
            padding: 2rem 1.5rem;
            text-align: center;
            backdrop-filter: blur(16px);
            animation: floatUp 0.7s ease-out both;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          }
          .stat-card:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 0 30px rgba(74,222,128,0.35);
            border-color: rgba(74,222,128,0.6);
          }
          @keyframes floatUp {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .stat-number {
            font-size: 3rem;
            font-weight: 900;
            background: linear-gradient(135deg, #bbf7d0, #4ade80);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            transition: transform 0.4s ease;
          }
          .stat-visible {
            animation: pulseStat 1.2s ease-out forwards;
          }
          @keyframes pulseStat {
            0%   { transform: scale(0.6); opacity: 0; }
            60%  { transform: scale(1.15); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .stat-label {
            color: #86efac;
            font-weight: 700;
            font-size: 1rem;
            margin-top: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .stat-sub {
            color: #d1fae5;
            font-size: 0.8rem;
            margin-top: 0.25rem;
            opacity: 0.7;
          }

          /* ── Threat Cards ────────────────────────── */
          .threat-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            max-width: 1100px;
            width: 100%;
            background: linear-gradient(135deg, rgba(15,42,29,0.85), rgba(6,28,18,0.9));
            backdrop-filter: blur(20px);
            border: 1px solid rgba(74,222,128,0.2);
            border-radius: 1.5rem;
            padding: 2.5rem;
            box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(74,222,128,0.1);
            transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
          }
          @media (max-width: 768px) {
            .threat-card { grid-template-columns: 1fr; }
          }
          .threat-card:hover {
            box-shadow: 0 0 40px rgba(74,222,128,0.25), 0 16px 48px rgba(0,0,0,0.5);
            border-color: rgba(74,222,128,0.45);
            transform: translateY(-3px);
          }
          .threat-img-wrapper {
            position: relative;
            border-radius: 0.75rem;
            overflow: hidden;
          }
          .threat-img {
            transition: transform 0.5s ease;
          }
          .threat-card:hover .threat-img {
            transform: scale(1.04);
          }
          .threat-img-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%);
            pointer-events: none;
          }
          .threat-title {
            font-size: 1.6rem;
            font-weight: 800;
            background: linear-gradient(135deg, #bbf7d0, #4ade80);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
          }
          .read-more-btn {
            margin-top: 1.5rem;
            padding: 0.6rem 1.75rem;
            background: linear-gradient(135deg, #16a34a, #15803d);
            border: 1px solid rgba(74,222,128,0.4);
            border-radius: 0.75rem;
            font-weight: 600;
            color: white;
            letter-spacing: 0.03em;
            transition: background 0.25s, box-shadow 0.25s, transform 0.2s;
            cursor: pointer;
          }
          .read-more-btn:hover {
            background: linear-gradient(135deg, #15803d, #166534);
            box-shadow: 0 0 18px rgba(74,222,128,0.4);
            transform: translateY(-2px);
          }
          .slide-up {
            animation: slideUpFade 0.5s ease-out forwards;
          }
          @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          /* ── Ending Section ──────────────────────── */
          .ending-heading {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 900;
            background: linear-gradient(135deg, #d1fae5, #4ade80, #16a34a, #bbf7d0);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 4s ease infinite;
            margin-bottom: 2rem;
            line-height: 1.15;
          }
          @keyframes gradientShift {
            0%   { background-position: 0% 50%; }
            50%  { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .ending-quote {
            max-width: 700px;
            font-size: 1.2rem;
            font-style: italic;
            color: #d1fae5;
            border-left: 3px solid #4ade80;
            padding: 1rem 1.5rem;
            margin: 0 auto 2rem;
            background: rgba(22,163,74,0.1);
            border-radius: 0 0.75rem 0.75rem 0;
            text-align: left;
            line-height: 1.8;
          }
          .ending-quote-author {
            display: block;
            margin-top: 0.5rem;
            font-weight: 700;
            font-style: normal;
            color: #86efac;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
          }
          .ending-body {
            max-width: 680px;
            color: #d1fae5;
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 3rem;
            opacity: 0.9;
          }
          .ways-to-help {
            width: 100%;
            max-width: 720px;
            background: linear-gradient(135deg, rgba(22,163,74,0.12), rgba(6,78,59,0.2));
            border: 1px solid rgba(74,222,128,0.2);
            border-radius: 1.25rem;
            padding: 2rem 2.5rem;
            margin-bottom: 2.5rem;
            backdrop-filter: blur(12px);
          }
          .ways-heading {
            font-size: 1.4rem;
            font-weight: 800;
            color: #4ade80;
            margin-bottom: 1rem;
            text-align: center;
          }
          .ways-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          .ways-item {
            color: #d1fae5;
            font-size: 1rem;
            line-height: 1.6;
            padding: 0.5rem 0.75rem;
            background: rgba(255,255,255,0.04);
            border-radius: 0.5rem;
            border-left: 2px solid rgba(74,222,128,0.4);
            animation: floatUp 0.6s ease-out both;
            transition: background 0.2s;
          }
          .ways-item:hover {
            background: rgba(74,222,128,0.1);
          }
          .ending-footer {
            font-size: 1.1rem;
            color: #86efac;
            font-weight: 600;
            opacity: 0.9;
            letter-spacing: 0.02em;
          }
        `}
      </style>
    </div>
  );
};

export default Threats;