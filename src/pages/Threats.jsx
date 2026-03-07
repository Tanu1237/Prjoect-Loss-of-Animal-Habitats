import { useState, useEffect, useRef } from "react";
import threatsData from "../data/threatsData";

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
  "📢 Raise awareness — share and educate",
  "🥦 Reduce meat consumption to lower deforestation",
  "♻️ Reduce plastic use to protect oceans",
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
      className="
      bg-gradient-to-br from-green-900/50 via-emerald-800/40 to-amber-900/40
      border border-green-400/30
      rounded-xl p-6 text-center backdrop-blur-md
      transition-all duration-300
      hover:scale-110 hover:border-amber-300
      hover:shadow-[0_0_25px_rgba(253,224,71,0.4)]
      "
    >
      <div className={`text-4xl font-bold text-emerald-300 ${visible ? "animate-pulse" : ""}`}>
        {value}
      </div>

      <div className="text-green-200 font-semibold mt-2">
        {label}
      </div>

      <div className="text-sm text-amber-200/80">
        {sub}
      </div>
    </div>
  );
}

function Threats() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  return (
    <div className="fixed inset-0 text-white overflow-hidden">

      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="/threats.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="fixed inset-0 bg-black/60 -z-10" />

      <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">

        {/* HERO SECTION */}
        <section className="snap-start min-h-screen relative px-10 py-20">

          <h1 className="absolute top-24 left-10 text-6xl md:text-7xl font-extrabold text-green-200 drop-shadow-lg">
            The Silent War
          </h1>

          <h1 className="absolute bottom-28 right-10 text-6xl md:text-7xl font-extrabold text-[#7fc764dd] text-right drop-shadow-lg px-2 py-12">
            Against Wildlife
          </h1>

          <p className="absolute bottom-10 left-10 max-w-xl text-xl text-gray-200 leading-relaxed  px-8">
            Forests are disappearing. Oceans are polluted. Habitats are collapsing.
            Human expansion, climate change, and exploitation are pushing species
            toward extinction every single day.
          </p>

        </section>

        {/* STATS */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center px-6">

          <h2 className="text-4xl font-bold text-green-300 text-center">
            The Scale of Destruction
          </h2>

          <p className="text-gray-300 mt-4 text-center max-w-xl">
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
            <section
              key={item.id}
              className="snap-start min-h-screen flex items-center justify-center px-6"
            >
              <div
                className="
                grid md:grid-cols-2 gap-10 max-w-6xl
                bg-gradient-to-br from-[#1c2a22]/90 via-[#24352c]/90 to-[#3b2f23]/90
                p-10 rounded-2xl
                border border-green-400/20
                transition-all duration-300
                hover:scale-[1.02]
                hover:border-amber-300
                hover:shadow-[0_0_35px_rgba(34,197,94,0.35)]
                "
              >

                {/* Images */}
                <div className="space-y-6">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl h-72 object-cover w-full transition-transform duration-500 hover:scale-105"
                  />

                  {isOpen &&
                    item.extraImages?.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="extra"
                        className="rounded-xl h-72 object-cover w-full transition-transform duration-500 hover:scale-105"
                      />
                    ))}

                </div>

                {/* Text */}
                <div>

                  <h2 className="text-2xl font-bold text-green-300">
                    {item.title}
                  </h2>

                  <p className="text-gray-300 mt-4">
                    {item.short}
                  </p>

                  {!isOpen ? (
                    <button
                      onClick={() => setOpenId(item.id)}
                      className="
                      mt-6 px-6 py-2
                      bg-gradient-to-r from-green-600 to-blue-400
                      rounded-lg
                      hover:from-green-700 hover:to-emerald-200
                      transition shadow-md hover:shadow-xl
                      "
                    >
                      Read More
                    </button>
                  ) : (
                    <div className="mt-6 space-y-4">

                      <p className="text-gray-200">
                        {item.long}
                      </p>

                      {item.causes && (
                        <>
                          <h3 className="text-green-300 font-semibold">
                            Causes
                          </h3>

                          <ul className="space-y-1 text-gray-300">
                            {item.causes.map((cause, i) => (
                              <li key={i}>• {cause}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.effects && (
                        <>
                          <h3 className="text-amber-300 font-semibold">
                            Effects
                          </h3>

                          <ul className="space-y-1 text-gray-300">
                            {item.effects.map((effect, i) => (
                              <li key={i}>• {effect}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.example && (
                        <p className="italic text-gray-300 border-l-2 border-amber-400 pl-4">
                          {item.example}
                        </p>
                      )}

                      <button
                        onClick={() => setOpenId(null)}
                        className="
                        mt-4 px-6 py-2
                        bg-gradient-to-r from-amber-700 to-green-700
                        rounded-lg
                        hover:opacity-90
                        transition
                        "
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

        {/* ENDING */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center text-center px-6">

          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-300 via-emerald-200 to-amber-300 bg-clip-text text-transparent mb-6">
            Every Species Lost Is Forever
          </h2>

          <p className="max-w-xl text-gray-200 mb-10 leading-relaxed">
            The extinction crisis is happening right now. Every species lost is
            a unique story erased from Earth forever.
          </p>

          <div
            className="
            bg-gradient-to-br from-green-900/40 via-emerald-800/30 to-amber-900/40
            border border-green-400/30
            p-8 rounded-xl max-w-xl
            backdrop-blur-md
            hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]
            transition
            "
          >

            <h3 className="text-xl font-semibold text-green-300 mb-4">
              Ways You Can Help
            </h3>

            <ul className="space-y-3 text-gray-200">
              {WAYS_TO_HELP.map((way, i) => (
                <li key={i} className="hover:text-amber-200 transition">
                  {way}
                </li>
              ))}
            </ul>

          </div>

          <p className="mt-10 text-amber-300 font-semibold text-lg">
            🌍 The wild world is counting on us.
          </p>

        </section>

      </div>
    </div>
  );
}

export default Threats;