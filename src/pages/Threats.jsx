import { useState, useEffect } from "react";
import threatsData from "../data/threatsData";

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
        <section className="snap-start min-h-screen flex items-start  pt-16 justify-start px-8">
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

        {/* 🔎 Threat Sections */}
        {threatsData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <section
              key={item.id}
              className="snap-start min-h-screen flex items-center justify-center px-6 py-10"
            >
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

                {/* LEFT SIDE IMAGES */}
                <div className="space-y-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover rounded-xl"
                  />

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
                  <h2 className="text-2xl font-bold text-green-200">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-gray-300">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-gray-200">
                    {item.short}
                  </p>

                  {!isOpen ? (
                    <button
                      onClick={() => setOpenId(item.id)}
                      className="mt-6 px-6 py-2 bg-green-600 rounded-xl hover:bg-green-700 transition"
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
                          <h3 className="text-xl font-semibold text-green-200">
                            Causes
                          </h3>
                          <ul className="list-disc list-inside text-gray-300">
                            {item.causes.map((cause, index) => (
                              <li key={index}>{cause}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.effects && (
                        <>
                          <h3 className="text-xl font-semibold text-green-200">
                            Effects
                          </h3>
                          <ul className="list-disc list-inside text-gray-300">
                            {item.effects.map((effect, index) => (
                              <li key={index}>{effect}</li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.example && (
                        <>
                          <h3 className="text-xl font-semibold text-green-200">
                            Example
                          </h3>
                          <p className="text-gray-300">
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
      </div>

      {/* 🎬 ANIMATIONS */}
      <style>
        {`
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
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Threats;