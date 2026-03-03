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
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed right-0 top-0 z-50 h-screen w-full md:w-96 bg-slate-950 border-l border-slate-700"
          >
            <header className="px-6 py-4 flex justify-between border-b border-slate-700 sticky top-0 bg-slate-950">
              <h2 className="flex gap-2 items-center font-bold text-stone-200">
                <List size={18} /> Species
              </h2>
              <button onClick={onClose}>
                <X size={20} />
              </button>
            </header>

            <div className="h-[calc(100vh-64px)] overflow-y-auto">
              {sections.map((sec, sIdx) => (
                <div key={sec.id}>
                  <button
                    onClick={() => { onTypeClick(sIdx); onClose(); }}
                    className="w-full px-6 py-4 text-left uppercase text-sm font-semibold text-amber-300 hover:bg-white/5"
                  >
                    {sec.title}
                  </button>

                  {sec.species.map(item => {
                    const idx = species.findIndex(s => s.id === item.id);
                    const active = idx === currentIndex;

                    return (
                      <button
                        key={item.id}
                        onClick={() => { onSpeciesClick(idx); onClose(); }}
                        className={`block w-full px-10 py-2 text-sm text-left
                          ${active ? "text-amber-300 bg-amber-300/10" : "text-stone-300 hover:bg-white/10"}`}
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
