import { motion } from "framer-motion";
import { X } from "lucide-react";

const TYPE_COLORS = {
  Mammals:"#D97706",
  Birds:"#F97316",
  Reptiles:"#059669",
  Amphibian:"#0EA5E9",
  Fish:"#6366F1",
  Insects:"#EC4899",
};

export default function SlideUpInfo({ species, onClose }) {
  const accent = TYPE_COLORS[species.type] || "#D97706";

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 26 }}
        className="w-full max-h-[90vh] rounded-t-[2.5rem] overflow-y-auto shadow-2xl border-t-4"
        style={{ backgroundColor: "#F5F0E8", borderTopColor: accent }}
        onClick={e => e.stopPropagation()}
      >
        {/* Sticky header */}
        <header
          className="sticky top-0 px-6 py-6 border-b border-stone-200 flex items-start justify-between"
          style={{ backgroundColor: "#F5F0E8" }}
        >
          <div>
            <p
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: accent }}
            >
              {species.type}
            </p>
            <h2 className="text-3xl font-serif text-stone-800">{species.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="mt-1 transition-opacity hover:opacity-70"
            style={{ color: accent }}
          >
            <X size={24} />
          </button>
        </header>

        {/* Content */}
        <div className="px-6 py-12 max-w-4xl mx-auto space-y-12">
          {species.details.map((block, i) => (
            <section key={i}>
              {/* Section heading */}
              <h3
                className="text-2xl font-serif mb-4"
                style={{ color: accent }}
              >
                {block.title}
              </h3>

              {/* Body text */}
              <div className="text-stone-600 leading-relaxed space-y-4">
                {block.content.split(/\n\s*\n/).map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>

              {/* Image grid */}
              {block.images && (
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {block.images.map((img, k) => (
                    <img
                      key={k}
                      src={img}
                      className="h-40 w-full object-cover rounded-lg border"
                      style={{ borderColor: `${accent}40` }}
                    />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}