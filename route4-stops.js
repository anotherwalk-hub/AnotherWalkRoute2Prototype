// ─────────────────────────────────────────────────────────────
//  AnotherWalk — Route data
//  Route: The First Mile, Slowed Down (Free Route / Instapper)
//  City:  Amsterdam
//  File:  route4-stops.js   (v1)
//
//  STRUCTUUR:
//  - Startpunt: Damrak (52.376525827546104, 4.897812155370215) — geen
//    inhoudelijke stop, alleen vertrekpunt voor de looplijn
//  - 14 numbered stops (Celia → Proeflokaal A. van Wees)
//  - Endpunt: Begijnhof — finale met afsluitende tekst
//  - stopCount: 15 (matches the "15 stops" we communicate publicly:
//    14 numbered + Begijnhof as destination). Pas aan naar 14 als je
//    strikt het aantal genummerde stops wilt tonen.
//
//  COÖRDINATEN: overgenomen uit My Maps-CSV. Damrak-coords door Nick.
//
//  VIA-POINTS: nu leeg gelaten — de Mapbox Directions API zou de
//  meeste segmenten goed moeten kunnen routeren. Loop de route in de
//  app door en voeg via-points toe als Mapbox ergens een rare keuze
//  maakt (vooral bij stop 8 → 9: oversteek Spuistraat → Blauwburgwal,
//  en bij 9 → 10: terug naar Singel).
// ─────────────────────────────────────────────────────────────

var ROUTE_META = {
  id: 'first-mile-slowed-down',
  title: 'The First Mile, Slowed Down',
  city: 'Amsterdam',
  label: 'Amsterdam · Free Route',
  stopCount: 15,
  duration: '±2 hr',
  center: [4.892, 52.374],
  zoom: 14,
  intro: 'Every visitor to Amsterdam arrives the same way. You step out of Centraal Station, and the city throws everything at you at once: water, bikes, trams, the spires of an old church, and people pulling suitcases in every direction. Right in front of you starts the Damrak — that big, busy shopping street leading straight to Dam Square. Most people just follow it. Eleven minutes, eyes forward, souvenir shops on either side, and it\'s over.<br><br>This route does something different. We start at the same spot, but instead of cutting straight through, we slip sideways into the streets next to it — and show you a different city entirely.<br><br>A bakery the French envy. A church hiding behind a row of houses. A façade one meter wide. A tasting room pouring Dutch gin since the 1700s. A silent courtyard behind a wooden door.<br><br>This is what AnotherWalk does: we slow you down just enough to let the city catch up with you. If you like how this feels, more routes are waiting.<br><br><em>Walk Amsterdam like you live there.</em>',
  viaPoints: []
};

var ROUTE_STOPS = [
  {
    id: 'start',
    type: 'start',
    label: 'S',
    name: 'Damrak (Start)',
    lat: 52.376525827546104,
    lng: 4.897812155370215,
    body: 'Welcome to AnotherWalk. You\'re standing on the Damrak — the loudest, busiest welcome Amsterdam can give you.<br><br>Most people walk straight down this street toward Dam Square. We\'re going to do something else.<br><br>Turn off the Damrak now, and head toward your first stop just a few steps away. The walk begins.'
  },
  {
    id: 1,
    type: 'stop',
    label: '1',
    name: 'Celia Amsterdam',
    lat: 52.3775388,
    lng: 4.8959671,
    body: 'You just left the Damrak — souvenir shops, bike bells, people in every direction. Now, your first AnotherWalk move. A few steps off the main street, push open this door, and you\'re somewhere else completely.<br><br>Café Celia, inside the Kimpton De Witt hotel. Plants hang from a huge glass roof. Locals work on their laptops. It\'s quiet. The kitchen here is California-inspired — light, sunny food, fresh juices, lots of avocado — and the weekend brunches are something locals come back for.<br><br>Here\'s the secret to use all over Amsterdam: the best calm spots in the city center are hotel lobbies, and you don\'t need to be a guest. Order a coffee, or a brunch plate if it\'s the weekend. Take the best chair. Take a deep breath. The walk starts here.'
  },
  {
    id: 2,
    type: 'stop',
    label: '2',
    name: 'Gebroeders Niemeijer',
    lat: 52.37819,
    lng: 4.895675,
    body: 'Now around the corner, onto the Nieuwendijk — one of the loudest, most touristy streets in Amsterdam. Waffle smells, souvenir shops, noise everywhere. So why are we here?<br><br>Because behind this modest storefront, two brothers have been baking since 2009 — and many people say their croissants are better than in Paris. Open the door, and the street disappears again. Warm bread, an old Art Deco ceiling, bakers at work behind the counter.<br><br>If you have time, find a table upstairs and order a proper petit déjeuner. In a hurry? Grab a croissant and a coffee to go.',
    tip: 'The pain au chocolat is the one you\'ll think about later.'
  },
  {
    id: 3,
    type: 'stop',
    label: '3',
    name: 'Stubbe\'s Haring',
    lat: 52.3790908,
    lng: 4.894222,
    body: 'A short walk further north, the Nieuwendijk ends at a bridge over the water. There\'s a fish stall on it. In the lunch line: builders, office workers, and one nervous tourist — today, that\'s you.<br><br>Stubbe\'s has been here for generations, same family every time. This is the place to try raw herring. You eat it with onions and pickle. On a soft bread roll if you want to start easy — or hold it by the tail and lower it into your mouth if you feel brave.<br><br>It costs a few euros. It tastes of salt and sea. And you\'ll never forget your first one.'
  },
  {
    id: 4,
    type: 'stop',
    label: '4',
    name: 'Singel 7',
    lat: 52.3782358,
    lng: 4.893836299999999,
    body: 'Stop here and look across the water. Find number 7. A door. A window. And that\'s... all. One meter of house — the narrowest front in the city.<br><br>But here\'s the joke: this is actually the <em>back</em> of a house that gets much wider on the other side. Why build it like this? Because for centuries, you paid tax based on how wide your house was at the canal.<br><br>So people in Amsterdam built deep, built tall, and showed the tax man their smallest possible face. The city still thinks this way.'
  },
  {
    id: 5,
    type: 'stop',
    label: '5',
    name: 'De Ronde Lutherse Kerk',
    lat: 52.3778985,
    lng: 4.8938434,
    body: 'Now turn south along the canal — and right in front of you rises a big copper dome, green with age.<br><br>The Lutherans built this round church in 1671. No tower, no bells, nothing that could upset the city\'s leaders at the time. Just one perfect circle.<br><br>It survived a fire (a careless plumber, the story goes), lost its visitors over the years, and today it\'s used for events under that beautiful dome. Step back and look at it.<br><br>In Amsterdam, buildings don\'t really die. They just get a new job.'
  },
  {
    id: 6,
    type: 'stop',
    label: '6',
    name: 'De Silveren Spiegel',
    lat: 52.3777205,
    lng: 4.89392,
    body: 'Right next to the dome, in the same quiet little corner, find these two small houses from 1614. They lean against each other like an old couple.<br><br>They were built for a soap maker named Laurens Spiegel, and his name lives on inside: De Silveren Spiegel is today one of Amsterdam\'s most loved fine-dining restaurants — wooden beams, candlelight, a famous wine cellar, and a kitchen people travel into the city for. Not your lunch break, but maybe your special evening.<br><br>From the outside, look at how the houses lean toward you. That was done on purpose. Houses leaned forward so furniture could be pulled up to the top floor without hitting the wall, and so rain would fall past the windows.<br><br>Four hundred years later, they\'re still here. A little crooked, but still standing. Not a bad way to grow old.'
  },
  {
    id: 7,
    type: 'stop',
    label: '7',
    name: 'Dominicuskerk',
    lat: 52.3768757,
    lng: 4.8930999,
    body: 'Walk one street over to the Spuistraat — and on your left, look for a small entrance you would never notice otherwise. That\'s the whole point.<br><br>There\'s a huge church hiding behind this row of houses. When it was built in the 1880s, Catholics in Amsterdam had learned to keep quiet about their faith.<br><br>So the church hides from the street and saves all its beauty for the inside: painted ceilings, colored light, and a silence you can almost touch.<br><br>If the door is open, step in. Then ask yourself: how does something this big stay this invisible?'
  },
  {
    id: 8,
    type: 'stop',
    label: '8',
    name: 'Spuistraat — the painted street',
    lat: 52.3763494,
    lng: 4.8927952,
    body: 'Keep walking down the Spuistraat, and the street starts changing its mood. Look up. Look at the walls.<br><br>Where the rest of the center has been polished and tidied, parts of Spuistraat still wear paint — bright murals, old slogans, a stubborn whiff of the 1980s. Back then, this whole street was squatter territory: people moved into empty buildings, painted them, and refused to leave.<br><br>Most of that time has been cleaned up and renovated. But the spirit hangs on, in murals and small bars with strong opinions. You don\'t have to love this side of Amsterdam.<br><br>But it\'s good to know: this pretty city has always argued with itself. The arguing is half the reason it stayed interesting.'
  },
  {
    id: 9,
    type: 'stop',
    label: '9',
    name: 'Blauwburgwal',
    lat: 52.3764357,
    lng: 4.8910761,
    body: 'One street over, cross a small bridge and stop. You\'re now on the shortest canal in Amsterdam — a hundred meters long, pretty as a postcard.<br><br>But take a moment here. In May 1940, in the first days of the war, a bomb fell on this canal — one of the very few that ever hit the old center. Dozens of people died, on what had been a normal Tuesday. A small stone plate on the wall remembers them.<br><br>Amsterdam often looks untouched by the twentieth century. This little canal knows better — but it only tells you if you stop.'
  },
  {
    id: 10,
    type: 'stop',
    label: '10',
    name: 'De Dolphijn — Singel 140–142',
    lat: 52.3757092,
    lng: 4.889957799999999,
    body: 'Back on the Singel and walking south, find this double house on your right, called "The Dolphin." It looks like just another nice canal house — until you know who lived here.<br><br>Frans Banninck Cocq: an important man in the city, and the man in black in the middle of the most famous painting in the Netherlands. Yes, that one — the Night Watch.<br><br>Millions of people stand in line at the Rijksmuseum to see him. You\'re standing at his front door, and there\'s nobody here.<br><br>That\'s this city in one sentence: its legends didn\'t live in palaces. They lived a few doors down.'
  },
  {
    id: 11,
    type: 'stop',
    label: '11',
    name: 'Torensluis & Multatuli',
    lat: 52.3745614,
    lng: 4.8893729,
    body: 'Here\'s a fun one: you\'re about to cross the widest bridge in Amsterdam — and you won\'t even notice it\'s a bridge. Forty-two meters of café tables and big trees.<br><br>Why so wide? A medieval tower stood here until 1829. The bridge was simply built around it, and when the tower was taken down, all this space was left. Under your feet are old rooms that once held drunk people and thieves for the night.<br><br>And in the middle stands Multatuli — the writer who told the Dutch hard truths about their colonies.<br><br>Best part: this is one of the nicest spots in the whole center to just sit for a while. Pull up a chair on one of the terraces, or pick a small brown café on either side of the bridge. Order a coffee, or a beer if it\'s that kind of afternoon. You earned it.'
  },
  {
    id: 12,
    type: 'stop',
    label: '12',
    name: 'Herengracht 168–172',
    lat: 52.3741561,
    lng: 4.8871226,
    body: 'Walk west one block, and you\'ve stepped into the famous canal ring — the circle of water and money that made Amsterdam rich.<br><br>Right here, two neighbors have been disagreeing about style for four hundred years. Number 170–172: red brick, curves, lots of decoration — a banker\'s house from 1617 that really wants you to look at it.<br><br>Next door, number 168: white stone, calm and simple, with a new shape at the top that the whole city would soon copy. Old show-off, new cool. Six meters apart.<br><br>Which one do you like better? Everyone here has an opinion.'
  },
  {
    id: 13,
    type: 'stop',
    label: '13',
    name: 'The Hoxton — Herengracht 255',
    lat: 52.3718724,
    lng: 4.8874276,
    body: 'Keep walking south along the Herengracht to number 255. Push open the door — and welcome to the Hoxton.<br><br>Yes, another hotel. But here\'s why this one is special: this single building is actually five old canal houses from the 1600s, all connected on the inside. Remember those Bartolotti gables you just looked at from the street? This is your chance to walk through one.<br><br>Find a couch in the lobby, or a table at Lotti\'s — the restaurant inside. Good food during the day, proper cocktails in the evening, and on Sundays there\'s live jazz that fills the whole room.<br><br>The floors creak, there\'s a hidden courtyard at the back, and you\'re sitting inside four hundred years of history. Sometimes the best canal house is the one that lets you in.'
  },
  {
    id: 14,
    type: 'stop',
    label: '14',
    name: 'Proeflokaal A. van Wees',
    lat: 52.3699677,
    lng: 4.8872316,
    body: 'A few minutes further down the Herengracht, find a small sign that says Proeflokaal A. van Wees. This is the moment.<br><br>A proeflokaal is a tasting room — and this one belongs to a distillery that has been making jenever since 1782. Jenever is the Dutch grandfather of gin: stronger, smoother, with a hint of malt.<br><br>Step inside, find a spot at the wooden bar, and ask the bartender what to try. They\'ll pour you a tulip-shaped glass, filled right to the brim. Tradition says: bend down, hands behind your back, and take the first sip without touching the glass.<br><br>Do it. You\'ll laugh. The locals next to you will smile. Welcome to one of Amsterdam\'s most local traditions. <em>Proost</em> — one for the road.'
  },
  {
    id: 'end',
    type: 'end',
    label: 'E',
    name: 'Begijnhof',
    lat: 52.3696284,
    lng: 4.8901813,
    body: 'One last walk. East now, across to the Spui — and now look carefully, because this final stop is famously easy to miss. The entrance is just a small wooden door between two shops, with almost no sign. If you walk past it twice, you\'re not the first.<br><br>Push it open, and the sound of the city falls away. Grass, old houses, birds. It feels like a village inside the city.<br><br>For centuries, this courtyard was home to the Beguines: religious women who chose to live together, on their own terms. The last one died here in 1971. Look for the dark wooden house from around 1530 — one of the oldest in Amsterdam — and the hidden chapel where Catholics once prayed in secret.<br><br>People still live here today. So walk softly. And then just stand still for a moment.<br><br>You started this walk on the Damrak, in the loudest version of Amsterdam there is. You\'re ending it in the quietest. Somewhere in between, you saw the city most visitors miss.<br><br>Some places ask for your attention. This one asks for your silence. Now you know how to find both.<br><br><em>And once you start looking more closely, you realize: there is always AnotherWalk.</em>'
  }
];
