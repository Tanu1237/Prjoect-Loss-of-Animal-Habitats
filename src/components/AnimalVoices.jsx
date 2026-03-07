import { useState } from "react";

function AnimalVoices() {

  const animals = [
    { emoji: "🐘", name: "Elephant", text: "The paths my ancestors walked for centuries are gone. The forests are shrinking." },
    { emoji: "🐅", name: "Tiger", text: "The jungle was once endless. Now roads replace trees." },
    { emoji: "🦧", name: "Orangutan", text: "The tree where I was born no longer exists." },
    { emoji: "🐼", name: "Panda", text: "Our bamboo forests are disappearing." },
    { emoji: "🦒", name: "Giraffe", text: "Savannas are shrinking as humans expand." },
    { emoji: "🐺", name: "Wolf", text: "Our forests are broken into fragments." },
    { emoji: "🐨", name: "Koala", text: "Bushfires destroy the trees we depend on." },
    { emoji: "🦍", name: "Gorilla", text: "Our rainforest homes are disappearing." }
  ];

  const [index, setIndex] = useState(0);

  const nextAnimal = () => {
    if (index < animals.length - 3) {
      setIndex(index + 1);
    }
  };

  const prevAnimal = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="relative  backdrop-blur-md py-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-5xl  text-[#929296] md:text-4xl font-bold mb-16">
          Voices of the Wild
        </h2>
         <h2 className="text-3xl text-[#e94b45] font-bold text-center mb-20">
          If Animals Could Speak...
        </h2>

        {/* LEFT BUTTON */}
        <button
          onClick={prevAnimal}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-5xl text-white/70 hover:text-white transition"
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextAnimal}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-5xl text-white/70 hover:text-white transition"
        >
          ›
        </button>

        {/* ANIMAL CARDS */}
        <div className="grid md:grid-cols-3 gap-12">

          {animals.slice(index, index + 3).map((animal, i) => (

            <div
              key={i}
              className="group backdrop-blur-md bg-[#283405] p-8 rounded-2xl shadow-xl
              transition-all duration-500 cursor-pointer
              hover:-translate-y-3 hover:bg-white/60
              hover:shadow-2xl hover:ring-4 hover:ring-green-600/40"
            >

              <div className="text-5xl mb-4">
                {animal.emoji}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-green-100
              transition-colors duration-300 group-hover:text-green-700">
                {animal.name}
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed
              transition-colors duration-300 group-hover:text-black">
                "{animal.text}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default AnimalVoices;