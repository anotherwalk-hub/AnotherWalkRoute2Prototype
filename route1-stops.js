// ─────────────────────────────────────────────────────────────
//  AnotherWalk — Route data
//  Route: Amsterdam from the IJ
//  City:  Amsterdam
//  File:  route1-stops.js
//
//  ⚠️  TWO STOPS HAVE ESTIMATED COORDINATES (not in CSV):
//  - Stop 17 (Hoek Sluysgracht): estimated at hoek Oudeschans /
//    Houtkopersburgwal ≈ [lng:4.9040, lat:52.3706]
//  - Stop 22 (Smallest house / tea store): estimated at
//    Oude Hoogstraat ≈ [lng:4.8985, lat:52.3714]
//  Please verify both and update if needed.
// ─────────────────────────────────────────────────────────────

var ROUTE_META = {
  id: 'amsterdam-ij',
  title: 'The Center, Reconsidered',
  city: 'Amsterdam',
  label: 'Amsterdam · Route 1',
  stopCount: 30,
  duration: '±3.5 hr',
  center: [4.897, 52.373],
  zoom: 14,
  // Via-waypoints: steer the walking route through specific streets.
  // Format: { after: stopId, lat, lng }
  // To add more: copy a line and set 'after' to the stop id after which the point should appear.
  intro: 'This walk takes you through the historic heart of Amsterdam: an area that is lively, layered, sometimes chaotic, and deeply old. You\'ll walk through the Red Light District and other busy parts of the city center. It can feel touristy at times, but beneath that surface lies a place full of character, contradictions, and everyday life.<br><br>This route is not meant to be rushed or "ticked off." Walk it at your own pace. Pause when something catches your eye. Take detours, skip stops, sit down for a coffee or a drink. The walk starts at Amsterdam Central Station and gradually brings you deeper into the city, ending behind Dam Square, right in the center.<br><br>Along the way you\'ll find plenty of places to eat, drink, and rest. Some are mentioned, many are not — keep your eyes open and follow your curiosity.<br><br>A few practical notes: be mindful of cyclists — they appear suddenly and move fast. Watch your belongings, especially in busy areas. You will pass the Red Light District; be respectful of the people who live and work here. This route is about observing, not judging.<br><br>Most of all: don\'t just look — experience.',
  viaPoints: [
    { after: 11, lat: 52.37369656654916, lng: 4.897871984270471 }, // stop 11→12
    { after: 25, lat: 52.37257747748585, lng: 4.894000499788872 }, // stop 25→26
    { after: 30, lat: 52.37382330239057, lng: 4.889992860439131 }  // stop 30→end
  ]
};

var ROUTE_STOPS = [
  {
    id: 'start',
    type: 'start',
    label: 'S',
    name: 'IJ-side of Amsterdam Central Station',
    lat: 52.3795906,
    lng: 4.9018867,
    body: 'Begin at the back of Amsterdam Central Station, facing the IJ. This is not how most people enter the city. And that\'s exactly the point.<br><br>Isn\'t it amazing to have a central station directly on such a big river? Take a moment to look across the water. Ferries glide back and forth (ferries are free, by the way!), buildings rise in the distance, and the city feels open and spacious.<br><br>Standing on the IJ side of Central Station feels like standing at the edge of two different Amsterdams. The front of the station shows the city as most people imagine it: historic, busy, and postcard-perfect. This side is more open and raw, shaped by water, ferries, and movement. For a long time, the IJ was a working harbor where ships arrived with goods, people, and ideas from all over the world. Today, it has become one of the city\'s most important areas for growth.<br><br>Continue to walk through the station towards the front. If you like, you can take one of the many stairways up towards the tracks to check out the big central hallway where the trains depart.',
    tip: 'Check out the Starbucks at track 2B to transport yourself back in time.'
  },
  {
    id: 1,
    type: 'stop',
    label: '1',
    name: 'LuminAir (DoubleTree by Hilton Skylounge)',
    lat: 52.3765715,
    lng: 4.905451600000001,
    body: 'Walk past the waterways towards the DoubleTree by Hilton hotel. Here, you can take the elevator up to LuminAir, a cool skylounge where you can have a coffee or a drink if you like, but more importantly: look. You\'ll soon walk through parts of what you see from here. Don\'t feel like going up? Save the place for another time.<br><br>Seeing Amsterdam from above changes the way you understand the city. From LuminAir, you can clearly see how compact and carefully built the historic center is, with its canals and low buildings. At the same time, you look out over newer areas where there is more space to experiment and build differently.<br><br>From this height, the city feels calm and ordered, even though it can be busy and chaotic at street level. It\'s a perfect place to see and understand how everything fits together.'
  },
  {
    id: 2,
    type: 'stop',
    label: '2',
    name: 'Sea Palace (floating Chinese restaurant)',
    lat: 52.3757708,
    lng: 4.9062822,
    body: 'The Sea Palace may look a bit unexpected, but it fits perfectly into Amsterdam\'s story. The city has always been shaped by people arriving from elsewhere, often by water. Chinese sailors and traders were among the early migrant communities in this area, especially around the Zeedijk, where you will walk soon. Over time, they helped shape one of the oldest Chinatowns in Europe.<br><br>A floating restaurant like this feels playful, but it also reflects how natural water is to daily life in Amsterdam. Instead of hiding the river, the city builds on it, eats on it, and moves across it. The Sea Palace shows how different cultures found a place here without losing their own identity. It\'s a quiet reminder that Amsterdam has never been just one thing.'
  },
  {
    id: 3,
    type: 'stop',
    label: '3',
    name: "Café In 't Aepjen",
    lat: 52.3762704,
    lng: 4.900167499999999,
    body: 'You have just entered de Zeedijk, one of Amsterdam\'s oldest streets and still one of its most layered.<br><br>Café In \'t Aepjen feels like a place where stories stick to the walls. It is one of the oldest wooden buildings in the city, and it has been welcoming visitors for centuries. Sailors once gathered here after long journeys, sometimes paying for drinks with exotic animals brought back from abroad.<br><br>The Zeedijk itself has gone through many changes, from a rough period to a carefully restored street full of character. This café survived it all. Today, it stands as a reminder that the city\'s past isn\'t hidden in museums only, but still alive in places like this.<br><br>Peek through the windows, or have a drink inside. The walls, the low ceilings, the dark wood… everything carries memory.'
  },
  {
    id: 'opt1',
    type: 'optional',
    label: '🍳',
    icon: '🍳',
    name: 'Omelegg',
    lat: 52.3760641,
    lng: 4.899805499999999,
    body: 'Omelegg sits right in the middle of one of the busiest parts of the city, yet it feels surprisingly relaxed. Places like this reflect how Amsterdam\'s food culture has changed over the past years. Breakfast and brunch are no longer rushed meals, but moments to slow down and enjoy.<br><br>Even in tourist-heavy areas, you\'ll find spots where everyday city life still quietly continues. Stopping here isn\'t about chasing a "must-eat" place, but about observing how the city eats, rests, and socializes.'
  },
  {
    id: 4,
    type: 'stop',
    label: '4',
    name: 'Morning Owl Coffee',
    lat: 52.3746793,
    lng: 4.900868399999999,
    body: 'Morning Owl Coffee represents a more recent chapter in Amsterdam\'s story. Over the last decade, the city has embraced specialty coffee and small, quality-focused cafés. These places often attract a mix of locals, creatives, and visitors looking for something quieter than the main streets.<br><br>Even in the heart of a tourist area, spots like this offer a moment of calm. They show how modern city life weaves itself into historic surroundings without overpowering them. Coffee here is not just about caffeine, but about slowing down and being present.'
  },
  {
    id: 5,
    type: 'stop',
    label: '5',
    name: 'Patta',
    lat: 52.374683,
    lng: 4.900496,
    body: 'Patta (slang for shoe) is more than a shop; it\'s a reflection of modern Amsterdam culture. What started as a local sneaker store grew into an international brand with deep roots in the city. The founders drew inspiration from music, street culture, and their own backgrounds, all of which are part of Amsterdam\'s diverse identity.<br><br>Having a place like Patta in the historic center says something important: culture here is not frozen in time. New voices and styles are given space alongside old streets and buildings. Walking past or stepping inside, you can feel how the city continues to redefine itself.'
  },
  {
    id: 'opt3',
    type: 'optional',
    label: '🍔',
    icon: '🍔',
    name: 'Le Smash (Zeedijk)',
    lat: 52.37430253216961,
    lng: 4.900567384499221,
    body: 'If you feel like stepping slightly away from tradition, Le Smash offers a completely different, contemporary food experience. It shows how new ideas keep entering old streets. Just notice how naturally the old and new exist side by side here.',
    tip: 'The smash burgers come highly recommended.'
  },
  {
    id: 6,
    type: 'stop',
    label: '6',
    name: 'Korte Niezel – Bridge',
    lat: 52.3747036,
    lng: 4.8996135,
    body: 'Pause for a moment on the bridge at Korte Niezel.<br><br>This small bridge is easy to miss if you\'re walking too fast, but it\'s worth slowing down here. From this spot, the canals, old houses and narrow streets come together in a way that feels very "classic Amsterdam." The water reflects the buildings differently depending on the light, the season, or the time of day.<br><br>Lean on the railing for a second, look down the canal, and notice how close everything feels. This is the kind of view that explains Amsterdam without words.'
  },
  {
    id: 7,
    type: 'stop',
    label: '7',
    name: "Our Lord in the Attic (Ons' Lieve Heer op Solder)",
    lat: 52.3751438,
    lng: 4.8994358,
    body: 'Behind an ordinary canal house hides one of the most surprising places in the city. This hidden church was built at a time when Catholics were not allowed to openly practice their faith. Instead of large public buildings, people adapted by creating sacred spaces inside their homes.<br><br>Walking past, you would never guess what\'s inside. It\'s a reminder that Amsterdam\'s reputation for tolerance was often shaped quietly, behind closed doors. Look up at the house and imagine how many layers of life can exist within a single building. If you choose to go in, take your time. If not, knowing it\'s there is already enough.'
  },
  {
    id: 8,
    type: 'stop',
    label: '8',
    name: 'The Old Church & Koffieschenkerij',
    lat: 52.374643016496506,
    lng: 4.898420612017469,
    body: 'The Old Church is the oldest building in Amsterdam, standing right in the heart of the Red Light District. Take a moment to look closely at the building and notice how its different parts come together, each reflecting a different moment in time.<br><br>That contrast can feel strange at first: centuries-old history surrounded by neon lights and nightlife. Over time, the church has taken on a new role as a cultural space, hosting contemporary art and events. It reflects how Amsterdam constantly reuses its past instead of freezing it.<br><br>Right next to the church, almost hidden within its garden, De Koffie Schenkerij offers a calmer moment. Step into the courtyard, lower your voice, and feel how the city suddenly exhales here.'
  },
  {
    id: 'opt2',
    type: 'optional',
    label: '☕',
    icon: '☕',
    name: 'De Koffieschenkerij',
    lat: 52.3741148,
    lng: 4.898346699999999,
    body: 'Tucked into the courtyard of the Old Church, De Koffieschenkerij offers a rare moment of calm in this busy part of the city. Step into the courtyard, lower your voice, and feel how the city suddenly exhales here. A beautiful place to pause before continuing.'
  },
  {
    id: 9,
    type: 'stop',
    label: '9',
    name: 'Prostitution Information Center (PIC)',
    lat: 52.3747433,
    lng: 4.897821299999999,
    body: 'As you walk through this area, you\'ll naturally pass the red-lit windows. This part of the city often sparks curiosity, discomfort, or fascination — and sometimes all at once.<br><br>The Prostitution Information Center exists to provide context and correct common misunderstandings about sex work in Amsterdam. Whether you go inside or not, it\'s important to move through this area with respect. Avoid taking photos and remember that this is a workplace, not a spectacle.<br><br>The Red Light District is part of the city\'s reality, not just its reputation. Walk through slowly, observe quietly, and let the complexity of the place sink in.'
  },
  {
    id: 10,
    type: 'stop',
    label: '10',
    name: 'Dumpling Bros',
    lat: 52.3744303,
    lng: 4.8971558,
    body: 'This stop brings you back to the present. Dumpling Bros is casual, modern, and rooted in everyday city life. It reflects how food cultures continue to mix and evolve in Amsterdam, especially in this part of town.<br><br>The Zeedijk area has long been influenced by Chinese and Asian communities, and that history keeps finding new expressions. Grab something if you\'re hungry, or just notice how natural it feels to find places like this among centuries-old streets.',
    tip: 'Beef dumpling with mango sauce.'
  },
  {
    id: 11,
    type: 'stop',
    label: '11',
    name: 'Trompettersteeg (narrowest street in Amsterdam)',
    lat: 52.3738825,
    lng: 4.8971762,
    body: 'Trompettersteeg is often mentioned as the narrowest street in the city, but it\'s more interesting than just a fun fact. Standing here, the buildings feel almost close enough to touch. Streets like this weren\'t designed to impress, but to function. That says a lot about how Amsterdam grew from practical choices rather than grand plans.<br><br>The doors and windows you see in the street were used by prostitutes in the past, but as part of Amsterdam\'s work to reform the Red Light District, all the windows were converted into commercial buildings.'
  },
  {
    id: 12,
    type: 'stop',
    label: '12',
    name: 'Borstplaat in Brons',
    lat: 52.374017,
    lng: 4.897810600000001,
    body: 'This small bronze artwork is easy to overlook, but that\'s exactly what makes it special. Borstplaat in Brons belongs to a quieter layer of public art in Amsterdam — the kind meant to be discovered rather than announced.<br><br>It is often attributed to De Onbekende Beeldhouwer (The Unknown Sculptor), a mysterious figure linked to a whole series of artworks placed anonymously across the city. The sculpture was secretly buried here during a night in February 1993. At the time, local residents complained and city services pushed for its removal. Yet it stayed.'
  },
  {
    id: 13,
    type: 'stop',
    label: '13',
    name: 'Nam Kee & Chinatown',
    lat: 52.37372512048745,
    lng: 4.900371520293544,
    body: 'As you step back onto the Zeedijk, you\'ll notice the atmosphere shifting almost immediately. This is where you naturally enter Amsterdam\'s Chinatown — something you can already sense from the signage, smells, and architecture around you.<br><br>Nam Kee is one of the most well-known Chinese restaurants in Amsterdam. It became part of modern Dutch culture not just because of its food, but also through literature and film — playing a central role in <em>The Oysters of Nam Kee</em>, a novel and later a film that captured a raw, intimate portrait of growing up in Amsterdam.<br><br>You don\'t have to eat here to feel that atmosphere. Just standing outside already tells part of the story.'
  },
  {
    id: 14,
    type: 'stop',
    label: '14',
    name: 'Fo Guang Shan He Hua Temple',
    lat: 52.37378435668287,
    lng: 4.900009176232494,
    body: 'The Fo Guang Shan He Hua Temple feels calm the moment you step inside. Built in traditional Chinese style, it is one of the largest Buddhist temples in Europe. The temple reflects the long-standing presence of Chinese culture in this area, but also its evolution into something visible and open.<br><br>You don\'t need to know anything about Buddhism to appreciate the space. Step in quietly, slow your pace, and observe the details — the colors, the symmetry, the atmosphere. Even if you stay for just a minute, it offers a rare sense of stillness in the middle of the city.'
  },
  {
    id: 15,
    type: 'stop',
    label: '15',
    name: 'Nieuwmarkt & Café De Waag',
    lat: 52.37271149999999,
    lng: 4.9004026,
    body: 'Nieuwmarkt opens up suddenly after the narrow streets around it, giving you space to breathe. At the center stands De Waag, one of the oldest remaining city gates of Amsterdam. Over the centuries, it has served many purposes, from guild hall to weigh house.<br><br>This is also where Rembrandt situated <em>The Anatomy Lesson of Dr. Nicolaes Tulp</em>, linking this square directly to one of the most famous paintings in Dutch history.<br><br>Sit on the edge of the square, or grab a drink at Café De Waag if you like. Just watch the mix of locals, visitors, and everyday city life. This is a place where Amsterdam feels lived-in rather than staged.'
  },
  {
    id: 16,
    type: 'stop',
    label: '16',
    name: 'Keizersbrug',
    lat: 52.3713084,
    lng: 4.9037935,
    body: 'From this point, the city opens up again toward the water. On your left, you can see the green roof of NEMO Science Museum, a bold modern building that contrasts with the historic surroundings. A bit closer on the left side stands the Montelbaanstoren, a much older watchtower with a quieter presence. Seeing both in one view highlights how Amsterdam layers centuries without erasing them.<br><br>If you look down at the water, you\'ll also notice the houseboats lining the canals. In a city where space has always been limited, Amsterdam learned to use the water as living space too. These boats aren\'t temporary or symbolic — people actually live here.'
  },
  {
    id: 17,
    type: 'stop',
    label: '17',
    name: 'Hoek Sluysgracht',
    lat: 52.37010791791766,
    lng: 4.902462456714898,
    body: 'On the corner of Oudeschans and Houtkopersburgwal, pause for a moment and look across the water. Here you have a clear view of De Sluyswacht, a small building that today functions as a bar, but once played a very practical role in the city. Built in the late 17th century, it was originally a watch house for the sluis (lock), where guards controlled water levels and boat traffic.<br><br>This spot quietly reminds you that Amsterdam has always been engineered as much as it has been designed. Water here was not just scenery — it was infrastructure, carefully managed to keep the city livable. What now feels picturesque was once essential urban technology.'
  },
  {
    id: 18,
    type: 'stop',
    label: '18',
    name: 'House of GASSAN',
    lat: 52.3695852,
    lng: 4.904130500000001,
    body: 'House of GASSAN highlights a different side of Amsterdam: craftsmanship, trade, and quiet luxury. The building originally housed the diamond workshop BOAS, one of the many traditional diamond polishing businesses that shaped Amsterdam\'s reputation as a world-leading diamond center. Techniques and skills were brought by migrant communities, forming a craft that still impresses globally.<br><br>Today, it has evolved into House of GASSAN, a family-run business keeping these centuries-old traditions alive while adapting to modern luxury standards. Behind these doors, diamonds are cut and polished with extreme precision — sometimes taking weeks to finish a single stone.<br><br>In typical Amsterdam fashion, centuries of wealth and craftsmanship sit quietly behind ordinary brick walls.',
    tip: 'House of GASSAN offers free tours in this building. Check out their website for more information.'
  },
  {
    id: 'opt4',
    type: 'optional',
    label: '🥯',
    icon: '🥯',
    name: "Tony's NY City Bagels",
    lat: 52.36907369999999,
    lng: 4.902937,
    body: 'If you\'re ready for a pause, this is a solid and comforting option. Tony\'s brought the classic New York–style bagel to Amsterdam long before it became a trend. The bagels are boiled, baked, and generously topped — just as they should be.<br><br>The founder, a New Yorker himself, introduced the city to the real thing over twenty years ago, and the formula hasn\'t changed much since. New York flavors in the middle of old Amsterdam. It\'s casual, unfussy, and surprisingly grounding.'
  },
  {
    id: 19,
    type: 'stop',
    label: '19',
    name: 'Rembrandt House Museum',
    lat: 52.369369,
    lng: 4.901235,
    body: 'This is where Rembrandt lived, worked, and built his reputation — and eventually lost it again. The house tells a very human story of success, ambition, and vulnerability, right in the middle of the city.<br><br>In the 17th century, this neighborhood was buzzing with traders, collectors, and artists, making it the perfect place for someone like Rembrandt to observe life up close. You can choose to step inside and explore the museum now, save it for another visit, or simply stay outside for a moment. Even from the street, the house tells a story.'
  },
  {
    id: 20,
    type: 'stop',
    label: '20',
    name: 'Zuiderkerk',
    lat: 52.3703054,
    lng: 4.899804,
    body: 'The Zuiderkerk stands proudly in this part of the city, with its elegant tower visible from afar. Built in the early 17th century, it was Amsterdam\'s first Protestant church and for a long time a true anchor for the surrounding neighborhood. Today it has found a new role as a cultural venue for exhibitions and events.<br><br>Much of the surrounding area was heavily damaged during World War II, and later cleared as part of post-war reconstruction plans. The result: a 17th-century church standing calmly among post-war architecture. It\'s an honest snapshot of Amsterdam — layered, imperfect, and shaped as much by loss and recovery as by beauty.'
  },
  {
    id: 21,
    type: 'stop',
    label: '21',
    name: 'Cheesecake Project',
    lat: 52.3713624,
    lng: 4.8986816,
    body: 'Cheesecake Project brings a modern, playful energy to the historic streets. Inspired by the famous Basque-style cheesecake, the focus here is on simplicity done extremely well. Each cake is made with high-quality ingredients and a custom blend of cheeses, baked on a subtle cookie base that adds just enough texture.<br><br>This is craftsmanship rather than fast food, made for people who are happy to slow down and enjoy one really good thing. And even if you\'re not hungry, noticing places like this helps you see how modern food culture quietly settles into historic streets.'
  },
  {
    id: 'opt5',
    type: 'optional',
    label: '🍟',
    icon: '🍟',
    name: 'Fabel Friet, Oude Hoogstraat',
    lat: 52.3713085,
    lng: 4.8978994,
    body: 'If you\'re curious about local snacks, this spot is a modern twist on Amsterdam street food. It has a big social media following (a real TikTok hype), but also delivers tasty fries — showing that sometimes, tradition and hype can coexist.'
  },
  {
    id: 22,
    type: 'stop',
    label: '22',
    name: 'The Smallest House (tea store)',
    lat: 52.37121198080867,
    lng: 4.897705106562647,
    body: 'This cozy shop sits inside what is often called the smallest house in Amsterdam. Only 2.02 meters wide and about 5 meters deep, the building dates back to 1738 and is a reminder of how densely the city was once built. Narrow plots like this were common, as space was scarce and taxes were often calculated based on the width of a façade.<br><br>Today, the house is home to a family-run tea store with carefully selected teas, ceramics, and small sweets. They also host high teas, tea tastings, and even matcha classes — turning this tiny space into a place of quiet attention and ritual.<br><br>Take a moment to look at the façade and imagine daily life in a house this narrow. It\'s a small stop, but it tells a big story about how Amsterdam learned to live cleverly within its limits.'
  },
  {
    id: 23,
    type: 'stop',
    label: '23',
    name: 'Hotel Sofitel Legend The Grand Amsterdam',
    lat: 52.3709309,
    lng: 4.8955845,
    body: 'The Grand is one of Amsterdam\'s most prestigious hotels, but its story goes far beyond luxury. The complex is made up of former convents, a 15th-century guesthouse, and later the old city hall, where Queen Beatrix was married in 1966. Over the years, royalty, world leaders, and celebrities have stayed here.<br><br>While it\'s certainly among the most exclusive hotels in Amsterdam, it doesn\'t shut itself off from everyday life. You can simply walk inside, have a coffee or lunch in the courtyard or lobby, and experience the atmosphere without staying the night. Step through the entrance and notice how the noise of the city fades almost instantly.'
  },
  {
    id: 24,
    type: 'stop',
    label: '24',
    name: 'Grimburgwal',
    lat: 52.3693542,
    lng: 4.8942488,
    body: 'Grimburgwal is one of those canals that feels almost accidental, yet deeply intentional. Tucked between busier routes, it has long been part of Amsterdam\'s academic and intellectual life, with university buildings and former monasteries lining the canal.<br><br>Look closely and you\'ll see a mix of old façades and recently restored quays — the result of ongoing work to strengthen Amsterdam\'s canal walls, many of which are centuries old and slowly sinking. What looks timeless here actually depends on continuous, invisible effort.'
  },
  {
    id: 25,
    type: 'stop',
    label: '25',
    name: 'The Lobby',
    lat: 52.37095309999999,
    lng: 4.8936747,
    body: 'The Lobby is part of a hotel, but it doesn\'t feel like one in the traditional sense. Tucked away on the Nes, it\'s a calm and inviting restaurant where you can comfortably sit down for breakfast, lunch, or dinner.<br><br>What makes this stop special is its location: you\'re walking through a relatively quiet street, even though the Dam and some of the busiest parts of the city are just one street away. This contrast is very Amsterdam — intensity and calm existing side by side.'
  },
  {
    id: 26,
    type: 'stop',
    label: '26',
    name: 'Nationaal Monument op De Dam',
    lat: 52.3728363,
    lng: 4.8936944,
    body: 'Dam Square immediately feels different: wider, louder, and more layered.<br><br>The National Monument stands as a reminder of resilience and remembrance, honoring those who suffered in World War II. Its white stone contrasts with the lively square around it, where tourists, street performers, and locals all converge. Notice how the city keeps history visible amidst everyday life.<br><br>De Dam itself is a crossroads of Amsterdam, connecting centuries of trade, governance, and public life. Standing here, you can feel the city\'s pulse — both past and present.'
  },
  {
    id: 27,
    type: 'stop',
    label: '27',
    name: 'Hotel Krasnapolsky',
    lat: 52.3726648,
    lng: 4.8942603,
    body: 'Hotel Krasnapolsky has welcomed guests for over a century, hosting royalty, artists, and travelers from around the world. Walking past it gives you a glimpse of how hospitality and commerce have long shaped this part of the city.<br><br>The building balances tradition with the modern energy of De Dam, showing how places can evolve without losing their identity. Pause for a second and watch people coming and going — you might spot someone famous.'
  },
  {
    id: 'opt6',
    type: 'optional',
    label: '🛍️',
    icon: '🛍️',
    name: 'De Bijenkorf',
    lat: 52.37375309999999,
    lng: 4.895270600000001,
    body: 'Directly across the square, De Bijenkorf blends high-end retail with architectural elegance. Even if you\'re not shopping, notice how contemporary city life integrates with historical surroundings here. It\'s a chance to see commerce as a form of culture, not just transactions.',
    tip: 'If you are in need of a toilet, on the top floor you can use them freely.'
  },
  {
    id: 28,
    type: 'stop',
    label: '28',
    name: 'Royal Palace Amsterdam',
    lat: 52.3731835,
    lng: 4.8913758,
    body: 'The Royal Palace dominates Dam Square with a calm, almost austere grandeur. Originally built in the 17th century as Amsterdam\'s city hall, it was a statement of civic pride during the Golden Age. Inside, you\'ll find vast marble halls, monumental sculptures, detailed maps of the world embedded in the floors, and ceilings that celebrate trade, power, and global reach.<br><br>It was later turned into a royal palace and is still used for official ceremonies today. Whether you visit or not, knowing what\'s inside changes how you look at the building: this wasn\'t designed to impress one person, but an entire city.'
  },
  {
    id: 29,
    type: 'stop',
    label: '29',
    name: 'Nieuwe Kerk (New Church)',
    lat: 52.3739052,
    lng: 4.8918094,
    body: 'Next to the palace stands the Nieuwe Kerk, a place deeply connected to national history. For centuries, it has hosted royal coronations, state ceremonies, and important public moments. Today, it functions as an exhibition space, often combining large-scale contemporary shows with its historic interior.<br><br>The contrast between old stone walls and modern installations makes each visit different. Step inside if something catches your interest, or simply walk around the building and notice how much history is concentrated in such a small area.'
  },
  {
    id: 30,
    type: 'stop',
    label: '30',
    name: 'Canela',
    lat: 52.3742552,
    lng: 4.8904422,
    body: 'Canela is a small cinnamon roll bakery that has quickly become a local favorite. The rolls are generously sized, rich, and clearly meant to be shared.',
    tip: 'Popular flavors include pistachio and red velvet — perfect if you\'re splitting with someone after a long walk.'
  },
  {
    id: 'opt7',
    type: 'optional',
    label: '🛍️',
    icon: '🛍️',
    name: 'Magna Plaza',
    lat: 52.373621,
    lng: 4.890467999999999,
    body: 'If you want a final taste of shopping history, Magna Plaza is worth a peek. The building itself, a former post office, is an architectural gem blending neo-Gothic and neo-Renaissance styles. You don\'t need to buy anything — just walk through and feel how old spaces can take on entirely new roles.'
  },
  {
    id: 'end',
    type: 'end',
    label: 'E',
    name: 'W Hotel Amsterdam',
    lat: 52.3728321761365,
    lng: 4.889637487198247,
    body: 'The W Hotel marks the end of this walk. Modern, stylish, and alive with city energy. You can take the elevator to the top floor and have a coffee, a drink, or a bite, and give your feet a well-earned rest.<br><br>It\'s a place to relax and look back on your walk through Amsterdam. You can reflect on the layers you\'ve passed: canals, narrow streets, hidden churches, cultural landmarks, and everyday life blending together.<br><br>This walk wasn\'t about ticking off highlights, but about seeing the city differently. In depth, in context, and at your own pace. Let it settle, and when you\'re ready…<br><br><em>There\'s always AnotherWalk.</em>'
  }
];
