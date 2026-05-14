// ─────────────────────────────────────────────────────────────
//  AnotherWalk — Route data
//  Route: The Pijp, in Between
//  City:  Amsterdam
//  File:  route3-stops.js
//
//  NOTES:
//  - Two stops were numbered '20' in the source text.
//    Rise Bakery = stop 20, Mezzave = stop 21, rest shifted accordingly.
//  - viaPoints: add coordinates here to steer the walking route
//    through specific streets. Format: { after: stopId, lat, lng }
// ─────────────────────────────────────────────────────────────

var ROUTE_META = {
  id: 'pijp-in-between',
  title: 'The Pijp, in Between',
  city: 'Amsterdam',
  label: 'Amsterdam · Route 3',
  stopCount: 28,
  duration: '±2.5 hr',
  center: [4.895, 52.360],
  zoom: 14,
  intro: 'This walk begins at the edge of the old city, near the Munttoren. Amsterdam still feels compact and historic here, shaped by canals, trade, and centuries of gradual growth. But as you move forward, the city begins to shift.<br><br>Around Rembrandtplein, the atmosphere becomes livelier. Streets that once served markets and theatres now host nightlife, cafés, and visitors from around the world. The city again reinventing itself without changing its structure.<br><br>Further along, Utrechtsestraat acts as a kind of transition. It\'s still part of the historic expansion, but more local, more everyday. A place where Amsterdam feels lived-in rather than a touristic checklist.<br><br>As you enter De Pijp, you will notice a difference. This neighbourhood was not shaped over centuries, but built quickly — in the late 19th century, when Amsterdam\'s population was growing rapidly. It was designed to house workers, efficiently and densely, close to where they worked.<br><br>Before De Pijp became known for brunch spots, bakeries, and terraces, it was partly an industrial area. The industry has mostly disappeared. The small apartments have been renovated. And the streets that once served workers now attract a different kind of daily life: slower, more social, more focused on experience.<br><br>This route is about noticing that shift.',
  viaPoints: [
    { after: 2,      lat: 52.3663500, lng: 4.8924000 }, // stop 2→3: via Reguliersdwarsstraat/Vijzelstraat naar Tuschinski
    { after: 3,      lat: 52.3664500, lng: 4.8953000 }, // stop 3→4: kortste route over Rembrandtplein, geen lus
    { after: 4,      lat: 52.3655000, lng: 4.8961000 }, // stop 4→5: via Thorbeckeplein
    { after: 'opt2', lat: 52.3650000, lng: 4.8975000 }  // Pitaqueen→stop 6: via Utrechtsestraat
  ]
};

var ROUTE_STOPS = [
  {
    id: 'start',
    type: 'start',
    label: 'S',
    name: 'Munttoren (Munt Tower)',
    lat: 52.367041,
    lng: 4.8932901,
    body: 'At first glance, this tower looks medieval. And in a way, it is.<br><br>But what you see today is actually a reconstruction from the 17th century, after a fire destroyed the original gate tower. The elegant top was added later, when the city was no longer defending itself, but proudly displaying its wealth.<br><br>This used to be one of the main entrances to Amsterdam. Behind you lies the medieval city. Ahead, the city that expanded outward along canals and trade routes.<br><br>In other words: you\'re standing exactly where Amsterdam began to outgrow itself. And that process — the city constantly changing — is something you\'ll keep noticing throughout this walk.'
  },
  {
    id: 1,
    type: 'stop',
    label: '1',
    name: 'Bloemenmarkt (Flower Market)',
    lat: 52.3668419,
    lng: 4.8907067,
    body: 'This is the Bloemenmarkt, often described as the world\'s only floating flower market.<br><br>The stalls sit on barges that float on the Singel canal. Originally, this made practical sense: flowers arrived by boat from the countryside and were sold directly from the water.<br><br>Today, the market is less about local florists and more about tourists looking for tulip bulbs and souvenirs.<br><br>It\'s a good example of something you\'ll see often in Amsterdam: places that started as practical infrastructure gradually becoming part of the city\'s tourist landscape. Still, the setting remains unique — a reminder of how deeply the canals once shaped everyday commerce.'
  },
  {
    id: 2,
    type: 'stop',
    label: '2',
    name: 'Reguliersdwarsstraat',
    lat: 52.3665925,
    lng: 4.8898877,
    body: 'This street may look like just another narrow lane lined with bars and restaurants. But Reguliersdwarsstraat has long been the most important LGBTQ+ street in the Netherlands.<br><br>From the late 20th century onwards, it became a center of queer nightlife — a place where people could gather, celebrate, and express themselves more freely than in many other parts of society at the time. The most well-known bars and clubs here are Soho, Taboo, and club NYX.<br><br>Amsterdam likes to present itself as tolerant and progressive, but that openness was built gradually, through places like this where communities carved out their own space.<br><br>Today the street still plays an important role in the city\'s queer culture.'
  },
  {
    id: 'opt1',
    type: 'optional',
    label: '🍽️',
    icon: '🍽️',
    name: 'Blik Amsterdam',
    lat: 52.366422,
    lng: 4.8904011,
    body: 'Blik is the kind of place you could easily walk past without noticing.<br><br>Tucked slightly away from the busy street, it feels more like a hidden living room than a restaurant — warm, intimate, and quietly stylish. Inside, the atmosphere is calm and carefully designed. Outside, when the weather allows, a French-style courtyard opens up, offering a surprisingly peaceful escape from the city.<br><br>Blik is open for dinner from Tuesday to Sunday, and for lunch on weekends.',
    tip: 'On Saturday or Sunday afternoon, you might hear live music from a local artist — a small detail that adds to the sense that this place is more about experience than just food.'
  },
  {
    id: 3,
    type: 'stop',
    label: '3',
    name: 'Tuschinski Theatre',
    lat: 52.3665424,
    lng: 4.894633799999999,
    body: 'This cinema is one of Amsterdam\'s most extraordinary buildings. In 2021, Time Out even named it the most beautiful cinema in the world.<br><br>It opened in 1921 and was created by Abraham Tuschinski, a Polish-Jewish immigrant who arrived in the Netherlands with little more than ambition and a fascination with film.<br><br>Rather than building a simple movie theatre, he designed something far more spectacular: a cinematic palace combining Art Deco, Jugendstil, and theatrical decoration.<br><br>Step inside if it\'s open — the interior is even more elaborate than the façade.<br><br>The building tells a story that appears often in Amsterdam: how newcomers helped shape the city\'s cultural life.'
  },
  {
    id: 4,
    type: 'stop',
    label: '4',
    name: 'Rembrandtplein',
    lat: 52.3662974,
    lng: 4.895891,
    body: 'Rembrandtplein, named after the famous Dutch painter, is one of Amsterdam\'s liveliest squares, especially at night.<br><br>But it didn\'t begin as a nightlife destination. In the 17th century, this was a butter market where farmers sold dairy products brought in from the countryside. Only later did the square evolve into an entertainment district, filled with cafés, theatres, and eventually clubs.<br><br>The statue in the center honours Rembrandt, who lived nearby for several years.<br><br>Like many places in Amsterdam, the square has quietly reinvented itself multiple times — shifting from trade to culture to nightlife, while the urban layout stayed largely the same.'
  },
  {
    id: 5,
    type: 'stop',
    label: '5',
    name: 'Reguliersgracht (Seven Bridges View)',
    lat: 52.36495980000001,
    lng: 4.895870299999999,
    body: 'If you look straight down the canal from here, you can see a remarkable alignment of bridges, often called the "Seven Bridges" view.<br><br>The effect comes from the precise geometry of Amsterdam\'s canal system. The canals were not built randomly but carefully planned during the 17th-century expansion of the city. Because the bridges line up in a straight perspective, they form a repeating pattern that photographers love.<br><br>It\'s a small moment, but it shows something important: Amsterdam\'s beauty often comes from structure and planning, not just picturesque buildings.'
  },
  {
    id: 'opt2',
    type: 'optional',
    label: '🥙',
    icon: '🥙',
    name: 'Pitaqueen',
    lat: 52.3654042,
    lng: 4.8976007,
    body: 'Pita Queen has been around since 2015 as a stand-alone concept, focused on doing one thing well: pita, filled with fresh, homemade flavours.<br><br>Everything here is prepared with care — simple ingredients, balanced combinations, and a clear focus on quality. It\'s a small place, but one that has built a loyal following over the years.',
    tip: 'If you\'re not sure what to choose, a good option is the mini platter. It gives you a bit of everything, and a quick introduction to what makes this spot so popular.'
  },
  {
    id: 6,
    type: 'stop',
    label: '6',
    name: 'Utrechtsestraat',
    lat: 52.3649031,
    lng: 4.8978896,
    body: 'Utrechtsestraat is one of Amsterdam\'s most beloved shopping streets.<br><br>Unlike many areas closer to Dam Square, the shops here are still largely independent: bookstores, cafés, small fashion boutiques, and specialty stores. As you walk along, the atmosphere begins to shift. The crowds thin out slightly, and the rhythm of the street feels more local and more everyday.<br><br>The street dates back to the 17th-century canal expansion. Its purpose was simple: to connect the city center with the road leading to the city of Utrecht. That practical route slowly evolved into a lively neighbourhood street, the kind of place where locals run errands, meet friends, or linger at a café.<br><br>It is a subtle transition, but an important one. You have started to move away from the most touristic part of the city, into a version of Amsterdam that feels more lived in.'
  },
  {
    id: 7,
    type: 'stop',
    label: '7',
    name: 'CUE — Bar Restaurant Amsterdam',
    lat: 52.3644265,
    lng: 4.8979664,
    body: 'CUE is less of a restaurant, and more of a carefully curated experience.<br><br>Upstairs, the focus is on fine dining, with an open kitchen that turns the act of cooking into part of the evening itself. The menu is thoughtful, the presentation refined, and the atmosphere designed to feel both elegant and relaxed. It\'s primarily a dinner destination, though on Sundays the doors open earlier for lunch.<br><br>But the experience doesn\'t end there. Downstairs, the space transforms. Inspired by Japanese listening bars from the 1950s, the basement is built around music as much as it is around drinks. Vinyl only — played on a custom-built sound system — with selections ranging from disco and jazz to R&B.<br><br>It\'s a different pace, a different mood, but part of the same idea: bringing together food, music, and atmosphere into one continuous experience.'
  },
  {
    id: 8,
    type: 'stop',
    label: '8',
    name: 'Salvo Basement',
    lat: 52.3640268,
    lng: 4.897867499999999,
    body: 'Salvo Basement is a small, creative bakery with roots in Italian cuisine.<br><br>The focus here is on baked goods that feel both familiar and slightly unexpected, shaped by Italian traditions but adapted to a modern Amsterdam setting. Think pastries and breads made with care, where simplicity and quality go hand in hand.<br><br>It\'s also a good place to pause for a coffee or a matcha, both prepared with the same attention as the food.'
  },
  {
    id: 9,
    type: 'stop',
    label: '9',
    name: 'Lebanese Sajeria',
    lat: 52.36342190000001,
    lng: 4.898645399999999,
    body: 'The Lebanese Sajeria began as a small food concept, serving their signature manousheh — a traditional Lebanese flatbread — at markets and from a food truck travelling across the Netherlands.<br><br>Since then, it has grown into several locations across Amsterdam, while staying true to its original idea: simple food, made well, with bold and surprising flavours. Classic Lebanese ingredients are combined in slightly unexpected ways, creating something that feels both traditional and new.<br><br>The interior is modest, almost understated. But that\'s part of the charm. Because here, it\'s not about the setting, it\'s about the food.'
  },
  {
    id: 10,
    type: 'stop',
    label: '10',
    name: 'NYN Vintage',
    lat: 52.3618605,
    lng: 4.898942600000001,
    body: 'NYN Vintage is a curated vintage store for both women and men, built around a simple idea: that second-hand fashion can be just as stylish, if not more, than something new.<br><br>The selection is carefully chosen, with a focus on quality, natural materials, and pieces that are made to last. Instead of fast cycles of trends, NYN encourages a more conscious way of dressing: fewer items, better made, and with more character.<br><br>The store is a reminder that style doesn\'t always come from what\'s new, but often from what already exists.'
  },
  {
    id: 11,
    type: 'stop',
    label: '11',
    name: 'LAAN Amsterdam',
    lat: 52.36153119999999,
    lng: 4.898748299999999,
    body: 'LAAN Amsterdam is a vintage store and designer archive based in the city.<br><br>Its focus goes beyond fashion as something seasonal or trend-driven. Instead, LAAN treats clothing as cultural material — something that reflects time, identity, and the evolution of design.<br><br>The collection is carefully curated, bringing together garments and accessories from designers who, in their view, have helped shape the fashion landscape over recent decades.<br><br>In that sense, LAAN is less a traditional shop and more an archive you can walk through — where every piece carries a trace of its own history.'
  },
  {
    id: 12,
    type: 'stop',
    label: '12',
    name: 'Frederiksplein',
    lat: 52.3605012,
    lng: 4.8996234,
    body: 'Frederiksplein marks a clear transition point between the historic canal belt and the later expansions of the city.<br><br>For decades, the square was dominated by the heavy concrete building of De Nederlandsche Bank. Rising above the surrounding low-rise city, it stood out as one of the few modern, large-scale buildings within the historic urban fabric. Recently, however, the building has been undergoing a major transformation, opening up its ground level and making space for more public access and interaction.<br><br>But long before this building defined the square, this was the site of the Paleis voor Volksvlijt — a grand iron-and-glass exhibition palace inspired by London\'s Crystal Palace. After standing here for decades, it was tragically destroyed by fire in 1929.<br><br>Together, these layers make Frederiksplein a place where different versions of the city briefly overlap — visible in its architecture, its history, and its ongoing transformation.'
  },
  {
    id: 13,
    type: 'stop',
    label: '13',
    name: 'Entering De Pijp',
    lat: 52.3580651,
    lng: 4.8990917,
    body: 'You are now entering De Pijp, and you will notice the city suddenly changes. The streets become straighter, the buildings more repetitive, and the blocks denser.<br><br>That\'s because this neighbourhood wasn\'t built gradually like the canal belt. It was planned and constructed rapidly in the late 19th century, when Amsterdam\'s population was growing quickly. Instead of curved canals and individual houses, you get a grid of long straight streets, continuous housing blocks, and minimal variation.<br><br>It may feel less charming at first, but it tells a different story: this is Amsterdam becoming a modern city.<br><br>In recent years, the neighbourhood has gone through another transformation. What was once primarily a working-class district has gradually become more mixed, shaped by younger residents, students, and a growing international and expat community. Cafés, bakeries, and small restaurants are popping up everywhere, bringing a more lifestyle-oriented layer on top of the original urban structure.'
  },
  {
    id: 'opt3',
    type: 'optional',
    label: '🍽️',
    icon: '🍽️',
    name: 'Restaurant Heemelrijck',
    lat: 52.35686399999999,
    lng: 4.899983199999999,
    body: 'Heemelrijck is something of an institution in Amsterdam.<br><br>With three locations across the city, the restaurant is known for serving classic Dutch comfort food in a warm, old-fashioned setting that feels unmistakably local. The menu includes traditional dishes such as stamppot, fries with slow-cooked beef stew, and wentelteefjes — the Dutch version of French toast.<br><br>Inside, the atmosphere leans heavily into an old Dutch aesthetic: dark wood, vintage details, and a cosy café feeling that seems increasingly rare in the modern city.<br><br>In a neighbourhood that is constantly changing, places like this offer a small connection to an older version of Amsterdam that still survives through food and atmosphere.'
  },
  {
    id: 14,
    type: 'stop',
    label: '14',
    name: 'Have a Roll',
    lat: 52.3563424,
    lng: 4.899748,
    body: 'Have a Roll specialises in handmade brioche cinnamon rolls. They are fully plant-based, but rich enough that you probably wouldn\'t notice.<br><br>The rolls come in a wide variety of flavours, from apple and caramel pecan to coffee-inspired creations, all built around soft dough and carefully balanced sweetness. They originally started in Belgium, before expanding to Amsterdam.<br><br>In a city increasingly filled with specialty bakeries, this has become one of the most popular spots for cinnamon rolls. And despite the generous toppings and flavours, the pastries somehow avoid becoming overly sweet — making them dangerously easy to finish.'
  },
  {
    id: 15,
    type: 'stop',
    label: '15',
    name: 'Buildings in De Pijp',
    lat: 52.355785,
    lng: 4.8991033,
    body: 'Look at the buildings around you. They\'re all roughly the same height, the same materials, the same rhythm. That\'s not a coincidence.<br><br>These blocks were designed for maximum efficiency: as many apartments as possible, built quickly, and affordable for workers. Uniform height made construction cheaper and faster.<br><br>It may look repetitive — and there\'s beauty in that too — but it was once a practical solution to a housing crisis.'
  },
  {
    id: 16,
    type: 'stop',
    label: '16',
    name: 'Little Collins',
    lat: 52.3558303,
    lng: 4.898079099999999,
    body: 'Little Collins is one of the cafés that helped define De Pijp\'s modern brunch culture.<br><br>Open daily from morning until late afternoon, the restaurant has built a reputation around creative dishes that go far beyond a standard breakfast menu. You\'ll find combinations like buttermilk fried halloumi, 18-hour slow-cooked beef short rib, or ricotta French toast with pumpkin.<br><br>The space itself is usually lively, especially on weekends. Reservations are not accepted, so everything works on a walk-in basis only. That means you may have to wait for a table — or, if you\'re lucky, you might walk straight into one of the most popular brunch spots in the neighbourhood.'
  },
  {
    id: 17,
    type: 'stop',
    label: '17',
    name: 'Florentin Brunch',
    lat: 52.3561465,
    lng: 4.8975184,
    body: 'Florentin is an all-day brunch café inspired by the energy and food culture of Tel Aviv.<br><br>Named after the creative Florentin neighbourhood in Tel Aviv, the café brings many Middle Eastern influences into its menu and atmosphere. Ingredients like za\'atar, challah bread, harissa, tahini, and labneh appear throughout the dishes, giving the food a distinct flavour profile that stands out from more traditional brunch spots.<br><br>Like many places in De Pijp, Florentin reflects the increasingly international character of the neighbourhood — where ideas, cuisines, and influences from different cities quietly blend into Amsterdam\'s local culture.<br><br>The café is open daily from morning until late afternoon.'
  },
  {
    id: 18,
    type: 'stop',
    label: '18',
    name: 'Albert Cuyp Market',
    lat: 52.3565345,
    lng: 4.8973601,
    body: 'You are now entering the famous Albert Cuyp market. Feel free to take it all in, stroll along the stalls, and feel how lively the center of De Pijp can be.<br><br>The Albert Cuyp market didn\'t appear randomly. It developed here because this was a dense working-class neighbourhood — exactly the kind of place where street markets thrive. People needed affordable food, daily supplies, and easy access. Over time, the market grew into one of the busiest in Europe.<br><br>Today it serves a different audience too, but some of the products and its location still reflect the original logic of the neighbourhood.'
  },
  {
    id: 19,
    type: 'stop',
    label: '19',
    name: 'Badcuyp',
    lat: 52.3565677,
    lng: 4.897077599999999,
    body: 'The name "Badcuyp" refers to a public bathhouse that once stood here.<br><br>In the late 19th century, most homes in De Pijp did not yet have private bathrooms, so residents relied on communal bathhouses like this one for basic hygiene. It\'s a small reminder of how practical — and densely populated — the neighbourhood originally was.<br><br>Today, the building has taken on a very different role. Since opening in May 2024, De Badcuyp has become a modern restaurant built around flexibility and seasonality. There\'s no strict structure to the menu or the way you order: guests are encouraged to eat what they want, when they want, without fixed courses or formal rules.<br><br>It\'s an interesting contrast: a place once focused on basic daily necessity has evolved into a space centred around experience, atmosphere, and sharing food.'
  },
  {
    id: 20,
    type: 'stop',
    label: '20',
    name: 'Rise Bakery',
    lat: 52.3560554,
    lng: 4.8961991,
    body: 'At Rise Bakery, everything revolves around dough.<br><br>The bakery is especially known for its sourdough breads and French-style pastries, both made with a strong focus on patience and traditional techniques. Their sourdough bread undergoes a slow 48-hour fermentation process, creating the characteristic flavour and chewy texture that sourdough lovers look for.<br><br>In a fast-moving city, there\'s something almost countercultural about that approach: slowing things down to improve the final result.<br><br>Like many of the newer bakeries in De Pijp, Rise reflects a broader shift in Amsterdam\'s food culture: away from convenience, and back towards craftsmanship.'
  },
  {
    id: 21,
    type: 'stop',
    label: '21',
    name: 'Mezzave',
    lat: 52.3552069,
    lng: 4.8933894,
    body: 'Mezzave is, technically speaking, a shoarma place, but a much more refined version than you might expect.<br><br>The portions are generous, the meat is tender, and the homemade pita breads are light, airy, and perfectly crisp on the outside. It\'s rich food, definitely a little heavy in the best possible way, but exactly the kind of meal that feels satisfying after a long walk through the city.<br><br>If you haven\'t stopped for food yet despite all the tempting spots along this route, this is a very good takeaway option. Especially because the next stop is a park, just around the corner.'
  },
  {
    id: 22,
    type: 'stop',
    label: '22',
    name: 'Sarphatipark',
    lat: 52.3544402,
    lng: 4.8938149,
    body: 'Sarphatipark is a rectangular park located right in the middle of De Pijp.<br><br>It was named after Samuel Sarphati — a doctor, urban thinker, and philanthropist who played an important role in improving Amsterdam during the 19th century. The park itself was laid out starting in 1885, as part of the city\'s rapid expansion.<br><br>One unusual detail: unlike the surrounding streets, the park was never raised to the same level. As a result, the park still sits slightly lower than the neighbourhood around it, with the exception of the monument dedicated to Sarphati himself.<br><br>Today, the park functions as one of the green lungs of De Pijp. Especially during warmer months, the grass fills with residents relaxing, meeting friends, or simply escaping their small apartments for a while. Many people in Amsterdam do not have private gardens, which helps explain why parks like this become such important public living rooms when the weather is good.'
  },
  {
    id: 23,
    type: 'stop',
    label: '23',
    name: 'Massimo Gelato',
    lat: 52.3526271,
    lng: 4.894616099999999,
    body: 'With several locations across Amsterdam by now, Massimo Gelato has become difficult to miss — and for good reason.<br><br>The gelato is made using natural ingredients sourced from Italy, including pistachios, hazelnuts, and lemons, combined with fresh local milk from the Amsterdam region. The approach is largely traditional, and that simplicity is exactly what makes it work so well.<br><br>Rather than focusing on unusual gimmicks or overly elaborate flavours, Massimo leans into classic combinations done properly.',
    tip: 'The ricotta & fig and pistachio flavours are especially worth trying. On warm days, don\'t be surprised if there\'s a line outside.'
  },
  {
    id: 24,
    type: 'stop',
    label: '24',
    name: 'Kwekkeboom',
    lat: 52.3523867,
    lng: 4.8914357,
    body: 'Kwekkeboom is a true Dutch classic.<br><br>Originally founded in the city of Enschede, the bakery expanded to Amsterdam in the early 1900s and has since become a well-known name in the city for more than 120 years.<br><br>Inside, you\'ll find a mix of savoury snacks, pastries, chocolate, cakes, cookies, and seasonal products around holidays like Easter and Christmas. The atmosphere is refreshingly straightforward: no trendy concepts or elaborate presentation, just traditional Dutch bakery culture focused on quality and familiarity.<br><br>Places like this are part of the everyday fabric of the city; quietly surviving while trends around them continue to change.'
  },
  {
    id: 25,
    type: 'stop',
    label: '25',
    name: 'FEBO Ferdinand Bolstraat',
    lat: 52.3538784,
    lng: 4.8909715,
    body: 'FEBO is one of Amsterdam\'s most recognisable fast-food concepts, and you may already have spotted it elsewhere in the city.<br><br>The idea is simple: warm fried snacks served from small vending machine-style compartments built into the wall. Customers insert a coin or tap their card, open the little door, and take out a fresh croquette or other snack.<br><br>It sounds unusual at first, but for many Dutch people it\'s deeply nostalgic — whether as a quick snack during the day or late at night after going out.<br><br>This location on Ferdinand Bolstraat is especially important, as it was the original branch that gave FEBO its name: an abbreviation of Ferdinand Bolstraat. The first heated snack wall here dates back to 1960.',
    tip: 'If you haven\'t done so already, you should really try a croquette!'
  },
  {
    id: 'opt4',
    type: 'optional',
    label: '🍽️',
    icon: '🍽️',
    name: 'BISOUS',
    lat: 52.3547351,
    lng: 4.8878091,
    body: 'BISOUS combines elements of Parisian haute cuisine and fashion-inspired aesthetics with influences from the Dutch province of Zeeland.<br><br>The interior is elegant and carefully designed — the kind of place that attracts both people looking for a memorable dining experience and those hoping for the perfect photo. But beneath the stylish atmosphere is a classic restaurant approach built around high-quality ingredients and refined cooking.<br><br>Like much of modern De Pijp, BISOUS blends dining, design, and social experience into something that feels carefully curated from beginning to end.',
    tip: 'Later in the evening, especially on Thursdays, Fridays, and Saturdays, the atmosphere gradually shifts as DJs begin playing after 10 PM.'
  },
  {
    id: 26,
    type: 'stop',
    label: '26',
    name: 'Harmani',
    lat: 52.3548868,
    lng: 4.888565,
    body: 'Harmani is a highly rated all-day brunch spot known especially for its croissants.<br><br>The menu ranges from sweet versions filled with pistachio or praline cream to savoury combinations with salmon, mushrooms, or feta. The pastries are rich, carefully layered, and clearly designed to stand out visually as much as in flavour.<br><br>The name "Harmani" comes from an Eastern European word meaning "beautiful blend" — a fitting description for a place that combines different culinary influences into one menu.<br><br>Beyond croissants, they also serve Peinirli: a Greek-style baked bread filled with cheese and various toppings, somewhere between comfort food and street food.<br><br>Like many newer places in De Pijp, Harmani reflects how international influences continue to shape Amsterdam\'s café culture.'
  },
  {
    id: 27,
    type: 'stop',
    label: '27',
    name: 'Neo Bistro',
    lat: 52.3556779,
    lng: 4.8884041,
    body: 'Neo is a bistro with classical foundations, approached in a more modern and relaxed way.<br><br>The food is refined and carefully prepared, but without the formality often associated with fine dining. Instead of traditional courses, the menu is built around smaller dishes designed for sharing, guided by seasonality, craftsmanship, and strong flavours.<br><br>The wine list follows the same philosophy, with a focus on organic, biodynamic, and natural wines chosen to complement the food.<br><br>Places like Neo reflect a broader shift in Amsterdam\'s dining culture: away from rigid fine dining traditions, and towards something more informal, social, and experience-driven — while still taking the food itself very seriously.'
  },
  {
    id: 28,
    type: 'stop',
    label: '28',
    name: 'Layers Bakery & Deli',
    lat: 52.3556284,
    lng: 4.8889362,
    body: 'If you\'re somehow not tired of food stops yet, Layers is still worth stepping into.<br><br>This relatively new bakery quickly became one of the city\'s biggest social media favourites — constantly appearing on Instagram and TikTok. But unlike many online trends, the popularity here is actually backed up by the quality of the food.<br><br>The bakery serves both sweet and savoury pastries, all with an indulgent, carefully layered style that matches the name.',
    tip: 'If there\'s one thing especially worth trying, it\'s the croissant with beef patty: essentially a hamburger served on a croissant instead of a bun. It sounds slightly ridiculous. And somehow, it works very well.'
  },
  {
    id: 29,
    type: 'stop',
    label: '29',
    name: 'Kaasbar Amsterdam',
    lat: 52.35728599999999,
    lng: 4.8905666,
    body: 'If you love cheese, this is a difficult place to resist.<br><br>Kaasbar Amsterdam combines a traditional restaurant setting with a playful concept: alongside regular table service, cheeses also pass by on a small conveyor belt — a kind of "cheese train" carrying different varieties directly past your seat.<br><br>You can keep things simple with a cheese board and wine, or fully commit with a cheese fondue experience.<br><br>The atmosphere is relaxed, slightly indulgent, and very Dutch in its appreciation for good dairy products done properly.<br><br>After all the bakeries, brunch cafés, and food concepts throughout De Pijp, this stop feels like one final reminder of how strongly food culture shapes everyday life in the neighbourhood.'
  },
  {
    id: 'end',
    type: 'end',
    label: 'E',
    name: 'Heineken Experience',
    lat: 52.35783130000001,
    lng: 4.8918249,
    body: 'You\'ve now reached the former Heineken brewery, one of the clearest reminders of De Pijp\'s industrial past.<br><br>Long before this neighbourhood became known for brunch spots, specialty coffee, and stylish cafés, breweries and workshops operated alongside dense housing blocks built for workers. The original Heineken brewery became one of the most famous examples, eventually growing into a global brand recognized far beyond Amsterdam itself.<br><br>Today, the building functions mainly as a visitor experience — and yes, it can feel somewhat touristy at times. But even so, it remains an important landmark within the story of this neighbourhood.<br><br>Because in many ways, this route has been about transformation. From canals to straight streets. From working-class district to international hotspot. From industry to lifestyle.<br><br>And somewhere in between all of that, the city kept adapting without fully losing the traces of what came before.<br><br>Hopefully, this walk helped you notice some of those layers a little differently. Amsterdam is a city best understood slowly: one street, one building, one unexpected stop at a time.<br><br><em>And once you start looking more closely, you realize: there is always AnotherWalk.</em>'
  }
];
