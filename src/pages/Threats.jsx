import { useState } from "react";
import threatsData from "../data/threatsData";

const Threats = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="/threats.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="fixed inset-0 bg-black/50 -z-10" />

      <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth scroll-pt-20">
        
        {/* Intro Section */}
        <section className="snap-start min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-green-200 mb-4">
              Threats to Animal Habitat
            </h1>
            <p className="text-gray-100">
              Animals are losing their natural homes due to human activities.
            </p>
          </div>
        </section>

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
                      className="mt-6 px-6 py-2 bg-green-600 rounded-xl"
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
                        className="mt-6 px-6 py-2 bg-white/20 rounded-xl"
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
    </div>
  );
};

export default Threats;