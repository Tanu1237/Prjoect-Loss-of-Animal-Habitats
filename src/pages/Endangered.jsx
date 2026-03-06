import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import endangeredData from "../data/endangeredData";

const Endangered = () => {

  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = selectedAnimal ? "hidden" : "auto";
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedAnimal]);

  // ✅ OPEN ANIMAL FROM SEARCH (/endangered#tiger)
  useEffect(() => {

    const hash = location.hash.replace("#", "");

    if (hash) {

      const found = endangeredData.find(
        a => a.id?.toLowerCase() === hash.toLowerCase()
      );

      if (found) {
        setSelectedAnimal(found);

        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 300);
      }

    }

  }, [location]);

  return (
    <div className="fixed inset-0 text-white overflow-auto">

      {/* BACKGROUND VIDEO */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/rainforest.mp4" type="video/mp4" />
      </video>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-heading">
          Endangered Animals
        </h1>

        <p className="max-w-3xl text-base md:text-lg hero-text">
          Endangered animals face a high risk of extinction due to habitat loss,
          climate change, illegal wildlife trade, and human activities.
        </p>

      </section>

      {/* ANIMAL CARDS */}
      <section className="px-6 md:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">

          {endangeredData.map((animal) => (

            <div
              id={animal.id}   // ⭐ important for /endangered#tiger
              key={animal.id}
              onClick={() => setSelectedAnimal(animal)}
              className="relative rounded-xl overflow-hidden cursor-pointer h-[380px]
              transition-transform duration-300 hover:scale-[1.03] float-card"
            >

              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">

                <h2 className="text-2xl font-bold">
                  {animal.name}
                </h2>

                <p className="text-[#bbf7d0] mt-2">
                  To know more
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* MODAL */}
      {selectedAnimal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSelectedAnimal(null)}
          />

          <div className="relative bg-black rounded-xl max-w-4xl w-full h-[90vh] shadow-2xl z-50 overflow-hidden">

            <button
              onClick={() => setSelectedAnimal(null)}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>

            <div className="h-full overflow-y-auto hide-scrollbar">

              <img
                src={selectedAnimal.image}
                alt={selectedAnimal.name}
                className="w-full h-[420px] object-cover"
              />

              <div className="p-6">

                <h2 className="text-3xl font-bold mb-4">
                  {selectedAnimal.name}
                </h2>

                <p className="mb-6 whitespace-pre-line">
                  {selectedAnimal.description}
                </p>

                <p className="mb-2">
                  <span className="font-semibold">Habitat:</span>{" "}
                  {selectedAnimal.habitat}
                </p>

                <p>
                  <span className="font-semibold">Threats:</span>{" "}
                  {selectedAnimal.threat}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* ANIMATIONS */}
      <style>
        {`

          .hero-heading {
            opacity: 0;
            transform: translateX(-80px);
            animation: slideFromLeft 1s ease-out forwards;
          }

          .hero-text {
            opacity: 0;
            transform: translateX(-80px);
            animation: slideFromLeft 1s ease-out forwards;
            animation-delay: 0.4s;
          }

          @keyframes slideFromLeft {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .float-card {
            animation: floatUpDown 3s ease-in-out infinite;
          }

          @keyframes floatUpDown {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

        `}
      </style>

    </div>
  );
};

export default Endangered;