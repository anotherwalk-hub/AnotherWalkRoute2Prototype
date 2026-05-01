// ─────────────────────────────────────────────────────────────
//  AnotherWalk — Route data
//  Route: The Jordaan & Beyond
//  City:  Amsterdam
//  File:  route1-stops.js
//
//  To edit stop content, change text here only.
//  The map app (index.html) loads this file automatically.
// ─────────────────────────────────────────────────────────────

var ROUTE_META = {
  id: 'jordaan-beyond',
  title: 'The Jordaan & Beyond',
  city: 'Amsterdam',
  label: 'Amsterdam · Route 1',
  stopCount: 33,
  duration: '±3 hr',
  center: [4.885, 52.374],
  zoom: 14
};

var ROUTE_STOPS = [
  {
    id: 'start',
    type: 'start',
    label: 'S',
    name: 'Nieuwe Haarlemmersluis',
    lat: 52.3789405,
    lng: 4.8941884,
    body: 'You are standing at a threshold.<br><br>The Nieuwe Haarlemmersluis once regulated the flow of water between the bigger water and the city\'s inner canals. But it also regulated something else: movement, goods, and access. Amsterdam\'s success depended on infrastructure like this: invisible systems that allowed trade to flourish while keeping the city dry.<br><br>Right of you lies the IJ, once filled with ships arriving from across Europe and beyond. Ahead of you stretches the Haarlemmerstraat, historically one of the main western streets leading out of the city toward Haarlem.<br><br>Mind you: this is not yet the Jordaan. This is the edge where global trade begins to shrink into neighborhood scale.'
  },
  {
    id: 1,
    type: 'stop',
    label: '1',
    name: 'Satay Club',
    lat: 52.3797323,
    lng: 4.8931837,
    body: 'The Haarlemmerstraat has long been a commercial street, practical rather than prestigious. Where the grand canal belt displayed wealth, this street facilitated everyday exchange of food, tools, textiles, and other necessities.<br><br>Today it is known for independent shops, small eateries, and a certain "local" atmosphere. It consistently ranks as one of Amsterdam\'s favorite shopping streets, not because it is grand, but because it feels accessible.<br><br>Satay Club fits naturally into this rhythm. Indonesian cuisine has become deeply embedded in Dutch culture, shaped by centuries of colonial entanglement.<br><br>Notice how this street balances past and present: global history, everyday trade, and curated cool.'
  },
  {
    id: 'opt1',
    type: 'optional',
    label: '☕',
    icon: '☕',
    name: 'GoodNews Haarlemmerstraat',
    lat: 52.3801989,
    lng: 4.8924804,
    body: 'If you\'d like to begin the walk slowly, this is a good place to do it.<br><br>GoodNews is an espresso bar. Small, bright, focused. The kind of place where the barista takes coffee seriously but the atmosphere stays relaxed.<br><br>Haarlemmerstraat has long been known for its independent spirit. Fewer chains, more personality. GoodNews fits that rhythm of compact, local, and intentional.<br><br>Grab a coffee to go, or sit by the window for a moment. Watch the bikes pass. Let the city settle into your pace before we head deeper in.'
  },
  {
    id: 2,
    type: 'stop',
    label: '2',
    name: 'West-Indisch Huis',
    lat: 52.38014039999999,
    lng: 4.892013599999999,
    body: 'This courtyard complex once housed the Dutch West India Company (WIC), founded in 1621. From here, ships set sail across the Atlantic, colonies were managed, and trade deals were made that shaped Amsterdam, and the world.<br><br>The building itself doesn\'t try to impress. No grand decorations, no flashy façades. Its power was quiet, hidden in the offices and halls where plans were drawn, routes decided, and fortunes calculated. Stand here and imagine the bustle of ships, merchants, and letters moving back and forth, all behind these calm walls.<br><br>The complex now serves as an event location for business, weddings and other private events. You can also enjoy lunch or dinner at Café Nieuw Amsterdam and enjoy the courtyard.'
  },
  {
    id: 3,
    type: 'stop',
    label: '3',
    name: 'Eenhoornsluis',
    lat: 52.3816005,
    lng: 4.8891282,
    body: 'This is the Eenhoornsluis, one of sixteen locks built around Amsterdam in the 17th century. Together they helped control the water level in the canals and protect the city from the open Zuiderzee, which used to reach much closer to here than it does today. Because Amsterdam was an important seaport, this lock also functioned as a sea lock.<br><br>You can still see that if you look closely. The floodgates on the outside of the lock were built much higher than the ones facing the city. They were designed to block storm tides coming from the northwest — a real threat at the time.<br><br>There\'s also a small detail many people miss: the Hudde stone. It was placed here in 1673 by Amsterdam\'s mayor Johannes Hudde, who helped improve the city\'s water management system. Stones like this marked the ideal water level in the canals — a simple but clever solution that helped keep Amsterdam dry.<br><br>And if you\'re wondering about the name: "Eenhoorn" (unicorn) most likely referred to an inn that once stood nearby, marked with a unicorn on its sign. Travelers arriving from Haarlem may have stopped here before entering the city.'
  },
  {
    id: 4,
    type: 'stop',
    label: '4',
    name: 'Pastificio Luzzi',
    lat: 52.3820452,
    lng: 4.886966699999999,
    body: 'You are now entering the Jordaan slowly but more fully — you will notice it getting more quiet and that you are passing some brown cafés.<br><br>Pastificio Luzzi represents the contemporary layer of the neighborhood: small-scale, artisanal, carefully curated. Independent makers define much of today\'s Jordaan (though at a very different price point than in the past).<br><br>Originally built as a workers\' quarter in the 17th century, the Jordaan was dense, affordable, and practical. Workshops and small production spaces were common. In a way, that spirit survives — but the clientele has changed.<br><br>Notice how the street narrows. The façades shrink. The city becomes more intimate.'
  },
  {
    id: 5,
    type: 'stop',
    label: '5',
    name: 'De Oliewinkel Amsterdam',
    lat: 52.38105650000001,
    lng: 4.8869484,
    body: 'Specialty food shops like De Oliewinkel reflect a shift in the Jordaan\'s economy. Where basic goods were once sold for survival, today products are curated for taste and experience.<br><br>The shop focuses on high-quality olive oils and vinegars, often sourced directly from small Mediterranean producers. This kind of direct, story-driven retail has become typical of the neighborhood: small scale, personal, and knowledge-based.<br><br>It mirrors something older: the Jordaan has always been a place of small entrepreneurs. The difference lies in audience and price point.<br><br>Pay special attention to the oddly shaped corner buildings around you, a specific characteristic of the Jordaan.',
    tip: 'If you step inside, ask to taste before buying. The staff usually guide you through flavor differences (peppery, grassy, mild) — which makes the product more than just a souvenir.'
  },
  {
    id: 6,
    type: 'stop',
    label: '6',
    name: 'Leauf Amsterdam',
    lat: 52.3804253,
    lng: 4.884094699999999,
    body: 'Leauf has great sandwiches with original flavors. Their menu changes monthly which makes it a fun location for locals to often visit.<br><br>Bread has always been central to working-class neighborhoods like the Jordaan. But while it once represented necessity, today it represents refinement. Long fermentation, single-origin grains, and natural starters. The language of bread has changed.<br><br>Notice the queues, especially on weekends. Scarcity now signals quality.',
    tip: 'The sandwiches are quite big, so if you decide to have one, sharing is a good option.'
  },
  {
    id: 7,
    type: 'stop',
    label: '7',
    name: 'Saint-Jean Amsterdam',
    lat: 52.3803056,
    lng: 4.884282400000001,
    body: 'Saint-Jean is a fully plant-based patisserie, known for laminated pastries that rival traditional French baking. That alone says something about the neighborhood\'s evolution. The Jordaan was once practical and conservative in daily habits. Today, it absorbs global trends quickly — veganism, sustainability, design-conscious interiors.<br><br>The aesthetic is deliberate. Clean lines, curated display, minimal branding. Consumption here is not just about taste, but identity.',
    tip: 'Their croissants are the signature item. Even non-vegans tend to be surprised. At the opposite side of the street they have their deli — often less busy.'
  },
  {
    id: 8,
    type: 'stop',
    label: '8',
    name: 'Suykerhofje',
    lat: 52.37987709999999,
    lng: 4.8833125,
    body: 'Step through the entrance carefully.<br><br>The Suykerhofje is one of the Jordaan\'s many courtyards: charitable housing complexes founded to support elderly or vulnerable residents. Built in the 17th century, these courtyards offered shelter and stability within a dense and often harsh urban environment.<br><br>Behind the noise of cafés and shoppers, a different rhythm survives. These hofjes reveal how social care was historically organized: privately funded, quietly maintained, and physically enclosed.<br><br>If you enter, keep your voice low. People still live here.<br><br><em>Note: only possible to visit Monday till Thursday between 09:00–17:00, max 4 persons.</em>'
  },
  {
    id: 9,
    type: 'stop',
    label: '9',
    name: 'Noordermarkt & Noorderkerk',
    lat: 52.37989,
    lng: 4.886509,
    body: 'On this square, the Noordermarkt takes place every Saturday. The Noordermarkt has long functioned as the social heart of the Jordaan. Markets were essential in working-class districts: places of trade, but also exchange of news, opinions, and community life. Protests were held here. Political movements gathered here.<br><br>Today, the square hosts an organic farmers\' market and a popular flea market. The products have changed (vintage denim instead of coal, sourdough instead of sacks of grain) but the square still performs its public function.<br><br>Notice how the church anchors the space.',
    tip: 'If you\'re here on a Saturday, take time to wander the organic stalls. On Mondays, the flea market offers a completely different atmosphere.'
  },
  {
    id: 10,
    type: 'stop',
    label: '10',
    name: 'Westerstraat',
    lat: 52.3789456,
    lng: 4.8862826,
    body: 'Westerstraat has always been one of the busiest streets in the Jordaan. In the past, people didn\'t just shop here, they also lived and worked here. Bakers, carpenters, tailors, small traders. Life happened right on the street.<br><br>Look up for a moment. Notice how narrow many of the houses are. That\'s not random. In the past, property taxes were partly based on the width of a house facing the street. So people built narrow homes, but made them deep and tall instead. A clever way to save money.<br><br>That\'s why the street has this repeating rhythm of slim façades, door after door, window after window.<br><br>Today the businesses have changed, but the structure of the street is almost the same as centuries ago. The Jordaan still runs on small spaces and big personalities.',
    tip: 'If you\'re here on a Monday morning, Westerstraat turns into a lively market street — stalls, chatter, and the smell of fresh food.'
  },
  {
    id: 11,
    type: 'stop',
    label: '11',
    name: 'Café Nol',
    lat: 52.37829,
    lng: 4.883390299999999,
    body: 'Café Nol is a classic "brown café": intimate, wood-paneled, low ceilings, closely spaced tables.<br><br>The scale mirrors the architecture of the Jordaan: narrow frontage, compact interior, everything close together. These spaces helped shape the neighborhood\'s musical and social culture.',
    tip: 'During the day you can step inside and really observe the space. In the evening, it transforms into a lively, crowded local experience.'
  },
  {
    id: 12,
    type: 'stop',
    label: '12',
    name: "MONTY's Toasties",
    lat: 52.3780086,
    lng: 4.8833475,
    body: "MONTY's Toasties is a perfect example of how the neighborhood keeps reinventing itself.<br><br>At its core, it's simple: grilled sandwiches. But done with care. Good bread, good cheese, thoughtful combinations. They use Montgomery's cheddar and Ogleshield from Somerset, alongside exceptional Dutch cheese from Remeker, all melted into the perfect grilled sourdough from Fort Negen (popular bakery in Amsterdam).<br><br>If you're hungry, this is a good pause point. Casual, friendly, no fuss."
  },
  {
    id: 13,
    type: 'stop',
    label: '13',
    name: 'Claes Claesz Hofje',
    lat: 52.3773659,
    lng: 4.8839802,
    body: 'Behind this modest entrance lies another "hofje": a small courtyard with houses arranged around it.<br><br>Hofjes were charitable housing projects for elderly or vulnerable residents. In a neighborhood known for density and overcrowding, they offered order and protection within the urban fabric.<br><br>Notice how the scale shifts from busy street to quiet enclosure. <em>Please enter quietly — this is still residential.</em>'
  },
  {
    id: 14,
    type: 'stop',
    label: '14',
    name: 'Assaggi',
    lat: 52.3768201,
    lng: 4.881959,
    body: 'Assaggi brings a bit of Italy into the Jordaan. The restaurant is intimate. Tables close together, warm lighting, a sense of being tucked away. The smell of garlic and pasta wraps around you, even if you are just passing it, it pulls you in.<br><br>Assaggi is a real family business and offers its customers high quality dishes with ingredients imported directly from Italy, and a selection of wines from the most famous wineries in Italy, especially from Piemont.<br><br>The Jordaan has always absorbed new influences. Today, that happens through food.'
  },
  {
    id: 'opt2',
    type: 'optional',
    label: '🥪',
    icon: '🥪',
    name: "Davie's Amsterdam",
    lat: 52.37550539999999,
    lng: 4.8808126,
    body: "If you feel like a small detour, this is Davie's: bright, relaxed, and great pastrami sandwiches (and other sandwiches too). They have a small sandwich menu with high end quality ingredients. Every sandwich has a different bread that are made especially for Davie's by Amsterdam bakery Kaandorp, and they also have gluten free sandwiches.",
    tip: "The Lelie sandwich on marbled bread is their signature dish — and so worth it!"
  },
  {
    id: 15,
    type: 'stop',
    label: '15',
    name: 'Amsterdam Tulip Museum',
    lat: 52.3763222,
    lng: 4.8841231,
    body: 'The Amsterdam Tulip Museum is small, almost easy to miss.<br><br>Inside, it tells the story of the tulip in the Netherlands: how it arrived, how it became wildly popular, and how "Tulip Mania" once shook the economy in the 17th century.<br><br>It\'s compact and a little nostalgic. Part history, part celebration, part souvenir stop. You don\'t have to spend long here. But it adds a colorful layer to the Jordaan story. Trade, speculation, beauty, all packed into a tiny space.<br><br>If you love the vibe, know that you also have the Cheese Museum a few doors on the right.'
  },
  {
    id: 16,
    type: 'stop',
    label: '16',
    name: 'View on Westerkerk',
    lat: 52.376145,
    lng: 4.8839428,
    body: 'And then, suddenly, the space opens up.<br><br>The Westerkerk rises above everything else in the Jordaan. Built in the early 17th century, it was one of the largest Protestant churches in the world at the time. After all the narrow streets and intimate corners, this feels expansive.<br><br>Look up at the tower: the Westertoren. For centuries it has been a point of orientation in the city. Locals still use it as a reference: "Meet me near the Westertoren."<br><br>Rembrandt is buried here, somewhere beneath the floor. No marked grave, just the quiet knowledge that he rests in this space.<br><br>Stand here for a moment and notice the contrast. The Jordaan feels small and close. The Westerkerk feels open and skyward. Both belong to the same story.'
  },
  {
    id: 17,
    type: 'stop',
    label: '17',
    name: 'Anne Frank House',
    lat: 52.3752182,
    lng: 4.8839765,
    body: 'Just along the canal is the Anne Frank House.<br><br>During the Second World War, Anne Frank and her family hid in the secret annex behind this building for more than two years. Her diary would later become one of the most read books in the world.<br><br>Even if you don\'t go inside, standing here and looking at the façade carries weight.',
    tip: 'Tickets must be booked online well in advance — often weeks ahead.'
  },
  {
    id: 18,
    type: 'stop',
    label: '18',
    name: 'Gay Monument (Homomonument)',
    lat: 52.3744126,
    lng: 4.884922899999999,
    body: 'Near the Westerkerk, almost blending into the square, lies the Gay Monument (Homomonument). Three pink granite triangles form this memorial, dedicated to LGBTQ+ people persecuted during the Second World War and beyond.<br><br>It\'s subtle. You can almost walk over it without noticing. But once you see it, it changes the space.<br><br>This is not just a monument to the past. It\'s also a place of gathering and visibility today. Protests, celebrations, moments of silence all happen here. It adds another layer to the Jordaan: a neighborhood that has long been a place of outsiders, artists, and those who didn\'t always fit elsewhere.'
  },
  {
    id: 19,
    type: 'stop',
    label: '19',
    name: 'Bloemgracht',
    lat: 52.3752535,
    lng: 4.883234,
    body: 'Welcome to the Bloemgracht, often called one of the most beautiful canals in Amsterdam. It\'s quieter here. The water feels close, the bridges low, the houses gently leaning toward the canal as if they\'ve relaxed over time.<br><br>The name means "Flower Canal," and once this area was full of small-scale industry: dyers, craftsmen, workshops tucked behind façades. Today it feels almost cinematic.<br><br>Pause on the bridge. Look down the waterline. Notice how the reflections double everything — sky, houses, bicycles. This is the Jordaan at its most picturesque, and a great photo opportunity!'
  },
  {
    id: 20,
    type: 'stop',
    label: '20',
    name: 'Box Sociaal',
    lat: 52.3746671,
    lng: 4.8814858,
    body: 'Box Sociaal brings a different energy — bright, open, and informal. It\'s a place where breakfast turns into lunch and lunch stretches into late afternoon. The menu blends cultures, the crowd is mixed: locals, expats, creatives, visitors.<br><br>This is part of the Jordaan\'s evolution. Once working-class, later artistic, now layered with international influence. What\'s nice is that it still feels unpretentious. Casual conversation, laptops open, coffee cups everywhere.<br><br>The Jordaan adapts — without losing its small-scale intimacy.',
    tip: 'They have quite a fun menu with original dishes, such as Dubai Pancakes or Smashing Pumpkins.'
  },
  {
    id: 21,
    type: 'stop',
    label: '21',
    name: 'Rozengracht',
    lat: 52.3737042,
    lng: 4.8818486,
    body: 'Now we step onto the Rozengracht. Immediately, the rhythm changes.<br><br>The street is wider. Buses and trams pass through. The pace is faster, the sound louder. After the narrow streets, this feels different, doesn\'t it? That is because, originally, this was actually a canal, later filled in to create more space for traffic. It marks the southern edge of the Jordaan.<br><br>It shows that Amsterdam is constantly reshaping itself. What was once water becomes road. What was once working-class becomes fashionable. Walk here and feel the contrast. This is the Jordaan meeting the modern city.'
  },
  {
    id: 22,
    type: 'stop',
    label: '22',
    name: 'Boom Chicago',
    lat: 52.3728574,
    lng: 4.8790169,
    body: 'Boom Chicago has been here since the 1990s, bringing English-language improv comedy to Amsterdam. It\'s playful, sharp, international, and very much at home in the Jordaan.<br><br>Many well-known comedians started here before moving on to global stages. But the spirit remains local: quick humor, audience interaction, a room full of laughter.<br><br>The Jordaan has always attracted storytellers and performers. From folk singers in brown cafés to improv comedians on stage. Different format, same expressive heart.'
  },
  {
    id: 23,
    type: 'stop',
    label: '23',
    name: 'Breadwinner',
    lat: 52.3715181,
    lng: 4.8792632,
    body: 'Breadwinner is one of those places that feels quietly reliable.<br><br>The smell reaches you before the sign does. Fresh bread, pastries, something warm just out of the oven. It\'s small, straightforward, and focused on doing one thing well. They sell handrolled sourdough bagels, baked freshly every morning, made with natural organic & local ingredients.',
    tip: 'If you\'re walking in the morning, this is a perfect grab-and-go stop. Later in the day, options can sell out — which is usually a good sign.'
  },
  {
    id: 'opt3',
    type: 'optional',
    label: '🍽️',
    icon: '🍽️',
    name: 'Waterkant',
    lat: 52.3699808,
    lng: 4.8760914,
    body: 'If you feel like stepping slightly outside the Jordaan grid, Waterkant is worth the short detour, especially in summer.<br><br>Set along the water near the Marnixstraat, it has a different atmosphere — more open, colorful, relaxed. Inspired by Surinamese culture, it brings another layer to Amsterdam\'s story.<br><br>The Jordaan began as a neighborhood for newcomers. That tradition continues. The city keeps absorbing influences, through food, music, language.',
    tip: 'On sunny afternoons this terrace fills quickly. It\'s more about atmosphere than quiet conversation.'
  },
  {
    id: 24,
    type: 'stop',
    label: '24',
    name: 'Lauriergracht',
    lat: 52.3710673,
    lng: 4.8797588,
    body: 'Lauriergracht is noticeably quieter than Bloemgracht or Prinsengracht. Fewer boats. Fewer visitors. More stillness.<br><br>This is where you start to notice the micro-differences within the Jordaan. One canal feels lively and photogenic. Another feels residential and almost hidden.<br><br>Stand on the bridge for a moment. Listen. The sound shifts from less café noise to more subtle city hum. The Jordaan isn\'t one uniform experience. It changes street by street, canal by canal.'
  },
  {
    id: 25,
    type: 'stop',
    label: '25',
    name: 'Hof van Parijs',
    lat: 52.3699433,
    lng: 4.8786237,
    body: 'The entrance to Hof van Parijs is easy to miss. Step inside and the world tightens again — small houses gathered around a quiet courtyard. No grand statement, just calm.<br><br>The name Hof van Parijs might raise eyebrows. It doesn\'t actually have anything to do with France in a glamorous way. In the 17th and 18th centuries, naming courtyards or buildings after foreign cities sounded fashionable and cosmopolitan. "Paris" suggested refinement and prestige, even if daily life inside was quite modest.<br><br>It\'s a reminder that branding existed long before Instagram.<br><br><em>Please enter quietly — people still live here.</em>'
  },
  {
    id: 26,
    type: 'stop',
    label: '26',
    name: 'Elandsgracht',
    lat: 52.3689355,
    lng: 4.8784849,
    body: 'When you reach the Elandsgracht, the space opens again.<br><br>Like the Rozengracht, this used to be a canal. It was filled in during the 19th century to create more room for traffic and markets. That explains the unusual width.<br><br>Here\'s something interesting to look for: many of the buildings along this street are slightly newer than what you\'ve seen earlier in the Jordaan. In the 20th century this area changed a lot. Some old houses were in very poor condition and were replaced during large renovation projects that saved the neighborhood from decline.<br><br>So while the Jordaan often feels centuries old, some parts of it (including here) are the result of a big wave of restoration and rebuilding in the 1970s and 1980s.'
  },
  {
    id: 27,
    type: 'stop',
    label: '27',
    name: "Balthazar's Keuken",
    lat: 52.3695,
    lng: 4.8805,
    body: "Balthazar's Keuken feels almost like being invited into someone's home.<br><br>There's no long menu. Just a set meal that changes daily or weekly. You sit at tables, often next to strangers, and the courses arrive one by one.<br><br>It's intimate without being formal. That communal feeling fits the Jordaan perfectly. This neighborhood has always been about proximity — people living close, talking close, sharing space.",
    tip: "Reservations are essential here. It's small, and it fills up quickly."
  },
  {
    id: 28,
    type: 'stop',
    label: '28',
    name: 'Johnny Jordaanplein',
    lat: 52.370141,
    lng: 4.8823063,
    body: 'This small square is dedicated to Johnny Jordaan, one of Amsterdam\'s most beloved folk singers. He grew up nearby and became the voice of the neighborhood in the mid-20th century. His songs were emotional, dramatic, and deeply local. He sang about love, loss, daily struggle, and pride.<br><br>Look at the statues around the square. They depict not just Johnny, but other famous singers connected to this musical tradition. It\'s almost like an open-air hall of fame.<br><br>You won\'t always find crowds here. It\'s a quiet tribute. This is a good place to pause and imagine evenings filled with music drifting through open windows.'
  },
  {
    id: 'opt4',
    type: 'optional',
    label: '🍺',
    icon: '🍺',
    name: 'Café de Eland',
    lat: 52.36999369999999,
    lng: 4.8823104,
    body: "Café de Eland is the kind of place that hasn't tried too hard to modernize, and that's its charm. Inside, it's compact and warm. Wooden tables, regulars at the bar, conversations that feel like they've been continuing for years.<br><br>If you're looking for a classic Dutch brown café experience without too much performance, this is a good stop. It is also a great corner for people watching.",
    tip: 'Late afternoon is ideal: lively, but not yet crowded.'
  },
  {
    id: 29,
    type: 'stop',
    label: '29',
    name: 'Eenvoud',
    lat: 52.3696056,
    lng: 4.8823136,
    body: 'Eenvoud means "simplicity." The name says a lot. The jewelry here is understated — clean lines, careful craftsmanship, nothing excessive.<br><br>This is not a flashy storefront. It\'s quiet confidence. Pieces designed to be worn daily, not locked away.<br><br>Step inside and notice the atmosphere. Calm. Focused. Personal. In a city increasingly filled with global brands, places like this feel intentional. Even if you\'re not buying, it\'s worth stepping in to see how small-scale craftsmanship still survives in the historic center.'
  },
  {
    id: 30,
    type: 'stop',
    label: '30',
    name: '9 Streets',
    lat: 52.3704479,
    lng: 4.8824879,
    body: 'We\'ve reached the Nine Streets. Watch out for cars and bikes in this busy area.<br><br>These narrow streets connect the main canals and are now filled with boutiques, vintage stores, design shops, and small cafés. It\'s lively, curated, and distinctly different from the Jordaan.<br><br>What\'s interesting here is the shift in atmosphere. The buildings are still centuries old, but the function has transformed. Windows that once displayed everyday goods now present curated fashion and design. It feels polished, but still intimate.<br><br>This is a hinge point in the walk. The energy subtly changes from residential to retail, from local rhythm to destination shopping. Take your time here. Wander without a strict route.'
  },
  {
    id: 'opt5',
    type: 'optional',
    label: '🥐',
    icon: '🥐',
    name: 'Chun Café Berenstraat',
    lat: 52.3704688,
    lng: 4.8839422,
    body: 'Chun is small, bright, and usually busy. Known for its Taiwanese-style sandwiches and soft milk buns, it represents the global food culture that now thrives in Amsterdam. The menu is focused, the space minimal, the vibe energetic.<br><br>You\'ll often see a short line outside. A sign that something is being done right.',
    tip: 'If it\'s crowded, consider takeaway and find a nearby canal edge to sit. Sometimes the setting makes the snack even better.'
  },
  {
    id: 31,
    type: 'stop',
    label: '31',
    name: 'Episode',
    lat: 52.3702975,
    lng: 4.8843316,
    body: 'Episode is not subtle. Racks packed tightly, color everywhere. Denim, leather, 90s sports jackets, sequins, oversized coats. It\'s loud in the best possible way.<br><br>This is one of the larger vintage stores in the city, and it attracts a mix of students, stylists, treasure hunters, and people who just want something different from the high street brands.<br><br>What makes it interesting isn\'t just the clothing — it\'s the hunt. You have to dig. You have to look closely. Sometimes the best pieces are hidden between ten ordinary ones.',
    tip: 'Give yourself time here. And don\'t be afraid to try something unexpected — this is just the place for it.'
  },
  {
    id: 32,
    type: 'stop',
    label: '32',
    name: 'KO Concept Store',
    lat: 52.370221,
    lng: 4.8860091,
    body: 'KO Concept Store feels like the opposite of the last stop (Episode). Clean lines, neutral tones, carefully spaced displays. Everything has breathing room.<br><br>It\'s curated rather than crowded: clothing, accessories, objects that feel considered. The atmosphere is calm, almost gallery-like.<br><br>Walking from Episode to KO within a few minutes shows the range of this area. Playful chaos on one side. Minimal refinement on the other.<br><br>Even if you\'re not shopping, step inside for a moment and notice how differently space can feel with just a shift in presentation.'
  },
  {
    id: 33,
    type: 'stop',
    label: '33',
    name: 'Croissanterie Egstorf',
    lat: 52.370225,
    lng: 4.888908,
    body: 'Croissanterie Egstorf is small, unpretentious, and wonderfully consistent. No big branding. No trend-driven menu. Just solid pastries, good coffee, and a steady stream of locals who know exactly what they\'re coming for.<br><br>It feels like the kind of place that hasn\'t needed to reinvent itself every few years. There\'s something comforting about that.',
    tip: 'Their croissants are best earlier in the day. If you\'re lucky, you\'ll catch them still warm.'
  },
  {
    id: 'opt6',
    type: 'optional',
    label: '☕',
    icon: '☕',
    name: 'Two Story',
    lat: 52.368605,
    lng: 4.888517300000001,
    body: 'Two Story is the kind of place where morning easily turns into afternoon. It is a gallery, design store and café. It\'s relaxed but thoughtful. Comfort food with attention to detail. They also sell a selection of homeware, tableware and paper publications, pieced together to be browsed with intention and time.'
  },
  {
    id: 'end',
    type: 'end',
    label: 'E',
    name: 'Spui',
    lat: 52.368841,
    lng: 4.8904528,
    body: 'And then the space opens.<br><br>Spui feels different from where we began. Broader. Airier. The energy shifts from boutique streets to something more historic and intellectual.<br><br>This square has long been a meeting place for students, writers, activists, and book lovers. On Fridays, a book market fills the space with tables and quiet browsing.<br><br>Notice the statue of Het Lieverdje in the center: once a symbol of youthful rebellion in the 1960s.<br><br>Take a moment here. You\'ve moved from residential streets and hidden courtyards, through food spots and boutiques, across canals and wider roads, and now you arrive at a square that invites you to linger.<br><br>You moved through layers of the city. Some loud, some quiet. Some centuries old, some just opened last year. Amsterdam doesn\'t reveal itself all at once. It unfolds gradually — street by street, bridge by bridge.<br><br><em>Because when one route ends at Spui… there is always AnotherWalk.</em>'
  }
];
