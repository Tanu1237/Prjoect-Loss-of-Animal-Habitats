const endangeredData = [
  {
    name: "Tiger",
    image: "https://images.pexels.com/photos/14040355/pexels-photo-14040355.jpeg",
    habitat: "Forests, grasslands, mangroves",
    threat: "Poaching, habitat destruction, human-wildlife conflict",
    description: `Tigers are the largest wild cats and function as apex predators, meaning they sit at the top of the food chain. By controlling prey populations such as deer and wild boar, they help maintain ecological balance and prevent overgrazing, which protects forest regeneration.

Historically, tigers ranged across much of Asia, but their population has declined by over 95% in the last century. Illegal poaching for skins and body parts, deforestation, infrastructure development, and agriculture have fragmented their habitats into isolated pockets.

As forests shrink, tigers increasingly come into contact with humans, leading to conflict and retaliatory killings. Conservation efforts focus on protected reserves, wildlife corridors, strict anti-poaching enforcement, community participation, and international cooperation to ensure long-term survival.`
  },

  {
    name: "Giraffe",
    image: "https://images.pexels.com/photos/6168825/pexels-photo-6168825.jpeg",
    habitat: "Savannas, woodlands",
    threat: "Habitat loss, illegal hunting",
    description: `Giraffes are the tallest land animals on Earth, easily recognized by their long necks, long legs, and unique spot patterns. They feed mainly on leaves from tall trees, particularly acacia, helping shape vegetation structure in savanna ecosystems.

Despite their popularity, giraffe populations have undergone a quiet decline due to expanding agriculture, habitat fragmentation, civil unrest, and illegal hunting. Many local populations have disappeared entirely without widespread attention.

Conservation programs emphasize habitat protection, population monitoring, anti-poaching initiatives, and transboundary conservation efforts to ensure giraffes continue roaming Africa’s landscapes.`
  },

  {
    name: "Hippopotamus",
    image: "https://images.pexels.com/photos/14042858/pexels-photo-14042858.jpeg",
    habitat: "Rivers, lakes, wetlands",
    threat: "Poaching, habitat loss",
    description: `Hippopotamuses are large semi-aquatic mammals that spend most of the day submerged in water to regulate body temperature. At night, they graze on land and transport nutrients back into rivers, enriching aquatic ecosystems.

Hippos face increasing threats from dam construction, water pollution, shrinking wetlands, and illegal hunting for meat and ivory-like teeth. Human encroachment near rivers has intensified conflict and reduced safe habitats.

Protecting freshwater ecosystems, enforcing wildlife laws, and managing water resources sustainably are essential to preserving hippo populations.`
  },

  {
    name: "Chimpanzee",
    image: "https://images.pexels.com/photos/22589266/pexels-photo-22589266.jpeg",
    habitat: "Tropical forests, savannas",
    threat: "Deforestation, illegal wildlife trade, disease",
    description: `Chimpanzees are highly intelligent primates sharing nearly 99% of human DNA. They demonstrate tool use, problem-solving abilities, emotional intelligence, and complex social relationships.

Rapid deforestation, illegal pet trade, poaching, and disease outbreaks such as Ebola have devastated chimpanzee populations. Infant chimpanzees are often captured after adults are killed.

Conservation strategies include forest protection, wildlife law enforcement, disease monitoring, research, and community education programs that promote coexistence.`
  },

  {
    name: "Asian Elephant",
    image: "https://images.pexels.com/photos/13257031/pexels-photo-13257031.jpeg",
    habitat: "Forests, grasslands",
    threat: "Habitat fragmentation, human conflict, poaching",
    description: `Asian elephants are keystone species that shape landscapes by dispersing seeds and clearing vegetation. Their migratory behavior supports forest diversity and regeneration.

Habitat fragmentation from roads, farms, and urban expansion disrupts migration routes, increasing human-elephant conflict. Poaching for tusks and loss of forest cover continue to threaten survival.

Conservation efforts focus on wildlife corridors, conflict mitigation, habitat restoration, and community-based conservation.`
  },

  {
    name: "Blue Whale",
    image: "https://images.pexels.com/photos/4666753/pexels-photo-4666753.jpeg",
    habitat: "Open oceans",
    threat: "Ship strikes, climate change, ocean pollution",
    description: `Blue whales are the largest animals ever to exist, growing over 30 meters long. They feed almost entirely on krill and play a critical role in nutrient cycling within marine ecosystems.

Although commercial whaling has ended, blue whales face threats from ship collisions, underwater noise pollution, plastic waste, and climate-driven changes in krill distribution.

Global marine conservation, ship speed regulations, and pollution reduction are essential for their recovery.`
  },

  {
    name: "Rhinoceros",
    image: "https://images.pexels.com/photos/9533170/pexels-photo-9533170.jpeg",
    habitat: "Grasslands, savannas",
    threat: "Poaching, illegal wildlife trade",
    description: `Rhinoceroses are large herbivores that shape grassland ecosystems through grazing. Despite their size, they are extremely vulnerable due to slow reproduction.

Poaching for horns remains the greatest threat. Habitat loss further reduces breeding success.

Anti-poaching enforcement, international trade bans, habitat protection, and community involvement are critical to rhino survival.`
  },

  {
    name: "Sea Turtle",
    image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
    habitat: "Oceans and coastal regions",
    threat: "Plastic pollution, fishing nets, habitat loss",
    description: `Sea turtles have survived for over 100 million years and are essential for maintaining healthy coral reefs and seagrass beds.

They are threatened by plastic ingestion, fishing bycatch, coastal development, and climate change affecting nesting beaches.

Conservation includes beach protection, fishing regulations, and reducing marine pollution.`
  },

  {
    name: "Gorilla",
    image: "https://images.pexels.com/photos/6949387/pexels-photo-6949387.jpeg",
    habitat: "Tropical rainforests",
    threat: "Deforestation, disease, hunting",
    description: `Gorillas live in close-knit family groups and contribute to forest regeneration through seed dispersal.

Deforestation, hunting, and diseases such as Ebola have caused severe population declines.

Protected habitats, medical monitoring, and ecotourism help support conservation.`
  },

  {
    name: "Red Panda",
    image: "https://images.pexels.com/photos/26087027/pexels-photo-26087027.jpeg",
    habitat: "Temperate mountain forests",
    threat: "Deforestation, climate change",
    description: `Red pandas are arboreal mammals dependent on bamboo forests. Habitat fragmentation and climate change have severely reduced populations.

Conservation focuses on forest protection, habitat corridors, and public awareness.`
  },

  {
    name: "Great Indian Bustard",
    image: "https://images.pexels.com/photos/33536155/pexels-photo-33536155.jpeg",
    habitat: "Grasslands",
    threat: "Habitat loss, power line collisions",
    description: `The Great Indian Bustard is one of the heaviest flying birds and an indicator of healthy grassland ecosystems.

Infrastructure development and power line collisions have critically reduced numbers.

Habitat protection and underground power lines are key conservation measures.`
  },

  {
    name: "Snow Leopard",
    image: "https://images.pexels.com/photos/4033662/pexels-photo-4033662.jpeg",
    habitat: "High-altitude mountains",
    threat: "Poaching, climate change, human conflict",
    description: `Snow leopards are elusive predators adapted to cold mountain regions. They regulate prey populations in fragile ecosystems.

Climate change, livestock conflict, and poaching threaten survival.

Conservation includes mountain habitat protection and community engagement.`
  },

  {
    name: "Kangaroo",
    image: "https://images.pexels.com/photos/6704257/pexels-photo-6704257.png",
    habitat: "Grasslands, forests",
    threat: "Habitat loss, bushfires, climate change",
    description: `Kangaroos are iconic Australian marsupials. Droughts, bushfires, and land clearing have reduced populations.

Habitat management and climate resilience are crucial for survival.`
  },

  {
    name: "Koala",
    image: "https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg",
    habitat: "Eucalyptus forests",
    threat: "Deforestation, bushfires, disease",
    description: `Koalas rely exclusively on eucalyptus trees. Large-scale deforestation and bushfires have devastated populations.

Conservation includes habitat restoration and disease management.`
  },

  {
    name: "Philippine Eagle",
    image: "https://images.pexels.com/photos/31637116/pexels-photo-31637116.jpeg",
    habitat: "Tropical forests",
    threat: "Deforestation, hunting",
    description: `The Philippine eagle is among the rarest birds of prey. Deforestation has left only a few breeding pairs.

Forest protection and captive breeding are essential.`
  },

  {
    name: "African Wild Dog",
    image: "https://images.pexels.com/photos/32935826/pexels-photo-32935826.jpeg",
    habitat: "Savannas, woodlands",
    threat: "Habitat loss, disease",
    description: `African wild dogs are highly social pack hunters. Habitat fragmentation and disease transmission threaten survival.

Protected areas and disease control are key.`
  },

  {
    name: "Snowy Owl",
    image: "https://images.pexels.com/photos/8181538/pexels-photo-8181538.jpeg",
    habitat: "Arctic tundra, open fields",
    threat: "Climate change, habitat disturbance",
    description: `Snowy owls depend on Arctic ecosystems. Climate change alters prey availability and breeding success.

Monitoring and habitat protection support conservation.`
  },

  {
    name: "Giant Panda",
    image: "https://images.pexels.com/photos/29088370/pexels-photo-29088370.jpeg",
    habitat: "Bamboo forests",
    threat: "Habitat fragmentation, low reproduction",
    description: `Giant pandas rely almost entirely on bamboo. Habitat fragmentation limits breeding.

Reforestation and habitat corridors aid recovery.`
  },

  {
    name: "Maned Wolf",
    image: "https://images.pexels.com/photos/7402790/pexels-photo-7402790.jpeg",
    habitat: "Grasslands, savannas, forests",
    threat: "Habitat loss, vehicle collisions",
    description: `Maned wolves help control rodent populations and disperse seeds.

Road mortality and agriculture threaten populations.`
  },

  {
    name: "Leopard",
    image: "https://images.pexels.com/photos/6652059/pexels-photo-6652059.jpeg",
    habitat: "Forests, grasslands",
    threat: "Poaching, habitat loss",
    description: `Leopards are adaptable predators that maintain prey balance.

Poaching and habitat loss remain major threats.`
  }
];

export default endangeredData;
