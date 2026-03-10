import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Leaf } from "lucide-react";

let _listeners = [];
export function setNavbarVisible(v) { _listeners.forEach((fn) => fn(v)); }
function subscribeNavbar(fn) {
  _listeners.push(fn);
  return () => { _listeners = _listeners.filter((l) => l !== fn); };
}

const SHOW_THRESHOLD = 80;

const NAV_LINKS = [
  { label: "Home",         path: "/home" },
  { label: "Extinct",      path: "/extinct" },
  { label: "Endangered",   path: "/endangered" },
  { label: "Threats",      path: "/threats" },
  { label: "Conservation", path: "/conservation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible,  setVisible]  = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY     = useRef(0);
  const hiddenAtY = useRef(null);
  const location  = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    lastY.current     = 0;
    hiddenAtY.current = null;
    setScrolled(false);
    setVisible(true);
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      if (y < 60) {
        hiddenAtY.current = null;
        setVisible(true);
      } else if (y > lastY.current + 6) {
        if (hiddenAtY.current === null) hiddenAtY.current = y;
        setVisible(false);
        setMenuOpen(false);
      } else if (hiddenAtY.current !== null && y < hiddenAtY.current - SHOW_THRESHOLD) {
        hiddenAtY.current = null;
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => subscribeNavbar((v) => { setVisible(v); if (!v) setMenuOpen(false); }), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&display=swap');
        .nb-gradient-text {
          font-family: 'Cinzel', Georgia, serif;
          font-weight: 800;
          background: linear-gradient(90deg, #c9a84c, #e8d87f, #8fad58);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nb-gold-bar {
          background: linear-gradient(90deg, #c9a84c, #e8d87f, #8fad58);
        }
        .nb-progress-bar {
          background: linear-gradient(90deg, #c9a84c, #e8d87f, #8fad58);
        }
      `}</style>

      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: visible ? 0 : -115, opacity: 1 }}
        transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
        className={[
          "fixed top-0 left-0 right-0 z-[200]",
          "backdrop-blur-2xl",
          scrolled
            ? "bg-gradient-to-br from-[rgba(4,9,4,0.94)] to-[rgba(8,16,8,0.91)] border-b border-[rgba(201,168,76,0.2)] shadow-[0_6px_50px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-br from-[rgba(4,9,4,0.52)] to-[rgba(8,16,8,0.40)] border-b border-white/5",
          "transition-[background,box-shadow,border-color] duration-400",
        ].join(" ")}
      >
        {/* Gold top accent */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] nb-gold-bar transition-opacity duration-400 ${scrolled ? "opacity-90" : "opacity-50"}`}
        />

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX, transformOrigin: "left" }}
          className="absolute bottom-0 left-0 right-0 h-[1.5px] nb-progress-bar opacity-65"
        />

        <div className="max-w-[1360px] mx-auto px-8 h-[70px] flex items-center justify-between gap-6">

          {/* Logo */}
          <NavLink
            to="/home"
            className="flex items-center gap-3 shrink-0 no-underline"
          >
            <div className="bg-green-300/15 p-2 rounded-full border border-green-300/20">
              <Leaf className="w-5 h-5 text-green-300" />
            </div>
            <div className="leading-none">
              <div className="nb-gradient-text text-[14px] tracking-[0.22em]">
                Loss of Animal Habitat
              </div>
              <div
                className="text-[10px] tracking-[0.14em] text-[rgba(175,210,135,0.5)] mt-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}
              >
                Wildlife Awareness.. WildSide..
              </div>
            </div>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <div key={link.path} className="relative flex flex-col items-center">
                  <NavLink
                    to={link.path}
                    className={[
                      "px-[15px] pb-[10px] pt-[7px] rounded-md",
                      "font-[Cinzel,Georgia,serif] font-bold text-[11px] tracking-[0.22em] uppercase no-underline",
                      "transition-[color,background] duration-[220ms] ease-in-out",
                      isActive
                        ? "text-[#c9a84c] bg-[rgba(201,168,76,0.09)]"
                        : "text-[rgba(196,187,166,0.58)] hover:text-[rgba(240,234,216,0.92)] hover:bg-[rgba(201,168,76,0.07)]",
                    ].join(" ")}
                  >
                    {link.label}
                  </NavLink>
                  {isActive && (
                    <motion.div
                      layoutId="nb-underline"
                      className="absolute bottom-[2px] w-5 h-[1.5px] nb-gold-bar rounded-sm"
                      transition={{ type: "spring", stiffness: 460, damping: 34 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
            className={[
              "md:hidden flex items-center justify-center",
              "border border-[rgba(201,168,76,0.28)] rounded-lg p-[8px_9px] cursor-pointer",
              "text-[#c9a84c] transition-[background] duration-200",
              menuOpen ? "bg-[rgba(201,168,76,0.12)]" : "bg-transparent",
            ].join(" ")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3"  y1="7"  x2="21" y2="7" />
                  <line x1="8"  y1="12" x2="21" y2="12" />
                  <line x1="13" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden bg-[rgba(3,7,3,0.98)] border-t border-[rgba(201,168,76,0.12)] md:hidden"
            >
              <div className="px-3.5 pt-2.5 pb-5">
                <div
                  className="text-[11px] tracking-[0.14em] text-[rgba(201,168,76,0.32)] px-[18px] pt-2 pb-1.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300 }}
                >
                  Navigate
                </div>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.055, ease: "easeOut" }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) => [
                        "block font-[Cinzel,Georgia,serif] font-bold text-[12px] tracking-[0.25em] uppercase no-underline",
                        "px-[18px] py-[13px] rounded-[10px]",
                        "border-l-2 transition-all duration-200",
                        isActive
                          ? "text-[#c9a84c] bg-[rgba(201,168,76,0.09)] border-l-[#c9a84c]"
                          : "text-[rgba(196,187,166,0.68)] border-l-transparent hover:text-[rgba(240,234,216,0.9)] hover:bg-[rgba(201,168,76,0.05)]",
                      ].join(" ")}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}