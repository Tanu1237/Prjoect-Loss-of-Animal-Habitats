import { motion, AnimatePresence } from "framer-motion";
import { X, List } from "lucide-react";

export default function SpeciesListSidebar({
  sections,
  species,
  currentIndex,
  onSpeciesClick,
  onTypeClick,
  isOpen,
  onClose,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: "rgba(3,6,5,0.85)" }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer — starts below the navbar (top-[70px]) */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed right-0 top-[70px] z-50 w-full md:w-96"
            style={{
              height: "calc(100vh - 70px)",   /* fill remaining viewport below navbar */
              background: "#060d09",
              borderLeft: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            {/* Gold top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg,#c9a84c,#e8d87f,#8fad58)" }}
            />

            {/* Sidebar header */}
            <header
              className="px-6 py-4 flex items-center justify-between sticky top-0 z-10"
              style={{
                background: "#060d09",
                borderBottom: "1px solid rgba(201,168,76,0.12)",
              }}
            >
              <h2
                className="flex items-center gap-2 font-bold"
                style={{ color: "#f0ead8" }}
              >
                <List size={18} style={{ color: "#c9a84c" }} /> Species
              </h2>
              <button
                onClick={onClose}
                className="transition-colors"
                style={{ color: "rgba(196,187,166,0.55)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f0ead8")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(196,187,166,0.55)")}
              >
                <X size={20} />
              </button>
            </header>

            {/* Scrollable species list — fills the rest of the drawer */}
            <div
              className="overflow-y-auto"
              style={{ height: "calc(100% - 57px)" }}   /* drawer height minus header */
            >
              {sections.map((sec, sIdx) => (
                <div key={sec.id}>
                  {/* Category button */}
                  <button
                    onClick={() => { onTypeClick(sIdx); onClose(); }}
                    className="w-full px-6 py-4 text-left uppercase text-sm font-semibold transition-colors"
                    style={{
                      color: "#c9a84c",
                      background: "transparent",
                      borderBottom: "1px solid rgba(201,168,76,0.06)",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,168,76,0.05)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    {sec.title}
                  </button>

                  {/* Species buttons */}
                  {sec.species.map(item => {
                    const idx    = species.findIndex(s => s.id === item.id);
                    const active = idx === currentIndex;

                    return (
                      <button
                        key={item.id}
                        onClick={() => { onSpeciesClick(idx); onClose(); }}
                        className="block w-full px-10 py-2 text-sm text-left transition-colors"
                        style={{
                          color:      active ? "#c9a84c" : "rgba(196,187,166,0.6)",
                          background: active ? "rgba(201,168,76,0.07)" : "transparent",
                          borderLeft: active ? "2px solid #c9a84c" : "2px solid transparent",
                        }}
                        onMouseEnter={e => {
                          if (!active) {
                            e.currentTarget.style.color      = "#f0ead8";
                            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                          }
                        }}
                        onMouseLeave={e => {
                          if (!active) {
                            e.currentTarget.style.color      = "rgba(196,187,166,0.6)";
                            e.currentTarget.style.background = "transparent";
                          }
                        }}
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}