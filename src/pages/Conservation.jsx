import { motion } from "framer-motion";

/* ---------------------- Fade Overlay ---------------------- */

const Fade = ({ direction = "top" }) => {
  if (direction === "top") {
    return (
      <div className="pointer-events-none absolute top-0 inset-x-0 h-40 z-20
                      bg-gradient-to-b from-slate-950 via-slate-950/80 to-transparent" />
    );
  }

  return (
    <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 z-20
                    bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
  );
};

/* ---------------------- Section Wrapper ---------------------- */

const Section = ({ children, className = "" }) => (
  <section className={`relative py-32 ${className}`}>
    <Fade />
    <Fade direction="bottom" />
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

/* ---------------------- Card Components ---------------------- */

const PillarCard = ({ title, content }) => (
  <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl p-8 hover:border-amber-400/40 transition duration-500">
    <h3 className="text-2xl font-serif text-stone-100 mb-6">{title}</h3>
    <p className="text-stone-400 leading-relaxed text-base">{content}</p>
  </div>
);

const ProjectCard = ({ title, content }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:scale-[1.03] hover:border-amber-400/40 transition duration-500">
    <h4 className="text-xl font-semibold text-stone-100 mb-4">{title}</h4>
    <p className="text-stone-400 leading-relaxed text-sm">{content}</p>
  </div>
);

/* ---------------------- MAIN PAGE ---------------------- */

export default function Conservation() {
  return (
    <main className="bg-slate-950 text-stone-200 overflow-hidden">

      {/* ---------------- HERO ---------------- */}
      <section className="relative h-screen flex items-center bg-[url('https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/75" />
        <Fade /><Fade direction="bottom" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-6xl px-6"
        >
          <h1 className="text-6xl md:text-7xl font-serif text-stone-100 leading-tight">
            Conservation <br /> Is the Last Line of Defense
          </h1>

          <p className="mt-8 text-lg text-stone-300 max-w-2xl leading-relaxed">
            Across forests, oceans, deserts, and wetlands, wildlife is disappearing at a rate
            unprecedented in human history. Conservation is not merely a scientific discipline —
            it is a moral responsibility, a global movement, and a race against time to restore
            balance between humanity and the living world.
          </p>

          <button className="mt-10 px-8 py-3 border border-amber-400 text-amber-300 uppercase text-sm tracking-widest hover:bg-amber-300 hover:text-black transition duration-300">
            Discover the Mission
          </button>
        </motion.div>
      </section>

      {/* ---------------- WHY CONSERVATION ---------------- */}
      <Section>
        <h2 className="text-5xl font-serif text-stone-100 mb-12 text-center">
          Why Conservation Matters
        </h2>

        <div className="space-y-10 text-stone-400 leading-relaxed text-lg">
          <p>
            Conservation protects the intricate web of life that sustains the planet.
            Forests regulate atmospheric carbon and stabilize climate systems.
            Wetlands purify freshwater and prevent catastrophic flooding.
            Oceans generate more than half of the world’s oxygen while supporting
            fisheries that feed billions.
          </p>

          <p>
            When habitats collapse, ecosystems unravel. Species loss triggers chain reactions —
            predators vanish, prey populations explode or disappear, plant life shifts,
            and entire landscapes transform. Biodiversity is not decorative;
            it is structural. It is the foundation of ecological stability.
          </p>

          <p>
            Scientists estimate that nearly one million species now face extinction,
            primarily due to human-driven habitat destruction. Conservation is the
            intervention that prevents this irreversible loss.
          </p>
        </div>
      </Section>

      {/* ---------------- THREATS ---------------- */}
      <Section className="bg-slate-900/40">
        <h2 className="text-5xl font-serif text-stone-100 mb-16 text-center">
          The Forces Driving Habitat Loss
        </h2>

        <div className="space-y-12 text-stone-400 leading-relaxed text-lg">
          <p>
            <span className="text-stone-200 font-semibold">Deforestation & Land Conversion:</span>
            Expanding agriculture, logging, and infrastructure projects fragment ecosystems,
            isolating wildlife populations and reducing genetic diversity.
          </p>

          <p>
            <span className="text-stone-200 font-semibold">Climate Change:</span>
            Rising temperatures shift habitats faster than many species can adapt.
            Coral reefs bleach, polar ice melts, and migratory patterns collapse.
          </p>

          <p>
            <span className="text-stone-200 font-semibold">Illegal Wildlife Trade:</span>
            Poaching networks continue to endanger elephants, rhinos, pangolins, and tigers,
            driven by global demand for ivory, skins, and exotic products.
          </p>

          <p>
            <span className="text-stone-200 font-semibold">Pollution & Overexploitation:</span>
            Plastic waste, chemical runoff, and overfishing degrade ecosystems
            faster than natural recovery cycles allow.
          </p>
        </div>
      </Section>

      {/* ---------------- CONSERVATION STRATEGIES ---------------- */}
      <Section>
        <h2 className="text-5xl font-serif text-stone-100 mb-16 text-center">
          Conservation in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard
            title="Protected Areas & Wildlife Sanctuaries"
            content="National parks and conservation reserves preserve biodiversity hotspots by limiting human encroachment and safeguarding critical habitats."
          />
          <ProjectCard
            title="Species Recovery Programs"
            content="Captive breeding, reintroduction efforts, and anti-poaching patrols have revived endangered populations once on the brink of extinction."
          />
          <ProjectCard
            title="Habitat Restoration"
            content="Reforestation, wetland rehabilitation, and coral reef restoration rebuild ecological systems damaged by industrial activity."
          />
          <ProjectCard
            title="Technology & Innovation"
            content="Satellite imagery, AI-driven wildlife tracking, camera traps, and drone surveillance strengthen conservation monitoring worldwide."
          />
        </div>
      </Section>

      {/* ---------------- SUCCESS STORY ---------------- */}
      <Section className="bg-slate-900/40">
        <h2 className="text-5xl font-serif text-stone-100 mb-12 text-center">
          A Story of Hope: The Return of the Tiger
        </h2>

        <p className="text-stone-400 leading-relaxed text-lg">
          In the 1970s, India’s tiger population had plummeted due to poaching and habitat loss.
          Through decisive action under “Project Tiger,” the government established protected
          reserves, strengthened anti-poaching enforcement, and invested in habitat restoration.
          Today, India hosts over 70% of the world’s wild tigers — a remarkable testament to
          what sustained conservation commitment can achieve.
        </p>
      </Section>

      {/* ---------------- GOVERNMENT & NGO ROLE ---------------- */}
      <Section>
        <h2 className="text-5xl font-serif text-stone-100 mb-12 text-center">
          Laws, Policy & Global Cooperation
        </h2>

        <div className="space-y-8 text-stone-400 leading-relaxed text-lg">
          <p>
            International agreements such as biodiversity conventions and wildlife
            protection treaties create frameworks for cross-border conservation.
            Governments establish environmental protection laws, while NGOs
            provide funding, research, and community engagement.
          </p>

          <p>
            Effective conservation requires collaboration — from policymakers
            drafting legislation to grassroots activists mobilizing communities.
          </p>
        </div>
      </Section>

      {/* ---------------- CALL TO ACTION ---------------- */}
      <Section className="text-center">
        <h2 className="text-5xl font-serif text-stone-100 mb-10">
          The Future Is Not Yet Written
        </h2>

        <p className="text-stone-400 leading-relaxed text-lg max-w-3xl mx-auto mb-10">
          The next decades will determine the fate of thousands of species.
          Conservation is no longer optional — it is essential.
          Every action, from sustainable consumption to policy advocacy,
          contributes to a global effort to restore balance.
        </p>

        <button className="px-10 py-4 border border-amber-400 text-amber-300 uppercase tracking-widest text-sm hover:bg-amber-300 hover:text-black transition duration-300">
          Join the Movement
        </button>
      </Section>

      {/* ---------------- FINAL FOOTER ---------------- */}
      <section className="py-20 bg-black text-center">
        <p className="text-stone-500 text-sm tracking-wide">
          Conservation is not about saving wildlife alone —
          it is about preserving the future of humanity itself.
        </p>
      </section>

    </main>
  );
}