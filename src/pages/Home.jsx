import animalVideo from "../assets/animal.mp4";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">

      {/* FIXED BACKGROUND VIDEO */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        src={animalVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center justify-center h-screen text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-6">
          Loss of Animal Habitat
        </h1>

        <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
          Habitat loss is one of the major reasons behind the extinction and
          endangerment of wildlife species. This platform aims to spread
          awareness and promote conservation efforts.
        </p>
      </motion.section>

      {/* BIG SCROLLABLE SPACE FOR FUTURE CONTENT */}
      <section className="h-[900px]"></section>

      {/* FOOTER SECTION */}
<footer className="text-gray-200  bg-[#0f2a1d]/95  py-12 px-6 text-center">

  {/* ABOUT US */}
  <div className="max-w-2xl mx-auto">
    <h2 className="text-xl font-semibold text-white mb-3">
      About Us
    </h2>

    <p className="text-gray-300 leading-relaxed text-m">
      Our mission is to raise awareness about the rapid loss of animal habitats 
      across the globe. Through educational content and research, we aim to 
      inspire responsible actions that support wildlife conservation and 
      environmental protection.
    </p>
  </div>

  {/* SMALL SPACE */}
  <div className="mt-8"></div>

  {/* CONTACT US */}
  <div>
    <h2 className="text-xl font-semibold text-white mb-2">
      Contact Us
    </h2>

    <p className="text-gray-300 text-sm">
      Email: support@wildlife.org
    </p>
  </div>

  {/* COPYRIGHT */}
  <p className="mt-6 text-xs text-gray-400">
    © 2026 Wildlife Awareness | All Rights Reserved
  </p>

</footer>
    </div>
  );
}

export default Home;