import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GOLD, G, bg, cream, dim } from "../data/ConservationData.js";

// ── Shared animation preset ──
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" },
};

// ── Shared primitives ──────────────────────────────────────

export const GL = ({ center }) => (
  <div
    className={`h-px w-16 my-3 ${center ? "mx-auto" : "mx-0"}`}
    style={{ background: G }}
  />
);

export const Tag = ({ children, color }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs uppercase"
    style={{
      color: color || GOLD,
      background: `${color || GOLD}12`,
      border: `1px solid ${color || GOLD}33`,
      fontFamily: "Courier New,monospace",
      letterSpacing: "0.2em",
    }}
  >
    {children}
  </span>
);

export const SectionHeader = ({ label, title, sub, center }) => (
  <motion.div
    {...fadeUp}
    className={`mb-14 ${center ? "text-center" : "text-left"}`}
  >
    <p
      className="text-xs uppercase mb-3"
      style={{ color: GOLD, fontFamily: "Courier New,monospace", letterSpacing: "0.5em" }}
    >
      {label}
    </p>
    <GL center={center} />
    <h2
      className="font-normal"
      style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", color: cream, letterSpacing: "0.02em" }}
    >
      {title}
    </h2>
    {sub && (
      <p
        className={`mt-4 text-lg leading-relaxed ${center ? "mx-auto" : ""}`}
        style={{ color: dim, maxWidth: "40rem", opacity: 0.75, lineHeight: 1.8 }}
      >
        {sub}
      </p>
    )}
  </motion.div>
);

// ── Body block renderer ────────────────────────────────────

function BodyBlocks({ body }) {
  return (
    <div className="flex flex-col gap-7">
      {body.map((block, i) => {

        if (block.type === "intro") return (
          <p
            key={i}
            className="pl-5 m-0"
            style={{ color: cream, fontSize: "1.1rem", lineHeight: 1.85, opacity: 0.92, borderLeft: `3px solid ${GOLD}` }}
          >
            {block.text}
          </p>
        );

        if (block.type === "paragraph") return (
          <p
            key={i}
            className="m-0"
            style={{ color: dim, fontSize: "1.05rem", lineHeight: 1.9, opacity: 0.82 }}
          >
            {block.text}
          </p>
        );

        if (block.type === "subheading") return (
          <div key={i}>
            <div className="h-px w-9 mb-3" style={{ background: G }} />
            <h3 className="text-2xl font-normal m-0" style={{ color: cream }}>{block.text}</h3>
          </div>
        );

        if (block.type === "pullquote") return (
          <motion.div
            key={i}
            {...fadeUp}
            className="relative px-9 py-8 rounded-2xl"
            style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.18)" }}
          >
            <span className="absolute top-2 left-6 leading-none" style={{ fontSize: "4rem", color: `${GOLD}20`, fontFamily: "Georgia,serif" }}>"</span>
            <p className="italic pt-2 mb-4" style={{ color: cream, fontSize: "1.2rem", lineHeight: 1.7, opacity: 0.9 }}>{block.text}</p>
            <div className="h-px w-10 mb-2" style={{ background: G }} />
            <p className="m-0 uppercase" style={{ color: GOLD, fontSize: "0.72rem", letterSpacing: "0.2em", fontFamily: "Courier New,monospace" }}>
              {block.attribution}
            </p>
          </motion.div>
        );

        if (block.type === "stats") return (
          <div key={i} className="grid grid-cols-4 gap-4">
            {block.items.map((s, j) => (
              <motion.div
                key={j}
                {...fadeUp}
                transition={{ delay: j * 0.08, duration: 0.5 }}
                className="py-5 px-3 text-center rounded-xl"
                style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.14)" }}
              >
                <p className="mb-1" style={{ fontSize: "1.8rem", color: GOLD, fontFamily: "'Cinzel',serif" }}>{s.val}</p>
                <div className="h-px w-4 mx-auto my-1" style={{ background: G }} />
                <p className="m-0 leading-snug" style={{ color: dim, fontSize: "0.72rem", opacity: 0.65 }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        );

        if (block.type === "callout") return (
          <motion.div
            key={i}
            {...fadeUp}
            className="relative flex gap-5 items-start p-7 rounded-2xl overflow-hidden"
            style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: G }} />
            <span className="text-3xl shrink-0 mt-0.5">{block.icon}</span>
            <div>
              <p className="m-0 mb-2 uppercase" style={{ color: GOLD, fontSize: "0.62rem", letterSpacing: "0.4em", fontFamily: "Courier New,monospace" }}>
                How You Can Help
              </p>
              <p className="m-0" style={{ color: cream, fontSize: "1rem", lineHeight: 1.75, opacity: 0.88 }}>{block.text}</p>
            </div>
          </motion.div>
        );

        return null;
      })}
    </div>
  );
}

// ── News Article Modal ─────────────────────────────────────

export function NewsModal({ article, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[400] flex items-center justify-center p-4 backdrop-blur-2xl"
      style={{ background: "rgba(3,6,5,0.93)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        exit={{    opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-y-auto rounded-3xl"
        style={{ background: bg.card, border: "1px solid rgba(201,168,76,0.18)", maxHeight: "92vh" }}
      >
        {/* Gold top bar */}
        <div className="h-0.5 rounded-t-3xl sticky top-0 z-10" style={{ background: G }} />

        {/* Hero image */}
        <div className="relative overflow-hidden" style={{ height: "22rem" }}>
          <img src={article.heroImg} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(12,20,16,1) 0%,rgba(12,20,16,0.4) 55%,transparent 100%)" }} />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md z-10 text-lg transition-colors duration-200"
            style={{ background: "rgba(6,10,7,0.85)", border: "1px solid rgba(201,168,76,0.25)", color: cream }}
            onMouseEnter={e => e.currentTarget.style.borderColor = GOLD}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"}
          >
            ×
          </button>

          {/* Tag + date */}
          <div className="absolute top-5 left-6 flex items-center gap-2">
            <Tag>{article.tag}</Tag>
            <span style={{ color: "rgba(201,168,76,0.5)", fontSize: "0.72rem", fontFamily: "Courier New,monospace" }}>{article.date}</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-12 pt-10 pb-12">
          <h2 className="font-normal mb-6 leading-tight" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", color: cream }}>
            {article.title}
          </h2>

          {/* Author row */}
          <div className="flex items-center gap-5 pb-6 mb-8" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-lg shrink-0"
              style={{ background: "linear-gradient(135deg,rgba(201,168,76,0.2),rgba(201,168,76,0.05))", border: "1px solid rgba(201,168,76,0.2)" }}
            >
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="m-0" style={{ color: cream, fontSize: "0.92rem" }}>{article.author}</p>
              <p className="m-0" style={{ color: dim, fontSize: "0.78rem", opacity: 0.6 }}>{article.authorRole}</p>
            </div>
            <div className="ml-auto" style={{ color: "rgba(201,168,76,0.45)", fontSize: "0.75rem", fontFamily: "Courier New,monospace" }}>
              ⏱ {article.readTime}
            </div>
          </div>

          <BodyBlocks body={article.body} />

          {/* Footer */}
          <div className="mt-10 pt-6 flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
            <div className="flex gap-2">
              <Tag>{article.tag}</Tag>
              <Tag color="#a8c9ad">{article.readTime}</Tag>
            </div>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full uppercase cursor-pointer transition-all duration-200"
              style={{ border: "1px solid rgba(201,168,76,0.25)", color: dim, background: "transparent", fontSize: "0.78rem", letterSpacing: "0.15em", fontFamily: "Courier New,monospace" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.color = dim; }}
            >
              × Close Article
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Focus (image gallery) Modal ────────────────────────────

export function FocusModal({ focusKey, modalsData, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  const md = modalsData[focusKey];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!md) return null;

  const prev = () => setImgIdx(p => (p - 1 + md.imgs.length) % md.imgs.length);
  const next = () => setImgIdx(p => (p + 1) % md.imgs.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-2xl"
      style={{ background: "rgba(3,6,5,0.92)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0,  scale: 1 }}
        exit={{    opacity: 0, y: 12, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{ background: bg.card, border: "1px solid rgba(201,168,76,0.2)" }}
      >
        {/* Gold top bar */}
        <div className="h-0.5 rounded-t-2xl" style={{ background: G }} />

        {/* Image carousel */}
        <div className="relative overflow-hidden" style={{ height: "20rem" }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={md.imgs[imgIdx]}
              alt={md.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top,${bg.card},transparent 50%)` }} />

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
            style={{ background: "rgba(3,6,5,0.75)", border: "1px solid rgba(201,168,76,0.2)", color: cream }}
            onMouseEnter={e => e.currentTarget.style.borderColor = GOLD}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
            style={{ background: "rgba(3,6,5,0.75)", border: "1px solid rgba(201,168,76,0.2)", color: cream }}
            onMouseEnter={e => e.currentTarget.style.borderColor = GOLD}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
          >
            ›
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 text-lg"
            style={{ background: "rgba(3,6,5,0.75)", border: "1px solid rgba(201,168,76,0.2)", color: cream }}
            onMouseEnter={e => e.currentTarget.style.borderColor = GOLD}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"}
          >
            ×
          </button>

          <h2 className="absolute bottom-6 left-8 text-4xl font-normal" style={{ color: cream }}>{md.title}</h2>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Dot indicators */}
          <div className="flex gap-1 justify-center mb-6">
            {md.imgs.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setImgIdx(i)}
                animate={{
                  width: i === imgIdx ? 26 : 6,
                  backgroundColor: i === imgIdx ? GOLD : "rgba(201,168,76,0.2)",
                }}
                transition={{ duration: 0.25 }}
                style={{ height: 2, border: "none", borderRadius: 4, cursor: "pointer" }}
              />
            ))}
          </div>

          <p className="leading-loose mb-6" style={{ color: dim, fontSize: "1.05rem", lineHeight: 1.85 }}>
            {md.desc}
          </p>

          {/* Facts grid */}
          <div className="grid grid-cols-2 gap-3">
            {md.facts.map((f, i) => (
              <div
                key={i}
                className="flex gap-2 items-start px-4 py-3 rounded-xl"
                style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <span style={{ color: GOLD, marginTop: 1 }}>✦</span>
                <p className="m-0" style={{ color: dim, fontSize: "0.9rem" }}>{f}</p>
              </div>
            ))}
          </div>

          {/* Close footer */}
          <div className="mt-8 text-right">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full uppercase cursor-pointer transition-all duration-200"
              style={{ border: "1px solid rgba(201,168,76,0.25)", color: dim, background: "transparent", fontSize: "0.78rem", letterSpacing: "0.15em", fontFamily: "Courier New,monospace" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.color = dim; }}
            >
              × Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}