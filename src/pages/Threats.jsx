import { useState, useEffect, useRef } from "react";
import threatsData from "../data/threatsData";
import { setNavbarVisible } from "../components/Navbar";

const STATS = [
  { value: "1M+",  label: "Species at Risk",  sub: "Currently facing extinction" },
  { value: "10B+", label: "Animals Killed",    sub: "Every year due to human activities" },
  { value: "68%",  label: "Wildlife Decline",  sub: "Since 1970 — in a single lifetime" },
  { value: "80%",  label: "Habitat Destroyed", sub: "Of Earth's forests are gone" },
];

function StatCard({ value, label, sub }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-br from-[#0c1e0f]/80 via-[#162918]/60 to-[#1a2b1a]/60
        border border-green-700/30 rounded-xl p-6 text-center backdrop-blur-md
        transition-transform duration-300
        hover:scale-105 hover:shadow-[0_0_20px_rgba(72,187,120,0.4)]
      `}
    >
      <div className={`text-4xl font-bold text-green-300 ${visible ? "opacity-100 transition-opacity duration-1000" : "opacity-0"}`}>
        {value}
      </div>
      <div className="text-gray-300 font-semibold mt-2">{label}</div>
      <div className="text-gray-400 text-sm">{sub}</div>
    </div>
  );
}

function Threats() {
  const [openId, setOpenId] = useState(null);
  const scrollDivRef      = useRef(null);
  const lastScrollTop     = useRef(0);
  const ticking           = useRef(false);
  // When true, scroll events are ignored (reflow guard after button click)
  const suppressScroll    = useRef(false);
  const suppressTimer     = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    setNavbarVisible(true);
    return () => { setNavbarVisible(true); };
  }, []);

  useEffect(() => {
    const el = scrollDivRef.current;
    if (!el) return;

    const handler = () => {
      // Skip scroll events caused by reflow after button click
      if (suppressScroll.current) {
        // Keep lastScrollTop in sync so there's no stale delta after suppression ends
        lastScrollTop.current = el.scrollTop;
        return;
      }

      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y     = el.scrollTop;
        const delta = y - lastScrollTop.current;

        if (y < 80) {
          setNavbarVisible(true);
        } else if (delta > 5) {
          // Genuine downward scroll → hide
          setNavbarVisible(false);
        } else if (delta < -5) {
          // Genuine upward scroll → show
          setNavbarVisible(true);
        }

        lastScrollTop.current = y;
        ticking.current = false;
      });
    };

    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  // Called by both "Read More" and "Show Less" buttons
  const handleToggle = (id) => {
    // Suppress scroll-listener for 400 ms to absorb reflow jitter
    suppressScroll.current = true;
    clearTimeout(suppressTimer.current);
    suppressTimer.current = setTimeout(() => {
      suppressScroll.current = false;
      // Re-sync baseline so the next real scroll starts clean
      if (scrollDivRef.current) {
        lastScrollTop.current = scrollDivRef.current.scrollTop;
      }
    }, 400);

    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="fixed inset-0 text-white overflow-hidden">

      {/* Background video */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10 filter brightness-30"
        src="/threats.mp4"
        autoPlay muted loop playsInline
      />
      <div className="fixed inset-0 bg-black/60 -z-10" />

      <div
        ref={scrollDivRef}
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >

        {/* HERO */}
        <section className="snap-start min-h-screen flex flex-col justify-center items-center text-center px-10">
          <h1 className="text-6xl md:text-7xl font-extrabold text-green-200 drop-shadow-lg mb-4 animate-slideIn">
            The Silent War
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-300 drop-shadow-lg animate-slideIn delay-200">
            Against Wildlife
          </h2>
          <p className="max-w-xl text-gray-400 mt-6 animate-fadeIn">
            Humanity's actions are driving countless species towards extinction. Understand the threats and help protect the wild.
          </p>
        </section>

        {/* STATS */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center px-6 gap-8">
          <h2 className="text-4xl font-bold text-green-300 text-center animate-fadeIn">
            The Scale of Destruction
          </h2>
          <p className="text-gray-400 text-center max-w-xl animate-fadeIn">
            These numbers are not just statistics — they represent lives and ecosystems lost forever.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mt-10 max-w-5xl w-full">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </section>

        {/* THREATS */}
        {threatsData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <section key={item.id} className="snap-start min-h-screen flex items-center justify-center px-6">
              <div className={`
                grid md:grid-cols-2 gap-10 max-w-6xl
                bg-gradient-to-br from-[#0c1e0f]/80 via-[#162918]/70 to-[#1a2b1a]/80
                p-10 rounded-2xl border border-green-700/20
                transition-transform duration-300
                hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(72,187,120,0.3)]
              `}>
                <div className="space-y-6">
                  <img
                    src={item.image} alt={item.title}
                    className="rounded-xl h-72 object-cover w-full transition-transform duration-500 hover:scale-105 hover:shadow-lg"
                  />
                  {isOpen && item.extraImages?.map((img, index) => (
                    <img
                      key={index} src={img} alt="extra"
                      className="rounded-xl h-72 object-cover w-full transition-transform duration-500 hover:scale-105 hover:shadow-lg"
                    />
                  ))}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-green-300">{item.title}</h2>
                  <p className="text-gray-300 mt-4">{item.short}</p>

                  {!isOpen ? (
                    <button
                      onClick={() => handleToggle(item.id)}
                      className="mt-6 px-6 py-2 bg-green-700/70 hover:bg-green-600 transition rounded-lg shadow"
                    >
                      Read More
                    </button>
                  ) : (
                    <div className="mt-6 space-y-4">
                      <p className="text-gray-300">{item.long}</p>

                      {item.causes && (
                        <>
                          <h3 className="text-green-300 font-semibold">Causes</h3>
                          <ul className="space-y-1 text-gray-400">
                            {item.causes.map((c, i) => <li key={i}>• {c}</li>)}
                          </ul>
                        </>
                      )}

                      {item.effects && (
                        <>
                          <h3 className="text-amber-400 font-semibold">Effects</h3>
                          <ul className="space-y-1 text-gray-400">
                            {item.effects.map((e, i) => <li key={i}>• {e}</li>)}
                          </ul>
                        </>
                      )}

                      {item.example && (
                        <p className="italic text-gray-400 border-l-2 border-amber-500 pl-4">{item.example}</p>
                      )}

                      <button
                        onClick={() => handleToggle(item.id)}
                        className="mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-700 transition rounded-lg"
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

        {/* DID YOU KNOW */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center text-center px-6 gap-6">
          <h2 className="text-4xl font-bold text-green-300 mb-8">Did You Know?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
            <div className="bg-[#0c1e0f]/80 p-6 rounded-xl border border-green-700/20 hover:scale-105 hover:shadow-md transition">
              Tigers have lost over 95% of their natural habitat in the last century.
            </div>
            <div className="bg-[#0c1e0f]/80 p-6 rounded-xl border border-green-700/20 hover:scale-105 hover:shadow-md transition">
              Rhinos are poached for their horns, highly valued illegally.
            </div>
            <div className="bg-[#0c1e0f]/80 p-6 rounded-xl border border-green-700/20 hover:scale-105 hover:shadow-md transition">
              Elephants help shape ecosystems; losing them affects thousands of species.
            </div>
          </div>
        </section>

        {/* WAYS TO HELP */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center text-center px-6 gap-6">
          <div className="bg-gradient-to-br from-[#0c1e0f]/70 via-[#162918]/50 to-[#1a2b1a]/70 border border-green-700/20 p-8 rounded-xl max-w-xl backdrop-blur-md transition hover:shadow-lg">
            <h3 className="text-xl font-semibold text-green-300 mb-4">Ways You Can Help</h3>
            <ul className="space-y-3 text-gray-400 text-left">
              <li>Support conservation organizations and wildlife charities</li>
              <li>Refuse products made from endangered species</li>
              <li>Plant native trees and restore local habitats</li>
              <li>Raise awareness — share and educate</li>
              <li>Reduce meat consumption to lower deforestation</li>
              <li>Reduce plastic use to protect oceans</li>
            </ul>
          </div>
          <p className="mt-10 text-gray-300 font-semibold text-lg">
            The wild world is counting on us.
          </p>
        </section>

      </div>

      <style>{`
        @keyframes slideIn { 0%{opacity:0;transform:translateY(40px);} 100%{opacity:1;transform:translateY(0);} }
        .animate-slideIn { animation: slideIn 1s forwards; }
        .animate-fadeIn  { animation: fadeIn 1.5s forwards; }
        @keyframes fadeIn { 0%{opacity:0;} 100%{opacity:1;} }
      `}</style>
    </div>
  );
}

export default Threats;