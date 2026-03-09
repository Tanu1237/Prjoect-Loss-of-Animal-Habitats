
import Captain_Paul_Watson    from "../assets/Captain_Paul_Watson.mp4";
import WWF_s                  from "../assets/WWF_s.mp4";
import Nature_Conservancy     from "../assets/Nature_Conservancy.mp4";
import Conservation_International from "../assets/Conservation_International.mp4";

export const GOLD = "#c9a84c";
export const G    = "linear-gradient(135deg, #c9a84c, #e2c578)";

export const bg = {
  main: "#060a07",
  deep: "#030605",
  card: "#0c1410",
  mid:  "#0f1a12",
};

export const cream = "#f0ead8";
export const dim   = "#c4bba6";

export const gBtn =
  "inline-flex items-center gap-2 px-7 py-3 border border-[#c9a84c] text-[#c9a84c] " +
  "rounded-full text-xs uppercase tracking-[0.2em] no-underline bg-transparent " +
  "transition-all duration-300 cursor-pointer";

export const cardStyle = "rounded-2xl overflow-hidden border border-[#c9a84c]/[0.08]";

export const SLIDES = [
  {
    label: "Together We Can",
    title: "Protect Wildlife",
    img: "https://www.ecoredux.com/wp-content/uploads/wildlife.jpg",
  },
  {
    label: "Restore",
    title: "Natural Habitats",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600",
  },
  {
    label: "Conservation",
    title: "Is Our Responsibility",
    img: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600",
  },
];

export const FOCUS = [
  {
    icon: "Leaf",
    title: "Forest Protection",
    key: "forest",
    img: "https://external-preview.redd.it/protecting-existing-forests-and-helping-them-recover-is-a-v0-TeXRnbVJapCM5Syq7-Y0Ax9NFAhwykzpq_exS8alsCg.jpg?width=1080&crop=smart&auto=webp&s=4deb3ba8162add4b65ac9e2a55ecdae09c13e8a9",
  },
  {
    icon: "Droplet",
    title: "Water Conservation",
    key: "water",
    img: "https://sajdi.com/wp-content/uploads/2025/06/water-flows-from-faucet-onto-sprouting-plants-with-wind-turbines-background-sunny-s-scaled.jpg",
  },
  {
    icon: "Heart",
    title: "Wildlife Protection",
    key: "wildlife",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg/500px-Wildlife_at_Maasai_Mara_%28Lion%29.jpg",
  },
];

export const FOCUS_MODALS = {
  forest: {
    title: "Forest Conservation",
    desc: "Forests provide oxygen, store carbon, and support 80% of terrestrial life. Over 1.6 billion people depend on them.",
    facts: [
      "10M hectares lost annually",
      "50% of species in rainforests",
      "Absorb twice the CO₂ they emit",
      "80% of land animals live here",
    ],
    imgs: [
      "https://cdn.thewire.in/wp-content/uploads/2022/01/15173335/arjun-mj-ryE-INouwcQ-unsplash-2048x1365.jpg",
      "https://www.nature.org/content/dam/tnc/nature/en/photos/w/o/WOPA091005_D006.jpg",
      "https://insideclimatenews.org/wp-content/uploads/2022/11/forests-beech.jpg",
    ],
  },
  water: {
    title: "Water Conservation",
    desc: "Clean water is essential for all life. Rivers and wetlands support incredible biodiversity while providing fresh water for billions.",
    facts: [
      "2.2B lack safe drinking water",
      "Wetlands: 40% of species on 6% land",
      "Only 2.5% of water is fresh",
      "87% of wetlands gone in 300 years",
    ],
    imgs: [
      "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesDe_Hoop_wetl.2e16d0ba.fill-1200x630-c100.jpg",
      "https://smartwatermagazine.com/sites/default/files/styles/share-tw-830x415/public/wetland-4946219_1280.jpg?itok=Vkz2jt6k",
      "https://www.gruforestali.com/wp-content/uploads/2025/08/wetlands-2.webp",
    ],
  },
  wildlife: {
    title: "Wildlife Protection",
    desc: "Every species plays a crucial role in ecological balance. When one disappears, it disrupts the entire food chain.",
    facts: [
      "1M+ species face extinction",
      "68% wildlife decline since 1970",
      "$2.7T annual biodiversity loss",
      "Protected areas: 50% more wildlife",
    ],
    imgs: [
      "https://i.natgeofe.com/n/bec7bd50-0d57-4982-aeb5-82e5f8184f89/02-machine-saving-animals-nationalgeographic_1977490.jpg",
      "https://withlocals-com-res.cloudinary.com/image/upload/w_412,h_290,c_fill,g_auto,q_auto,dpr_3.0,f_auto/947a2c7ef4a3b09b48995c29c5cf9d41",
      "https://media.self.com/photos/5e8e2b54f77fc200080d4122/4:3/w_2560%2Cc_limit/pandas-eating-bamboo.jpg",
    ],
  },
};

export const STATS = [
  { val: "1M+", label: "Species at Risk" },
  { val: "68%", label: "Wildlife Decline" },
  { val: "30%", label: "Forests Lost" },
  { val: "8M",  label: "Tons Ocean Plastic/Yr" },
];

export const THREATS = [
  {
    icon: "🌲",
    title: "Deforestation",
    desc: "Large-scale clearing destroys habitats and forces animals to migrate or perish.",
  },
  {
    icon: "🌡️",
    title: "Climate Change",
    desc: "Rising temperatures affect migration patterns, breeding cycles, and food availability.",
  },
  {
    icon: "🛢️",
    title: "Pollution",
    desc: "Plastic waste, oil spills, and toxic chemicals contaminate oceans and forests.",
  },
  {
    icon: "🎯",
    title: "Poaching",
    desc: "Animals hunted for ivory, skin, bones, and the exotic pet trade.",
  },
];

export const WINS = [
  {
    emoji: "🐅",
    title: "Bengal Tiger Comeback",
    stat: "3,682",
    unit: "tigers in India today",
    before: "Down to 1,200 in 1970",
    img: "https://images.indianexpress.com/2025/01/Zeenat-Tiger-2col.jpg?w=1200",
    desc: "India's Bengal tiger population has tripled over five decades, marking one of the most celebrated wildlife recoveries in history.",
    how: "Project Tiger, launched in 1973, established 50+ dedicated reserves. Strict anti-poaching enforcement, habitat corridor protection, and community-based conservation transformed the outlook for the species.",
    facts: [
      "50+ tiger reserves across India",
      "Poaching penalties increased 10x since 1972",
      "Tiger corridors connect 14 reserves",
      "Local communities employed as forest guards",
    ],
  },
  {
    emoji: "🦅",
    title: "Bald Eagle Recovered",
    stat: "9,800+",
    unit: "nesting pairs in the US",
    before: "Only 417 pairs in 1963",
    img: "https://bloximages.newyork1.vip.townnews.com/princewilliamtimes.com/content/tncms/assets/v3/editorial/1/44/14458206-ae62-11ed-a514-5314895c8357/63eed7bad02eb.image.jpg",
    desc: "Once driven to the brink of extinction by hunting and DDT pesticide poisoning, the bald eagle has staged a stunning comeback across North America.",
    how: "The 1972 ban on DDT removed the chemical that thinned eagle eggshells. The Endangered Species Act of 1973 provided legal protection, and captive breeding programs reintroduced birds to regions where they had vanished.",
    facts: [
      "DDT banned in 1972 — the turning point",
      "Removed from endangered list in 2007",
      "Found in all 48 contiguous US states",
      "Lifespan up to 30 years in the wild",
    ],
  },
  {
    emoji: "🐳",
    title: "Humpback Whales Thriving",
    stat: "80K+",
    unit: "individuals worldwide",
    before: "Near extinction in 1960s",
    img: "https://i.natgeofe.com/n/2465ffcc-ec10-405c-b81c-d53d7a0f16eb/01-whales-nyc-2019-09-12-natgeo-araslich-nyc-humpback-4428.jpg",
    desc: "After commercial whaling reduced humpback populations to near-zero, an international ban allowed one of the ocean's most iconic mammals to recover dramatically.",
    how: "The International Whaling Commission's 1986 commercial whaling moratorium was critical. Whale watching ecotourism gave coastal communities an economic stake in their protection, while ocean sanctuaries reduced ship strikes and entanglement.",
    facts: [
      "IWC whaling moratorium enacted 1986",
      "9 of 14 populations no longer endangered",
      "Sing complex songs up to 20 minutes long",
      "Migrate up to 25,000 km annually",
    ],
  },
  {
    emoji: "🦁",
    title: "Mountain Gorilla Hope",
    stat: "1,063",
    unit: "gorillas alive today",
    before: "620 remaining in 1989",
    img: "https://www.fauna-flora.org/wp-content/uploads/2023/07/RWA-0086-CRH-1.jpg",
    desc: "The mountain gorilla is the only great ape whose population is actually growing — a remarkable reversal driven by decades of committed conservation in central Africa.",
    how: "Eco-tourism generated millions in revenue for local communities, creating a powerful incentive to protect gorillas. Anti-poaching patrols, veterinary intervention for injured gorillas, and cross-border cooperation between Rwanda, Uganda, and DRC were all decisive.",
    facts: [
      "Only great ape with growing population",
      "Gorilla trekking generates $200M+ annually",
      "Veterinary teams treat injured wild gorillas",
      "Three countries cooperate on protection",
    ],
  },
  {
    emoji: "🐬",
    title: "Bottlenose Dolphin Surge",
    stat: "+40%",
    unit: "population growth in 20yrs",
    before: "Coastal habitat destroyed",
    img: "https://a-z-animals.com/media/2021/12/bottlenose-dolphin-1024x535.jpg",
    desc: "Cleaner coastlines, fishing regulation reforms, and marine protected areas have enabled bottlenose dolphin populations to rebound significantly in key regions.",
    how: "Bycatch reduction devices in fishing nets dramatically lowered accidental dolphin deaths. Coastal pollution controls improved water quality, and marine protected areas gave dolphin pods safe feeding and breeding grounds free from boat traffic.",
    facts: [
      "Bycatch nets cut dolphin deaths by 80%",
      "Marine protected areas now cover 8% of oceans",
      "Live up to 40 years in the wild",
      "Highly social — pods up to 1,000 individuals",
    ],
  },
  {
    emoji: "🌿",
    title: "Amazon Reforestation",
    stat: "2M+",
    unit: "hectares replanted",
    before: "Record deforestation 2000s",
    img: "https://scx2.b-cdn.net/gfx/news/2023/razing-protected-rainf.jpg",
    desc: "A coalition of governments, NGOs, and Indigenous communities has reversed years of Amazon destruction through one of the largest tropical reforestation drives ever attempted.",
    how: "Brazil's Forest Code was reformed to require landowners to restore degraded land. Payment for ecosystem services rewarded farmers who preserved forest. Indigenous land titling protected over 100 million hectares from illegal clearing.",
    facts: [
      "Indigenous lands: lowest deforestation rates",
      "60M+ native seedlings planted",
      "Forest Code mandates 80% forest cover retention",
      "Amazon stores 150–200 billion tonnes of carbon",
    ],
  },
];

export const ANIMALS = [
  {
    img: "https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_4x3.png",
    name: "African Elephant",
    status: "Vulnerable",
    color: "#c9a84c",
  },
  {
    img: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTE0NTY4OTY2MTguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoiMTIwMCJ9fX0=",
    name: "Bengal Tiger",
    status: "Endangered",
    color: "#c4612a",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/1280px-Irbis4.JPG",
    name: "Snow Leopard",
    status: "Vulnerable",
    color: "#a8c9ad",
  },
  {
    img: "https://gorilladoctors.org/wp-content/uploads/Mountain-gorilla-family_%C2%A9-Skyler-Bishop-for-Gorilla-Doctors.jpg",
    name: "Mountain Gorilla",
    status: "Endangered",
    color: "#c4612a",
  },
  {
    img: "https://assets.worldwildlife.org/www-prd/images/Medium_WW1124623.bc918a01.fill-375x500.format-webp.webp",
    name: "Sea Turtle",
    status: "Critically Endangered",
    color: "#dd4444",
  },
  {
    img: "https://img.freepik.com/free-photo/arctic-fox-mother-cub-playing-snow_23-2152007118.jpg?semt=ais_rp_progressive&w=740&q=80",
    name: "Arctic Fox",
    status: "Least Concern",
    color: "#2a8c7a",
  },
];

export const MIGRATION = [
  {
    img: "https://cdn-kmfel.nitrocdn.com/uMVObCziJWycROCfTnqalPiKHatgnzNl/assets/images/optimized/rev-b569552/polar-latitudes.com/wp-content/uploads/2025/08/two-arctic-terns.jpg",
    icon: "🐦",
    name: "Arctic Tern",
    route: "Arctic → Antarctic → Arctic",
    dist: "90,000 km",
    desc: "The world's longest migration — from pole to pole and back, chasing endless summer.",
    facts: [
      "Sees more daylight than any creature on Earth",
      "Lives up to 30 years — travels 2.7M km in a lifetime",
      "Weighs only 100g yet crosses two polar regions",
      "Navigates using the sun, stars, and Earth's magnetic field",
    ],
    threats:
      "Light pollution disorients terns during night migration. Ocean warming is shifting fish populations, forcing terns to fly further to feed. Plastic pollution in both polar regions contaminates their food supply.",
    heroImg:
      "https://cdn-kmfel.nitrocdn.com/uMVObCziJWycROCfTnqalPiKHatgnzNl/assets/images/optimized/rev-b569552/polar-latitudes.com/wp-content/uploads/2025/08/two-arctic-terns.jpg",
  },
  {
    img: "https://cdn.britannica.com/76/151376-050-13586FE2/monarch-butterfly-flowers-bush.jpg",
    icon: "🦋",
    name: "Monarch Butterfly",
    route: "Canada → Mexico",
    dist: "4,500 km",
    desc: "Millions navigate using the sun's position and Earth's magnetic field.",
    facts: [
      "Navigate using a time-compensated sun compass",
      "Four generations complete a single round-trip cycle",
      "Overwinter in the same oyamel fir forests every year",
      "Milkweed is essential — larvae eat nothing else",
    ],
    threats:
      "Milkweed loss from herbicide use has destroyed the monarch's only larval food source. Illegal logging in Mexican overwintering forests threatens their last refuge. Climate change is desynchronising their migration timing with milkweed growth.",
    heroImg:
      "https://cdn.britannica.com/76/151376-050-13586FE2/monarch-butterfly-flowers-bush.jpg",
  },
  {
    img: "https://www.marinemammalcenter.org/storage/app/uploads/public/3ad/5b0/309/thumb__2400_0_0_0_auto.jpg",
    icon: "🐋",
    name: "Humpback Whale",
    route: "Polar feeding → Tropical breeding",
    dist: "16,000 km",
    desc: "Humpbacks travel between cold feeding grounds and warm tropical waters to breed.",
    facts: [
      "Sing complex songs lasting up to 20 minutes",
      "Eat up to 1.4 tonnes of krill and fish daily in summer",
      "Breach completely out of the water despite 40-tonne weight",
      "Calves are born in warm tropical waters, then guided north",
    ],
    threats:
      "Ship strikes kill hundreds of whales annually along migration routes. Underwater noise pollution from shipping and sonar disrupts communication and navigation. Warming oceans are shifting krill populations, forcing whales to alter feeding ground locations.",
    heroImg:
      "https://www.marinemammalcenter.org/storage/app/uploads/public/3ad/5b0/309/thumb__2400_0_0_0_auto.jpg",
  },
  {
    img: "https://i.natgeofe.com/k/a3269dfa-670c-4317-9e6e-7563f57cc75a/Loggerhead_new.jpg?wp=1&w=1084.125&h=609",
    icon: "🐢",
    name: "Loggerhead Sea Turtle",
    route: "Atlantic Ocean circuit",
    dist: "12,000 km",
    desc: "Hatchlings begin a trans-Atlantic journey, returning decades later to their birth beach.",
    facts: [
      "Return to the exact beach where they were born to nest",
      "Can live over 70 years in the wild",
      "Dive up to 290 metres deep",
      "Navigate using Earth's magnetic field like a GPS",
    ],
    threats:
      "Artificial beach lighting disorients hatchlings who navigate by moonlight. Longline fishing hooks kill thousands of turtles as bycatch each year. Rising sand temperatures from climate change are skewing hatchling sex ratios, with far more females being born.",
    heroImg:
      "https://i.natgeofe.com/k/a3269dfa-670c-4317-9e6e-7563f57cc75a/Loggerhead_new.jpg?wp=1&w=1084.125&h=609",
  },
];

export const HELP_ACTIONS = [
  {
    icon: "🥗",
    title: "Eat Less Meat",
    desc: "Livestock farming drives 80% of Amazon deforestation. Reducing meat is one of the highest-impact personal choices you can make.",
  },
  {
    icon: "♻️",
    title: "Refuse Single-Use Plastic",
    desc: "8 million tons of plastic enter oceans yearly. Carry reusable bags, bottles, and say no to straws and plastic packaging.",
  },
  {
    icon: "📲",
    title: "Spread Awareness",
    desc: "Share conservation stories. Public pressure has driven some of the biggest policy wins in wildlife protection history.",
  },
  {
    icon: "🛍️",
    title: "Shop Sustainably",
    desc: "Avoid products with palm oil, unsustainable seafood, or fast fashion. Your purchasing power shapes what companies produce.",
  },
  {
    icon: "🌳",
    title: "Plant Native Species",
    desc: "Native trees and plants support local pollinators and birds. Even a small garden or balcony can become a wildlife habitat.",
  },
  {
    icon: "🗳️",
    title: "Vote for Nature",
    desc: "Support politicians and policies that prioritize environmental protection, climate action, and wildlife conservation.",
  },
];

export const VOLUNTEER_ROLES = [
  {
    icon: "🔬",
    title: "Field Researcher",
    desc: "Assist scientists collecting wildlife population data in protected reserves and national parks.",
    time: "2–4 weeks",
    loc: "On-site",
  },
  {
    icon: "📸",
    title: "Conservation Photographer",
    desc: "Document endangered species and habitats to raise awareness through powerful visual storytelling.",
    time: "Flexible",
    loc: "Remote/Field",
  },
  {
    icon: "🌱",
    title: "Reforestation Volunteer",
    desc: "Plant native trees and restore degraded ecosystems in deforested regions across six continents.",
    time: "1 day – 1 month",
    loc: "On-site",
  },
  {
    icon: "🐢",
    title: "Marine Guardian",
    desc: "Monitor turtle nesting beaches, remove debris, and protect hatchlings on their journey to the sea.",
    time: "2–6 weeks",
    loc: "Coastal",
  },
  {
    icon: "🏫",
    title: "Education Ambassador",
    desc: "Deliver wildlife conservation workshops in schools and communities to inspire the next generation.",
    time: "Flexible",
    loc: "Local/Remote",
  },
  {
    icon: "💻",
    title: "Digital Advocate",
    desc: "Use your skills in design, writing, or social media to amplify conservation campaigns online.",
    time: "Flexible",
    loc: "Remote",
  },
];

export const NEWS = [
  {
    tag: "Species Recovery",
    date: "Feb 2026",
    title: "Snow Leopards Spotted in Record Numbers Across Central Asia",
    excerpt:
      "New camera trap data reveals a 20% increase in snow leopard sightings across five countries, signalling a meaningful population rebound.",
    img: "https://img.etimg.com/thumb/msid-120970322,width-650,height-488,imgsize-66484,resizemode-75/snow-leopard.jpg",
    readTime: "6 min read",
    author: "Dr. Aiko Tanaka",
    authorRole: "Wildlife Biologist, Snow Leopard Trust",
    heroImg:
      "https://img.etimg.com/thumb/msid-120970322,width-650,height-488,imgsize-66484,resizemode-75/snow-leopard.jpg",
    body: [
      {
        type: "intro",
        text: "In one of the most encouraging wildlife stories of the decade, researchers tracking snow leopard populations across Central Asia have confirmed a remarkable 20% increase in verified sightings over the past two years — a statistic that has stunned conservationists who feared the species was in irreversible decline.",
      },
      {
        type: "pullquote",
        text: "This is what committed, long-term conservation looks like. These animals have been pushed to the edge — and they're coming back.",
        attribution: "Dr. Aiko Tanaka, Snow Leopard Trust",
      },
      {
        type: "paragraph",
        text: "The data, gathered from a network of over 400 motion-activated camera traps deployed across remote mountain ranges in India, Nepal, Bhutan, Mongolia, and China, represents the most comprehensive snow leopard census ever conducted. Scientists cross-referenced unique rosette patterns in the leopards' coats to confirm genuine population growth rather than expanded monitoring coverage.",
      },
      {
        type: "stats",
        items: [
          { val: "20%",     label: "Population increase in 2 years" },
          { val: "400+",    label: "Camera traps deployed" },
          { val: "5",       label: "Countries monitored" },
          { val: "~10,000", label: "Estimated wild individuals" },
        ],
      },
      { type: "subheading", text: "What's Driving the Recovery?" },
      {
        type: "paragraph",
        text: "Researchers attribute the rebound to anti-poaching patrols funded by international conservation grants, and community-based livestock insurance programs which compensate herders whose animals are taken by snow leopards — dramatically reducing retaliatory killings, long one of the species' greatest threats.",
      },
      { type: "subheading", text: "The Road Ahead" },
      {
        type: "paragraph",
        text: "Despite the encouraging numbers, conservationists urge caution. Climate change is shrinking the alpine ecosystems that snow leopards depend on, forcing prey species to lower altitudes and bringing leopards into more frequent contact with human settlements.",
      },
      {
        type: "callout",
        icon: "🐾",
        text: "The Snow Leopard Trust is actively seeking donations to expand the community livestock insurance program to two new regions in Pakistan and Tajikistan.",
      },
    ],
  },
  {
    tag: "Policy Win",
    date: "Jan 2026",
    title: "Global Plastics Treaty Signed by 175 Nations at UN Summit",
    excerpt:
      "In a landmark agreement, world leaders committed to eliminating single-use plastics by 2035, protecting oceans and marine wildlife.",
    img: "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/unep_pollution_resolution.jpg",
    readTime: "7 min read",
    author: "Lena Hargrove",
    authorRole: "Environmental Policy Correspondent",
    heroImg:
      "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/unep_pollution_resolution.jpg",
    body: [
      {
        type: "intro",
        text: "After three years of fraught negotiations, 175 nations signed the Global Plastics Treaty in Geneva this January — a legally binding agreement committing every signatory to eliminating single-use plastics by 2035. Environmental groups are calling it the most significant environmental treaty since the Paris Agreement.",
      },
      {
        type: "pullquote",
        text: "Plastic pollution is not just an ocean problem — it's a wildlife crisis, a human health crisis, and a climate crisis all rolled into one.",
        attribution: "UN Environment Programme Director, Inger Andersen",
      },
      {
        type: "paragraph",
        text: "The treaty covers the full lifecycle of plastic — from the extraction of fossil fuels used to produce it, through its manufacture, distribution, use, and disposal. For the first time, it creates binding targets for plastic reduction rather than voluntary pledges, backed by a compliance mechanism and a $5 billion transition fund.",
      },
      {
        type: "stats",
        items: [
          { val: "175",     label: "Nations signed" },
          { val: "8M tons", label: "Plastic entering oceans yearly" },
          { val: "2035",    label: "Target year for elimination" },
          { val: "$5B",     label: "Transition fund committed" },
        ],
      },
      { type: "subheading", text: "What the Treaty Actually Bans" },
      {
        type: "paragraph",
        text: "By 2028, single-use plastic bags, straws, cutlery, foam food containers, and cotton bud sticks must be phased out across all signatory nations. By 2030, microplastic additions to products face strict limits. The 2035 deadline applies to all remaining single-use packaging formats.",
      },
      { type: "subheading", text: "What It Means for Wildlife" },
      {
        type: "paragraph",
        text: "Marine biologists have documented plastic in the stomachs of over 700 species. If fully implemented, models project the treaty could prevent over 200 million tons of plastic from entering the environment over the next decade.",
      },
      {
        type: "callout",
        icon: "✊",
        text: "Hold your government accountable to this treaty by signing petitions, contacting representatives, and supporting organisations that monitor compliance.",
      },
    ],
  },
  {
    tag: "Habitat",
    date: "Dec 2025",
    title: "Brazil's Atlantic Forest Sees Largest Restoration in History",
    excerpt:
      "A coalition of NGOs and government agencies announced the successful replanting of 500,000 hectares of Brazil's most biodiverse forest.",
    img: "https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/03/03185716/O-Eco-_-Marcio-Isensee-e-Sa-_-DJI_0189-1536x1024.jpg",
    readTime: "8 min read",
    author: "Carlos Mendez",
    authorRole: "Senior Ecologist, SOS Mata Atlântica",
    heroImg:
      "https://imgs.mongabay.com/wp-content/uploads/sites/20/2022/03/03185716/O-Eco-_-Marcio-Isensee-e-Sa-_-DJI_0189-1536x1024.jpg",
    body: [
      {
        type: "intro",
        text: "Brazil's Atlantic Forest — one of the world's most biodiverse and most threatened ecosystems — has reached a landmark milestone. A coalition of government agencies, NGOs, and local communities has completed the replanting of 500,000 hectares, making it the largest tropical forest restoration effort in recorded history.",
      },
      {
        type: "pullquote",
        text: "The Atlantic Forest was reduced to less than 12% of its original cover. Today, we are rewriting that story — and the animals are already coming back.",
        attribution: "Carlos Mendez, SOS Mata Atlântica",
      },
      {
        type: "paragraph",
        text: "Once stretching along Brazil's entire Atlantic coast, the Atlantic Forest was devastated by centuries of agriculture, logging, and urban expansion. The species that call it home include over 20,000 plant species, 1,000 bird species, and 300 mammals, many found nowhere else on Earth.",
      },
      {
        type: "stats",
        items: [
          { val: "500K",    label: "Hectares replanted" },
          { val: "12%",     label: "Forest cover that remained" },
          { val: "20,000+", label: "Plant species in the forest" },
          { val: "148",     label: "Communities involved" },
        ],
      },
      { type: "subheading", text: "How 500,000 Hectares Were Replanted" },
      {
        type: "paragraph",
        text: "The restoration programme used a combination of active planting and passive regeneration. Over 60 million native seedlings were planted by a workforce of 148 local communities, many of them smallholder farmers who now earn income from reforestation contracts.",
      },
      { type: "subheading", text: "A Model for the World" },
      {
        type: "paragraph",
        text: "Camera traps in replanted corridors are already recording the return of pumas, tapirs, giant anteaters, and the golden lion tamarin — a primate that once had fewer than 200 individuals remaining in the wild.",
      },
      {
        type: "callout",
        icon: "🌱",
        text: "Rainforest Trust is funding an expansion of the Atlantic Forest corridor project. A donation of $25 protects one acre of this irreplaceable ecosystem.",
      },
    ],
  },
];

export const ORGS = [
  {
    name: "Captain Paul Watson Foundation",
    desc: "Protecting marine ecosystems through direct action against illegal fishing and whaling.",
    tags: ["Marine Conservation", "Ocean Activism", "Whale Protection"],
    img: "https://live-production.wcms.abc-cdn.net.au/6e2c693529d01d66aa931823df297725?impolicy=wcms_crop_resize&cropH=253&cropW=450&xPos=0&yPos=0&width=862&height=485",
    vid: Captain_Paul_Watson,
    url: "https://www.paulwatsonfoundation.org",
  },
  {
    name: "World Wildlife Fund",
    desc: "Global conservation working in 100+ countries to protect endangered species and habitats.",
    tags: ["Species Protection", "Habitat Conservation", "Climate Action"],
    img: "https://assets.worldwildlife.org/www-prd/images/landing_page_share2.2e16d0ba.fill-1200x630-c100.jpg",
    vid: WWF_s,
    url: "https://www.worldwildlife.org",
  },
  {
    name: "The Nature Conservancy",
    desc: "Conserving lands and waters where the greatest diversity of life lives.",
    tags: ["Land Protection", "Water Conservation", "Climate Resilience"],
    img: "https://shopwhatsgood.com/cdn/shop/articles/WHATSGOOD_NON-PROFIT_blogsized_NATURE_CONSERVANCY_1198_x_750_px_1_1198x.jpg?v=1711383534",
    vid: Nature_Conservancy,
    url: "https://www.nature.org",
  },
  {
    name: "Conservation International",
    desc: "Protecting nature and the people it sustains in biodiversity hotspots worldwide.",
    tags: ["Biodiversity", "Indigenous Rights", "Sustainable Dev"],
    img: "https://cdn.sanity.io/images/71jmx9y3/production/5d13de43060c6a23be62b47b0a97cf45143ced7d-1205x630.jpg?w=1200&h=627&fit=crop&auto=format",
    vid: Conservation_International,
    url: "https://www.conservation.org",
  },
];