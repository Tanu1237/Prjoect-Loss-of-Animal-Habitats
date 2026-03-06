import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GOLD, G, bg, cream, dim } from "../data/ConservationData.js";

/* ── Shared primitives ── */
export const GL = ({ center }) => (
  <div style={{ height:1, width:60, background:G, margin: center ? "0.75rem auto" : "0.75rem 0" }} />
);

export const Tag = ({ children, color }) => (
  <span style={{ padding:"0.3rem 0.85rem", borderRadius:"2rem", fontSize:"0.65rem", letterSpacing:"0.2em", textTransform:"uppercase", color:color||GOLD, background:`${color||GOLD}12`, border:`1px solid ${color||GOLD}33`, fontFamily:"Courier New,monospace" }}>{children}</span>
);

export const SectionHeader = ({ label, title, sub, center }) => (
  <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:"3.5rem", textAlign: center ? "center" : "left" }}>
    <p style={{ color:GOLD, fontSize:"0.65rem", letterSpacing:"0.5em", textTransform:"uppercase", fontFamily:"Courier New,monospace", marginBottom:"0.75rem" }}>{label}</p>
    <GL center={center} />
    <h2 style={{ fontSize:"clamp(2.2rem,4vw,3.4rem)", color:cream, fontWeight:400, letterSpacing:"0.02em" }}>{title}</h2>
    {sub && <p style={{ color:dim, marginTop:"1rem", maxWidth:"40rem", marginLeft:center?"auto":0, marginRight:center?"auto":0, lineHeight:1.8, opacity:0.75, fontSize:"1.05rem" }}>{sub}</p>}
  </motion.div>
);

/* ── Body block renderer (shared by both modals) ── */
function BodyBlocks({ body }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"1.75rem" }}>
      {body.map((block, i) => {
        if (block.type === "intro") return (
          <p key={i} style={{ color:cream, fontSize:"1.12rem", lineHeight:1.85, opacity:0.92, borderLeft:`3px solid ${GOLD}`, paddingLeft:"1.25rem", margin:0 }}>{block.text}</p>
        );
        if (block.type === "paragraph") return (
          <p key={i} style={{ color:dim, fontSize:"1.05rem", lineHeight:1.9, opacity:0.82, margin:0 }}>{block.text}</p>
        );
        if (block.type === "subheading") return (
          <div key={i}>
            <div style={{ height:1, width:36, background:G, marginBottom:"0.75rem" }} />
            <h3 style={{ fontSize:"1.35rem", fontWeight:400, color:cream, margin:0 }}>{block.text}</h3>
          </div>
        );
        if (block.type === "pullquote") return (
          <motion.div key={i} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            style={{ padding:"2rem 2.25rem", borderRadius:"1rem", background:"rgba(201,168,76,0.05)", border:"1px solid rgba(201,168,76,0.18)", position:"relative" }}>
            <span style={{ fontSize:"4rem", color:`${GOLD}20`, position:"absolute", top:"0.5rem", left:"1.5rem", fontFamily:"Georgia,serif", lineHeight:1 }}>"</span>
            <p style={{ color:cream, fontSize:"1.2rem", fontStyle:"italic", lineHeight:1.7, margin:"0 0 1rem", paddingTop:"0.5rem", opacity:0.9 }}>{block.text}</p>
            <div style={{ height:1, width:40, background:G, marginBottom:"0.6rem" }} />
            <p style={{ color:GOLD, fontSize:"0.72rem", letterSpacing:"0.2em", textTransform:"uppercase", fontFamily:"Courier New,monospace", margin:0 }}>{block.attribution}</p>
          </motion.div>
        );
        if (block.type === "stats") return (
          <div key={i} style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem" }}>
            {block.items.map((s, j) => (
              <motion.div key={j} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:j*0.08 }}
                style={{ padding:"1.25rem 0.75rem", textAlign:"center", borderRadius:"0.75rem", background:"rgba(201,168,76,0.04)", border:"1px solid rgba(201,168,76,0.14)" }}>
                <p style={{ fontSize:"1.8rem", color:GOLD, fontFamily:"'Cinzel',serif", margin:"0 0 0.25rem" }}>{s.val}</p>
                <div style={{ height:1, width:18, background:G, margin:"0.3rem auto" }} />
                <p style={{ color:dim, fontSize:"0.72rem", opacity:0.65, margin:0, lineHeight:1.5 }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        );
        if (block.type === "callout") return (
          <motion.div key={i} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ display:"flex", gap:"1.25rem", alignItems:"flex-start", padding:"1.75rem", borderRadius:"1rem", background:"rgba(201,168,76,0.07)", border:"1px solid rgba(201,168,76,0.25)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:G }} />
            <span style={{ fontSize:"2rem", flexShrink:0, marginTop:"0.1rem" }}>{block.icon}</span>
            <div>
              <p style={{ color:GOLD, fontSize:"0.62rem", letterSpacing:"0.4em", textTransform:"uppercase", fontFamily:"Courier New,monospace", margin:"0 0 0.5rem" }}>How You Can Help</p>
              <p style={{ color:cream, fontSize:"1rem", lineHeight:1.75, margin:0, opacity:0.88 }}>{block.text}</p>
            </div>
          </motion.div>
        );
        return null;
      })}
    </div>
  );
}

/* ── News Article Modal ── */
export function NewsModal({ article, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      style={{ position:"fixed", inset:0, zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem", background:"rgba(3,6,5,0.95)", backdropFilter:"blur(28px)" }}
      onClick={onClose}>
      <motion.div initial={{ scale:0.9, y:40, opacity:0 }} animate={{ scale:1, y:0, opacity:1 }} exit={{ scale:0.9, y:40, opacity:0 }}
        transition={{ type:"spring", stiffness:260, damping:26 }}
        onClick={e => e.stopPropagation()}
        style={{ background:bg.card, border:"1px solid rgba(201,168,76,0.18)", borderRadius:"1.5rem", maxWidth:"52rem", width:"100%", maxHeight:"92vh", overflowY:"auto", position:"relative" }}>
        <div style={{ height:2, background:G, borderRadius:"1.5rem 1.5rem 0 0", position:"sticky", top:0, zIndex:10 }} />

        {/* Hero */}
        <div style={{ position:"relative", height:"22rem", overflow:"hidden" }}>
          <img src={article.heroImg} alt={article.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(12,20,16,1) 0%,rgba(12,20,16,0.4) 55%,transparent 100%)" }} />
          <button onClick={onClose} style={{ position:"absolute", top:"1.25rem", right:"1.25rem", width:"2.4rem", height:"2.4rem", borderRadius:"50%", background:"rgba(6,10,7,0.85)", border:"1px solid rgba(201,168,76,0.25)", cursor:"pointer", color:cream, display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(8px)", zIndex:5 }}>
            <X size={15} />
          </button>
          <div style={{ position:"absolute", top:"1.25rem", left:"1.5rem", display:"flex", gap:"0.5rem", alignItems:"center" }}>
            <Tag>{article.tag}</Tag>
            <span style={{ color:"rgba(201,168,76,0.5)", fontSize:"0.72rem", fontFamily:"Courier New,monospace" }}>{article.date}</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding:"2.5rem 3rem 3rem" }}>
          <h2 style={{ fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400, color:cream, lineHeight:1.2, marginBottom:"1.5rem" }}>{article.title}</h2>
          <div style={{ display:"flex", alignItems:"center", gap:"1.25rem", paddingBottom:"1.5rem", marginBottom:"2rem", borderBottom:"1px solid rgba(201,168,76,0.1)" }}>
            <div style={{ width:"2.75rem", height:"2.75rem", borderRadius:"50%", background:"linear-gradient(135deg,rgba(201,168,76,0.2),rgba(201,168,76,0.05))", border:"1px solid rgba(201,168,76,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem", flexShrink:0 }}>
              {article.author.charAt(0)}
            </div>
            <div>
              <p style={{ color:cream, fontSize:"0.92rem", margin:0 }}>{article.author}</p>
              <p style={{ color:dim, fontSize:"0.78rem", opacity:0.6, margin:0 }}>{article.authorRole}</p>
            </div>
            <div style={{ marginLeft:"auto", color:"rgba(201,168,76,0.45)", fontSize:"0.75rem", fontFamily:"Courier New,monospace" }}>⏱ {article.readTime}</div>
          </div>

          <BodyBlocks body={article.body} />

          <div style={{ marginTop:"2.5rem", paddingTop:"1.5rem", borderTop:"1px solid rgba(201,168,76,0.1)", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
            <div style={{ display:"flex", gap:"0.5rem" }}>
              <Tag>{article.tag}</Tag>
              <Tag color="#a8c9ad">{article.readTime}</Tag>
            </div>
            <button onClick={onClose}
              style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.65rem 1.6rem", border:"1px solid rgba(201,168,76,0.25)", color:dim, borderRadius:"3rem", fontSize:"0.78rem", letterSpacing:"0.15em", textTransform:"uppercase", background:"transparent", cursor:"pointer", fontFamily:"Courier New,monospace", transition:"all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.color = dim; }}>
              <X size={12} /> Close Article
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Focus (image gallery) Modal ── */
export function FocusModal({ focusKey, modalsData, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);
  const md = modalsData[focusKey];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!md) return null;

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      style={{ position:"fixed", inset:0, zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem", background:"rgba(3,6,5,0.92)", backdropFilter:"blur(24px)" }}
      onClick={onClose}>
      <motion.div initial={{ scale:0.88, y:30 }} animate={{ scale:1, y:0 }} exit={{ scale:0.88 }} transition={{ type:"spring", stiffness:280, damping:28 }}
        onClick={e => e.stopPropagation()}
        style={{ background:bg.card, border:"1px solid rgba(201,168,76,0.2)", borderRadius:"1.25rem", maxWidth:"50rem", width:"100%", maxHeight:"90vh", overflowY:"auto" }}>
        <div style={{ height:2, background:G, borderRadius:"1.25rem 1.25rem 0 0" }} />
        <div style={{ position:"relative", height:"20rem", overflow:"hidden" }}>
          <AnimatePresence mode="wait">
            <motion.img key={imgIdx} src={md.imgs[imgIdx]} alt={md.title} style={{ width:"100%", height:"100%", objectFit:"cover" }}
              initial={{ opacity:0, scale:1.04 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }} transition={{ duration:0.4 }} />
          </AnimatePresence>
          <div style={{ position:"absolute", inset:0, background:`linear-gradient(to top,${bg.card},transparent 50%)` }} />
          {[{ s:"left",  fn:() => setImgIdx(p => (p - 1 + md.imgs.length) % md.imgs.length), I:ChevronLeft  },
            { s:"right", fn:() => setImgIdx(p => (p + 1) % md.imgs.length),                  I:ChevronRight }].map(({ s, fn, I }) => (
            <button key={s} onClick={fn} style={{ position:"absolute", [s]:"1rem", top:"50%", transform:"translateY(-50%)", padding:"0.6rem", borderRadius:"50%", background:"rgba(3,6,5,0.75)", border:"1px solid rgba(201,168,76,0.2)", cursor:"pointer", color:cream }}>
              <I size={16} />
            </button>
          ))}
          <button onClick={onClose} style={{ position:"absolute", top:"1rem", right:"1rem", padding:"0.4rem", borderRadius:"50%", background:"rgba(3,6,5,0.75)", border:"1px solid rgba(201,168,76,0.2)", cursor:"pointer", color:cream }}>
            <X size={16} />
          </button>
          <h2 style={{ position:"absolute", bottom:"1.5rem", left:"2rem", fontSize:"2.2rem", fontWeight:400 }}>{md.title}</h2>
        </div>
        <div style={{ padding:"2rem" }}>
          <div style={{ display:"flex", gap:"0.4rem", justifyContent:"center", marginBottom:"1.5rem" }}>
            {md.imgs.map((_, i) => (
              <motion.button key={i} onClick={() => setImgIdx(i)}
                animate={{ width:i === imgIdx ? 26 : 6, backgroundColor:i === imgIdx ? GOLD : "rgba(201,168,76,0.2)" }}
                style={{ height:2, border:"none", borderRadius:4, cursor:"pointer" }} />
            ))}
          </div>
          <p style={{ color:dim, fontSize:"1.05rem", lineHeight:1.85, marginBottom:"1.5rem" }}>{md.desc}</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem" }}>
            {md.facts.map((f, i) => (
              <div key={i} style={{ padding:"0.9rem 1.1rem", borderRadius:"0.75rem", background:"rgba(201,168,76,0.06)", border:"1px solid rgba(201,168,76,0.15)", display:"flex", gap:"0.6rem" }}>
                <span style={{ color:GOLD }}>✦</span>
                <p style={{ color:dim, fontSize:"0.9rem", margin:0 }}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}