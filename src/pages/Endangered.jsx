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

  // OPEN ANIMAL FROM SEARCH (/endangered#tiger)
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const found = endangeredData.find(
        (a) => a.id?.toLowerCase() === hash.toLowerCase()
      );
      if (found) {
        setTimeout(() => {
          setSelectedAnimal(found);
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="fixed inset-0 text-white overflow-auto">

      {/* BACKGROUND VIDEO WITH FADE */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 filter brightness-50"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/rainforest.mp4" type="video/mp4" />
      </video>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 hero-heading">
          Endangered Animals
        </h1>
        <p className="max-w-3xl text-base md:text-lg hero-text mb-6">
          Discover, Learn, and Protect Our Planet’s Most Vulnerable Creatures
        </p>

        {/* QUICK FACTS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mt-4">
          <div className="bg-black/50 px-4 py-2 rounded-lg">
            🐾 <span className="font-semibold">8,400+</span> species endangered
          </div>
          <div className="bg-black/50 px-4 py-2 rounded-lg">
            🌎 <span className="font-semibold">120+</span> countries involved
          </div>
          <div className="bg-black/50 px-4 py-2 rounded-lg">
            🕰 <span className="font-semibold">Every 20 mins</span> a species disappears
          </div>
        </div>
      </section>

      {/* CAUSES OF ENDANGERMENT */}
      <section className="px-6 md:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Animals Are Endangered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-green-800/70 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            🏞
            <h3 className="font-semibold mt-2">Habitat Loss</h3>
            <p className="mt-1 text-sm">Deforestation and urbanization destroy homes</p>
          </div>
          <div className="bg-green-800/70 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            🌡
            <h3 className="font-semibold mt-2">Climate Change</h3>
            <p className="mt-1 text-sm">Rising temperatures and extreme weather threaten survival</p>
          </div>
          <div className="bg-green-800/70 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            ⚔
            <h3 className="font-semibold mt-2">Poaching</h3>
            <p className="mt-1 text-sm">Illegal hunting for fur, horns, and trophies</p>
          </div>
          <div className="bg-green-800/70 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            🏗
            <h3 className="font-semibold mt-2">Human Activities</h3>
            <p className="mt-1 text-sm">Pollution, roads, mining, and urban sprawl</p>
          </div>
        </div>
      </section>

      {/* ANIMAL CARDS */}
      <section className="px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {endangeredData.map((animal) => (
            <div
              id={animal.id}
              key={animal.id}
              onClick={() => setSelectedAnimal(animal)}
              className="relative rounded-xl overflow-hidden cursor-pointer h-[380px] group
              transition duration-500 hover:scale-[1.05] hover:shadow-2xl" 
            >
              <img src={animal.image} alt={animal.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition duration-500 group-hover:from-black/90">
               <h2 className="text-3xl font-bold tracking-wide transform transition duration-500 group-hover:translate-y-[-4px]">
  {animal.name}
</h2>
            <p className="text-green-300 mt-2 opacity-0 group-hover:opacity-100 transition duration-500">
  Click to explore →
</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONSERVATION SECTION (AFTER CARDS) */}
      <section className="px-6 md:px-12 py-16 bg-black/70">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          How You Can Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-green-900/60 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            🌱<h3 className="font-semibold mt-2">Plant Trees</h3>
            <p className="mt-1 text-sm">Restore habitats for local wildlife</p>
          </div>
          <div className="bg-green-900/60 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            💰<h3 className="font-semibold mt-2">Donate</h3>
            <p className="mt-1 text-sm">Support wildlife funds & organizations</p>
          </div>
          <div className="bg-green-900/60 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            🐾<h3 className="font-semibold mt-2">Volunteer</h3>
            <p className="mt-1 text-sm">Help at local reserves and conservation projects</p>
          </div>
          <div className="bg-green-900/60 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            🚫<h3 className="font-semibold mt-2">Reduce Waste</h3>
            <p className="mt-1 text-sm">Limit plastic and protect ecosystems</p>
          </div>
        </div>

        {/* DID YOU KNOW */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-16 mb-8">
          Did You Know?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-black/50 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            - Over <span className="font-semibold">25,000 species</span> are at risk today
          </div>
          <div className="bg-black/50 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            - Tigers lost <span className="font-semibold">95%</span> of their population in last century
          </div>
          <div className="bg-black/50 info-card p-6 rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-[-4px]">
            - Protecting one habitat can save <span className="font-semibold">hundreds of species</span>
          </div>
        </div>
      </section>

      
     {/* MODAL */}
{selectedAnimal && (
  <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 overflow-y-auto scrollbar-none scroll-smooth">

    <div
      className="fixed inset-0 bg-black/70"
      onClick={() => setSelectedAnimal(null)}
    />
<div className="relative bg-black rounded-xl max-w-4xl w-full shadow-2xl z-50 backdrop-blur-sm">

      <button
        onClick={() => setSelectedAnimal(null)}
        className="absolute top-4 right-4 text-2xl"
      >
        ✕
      </button>

      <div className="space-y-8 pb-10">

        <img
          src={selectedAnimal.image}
          alt={selectedAnimal.name}
          className="w-full h-[420px] object-cover rounded-t-xl"
        />

        <div className="px-8 space-y-8">

          <h2 className="text-3xl font-bold">
            {selectedAnimal.name}
          </h2>
          <p className="text-gray-200 leading-loose whitespace-pre-line"></p>
          <p className="text-gray-200 leading-loose whitespace-pre-line">
            {selectedAnimal.description}
          </p>

          <div className="space-y-6 pt-6 border-t border-gray-700">

            <p className="text-lg">
              <span className="font-semibold text-green-400">
                Habitat:
              </span>{" "}
              <span className="text-gray-300">
                {selectedAnimal.habitat}
              </span>
            </p>

            <p className="text-lg">
              <span className="font-semibold text-red-400">
                Threats:
              </span>{" "}
              <span className="text-gray-300">
                {selectedAnimal.threat}
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
)}

      {/* ANIMATIONS & STYLES */}
      <style>
        {`
          .hero-heading { opacity: 0; transform: translateX(-80px); animation: slideFromLeft 1s ease-out forwards; }
          .hero-text { opacity: 0; transform: translateX(-80px); animation: slideFromLeft 1s ease-out forwards; animation-delay: 0.4s; }
          @keyframes slideFromLeft { to { opacity: 1; transform: translateX(0); } }

          .float-card, .info-card { animation: floatUpDown 4s ease-in-out infinite; }
          @keyframes floatUpDown { 0% { transform: translateY(0px); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0px); } }

          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
};

export default Endangered;