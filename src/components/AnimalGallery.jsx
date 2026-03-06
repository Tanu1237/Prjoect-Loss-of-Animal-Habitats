import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import extinctData from "../data/ExtinctData";
import endangeredData from "../data/endangeredData";

// ── Merge & assign column heights for masonry feel ──────────
const HEIGHTS = ["h-48", "h-64", "h-56", "h-72", "h-44", "h-60", "h-80", "h-52"];

const allAnimals = [
  ...extinctData.map((a) => ({
    id: a.id,
    name: a.title,
    image: a.image,
    status: "Extinct",
    page: "extinct",
    type: a.type,
  })),
  ...endangeredData.map((a, i) => ({
    id: a.id || `endangered-${i}`,
    name: a.name,
    image: a.image,
    status: "Endangered",
    page: "endangered",
    type: a.habitat || "",
  })),
];

// Shuffle once, deterministically
function seededShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = (i * 1103515245 + 12345) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const STATUS_BADGE = {
  Extinct:    "bg-red-800/80 text-red-100",
  Endangered: "bg-amber-700/80 text-amber-100",
};

const STATUS_ICON = {
  Extinct:    "💀",
  Endangered: "🟠",
};

// ── Single tile ───────────────────────────────────────────────
function MasonryTile({ animal, heightClass, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.06 }}
      onClick={() => navigate(`/${animal.page}#${animal.id}`)}
      className={`relative ${heightClass} rounded-2xl overflow-hidden cursor-pointer group mb-4`}
    >
      {/* Image */}
      <img
        src={animal.image}
        alt={animal.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => { e.target.src = "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg"; }}
      />

      {/* Default dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Status badge — always visible */}
      <div className={`absolute top-3 left-3 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${STATUS_BADGE[animal.status]}`}>
        <span>{STATUS_ICON[animal.status]}</span>
        <span>{animal.status}</span>
      </div>

      {/* Name — slides up on hover */}
      <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-semibold text-sm leading-tight drop-shadow-lg">
          {animal.name}
        </h3>
        <p className="text-green-300 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          View details →
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Gallery ──────────────────────────────────────────────
export default function AnimalGallery() {
  const animals = useMemo(() => seededShuffle(allAnimals), []);

  // Split into 3 columns for masonry
  const cols = [[], [], []];
  animals.forEach((a, i) => cols[i % 3].push({ ...a, heightClass: HEIGHTS[i % HEIGHTS.length] }));

  return (
    <section className="relative py-24 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-green-400 uppercase tracking-widest text-xs font-semibold mb-3">
            Wildlife Archive
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Faces of the Lost &amp; Vulnerable
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every image is a species. Click any to learn their story.
          </p>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <span className="flex items-center gap-2 text-red-300">
              <span className="w-2.5 h-2.5 rounded-full bg-red-700 inline-block" />
              Extinct ({extinctData.length})
            </span>
            <span className="flex items-center gap-2 text-amber-300">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" />
              Endangered ({endangeredData.length})
            </span>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-start">
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col">
              {col.map((animal, ti) => (
                <MasonryTile
                  key={`${animal.page}-${animal.id}`}
                  animal={animal}
                  heightClass={animal.heightClass}
                  index={ci * 20 + ti}
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}