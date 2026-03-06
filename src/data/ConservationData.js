export const GOLD = "#c9a84c";
export const G = "linear-gradient(135deg,#c9a84c,#e2c578)";
export const bg = { main: "#060a07", deep: "#030605", card: "#0c1410", mid: "#0f1a12" };
export const cream = "#f0ead8";
export const dim = "#c4bba6";
export const gBtn = { display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.7rem 1.8rem", border:`1px solid #c9a84c`, color:"#c9a84c", borderRadius:"3rem", fontSize:"0.8rem", letterSpacing:"0.2em", textTransform:"uppercase", textDecoration:"none", transition:"all 0.3s", background:"transparent" };
export const cardStyle = { borderRadius:"1rem", overflow:"hidden", border:"1px solid rgba(201,168,76,0.08)" };

export const SLIDES = [
  { label:"Together We Can", title:"Protect Wildlife",      img:"https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=1600" },
  { label:"Restore",         title:"Natural Habitats",      img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600" },
  { label:"Conservation",    title:"Is Our Responsibility", img:"https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1600" },
];

export const FOCUS = [
  { icon:"Leaf",    title:"Forest Protection",   key:"forest",   img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop" },
  { icon:"Droplet", title:"Water Conservation",  key:"water",    img:"https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop" },
  { icon:"Heart",   title:"Wildlife Protection", key:"wildlife", img:"https://images.unsplash.com/photo-1564349a7e93-8d4a5c6dbe1e?w=600&h=400&fit=crop" },
];

export const FOCUS_MODALS = {
  forest:  { title:"Forest Conservation",  desc:"Forests provide oxygen, store carbon, and support 80% of terrestrial life. Over 1.6 billion people depend on them.", facts:["10M hectares lost annually","50% of species in rainforests","Absorb twice the CO₂ they emit","80% of land animals live here"], imgs:["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=800&h=500&fit=crop"] },
  water:   { title:"Water Conservation",   desc:"Clean water is essential for all life. Rivers and wetlands support incredible biodiversity while providing fresh water for billions.", facts:["2.2B lack safe drinking water","Wetlands: 40% of species on 6% land","Only 2.5% of water is fresh","87% of wetlands gone in 300 years"], imgs:["https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1493514789a9-586cb221b348?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop"] },
  wildlife:{ title:"Wildlife Protection",  desc:"Every species plays a crucial role in ecological balance. When one disappears, it disrupts the entire food chain.", facts:["1M+ species face extinction","68% wildlife decline since 1970","$2.7T annual biodiversity loss","Protected areas: 50% more wildlife"], imgs:["https://images.unsplash.com/photo-1564349a7e93-8d4a5c6dbe1e?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1527489377706-5bf97e608852?w=800&h=500&fit=crop","https://images.unsplash.com/photo-1536100526157-9fc46bb8c16f?w=800&h=500&fit=crop"] },
};

export const STATS = [
  { val:"1M+", label:"Species at Risk" },
  { val:"68%", label:"Wildlife Decline" },
  { val:"30%", label:"Forests Lost" },
  { val:"8M",  label:"Tons Ocean Plastic/Yr" },
];

export const THREATS = [
  { icon:"🌲", title:"Deforestation",  desc:"Large-scale clearing destroys habitats and forces animals to migrate or perish." },
  { icon:"🌡️", title:"Climate Change", desc:"Rising temperatures affect migration patterns, breeding cycles, and food availability." },
  { icon:"🛢️", title:"Pollution",      desc:"Plastic waste, oil spills, and toxic chemicals contaminate oceans and forests." },
  { icon:"🎯", title:"Poaching",       desc:"Animals hunted for ivory, skin, bones, and the exotic pet trade." },
];

export const WINS = [
  { emoji:"🐅", title:"Bengal Tiger Comeback",    stat:"3,682",  unit:"tigers in India today",      before:"Down to 1,200 in 1970",     img:"https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&h=400&fit=crop" },
  { emoji:"🦅", title:"Bald Eagle Recovered",     stat:"9,800+", unit:"nesting pairs in the US",    before:"Only 417 pairs in 1963",    img:"https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&h=400&fit=crop" },
  { emoji:"🐳", title:"Humpback Whales Thriving", stat:"80K+",   unit:"individuals worldwide",      before:"Near extinction in 1960s",  img:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=600&h=400&fit=crop" },
  { emoji:"🦁", title:"Mountain Gorilla Hope",    stat:"1,063",  unit:"gorillas alive today",       before:"620 remaining in 1989",     img:"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&h=400&fit=crop" },
  { emoji:"🐬", title:"Bottlenose Dolphin Surge", stat:"+40%",   unit:"population growth in 20yrs", before:"Coastal habitat destroyed",  img:"https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop" },
  { emoji:"🌿", title:"Amazon Reforestation",     stat:"2M+",    unit:"hectares replanted",         before:"Record deforestation 2000s",img:"https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=600&h=400&fit=crop" },
];

export const ANIMALS = [
  { img:"https://images.unsplash.com/photo-1564349a7e93-8d4a5c6dbe1e?w=600&h=700&fit=crop", name:"African Elephant",  status:"Vulnerable",            color:"#c9a84c" },
  { img:"https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&h=700&fit=crop", name:"Bengal Tiger",     status:"Endangered",            color:"#c4612a" },
  { img:"https://images.unsplash.com/photo-1551358427-14b5f46b8d82?w=600&h=700&fit=crop",   name:"Snow Leopard",     status:"Vulnerable",            color:"#a8c9ad" },
  { img:"https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&h=700&fit=crop",   name:"Mountain Gorilla", status:"Endangered",            color:"#c4612a" },
  { img:"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&h=700&fit=crop", name:"Sea Turtle",       status:"Critically Endangered", color:"#dd4444" },
  { img:"https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&h=700&fit=crop", name:"Arctic Fox",       status:"Least Concern",         color:"#2a8c7a" },
];

export const MIGRATION = [
  { img:"https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=700&h=450&fit=crop", icon:"🐦", name:"Arctic Tern",           route:"Arctic → Antarctic → Arctic",      dist:"90,000 km", desc:"The world's longest migration — from pole to pole and back, chasing endless summer." },
  { img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=450&fit=crop", icon:"🦋", name:"Monarch Butterfly",     route:"Canada → Mexico",                  dist:"4,500 km",  desc:"Millions navigate using the sun's position and Earth's magnetic field." },
  { img:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=700&h=450&fit=crop", icon:"🐋", name:"Humpback Whale",        route:"Polar feeding → Tropical breeding", dist:"16,000 km", desc:"Humpbacks travel between cold feeding grounds and warm tropical waters to breed." },
  { img:"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=700&h=450&fit=crop", icon:"🐢", name:"Loggerhead Sea Turtle", route:"Atlantic Ocean circuit",            dist:"12,000 km", desc:"Hatchlings begin a trans-Atlantic journey, returning decades later to their birth beach." },
];

export const HELP_ACTIONS = [
  { icon:"🥗", title:"Eat Less Meat",             desc:"Livestock farming drives 80% of Amazon deforestation. Reducing meat is one of the highest-impact personal choices you can make." },
  { icon:"♻️", title:"Refuse Single-Use Plastic", desc:"8 million tons of plastic enter oceans yearly. Carry reusable bags, bottles, and say no to straws and plastic packaging." },
  { icon:"📲", title:"Spread Awareness",           desc:"Share conservation stories. Public pressure has driven some of the biggest policy wins in wildlife protection history." },
  { icon:"🛍️", title:"Shop Sustainably",           desc:"Avoid products with palm oil, unsustainable seafood, or fast fashion. Your purchasing power shapes what companies produce." },
  { icon:"🌳", title:"Plant Native Species",       desc:"Native trees and plants support local pollinators and birds. Even a small garden or balcony can become a wildlife habitat." },
  { icon:"🗳️", title:"Vote for Nature",            desc:"Support politicians and policies that prioritize environmental protection, climate action, and wildlife conservation." },
];

export const VOLUNTEER_ROLES = [
  { icon:"🔬", title:"Field Researcher",           desc:"Assist scientists collecting wildlife population data in protected reserves and national parks.", time:"2–4 weeks",     loc:"On-site" },
  { icon:"📸", title:"Conservation Photographer",  desc:"Document endangered species and habitats to raise awareness through powerful visual storytelling.", time:"Flexible",       loc:"Remote/Field" },
  { icon:"🌱", title:"Reforestation Volunteer",    desc:"Plant native trees and restore degraded ecosystems in deforested regions across six continents.", time:"1 day – 1 month", loc:"On-site" },
  { icon:"🐢", title:"Marine Guardian",            desc:"Monitor turtle nesting beaches, remove debris, and protect hatchlings on their journey to the sea.", time:"2–6 weeks",    loc:"Coastal" },
  { icon:"🏫", title:"Education Ambassador",       desc:"Deliver wildlife conservation workshops in schools and communities to inspire the next generation.", time:"Flexible",       loc:"Local/Remote" },
  { icon:"💻", title:"Digital Advocate",           desc:"Use your skills in design, writing, or social media to amplify conservation campaigns online.", time:"Flexible",          loc:"Remote" },
];

export const NEWS = [
  {
    tag:"Species Recovery", date:"Feb 2026",
    title:"Snow Leopards Spotted in Record Numbers Across Central Asia",
    excerpt:"New camera trap data reveals a 20% increase in snow leopard sightings across five countries, signalling a meaningful population rebound.",
    img:"https://images.unsplash.com/photo-1551358427-14b5f46b8d82?w=600&h=400&fit=crop",
    readTime:"6 min read", author:"Dr. Aiko Tanaka", authorRole:"Wildlife Biologist, Snow Leopard Trust",
    heroImg:"https://images.unsplash.com/photo-1551358427-14b5f46b8d82?w=1200&h=600&fit=crop",
    body:[
      { type:"intro", text:"In one of the most encouraging wildlife stories of the decade, researchers tracking snow leopard populations across Central Asia have confirmed a remarkable 20% increase in verified sightings over the past two years — a statistic that has stunned conservationists who feared the species was in irreversible decline." },
      { type:"pullquote", text:"This is what committed, long-term conservation looks like. These animals have been pushed to the edge — and they're coming back.", attribution:"Dr. Aiko Tanaka, Snow Leopard Trust" },
      { type:"paragraph", text:"The data, gathered from a network of over 400 motion-activated camera traps deployed across remote mountain ranges in India, Nepal, Bhutan, Mongolia, and China, represents the most comprehensive snow leopard census ever conducted. Scientists cross-referenced unique rosette patterns in the leopards' coats to confirm genuine population growth rather than expanded monitoring coverage." },
      { type:"stats", items:[{val:"20%",label:"Population increase in 2 years"},{val:"400+",label:"Camera traps deployed"},{val:"5",label:"Countries monitored"},{val:"~10,000",label:"Estimated wild individuals"}] },
      { type:"subheading", text:"What's Driving the Recovery?" },
      { type:"paragraph", text:"Researchers attribute the rebound to anti-poaching patrols funded by international conservation grants, and community-based livestock insurance programs which compensate herders whose animals are taken by snow leopards — dramatically reducing retaliatory killings, long one of the species' greatest threats." },
      { type:"subheading", text:"The Road Ahead" },
      { type:"paragraph", text:"Despite the encouraging numbers, conservationists urge caution. Climate change is shrinking the alpine ecosystems that snow leopards depend on, forcing prey species to lower altitudes and bringing leopards into more frequent contact with human settlements." },
      { type:"callout", icon:"🐾", text:"The Snow Leopard Trust is actively seeking donations to expand the community livestock insurance program to two new regions in Pakistan and Tajikistan." },
    ]
  },
  {
    tag:"Policy Win", date:"Jan 2026",
    title:"Global Plastics Treaty Signed by 175 Nations at UN Summit",
    excerpt:"In a landmark agreement, world leaders committed to eliminating single-use plastics by 2035, protecting oceans and marine wildlife.",
    img:"https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop",
    readTime:"7 min read", author:"Lena Hargrove", authorRole:"Environmental Policy Correspondent",
    heroImg:"https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=600&fit=crop",
    body:[
      { type:"intro", text:"After three years of fraught negotiations, 175 nations signed the Global Plastics Treaty in Geneva this January — a legally binding agreement committing every signatory to eliminating single-use plastics by 2035. Environmental groups are calling it the most significant environmental treaty since the Paris Agreement." },
      { type:"pullquote", text:"Plastic pollution is not just an ocean problem — it's a wildlife crisis, a human health crisis, and a climate crisis all rolled into one.", attribution:"UN Environment Programme Director, Inger Andersen" },
      { type:"paragraph", text:"The treaty covers the full lifecycle of plastic — from the extraction of fossil fuels used to produce it, through its manufacture, distribution, use, and disposal. For the first time, it creates binding targets for plastic reduction rather than voluntary pledges, backed by a compliance mechanism and a $5 billion transition fund." },
      { type:"stats", items:[{val:"175",label:"Nations signed"},{val:"8M tons",label:"Plastic entering oceans yearly"},{val:"2035",label:"Target year for elimination"},{val:"$5B",label:"Transition fund committed"}] },
      { type:"subheading", text:"What the Treaty Actually Bans" },
      { type:"paragraph", text:"By 2028, single-use plastic bags, straws, cutlery, foam food containers, and cotton bud sticks must be phased out across all signatory nations. By 2030, microplastic additions to products face strict limits. The 2035 deadline applies to all remaining single-use packaging formats." },
      { type:"subheading", text:"What It Means for Wildlife" },
      { type:"paragraph", text:"Marine biologists have documented plastic in the stomachs of over 700 species. If fully implemented, models project the treaty could prevent over 200 million tons of plastic from entering the environment over the next decade." },
      { type:"callout", icon:"✊", text:"Hold your government accountable to this treaty by signing petitions, contacting representatives, and supporting organisations that monitor compliance." },
    ]
  },
  {
    tag:"Habitat", date:"Dec 2025",
    title:"Brazil's Atlantic Forest Sees Largest Restoration in History",
    excerpt:"A coalition of NGOs and government agencies announced the successful replanting of 500,000 hectares of Brazil's most biodiverse forest.",
    img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    readTime:"8 min read", author:"Carlos Mendez", authorRole:"Senior Ecologist, SOS Mata Atlântica",
    heroImg:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop",
    body:[
      { type:"intro", text:"Brazil's Atlantic Forest — one of the world's most biodiverse and most threatened ecosystems — has reached a landmark milestone. A coalition of government agencies, NGOs, and local communities has completed the replanting of 500,000 hectares, making it the largest tropical forest restoration effort in recorded history." },
      { type:"pullquote", text:"The Atlantic Forest was reduced to less than 12% of its original cover. Today, we are rewriting that story — and the animals are already coming back.", attribution:"Carlos Mendez, SOS Mata Atlântica" },
      { type:"paragraph", text:"Once stretching along Brazil's entire Atlantic coast, the Atlantic Forest was devastated by centuries of agriculture, logging, and urban expansion. The species that call it home include over 20,000 plant species, 1,000 bird species, and 300 mammals, many found nowhere else on Earth." },
      { type:"stats", items:[{val:"500K",label:"Hectares replanted"},{val:"12%",label:"Forest cover that remained"},{val:"20,000+",label:"Plant species in the forest"},{val:"148",label:"Communities involved"}] },
      { type:"subheading", text:"How 500,000 Hectares Were Replanted" },
      { type:"paragraph", text:"The restoration programme used a combination of active planting and passive regeneration. Over 60 million native seedlings were planted by a workforce of 148 local communities, many of them smallholder farmers who now earn income from reforestation contracts." },
      { type:"subheading", text:"A Model for the World" },
      { type:"paragraph", text:"Camera traps in replanted corridors are already recording the return of pumas, tapirs, giant anteaters, and the golden lion tamarin — a primate that once had fewer than 200 individuals remaining in the wild." },
      { type:"callout", icon:"🌱", text:"Rainforest Trust is funding an expansion of the Atlantic Forest corridor project. A donation of $25 protects one acre of this irreplaceable ecosystem." },
    ]
  },
];

export const ORGS = [
  { name:"Captain Paul Watson Foundation", desc:"Protecting marine ecosystems through direct action against illegal fishing and whaling.", tags:["Marine Conservation","Ocean Activism","Whale Protection"], img:"https://i.guim.co.uk/img/static/sys-images/Environment/Pix/pictures/2008/01/17/seashepherd460.jpg?width=620&dpr=2&s=none&crop=none", vid:"j4gGcOBut5E", url:"https://www.paulwatsonfoundation.org" },
  { name:"World Wildlife Fund",            desc:"Global conservation working in 100+ countries to protect endangered species and habitats.", tags:["Species Protection","Habitat Conservation","Climate Action"], img:"https://images.unsplash.com/photo-1564349a7e93-8d4a5c6dbe1e?w=600", vid:"oCaN3xZ0B8o", url:"https://www.worldwildlife.org" },
  { name:"The Nature Conservancy",         desc:"Conserving lands and waters where the greatest diversity of life lives.", tags:["Land Protection","Water Conservation","Climate Resilience"], img:"https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?w=600", vid:"OrHkrBfDs9I", url:"https://www.nature.org" },
  { name:"Conservation International",     desc:"Protecting nature and the people it sustains in biodiversity hotspots worldwide.", tags:["Biodiversity","Indigenous Rights","Sustainable Dev"], img:"https://images.pexels.com/photos/243526/pexels-photo-243526.jpeg?w=600", vid:"uO2K0keUe9g", url:"https://www.conservation.org" },
];