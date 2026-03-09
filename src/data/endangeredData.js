const endangeredData = [

{
id:"tiger",
type:"Mammals",
title:"Tiger",
keywords:["tiger","big cat","apex predator","forest","asia","poaching","mammal"],
name:"Tiger",
image:"https://images.pexels.com/photos/14040355/pexels-photo-14040355.jpeg",

habitat:"Tigers live in diverse habitats including tropical rainforests, mangrove swamps, grasslands, and temperate forests across Asia. They require dense vegetation for cover and large territories with sufficient prey populations such as deer, wild boar, and antelope. Most wild tigers now survive in protected reserves in countries like India, Nepal, Bhutan, Russia, and parts of Southeast Asia.",

threat:"Major threats include illegal poaching for their skins and body parts, habitat destruction caused by logging and agriculture, infrastructure development that fragments forests, and increasing human-wildlife conflict as people expand into forested areas.",

description:`Tigers are the largest members of the cat family and act as apex predators in their ecosystems. By controlling herbivore populations, they help maintain ecological balance and support healthy forest regeneration.

Historically, tigers ranged across much of Asia, but their numbers have declined drastically over the last century. Conservation programs today focus on anti-poaching patrols, habitat restoration, wildlife corridors connecting forest reserves, and community participation in conservation.

Protecting tigers also protects many other species because tiger habitats support entire ecosystems rich in biodiversity.`

},

{
id:"giraffe",
type:"Mammals",
title:"Giraffe",
keywords:["giraffe","savanna","africa","tall","mammal","woodland","herbivore"],
name:"Giraffe",
image:"https://images.pexels.com/photos/6168825/pexels-photo-6168825.jpeg",

habitat:"Giraffes inhabit African savannas, open woodlands, and grasslands where tall acacia trees grow. These ecosystems provide both food and open visibility that helps giraffes detect predators from long distances.",

threat:"Habitat loss due to agriculture, illegal hunting for meat and hides, and fragmentation caused by roads and settlements threaten giraffe populations.",

description:`Giraffes are the tallest land animals on Earth and can grow over 5 meters in height. Their long necks allow them to feed on leaves high in trees that other herbivores cannot reach.

They help shape vegetation patterns in savanna ecosystems and also disperse seeds while moving across landscapes. Despite their iconic status, giraffe populations have declined in recent decades due to habitat loss and human activities.`
},

{
id:"hippopotamus",
type:"Mammals",
title:"Hippopotamus",
keywords:["hippo","hippopotamus","river","wetland","africa","semi-aquatic","mammal"],
name:"Hippopotamus",
image:"https://images.pexels.com/photos/14042858/pexels-photo-14042858.jpeg",

habitat:"Hippos inhabit rivers, lakes, and wetlands across sub-Saharan Africa. They spend most of the day submerged in water to stay cool and come onto land at night to graze on grasses.",

threat:"Poaching for meat and ivory-like teeth, habitat destruction caused by dam construction and water pollution, and conflicts with humans near rivers threaten hippo populations.",

description:`Hippopotamuses are large semi-aquatic mammals known for their powerful jaws and territorial behavior. Despite their heavy bodies, they can run surprisingly fast on land.

Hippos play an important ecological role by transporting nutrients from land to water ecosystems, enriching rivers and supporting aquatic life.`
},

{
id:"chimpanzee",
type:"Mammals",
title:"Chimpanzee",
keywords:["chimpanzee","primate","ape","africa","forest","intelligence","mammal"],
name:"Chimpanzee",
image:"https://images.pexels.com/photos/22589266/pexels-photo-22589266.jpeg",

habitat:"Chimpanzees live in tropical forests, woodland savannas, and forest edges across central and western Africa where fruit trees and other food sources are abundant.",

threat:"Deforestation, illegal wildlife trade, bushmeat hunting, and diseases such as Ebola threaten chimpanzee populations.",

description:`Chimpanzees are among the most intelligent animals on Earth and share nearly 99 percent of their DNA with humans. They use tools, solve problems, and live in complex social communities.

Their survival depends heavily on protecting forest habitats and preventing illegal capture for the pet trade.`
},

{
id:"asian-elephant",
type:"Mammals",
title:"Asian Elephant",
keywords:["asian elephant","elephant","asia","forest","keystone species","mammal","grassland"],
name:"Asian Elephant",
image:"https://images.pexels.com/photos/13257031/pexels-photo-13257031.jpeg",

habitat:"Asian elephants inhabit forests, grasslands, and scrublands across South and Southeast Asia. They travel long distances between feeding and watering sites.",

threat:"Habitat fragmentation, poaching for ivory, and human-elephant conflict are the main threats.",

description:`Asian elephants are considered keystone species because they shape ecosystems by dispersing seeds and clearing vegetation.

Their migratory behavior helps maintain biodiversity across forests. However, shrinking habitats are increasing conflicts with humans.`
},

{
id:"blue-whale",
type:"Marine Life",
title:"Blue Whale",
keywords:["blue whale","whale","ocean","marine","largest animal","krill","cetacean"],
name:"Blue Whale",
image:"https://images.pexels.com/photos/4666753/pexels-photo-4666753.jpeg",

habitat:"Blue whales inhabit deep open oceans worldwide and migrate long distances between feeding grounds in cold waters and breeding grounds in warmer seas.",

threat:"Ship strikes, underwater noise pollution, climate change affecting krill populations, and plastic pollution threaten blue whales.",

description:`Blue whales are the largest animals ever known to exist on Earth, reaching lengths of more than 30 meters.

They feed almost entirely on tiny shrimp-like animals called krill and play a major role in maintaining ocean ecosystems through nutrient cycling.`
},

{
id:"rhinoceros",
type:"Mammals",
title:"Rhinoceros",
keywords:["rhino","rhinoceros","savanna","africa","poaching","horn","mammal","grassland"],
name:"Rhinoceros",
image:"https://images.pexels.com/photos/9533170/pexels-photo-9533170.jpeg",

habitat:"Rhinos inhabit grasslands, savannas, and tropical forests across Africa and Asia where they graze on grasses and shrubs.",

threat:"Poaching for rhino horns used in illegal wildlife trade is the biggest threat.",

description:`Rhinoceroses are large herbivores that help shape ecosystems through grazing.

Due to illegal demand for their horns, rhinos have been heavily targeted by poachers, making strict conservation measures necessary.`
},

{
id:"sea-turtle",
type:"Reptiles",
title:"Sea Turtle",
keywords:["sea turtle","turtle","ocean","marine","coral reef","reptile","coastal"],
name:"Sea Turtle",
image:"https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",

habitat:"Sea turtles inhabit oceans worldwide and rely on sandy beaches for nesting.",

threat:"Plastic pollution, fishing nets, coastal development, and climate change threaten sea turtle populations.",

description:`Sea turtles have survived for more than 100 million years and are essential for maintaining healthy marine ecosystems.

They help maintain seagrass beds and coral reefs which support many other marine species.`
},

{
id:"gorilla",
type:"Mammals",
title:"Gorilla",
keywords:["gorilla","great ape","primate","rainforest","africa","mammal","endangered"],
name:"Gorilla",
image:"https://images.pexels.com/photos/6949387/pexels-photo-6949387.jpeg",

habitat:"Gorillas inhabit dense tropical rainforests and mountainous forests in central Africa.",

threat:"Deforestation, disease outbreaks, and illegal hunting threaten gorilla populations.",

description:`Gorillas live in close family groups led by a dominant silverback male.

They contribute to forest regeneration by dispersing seeds while feeding on fruits and vegetation.`
},

{
id:"red-panda",
type:"Mammals",
title:"Red Panda",
keywords:["red panda","panda","bamboo","mountain forest","asia","mammal","arboreal"],
name:"Red Panda",
image:"https://images.pexels.com/photos/26087027/pexels-photo-26087027.jpeg",

habitat:"Red pandas inhabit temperate forests in the Himalayan region where bamboo grows abundantly.",

threat:"Deforestation, climate change, and habitat fragmentation threaten red panda populations.",

description:`Red pandas are small arboreal mammals known for their reddish fur and bushy tails.

They rely heavily on bamboo forests and spend most of their lives in trees.`
},

{
id:"great-indian-bustard",
type:"Birds",
title:"Great Indian Bustard",
keywords:["great indian bustard","bustard","bird","grassland","india","critically endangered"],
name:"Great Indian Bustard",
image:"https://images.pexels.com/photos/33536155/pexels-photo-33536155.jpeg",

habitat:"Great Indian Bustards inhabit dry grasslands and semi-arid plains mainly in India.",

threat:"Habitat destruction, power-line collisions, and agricultural expansion are the biggest threats.",

description:`The Great Indian Bustard is one of the heaviest flying birds in the world and an indicator of healthy grassland ecosystems.

Conservation programs now focus on protecting grasslands and modifying power lines to prevent bird collisions.`
},

{
id:"snow-leopard",
type:"Mammals",
title:"Snow Leopard",
keywords:["snow leopard","leopard","big cat","mountain","himalaya","mammal","predator"],
name:"Snow Leopard",
image:"https://images.pexels.com/photos/4033662/pexels-photo-4033662.jpeg",

habitat:"Snow leopards live in high-altitude mountain ranges of Central and South Asia including the Himalayas.",

threat:"Poaching, climate change, and conflicts with livestock farmers threaten snow leopard populations.",

description:`Snow leopards are elusive predators adapted to extreme mountain environments.

Their thick fur and powerful limbs help them survive harsh climates and hunt agile prey on steep cliffs.`
},

{
id:"kangaroo",
type:"Mammals",
title:"Kangaroo",
keywords:["kangaroo","marsupial","australia","grassland","mammal","bushfire"],
name:"Kangaroo",
image:"https://images.pexels.com/photos/6704257/pexels-photo-6704257.png",

habitat:"Kangaroos inhabit grasslands, open forests, and deserts across Australia.",

threat:"Habitat destruction, climate change, droughts, and bushfires threaten some kangaroo populations.",

description:`Kangaroos are iconic Australian marsupials known for their powerful hind legs and ability to leap long distances.

They play important roles in maintaining grassland ecosystems.`
},

{
id:"koala",
type:"Mammals",
title:"Koala",
keywords:["koala","marsupial","australia","eucalyptus","mammal","forest","bushfire"],
name:"Koala",
image:"https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg",

habitat:"Koalas inhabit eucalyptus forests across eastern and southeastern Australia.",

threat:"Deforestation, bushfires, climate change, and disease outbreaks threaten koala populations.",

description:`Koalas spend most of their lives in trees and feed almost exclusively on eucalyptus leaves.

Protecting forests and restoring habitats are essential for koala survival.`
},

{
id:"philippine-eagle",
type:"Birds",
title:"Philippine Eagle",
keywords:["philippine eagle","eagle","bird","philippines","raptor","tropical forest","critically endangered"],
name:"Philippine Eagle",
image:"https://images.pexels.com/photos/31637116/pexels-photo-31637116.jpeg",

habitat:"The Philippine eagle inhabits dense tropical rainforests of the Philippines where tall trees are used for nesting.",

threat:"Deforestation and illegal hunting are the biggest threats.",

description:`The Philippine eagle is one of the largest and most powerful birds of prey in the world.

Due to massive habitat loss, only a few hundred individuals remain in the wild.`
},

{
id:"african-wild-dog",
type:"Mammals",
title:"African Wild Dog",
keywords:["african wild dog","painted wolf","wild dog","africa","savanna","pack","mammal"],
name:"African Wild Dog",
image:"https://images.pexels.com/photos/32935826/pexels-photo-32935826.jpeg",

habitat:"African wild dogs inhabit savannas, grasslands, and woodlands across sub-Saharan Africa.",

threat:"Habitat fragmentation, human conflict, and disease outbreaks threaten their survival.",

description:`African wild dogs are highly social predators that hunt in coordinated packs.

They are among the most efficient hunters in the animal kingdom.`
},

{
id:"snowy-owl",
type:"Birds",
title:"Snowy Owl",
keywords:["snowy owl","owl","bird","arctic","tundra","raptor","climate change"],
name:"Snowy Owl",
image:"https://images.pexels.com/photos/8181538/pexels-photo-8181538.jpeg",

habitat:"Snowy owls inhabit Arctic tundra regions and open fields.",

threat:"Climate change and habitat disturbance threaten their survival.",

description:`Snowy owls depend on cold Arctic ecosystems where they hunt rodents and small mammals.

Changes in climate affect their prey availability and breeding success.`
},

{
id:"giant-panda",
type:"Mammals",
title:"Giant Panda",
keywords:["giant panda","panda","china","bamboo","bear","mammal","endangered"],
name:"Giant Panda",
image:"https://images.pexels.com/photos/29088370/pexels-photo-29088370.jpeg",

habitat:"Giant pandas inhabit bamboo forests in mountainous regions of China.",

threat:"Habitat fragmentation and low reproduction rates threaten panda populations.",

description:`Giant pandas feed almost entirely on bamboo and play an important role in maintaining forest ecosystems.

Extensive conservation programs have helped stabilize their population.`
},

{
id:"maned-wolf",
type:"Mammals",
title:"Maned Wolf",
keywords:["maned wolf","wolf","south america","brazil","grassland","mammal","canid"],
name:"Maned Wolf",
image:"https://images.pexels.com/photos/7402790/pexels-photo-7402790.jpeg",

habitat:"Maned wolves inhabit grasslands, savannas, and scrub forests in South America.",

threat:"Habitat destruction and vehicle collisions threaten their populations.",

description:`Maned wolves are unique canids known for their long legs and fox-like appearance.

They help control rodent populations and disperse seeds across ecosystems.`
},

{
id:"leopard",
type:"Mammals",
title:"Leopard",
keywords:["leopard","big cat","africa","asia","forest","predator","mammal","poaching"],
name:"Leopard",
image:"https://images.pexels.com/photos/6652059/pexels-photo-6652059.jpeg",

habitat:"Leopards inhabit forests, grasslands, mountains, and deserts across Africa and Asia.",

threat:"Poaching, habitat loss, and conflict with humans threaten leopard populations.",

description:`Leopards are extremely adaptable predators capable of surviving in many different environments.

They help maintain ecological balance by regulating prey populations in their ecosystems.`
}

];

export default endangeredData;