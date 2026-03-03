import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Automatically start the 'window slide' animation after 2 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000); // Navigate after animation completes
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={isExiting ? { y: "-100vh" } : { y: 0 }}
      transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
      className="h-screen w-screen overflow-hidden relative bg-black flex items-center justify-center z-50"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/land.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay to make video 'dull' */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contrasting White Text */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl md:text-9xl font-black uppercase tracking-tighter text-white drop-shadow-2xl">
          <span className="block opacity-90">SAVE</span>
          <span className="block border-t-2 border-white/30 pt-4 mt-4">ANIMALS</span>
        </h1>
        <p className="mt-12 text-white/40 text-xs tracking-[0.8em] uppercase font-light animate-pulse">
          Conservation is Key
        </p>
      </div>
    </motion.div>
  );
};

export default Landing;
