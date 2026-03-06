import animalVideo from "../assets/animal.mp4";
import { motion } from "framer-motion";
import AnimalSpecies from "../components/AnimalSearch";
import AnimalGallery from "../components/AnimalGallery";   // ← new

function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden text-white">

      {/* BACKGROUND VIDEO */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        src={animalVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/55 -z-10"></div>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center h-screen text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
          Loss of Animal Habitat
        </h1>

        <p className="text-gray-300 max-w-2xl text-lg leading-relaxed mb-8">
          Habitat loss is one of the major reasons behind the extinction and
          endangerment of wildlife species. This platform aims to spread
          awareness and promote conservation efforts.
        </p>

        <AnimalSpecies />
      </motion.section>

      {/* INFORMATION SECTION */}
      <section
        id="info-section"
        className="relative bg-green-900/30 backdrop-blur-md py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Habitat Loss Matters
          </h2>

          <p className="text-gray-200 leading-relaxed text-lg">
            Forest clearing, urban expansion, agriculture, and climate change
            are rapidly destroying the natural homes of wildlife. When animals
            lose their habitats, they struggle to survive, reproduce, and
            maintain ecological balance.
          </p>

          {/* STATS GRID */}
          <div className="grid md:grid-cols-3 gap-12 px-7 py-16">

            <div className="group bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-xl
                            transition-all duration-500 cursor-pointer
                            hover:-translate-y-3 hover:bg-white/60
                            hover:shadow-2xl hover:ring-4 hover:ring-green-600/40">
              <h3 className="text-4xl font-bold mb-3 text-green-900
                             transition-colors duration-300 group-hover:text-green-700">
                1M+
              </h3>
              <p className="text-gray-900 transition-colors duration-300 group-hover:text-black">
                Species threatened with extinction globally.
              </p>
            </div>

            <div className="group bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-xl
                            transition-all duration-500 cursor-pointer
                            hover:-translate-y-3 hover:bg-white/60
                            hover:shadow-2xl hover:ring-4 hover:ring-emerald-600/40">
              <h3 className="text-4xl font-bold mb-3 text-green-900
                             transition-colors duration-300 group-hover:text-emerald-700">
                15B
              </h3>
              <p className="text-gray-900 transition-colors duration-300 group-hover:text-black">
                Trees cut down every year worldwide.
              </p>
            </div>

            <div className="group bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-xl
                            transition-all duration-500 cursor-pointer
                            hover:-translate-y-3 hover:bg-white/60
                            hover:shadow-2xl hover:ring-4 hover:ring-lime-600/40">
              <h3 className="text-4xl font-bold mb-3 text-green-900
                             transition-colors duration-300 group-hover:text-lime-700">
                75%
              </h3>
              <p className="text-gray-900 transition-colors duration-300 group-hover:text-black">
                Land surface altered significantly by humans.
              </p>
            </div>

          </div>
        </div>
      </section>

     

      {/* BE PART OF THE CHANGE */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br bg-black/40 backdrop-blur-md -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Change
          </h2>

          <p className="text-gray-200 max-w-2xl mx-auto mb-16 text-lg">
            Change does not begin with governments or corporations. It begins
            with awareness, responsibility, and everyday choices.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="group bg-gray-800/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 
                            transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl 
                            hover:bg-white/20 hover:border-green-300/40">
              <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-110">🌳</div>
              <h3 className="text-xl font-semibold mb-3">Protect Forests</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Support sustainable products and reduce demand for industries
                that destroy natural ecosystems.
              </p>
            </div>

            <div className="group bg-gray-800/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 
                            transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl 
                            hover:bg-white/20 hover:border-teal-300/40">
              <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-110">🌊</div>
              <h3 className="text-xl font-semibold mb-3">Preserve Water</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Protect rivers, lakes, and oceans from pollution that damages
                fragile wildlife habitats.
              </p>
            </div>

            <div className="group bg-gray-800/90 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 
                            transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl 
                            hover:bg-white/20 hover:border-amber-300/40">
              <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-110">🌎</div>
              <h3 className="text-xl font-semibold mb-3">Spread Awareness</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Educating others creates ripple effects that can influence
                communities and protect species.
              </p>
            </div>

          </div>
        </div>
      </section>

       {/* ✅ MASONRY GALLERY */}
      <AnimalGallery />

      {/* FOOTER */}
      <footer className="text-gray-200 bg-[#0f2a1d]/95 py-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-3">About Us</h2>
          <p className="text-gray-300 leading-relaxed text-m">
            Our mission is to raise awareness about the rapid loss of animal
            habitats across the globe. Through educational content and research,
            we aim to inspire responsible actions that support wildlife
            conservation and environmental protection.
          </p>
        </div>

        <div className="mt-8"></div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Contact Us</h2>
          <p className="text-gray-300 text-sm">Email: support@wildlife.org</p>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          © 2026 Wildlife Awareness | All Rights Reserved
        </p>
      </footer>

    </div>
  );
}

export default Home;