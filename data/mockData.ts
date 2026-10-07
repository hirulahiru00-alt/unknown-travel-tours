import { TourPackage, Destination, PhotographyPackage, Testimonial, FleetVehicle } from '../types/travel';

export const USD_TO_LKR_RATE = 305;
export const CONCIERGE_PHONE_NUMBER = '+94 77 808 4913';
export const CONCIERGE_WHATSAPP_NUMBER = '94778084913';

// Hotlinked imagery from the user-provided HTML
export const ASSETS = {
  logo: '/src/assets/images/unknown_travels_tours_logo_1791129192276.jpg',
  sigiriya: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLaWTSsTqHdYNNMwIeiC2iQYZLN-_Ot72RrVyoOxrfn0GbMha5rJeWZ46xJ92FS4NYDSuTgCLQSAKu-wTZ0hdsRrIPwcrG1YQ9vmoMaPx4ka_0A4mM2z2Jhd6dPnquDumeOCvez-p4csioqRYcX0neVcj-9_XDQtq2u5kZ0Qo-S4KEM6y9KRtFTPtA9vJbjxqswywcBPW1z9HOtOSgLvZ1ilq825Sz3FhmN8PbQ7talS2xza5ET0RhRg',
  ella: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjEg9ASdDDWw7gjlxzVRm51Zgtw1HYzIHvRXdQWyWXELNHvuD2ZWwvAJmnN6pGl6gvg3qGm7OeE1JwTn70oIwr82J7WBf5kcAywWtmTk3CbmaXnZ9vyEAGPESDyIfMpkWBEpKcm875pzT6gGZqSNdiBCiEILOitWCELp8cqb9PospXhh7kR8fCl54ueSNmYg0jCxE_xEL2Sh-Fr2owwoUYIcNRc9LNN5dNRg9oasw42Pi071MFDd5Kzg',
  kandy: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzmlJ2ZcOO0dgRBGL8PvQ36B2THgCURi6J9X5Ni-0iwUEFN9AC_tt4rNOuQimi7GTHUm--Y2x0lzxWdW_9y0hAivne8giQtmls5mg0grCdBtUq_jyNsSJsaLTuihOPNX5r7dqshM71ufQRzayP90Hop8Sg_oZF-4PGIo9yBSLJhqN62E2xd7cEfS3rS0YqKCrHEfdsQnGd4eUzDuG4HHsols_51QeMJ7luIQjKrFfjrA_6Tyq8H7HIrQ',
  nuwaraEliya: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2QDSVyAfvLkR-VV4rG9oO-mSUXTRMKtrkfG-rS_W2ZRA1XqlYaZzKvYdU2YqQINORV4Hb-ziemvL0azpFOi2pZUZjvXbZzSshSIfDaQ3oZAa1_9MLcqiyYB6jjKfsFLf_8J0cbCEg7bTNUIfYFmO_0WEI8OOOpokKC5YWW21KBHPO0KKMXgwI4NphbLfYTQgJQ5W8YFCIs157z3SlS3lhZVG058zu5mXWwz5caw5kX3_KYiqJe8ir1w',
  yala: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIBv-RQWhhGbmCbcaM90dAwyClYpoHcsSlikNAONyZu1BmAHybqt7QGJY3LFGSlL_jvOyS4YdrsqHBcWUn3iRb3YANEPkHGnV5g2t-seyjSFBeA2-OKZyo54XTM-MpKkB0QRPQTxYZKwhY9D2UBaZiTfTm9DgetJWDtM3oxxYHlVgrLyaDpOwP0CwioAKn10ys1bJYpQ-_K7BYrRfjoxkQfJvT2wQZH9ynMkB5uNzb279bbOAIQXnpAA',
  galle: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAanu-Nab3jvZw4J-IjO_Xfcd1rOi-s0hL9mGBlao_NHFt0UmpsLl9tp0kZUuTmbDoZkCGzY2JAxRfYLfYnvbpB8v4T8gv7gVOhj__IkQKXDkmXzPJx0xySGQJ-oW807gQffoZnpAuM5rhO7zDzFGuKwWiQ69_yaGjvYiB5--uD5YKdo3urDpZP0nxXUZtZqXpipq527Y6jV7OZ-c-dInX2pkOt39_HqdSVcYrbW2Z27INyzm-NaplZGA',
  routeMap: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDltDnMX3-OjMz09mUMbxUg5zvluTNErmzHNCbZkERfclhhpsQniDUuE1x0N5OxXoxpJKrW3C9-lhzGqsS0KsGJiy6keNsVyrSMxidj29BFBNmQqR0k8OvCMxYc2a8pQeD-4ATd_V5JUq8lTreCupGjBugwX_6nM38iT65QuknNXFmeWR4JX3rMRHAjPAbEnAiXmQAr-cXd9NnrKL6odGCylaCcd1ug1yOG6NCcKuNZPL7EGm0zFKDvNA',
};

export const BRAND_LOGOS = {
  studio: '/src/assets/images/unknown_studio_logo_1791129170894.jpg',
  traveler: '/src/assets/images/unknown_traveler_logo_1791129180908.jpg',
  travelsAndTours: '/src/assets/images/unknown_travels_tours_logo_1791129192276.jpg',
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    region: 'Cultural Triangle',
    elevation: '349m Elevation',
    distanceFromColombo: '175 km (approx. 3.5 hrs via Central Expressway)',
    bestTimeToVisit: 'December to April, July to September',
    tagline: 'The Ancient Sky Citadel of King Kashyapa',
    description: 'Ancient kingdom, UNESCO palace fortress, 5th-century water gardens, and breathtaking 360° jungle vistas.',
    longDescription: 'Rising sheer from the emerald dry-zone forest canopy, the 200-meter monolith of Sigiriya is an audacious testament to 5th-century architectural mastery. Crowned by the ruined citadel of King Kashyapa, it houses the legendary celestial cloud maiden frescoes, a mirror-glazed wall inscribed with ancient poetry, and colossal stone lion paws flanking the final summit ascent.',
    imageUrl: ASSETS.sigiriya,
    highlights: ['5th-Century Water Gardens', 'Sigiriya Frescoes', 'Mirror Wall Inscriptions', 'Summit Palace Remains', 'Sunrise Pidurangala Vista'],
    photoSpots: ['Pidurangala rock sunrise framing Sigiriya', 'Between the colossal Lion Paws', 'Terraced royal water gardens reflections'],
    insiderTip: 'Ascend at 06:15 AM to summit in cool morning breeze before the crowds and bask in golden dawn rays washing over the surrounding jungle reserve.'
  },
  {
    id: 'ella',
    name: 'Ella',
    region: 'Highlands',
    elevation: '1,041m Elevation',
    distanceFromColombo: '210 km (approx. 5 hrs via Scenic Hill Pass)',
    bestTimeToVisit: 'January to May (clear mountain views)',
    tagline: 'Mist-Covered Cloud Passes & Colonial Viaducts',
    description: 'Mist-covered peaks, Nine Arches stone viaduct, emerald tea plantations, and legendary colonial rail journeys.',
    longDescription: 'Perched along a dramatic gorge in the southern edge of the central highlands, Ella offers cool mountain breezes, cascading waterfalls, and lush terraced hills. The iconic Demodara Nine Arches Bridge stands as an engineering marvel built entirely of brick, stone, and cement without steel reinforcement during World War I.',
    imageUrl: ASSETS.ella,
    highlights: ['Demodara Nine Arches Bridge', 'Ella Rock Trek', 'Little Adam’s Peak', 'Ravana Falls', 'Scenic High Country Train'],
    photoSpots: ['Nine Arches bridge as the blue express train crosses at 09:30 AM', 'Little Adam’s Peak summit facing Ella Gap', 'Secret tea trail terraces'],
    insiderTip: 'Reserve private First Class Observation carriage seats on the morning train from Nanu Oya to Demodara for unobstructed mountain panorama photos.'
  },
  {
    id: 'kandy',
    name: 'Kandy',
    region: 'Royal Kingdom',
    elevation: '500m Elevation',
    distanceFromColombo: '115 km (approx. 2.5 hrs)',
    bestTimeToVisit: 'Year-round; August for the Grand Esala Perahera',
    tagline: 'The Sacred Citadel of the Tooth Relic',
    description: 'Sacred Temple of the Tooth Relic, royal botanical sanctuaries, Kandyan ceremonial arts, and lake promenades.',
    longDescription: 'The last royal capital of ancient Sri Lanka, Kandy rests cradled between mist-shrouded mountain ranges and centered around an ornamental lake. The venerated Sri Dalada Maligawa preserves the sacred left canine tooth of Lord Buddha, protected through centuries of royal devotion.',
    imageUrl: ASSETS.kandy,
    highlights: ['Temple of the Sacred Tooth Relic (Dalada Maligawa)', 'Peradeniya Royal Botanical Gardens', 'Kandy Lake Walk', 'Kandyan Cultural Drummers', 'Udawattakele Royal Forest Sanctuary'],
    photoSpots: ['Golden roof pavilion illuminated at evening Thevava ceremony', 'Double Avenue of Royal Palms in Peradeniya', 'Hillside overlook across Kandy Lake at twilight'],
    insiderTip: 'Our concierge arranges VIP entry for the 18:30 Puja ritual with front-tier blessing access and private English-speaking temple scholar accompaniment.'
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    region: 'Tea Country',
    elevation: '1,868m Elevation',
    distanceFromColombo: '160 km (approx. 4.5 hrs scenic ascent)',
    bestTimeToVisit: 'February to May (crisp sunshine & blooming gardens)',
    tagline: 'Little England Amidst High-Grown Ceylon Estates',
    description: "'Little England', high-altitude cool mist, historic tea master bungalows, and artisanal high-grown Ceylon tasting.",
    longDescription: 'Tucked at the foot of Pidurutalagala, Sri Lanka’s tallest peak, Nuwara Eliya boasts a crisp temperate climate, Tudor-style country residences, manicured golf fairways, and endless velvet tea carpets. It is the spiritual epicenter of world-renowned Single Origin Ceylon Tea.',
    imageUrl: ASSETS.nuwaraEliya,
    highlights: ['Artisanal Tea Factory Private Tour', 'Historic Hill Club & Grand Hotel High Tea', 'Gregory Lake Hydroplane & Yachting', 'Hakgala Botanical Gardens', 'Horton Plains World’s End Clifftop'],
    photoSpots: ['Tea master residence surrounded by misty cypress groves', 'St. Clair & Devon Falls panoramic view', 'Baker’s Falls inside cloud forest'],
    insiderTip: 'Stay in a restored 19th-century colonial tea planter’s bungalow featuring roaring log fireplaces and private butler service.'
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    region: 'Safari Wilds',
    elevation: 'Southeast Coast',
    distanceFromColombo: '260 km (approx. 4 hrs via Southern Expressway)',
    bestTimeToVisit: 'February to July (ideal drought season for leopard sightings)',
    tagline: 'Realm of the Ceylon Leopard & Wild Asian Tusker',
    description: 'Untamed wildlife sanctuary, elusive Ceylon leopards, majestic Asian elephant herds, and coastal freshwater lagoons.',
    longDescription: 'Spanning dense monsoon forests, scrub jungle, open grasslands, and pristine marine lagoons along the Indian Ocean, Yala boasts one of the highest leopard densities on earth. It is home to sloth bears, marsh crocodiles, tusked elephants, and hundreds of bird species.',
    imageUrl: ASSETS.yala,
    highlights: ['Block 1 Private Leopard Tracking Safari', 'Wild Asian Elephant Herds', 'Coastal Lagoon Birdwatching', 'Luxury Glamping Under African/Ceylon Skies', 'Sundowner Cocktails on Sand Dunes'],
    photoSpots: ['Leopard resting on granite rock formation (Patanangala)', 'Elephant family bathing in lagoon during golden hour', 'Peacocks displaying in coastal brush'],
    insiderTip: 'We exclusively charter custom-modified high-clearance open 4x4 Land Cruisers with padded bucket seats, whisper-quiet electric modes, and master naturalists.'
  },
  {
    id: 'galle',
    name: 'South Coast & Galle',
    region: 'Coastal Haven',
    elevation: 'Indian Ocean',
    distanceFromColombo: '120 km (approx. 1.5 hrs via Southern Expressway)',
    bestTimeToVisit: 'November to April (tranquil turquoise waters & whale season)',
    tagline: 'Colonial Ramparts, Surf Bays & Sunset Catamarans',
    description: 'Golden crescent bays, 17th-century Galle Dutch Fort ramparts, private sunset catamaran sails, and stilt fishermen.',
    longDescription: 'A living UNESCO World Heritage fortress founded by the Portuguese and fortified by the Dutch in 1663, Galle Fort blends European architecture with South Asian tropical living. Surrounding shores offer world-class surfing, turtle sanctuaries, and private oceanfront villas.',
    imageUrl: ASSETS.galle,
    highlights: ['17th-Century Galle Fort Ramparts Walk', 'Private Sunset Catamaran in Mirissa', 'Stilt Fishermen of Koggala', 'Blue Whale & Dolphin Watching', 'Oceanfront Dining & Ceylon Arrack Mixology'],
    photoSpots: ['Galle Fort Lighthouse framed by palm fronds at sunset', 'Coconut Tree Hill Mirissa curved palm promontory', 'Stilt fishermen silhouetted against twilight surf'],
    insiderTip: 'Walk the seaward ramparts between Flag Rock and the Lighthouse precisely at 17:45 for the most dramatic Indian Ocean golden hour light.'
  }
];

export const TOURS: TourPackage[] = [
  {
    id: 'sigiriya-day-journey',
    title: 'Sigiriya Ancient Citadel Day Experience',
    badge: '1 DAY INTENSIVE',
    durationLabel: '1 Day Intensive',
    durationDays: 1,
    route: ['Colombo / Negombo', 'Dambulla Cave Temples', 'Sigiriya Rock Fortress', 'Return'],
    description: 'Depart before dawn in your private executive sedan. Summit the 5th-century UNESCO rock citadel before the midday sun and discover the sacred cave sanctuaries of Dambulla.',
    longDescription: 'Experience the crown jewels of Sri Lanka’s Cultural Triangle in a single seamless, ultra-luxurious private day expedition. Leaving Colombo in a climate-controlled executive Mercedes or Toyota Prado, you will bypass standard tourist delays with pre-arranged VIP site access, summit Sigiriya at the ideal morning hour, savor a gourmet garden lunch, and marvel at the 2,000-year-old rock paintings of Dambulla.',
    highlights: [
      'Early sunrise departure with chilled refreshments and onboard Wi-Fi',
      'Private UNESCO-certified archeologist guide for Sigiriya summit',
      'VIP passes to Dambulla Golden Rock Cave Temples',
      'Authentic organic Ceylon feast in a private spice garden pavilion',
      'Return executive chauffeur transfer directly to your hotel door'
    ],
    vehicle: 'Mercedes-Benz E-Class / Toyota Land Cruiser Prado',
    startingPriceUSD: 180,
    imageUrl: ASSETS.sigiriya,
    galleryUrls: [ASSETS.sigiriya, ASSETS.kandy],
    inclusions: [
      'Dedicated English-speaking Chauffeur-Guide throughout',
      'All fuel, expressway tolls, parking fees, and vehicle permits',
      'VIP entrance ticket to Sigiriya Rock Fortress',
      'VIP entrance ticket to Dambulla Royal Cave Temples',
      'Curated gourmet lunch and tropical refreshments',
      'Bottled artisan Ceylon spring water and cold towels'
    ],
    exclusions: ['Gratuities for guides', 'Personal souvenir purchases', 'Travel insurance'],
    category: 'day-tour',
    itinerary: [
      {
        day: 1,
        title: 'Dawn Ascent & Ancient Cave Sanctuaries',
        location: 'Colombo to Sigiriya & Dambulla',
        description: '05:30 pick-up in executive vehicle. Scenic transit through Kurunegala rubber and coconut plantations. Summit Sigiriya by 09:30 AM before heat rises. Post-ascent curated lunch, followed by an afternoon exploration of Dambulla’s five illuminated golden cave shrines before returning comfortably.',
        highlights: ['Early ascent of Lion Rock', 'Sigiriya Mirror Wall & Frescoes', 'Five ancient painted caves of Dambulla'],
        mealsIncluded: 'Gourmet Organic Lunch & Tropical Fruit Refreshments',
        accommodationType: 'Return Day Expedition'
      }
    ]
  },
  {
    id: 'hill-country-tea-mist',
    title: 'Hill Country & Tea Mist Escape',
    badge: '3 DAYS / 2 NIGHTS',
    durationLabel: '3 Days / 2 Nights',
    durationDays: 3,
    route: ['Colombo', 'Kandy', 'Nuwara Eliya', 'Nine Arches Ella', 'Colombo / Coast'],
    description: 'Traverse misty high-altitude winding roads, stay in heritage colonial tea planter estates, and board the iconic scenic observation carriage through mountain passes.',
    longDescription: 'A sublime highland sanctuary escape through Sri Lanka’s coolest heights. From the sacred rituals of Kandy’s Temple of the Tooth to the cool colonial elegance of Nuwara Eliya and the dramatic peaks of Ella, this journey unites scenic rail luxury, private tea factory masterclasses, and five-star bungalow hospitality.',
    highlights: [
      'VIP access to Kandy Tooth Relic evening puja ceremony',
      'Private Ceylon tea tasting with resident master blender',
      'Reserved First Class Observation carriage on the world-famous train',
      'Private sunset shoot at Demodara Nine Arches Bridge',
      'Two nights in luxury heritage boutique bungalows with log fireplaces'
    ],
    vehicle: 'Toyota Land Cruiser Prado TX L-Package',
    startingPriceUSD: 650,
    imageUrl: ASSETS.ella,
    galleryUrls: [ASSETS.ella, ASSETS.nuwaraEliya, ASSETS.kandy],
    inclusions: [
      'Private chauffeur-guide and luxury 4x4 vehicle for all 3 days',
      '2 nights luxury accommodation in 5-star colonial tea estates',
      'All daily artisanal breakfasts and three-course dinners',
      'First Class train tickets from Nuwara Eliya (Nanu Oya) to Ella',
      'All temple, botanical garden, and estate entry permits'
    ],
    exclusions: ['International flights', 'Alcoholic beverages (unless specified)', 'Travel insurance'],
    category: 'highland',
    itinerary: [
      {
        day: 1,
        title: 'The Royal Kingdom of Kandy',
        location: 'Colombo to Kandy',
        description: 'Depart Colombo toward the green foothills. Visit the Royal Botanical Gardens of Peradeniya, home to over 4,000 plant species including an extraordinary orchid house. Check in to your boutique hillside suite overlooking the Mahaweli River. At dusk, witness the drum-infused evening puja ritual at the Temple of the Sacred Tooth Relic.',
        highlights: ['Peradeniya Orchid Pavilions', 'Temple of the Tooth evening puja', 'Kandy lakeside promenade'],
        mealsIncluded: 'Breakfast & Fine-Dining Dinner',
        accommodationType: 'Kings Pavilion or The Kandy House'
      },
      {
        day: 2,
        title: 'Misty Cloud Forests & High-Grown Ceylon Estates',
        location: 'Kandy to Nuwara Eliya',
        description: 'Wind upwards through emerald hills lined with thousands of tea pickers. Visit a historic working tea estate for an exclusive private cupping session with the master planter. Check into a vintage colonial bungalow in Nuwara Eliya, complete with high tea in manicured English rose gardens.',
        highlights: ['Ramboda Falls overlook', 'Private Single-Origin tea factory tour & tasting', 'High tea at The Grand Hotel'],
        mealsIncluded: 'Breakfast & High Tea & 4-Course Estate Dinner',
        accommodationType: 'Heritance Tea Factory or Ceylon Tea Trails'
      },
      {
        day: 3,
        title: 'The Great Highland Rail & Nine Arches Bridge',
        location: 'Nuwara Eliya to Ella & Return Transit',
        description: 'Board the historic blue observation train winding over dizzying cliff drops, cloud forests, and waterfalls into Ella. Meet your chauffeur at Ella Station, stroll to the Demodara Nine Arches Bridge for unforgettable photo captures, and enjoy a relaxed lunch before returning to Colombo or continuing down to the South Coast.',
        highlights: ['Scenic colonial train ride', 'Nine Arches viaduct photo session', 'Ravana Falls scenic lookout'],
        mealsIncluded: 'Artisanal Breakfast & Mountain Vista Lunch',
        accommodationType: 'Departure to Coast / Airport'
      }
    ]
  },
  {
    id: 'wildlife-coastal-odyssey',
    title: 'Wildlife & Coastal Wilderness Odyssey',
    badge: '4 DAYS / 3 NIGHTS',
    durationLabel: '4 Days / 3 Nights',
    durationDays: 4,
    route: ['Ella / Highlands', 'Yala National Park', 'Mirissa Bay', 'Galle Fort'],
    description: 'Private open-top 4x4 safaris tracking leopards and wild elephant herds in Yala, ending with seaside champagne dinners and whale-watching in Mirissa bay.',
    longDescription: 'Immerse yourself in Sri Lanka’s wild southern corridor where tropical jungle abruptly meets the azure Indian Ocean. From untamed wildlife game drives in Yala with expert naturalists to private whale-watching excursions in Mirissa and sunset walks atop 17th-century Galle Fort ramparts, this itinerary provides the quintessential blend of raw adventure and coastal luxury.',
    highlights: [
      'Two private safaris in custom Land Cruiser with dedicated expert naturalist',
      'Exclusive luxury tented camp experience with campfire dining under stars',
      'Private morning catamaran charter for blue whale observation in Mirissa',
      'Private walking architecture tour of UNESCO Galle Dutch Fort',
      'Beachfront seafood tasting dinner paired with signature cocktails'
    ],
    vehicle: 'Toyota Prado TX + Custom Safari Open-Top 4x4 Cruiser',
    startingPriceUSD: 890,
    imageUrl: ASSETS.yala,
    galleryUrls: [ASSETS.yala, ASSETS.galle],
    inclusions: [
      'Private chauffeur-guide for the entire coastal journey',
      '2 game drives in Yala National Park with master tracker',
      '1 night luxury glamping in Yala + 2 nights oceanfront resort in Galle/Mirissa',
      'All national park entrance fees, tracker fees, and safari vehicle charges',
      'Private Galle Fort historian tour'
    ],
    exclusions: ['Optional helicopter transit', 'Personal spa treatments', 'Gratuities'],
    category: 'wildlife',
    itinerary: [
      {
        day: 1,
        title: 'Descent to the Wilds of Yala',
        location: 'Highlands to Yala National Park',
        description: 'Descend through the southern plains to the wild scrub forests of Yala. Arrive at your luxury safari glamping camp with air-conditioned suites and plunge pools. Embark on your first late-afternoon private game drive in search of leopards basking on sun-warmed rocks and elephants grazing near lagoons.',
        highlights: ['Afternoon safari game drive', 'Leopard and sloth bear tracking', 'Campfire lantern dinner'],
        mealsIncluded: 'Lunch & Jungle Campfire Dinner',
        accommodationType: 'Chena Huts by Uga or Wild Coast Tented Lodge'
      },
      {
        day: 2,
        title: 'Dawn Safari & Journey to the Sapphire Coast',
        location: 'Yala to Mirissa',
        description: 'Pre-dawn coffee followed by a thrilling early morning safari as the park awakens. Track active predators returning from night hunts. Return for brunch, then cruise along the scenic southern coastline to Mirissa. Relax at a cliffside infinity pool overlooking the ocean.',
        highlights: ['Dawn wildlife tracking', 'Coastal expressway drive', 'Sunset cocktails on Mirissa beach'],
        mealsIncluded: 'Bush Breakfast & Coastal Seafood Dinner',
        accommodationType: 'Cape Weligama or Malabar Hill'
      },
      {
        day: 3,
        title: 'Whale Watching & UNESCO Galle Fort',
        location: 'Mirissa to Galle',
        description: 'Optional private yacht cruise to watch the world’s largest creatures—the magnificent Blue Whale—in deep ocean trenches. In the afternoon, transfer to the living heritage city of Galle Fort. Explore cobbled alleys, Dutch colonial architecture, gem boutiques, and watch the sun dip below the lighthouse.',
        highlights: ['Marine mammal observation', 'Galle Fort ramparts sunset', 'Private architecture walk'],
        mealsIncluded: 'Breakfast & Rampart Bistro Dinner',
        accommodationType: 'Amangalla or Fort Bazaar'
      },
      {
        day: 4,
        title: 'Ocean Serenity & Colombo Departure',
        location: 'Galle to Colombo / Airport',
        description: 'Lounge over leisurely breakfast on the terrace. Visit local mask carvers or sea turtle conservation sanctuaries before smooth transfer via the Southern Expressway directly to Colombo or Bandaranaike International Airport.',
        highlights: ['Turtle sanctuary visit', 'Scenic coastal drive', 'VIP airport lounge drop-off'],
        mealsIncluded: 'Artisanal Breakfast',
        accommodationType: 'Departure'
      }
    ]
  },
  {
    id: 'sri-lanka-grand-highlights',
    title: 'Sri Lanka Highlights Grand Expedition',
    badge: '7 DAYS / 6 NIGHTS',
    durationLabel: '7 Days / 6 Nights',
    durationDays: 7,
    route: ['Colombo', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Galle'],
    description: 'The quintessential island masterpiece. Unlocks ancient royalty, jungle wildlife, highland cloud forests, and colonial ramparts in seamless private luxury.',
    longDescription: 'Our flagship expedition weaves together the full tapestry of Sri Lanka’s treasures over seven magnificent days. Tailored specifically to your pace, you will climb the ancient citadel of Sigiriya, experience temple blessings in Kandy, board the high-altitude colonial railway through tea country, track elusive leopards in Yala, and unwind within the historic ramparts of Galle Fort.',
    highlights: [
      'Comprehensive 7-day all-island VIP route with private chauffeur-guide',
      'Sigiriya, Dambulla, Kandy, Ella, Yala, and Galle all seamlessly connected',
      'Handpicked 5-star luxury stays (Amangalla, Ceylon Tea Trails, Jetwing Vil Uyana)',
      'Unknown Studio Media pass: complementary professional drone photo session',
      '24/7 senior travel concierge and customized culinary preferences'
    ],
    vehicle: 'Executive Mercedes-Benz V-Class / Toyota Land Cruiser Prado TX',
    startingPriceUSD: 1650,
    imageUrl: ASSETS.galle,
    galleryUrls: [ASSETS.sigiriya, ASSETS.ella, ASSETS.yala, ASSETS.galle, ASSETS.kandy],
    inclusions: [
      'All 7 days with dedicated private chauffeur and luxury vehicle',
      '6 nights luxury 5-star accommodation in premier boutique suites',
      'All daily gourmet breakfasts and curated fine-dining dinners',
      'VIP entrance to all monuments, national parks, and cultural sites',
      'First Class reserved observation train tickets',
      'Private 4x4 Yala Safari with senior naturalist',
      'Unknown Studio photo package inclusion (drone + portraits)'
    ],
    exclusions: ['International flights', 'Personal incidentals and alcoholic drinks outside dinner'],
    category: 'grand-expedition',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & The Cultural Heartlands',
        location: 'Colombo to Sigiriya',
        description: 'VIP meet-and-greet at Colombo airport. Relax in your luxury vehicle as you drive into the Cultural Triangle. Check in to your water pavilion villa nestled amid lotus ponds.',
        highlights: ['VIP airport arrival greeting', 'Scenic countryside drive', 'Luxury eco-villa relaxation'],
        mealsIncluded: 'Welcome Refreshments & Dinner',
        accommodationType: 'Jetwing Vil Uyana or Water Garden Sigiriya'
      },
      {
        day: 2,
        title: 'Sigiriya Sky Fortress & Dambulla Caves',
        location: 'Sigiriya & Dambulla',
        description: 'Summit the Lion Rock citadel in morning light. Afternoon exploration of the golden rock cave temples of Dambulla with 150+ gilded Buddha statues.',
        highlights: ['Sigiriya summit ascent', 'Royal water gardens', 'Ancient Dambulla frescoes'],
        mealsIncluded: 'Breakfast & Traditional Rice & Curry Feast',
        accommodationType: 'Water Garden Sigiriya'
      },
      {
        day: 3,
        title: 'Spice Havens & Sacred Kandy',
        location: 'Sigiriya to Kandy',
        description: 'Journey through spice gardens to Kandy. Tour the Royal Botanical Gardens of Peradeniya and partake in the evening holy Tooth Relic ceremony.',
        highlights: ['Spice garden masterclass', 'Peradeniya botanical sanctuary', 'Sacred Tooth Relic ceremony'],
        mealsIncluded: 'Breakfast & Kandyan Royal Dinner',
        accommodationType: 'The Kandy House'
      },
      {
        day: 4,
        title: 'Highland Tea Valleys & Nuwara Eliya',
        location: 'Kandy to Nuwara Eliya',
        description: 'Scenic climb through tea terraces. Visit an elite tea factory and sample prized Orange Pekoe teas before afternoon strolls through Little England.',
        highlights: ['High tea at Grand Hotel', 'Private Ceylon tea master tasting', 'Crisp mountain lake walk'],
        mealsIncluded: 'Breakfast & Colonial High Tea & Dinner',
        accommodationType: 'Heritance Tea Factory'
      },
      {
        day: 5,
        title: 'Colonial Rail to Ella & Descent to Safari Wilds',
        location: 'Nuwara Eliya to Ella & Yala',
        description: 'Ride the world’s most scenic train from Nanu Oya to Ella. Photo stop at Nine Arches Bridge, then descend to Yala for sunset safari preparation.',
        highlights: ['Scenic observation train carriage', 'Nine Arches Bridge', 'Arrival at luxury jungle lodge'],
        mealsIncluded: 'Breakfast & Safari Camp Dinner',
        accommodationType: 'Wild Coast Tented Lodge'
      },
      {
        day: 6,
        title: 'Leopard Safari & Sunset Galle Fort',
        location: 'Yala to Galle',
        description: 'Thrilling dawn safari game drive in Yala tracking leopards and elephants. Cruise along the southern beach highway to historic Galle Fort for an unforgettable sunset.',
        highlights: ['Dawn wildlife safari', 'Southern ocean drive', 'Galle Fort ramparts at twilight'],
        mealsIncluded: 'Breakfast & Oceanfront Seafood Dinner',
        accommodationType: 'Amangalla'
      },
      {
        day: 7,
        title: 'Coastal Farewell & Colombo Return',
        location: 'Galle to Colombo',
        description: 'Morning walking tour of the fort’s art galleries and jewelers. Smooth expressway transfer to Colombo for final boutique shopping or direct airport departure.',
        highlights: ['Galle Fort artisan walk', 'Barefoot Ceylon shopping', 'Departure transfer'],
        mealsIncluded: 'Artisanal Breakfast',
        accommodationType: 'Departure'
      }
    ]
  }
];

export const PHOTOGRAPHY_PACKAGES: PhotographyPackage[] = [
  {
    id: 'silver-cinematic',
    name: 'Silver Cinematic Session',
    tagline: 'Single Iconic Landmark Shoot',
    priceUSD: 280,
    gear: 'Sony A7R V + GM Primes (35mm / 85mm)',
    deliverables: [
      '2-Hour dedicated photographer session (Sigiriya or Nine Arches Ella)',
      '40 Master-graded high-resolution digital photographs',
      'Full private online gallery delivered within 48 hours',
      'High-res print-ready rights'
    ],
    popularFor: 'Solo travelers, couples & scenic portraits'
  },
  {
    id: 'gold-unknown-studio',
    name: 'Gold Unknown Studio Cine & Drone',
    tagline: 'Multi-Location Photo + 4K Drone Aerials',
    priceUSD: 580,
    gear: 'Sony FX3 Cinema Line + DJI Mavic 3 Pro Cine (ProRes)',
    deliverables: [
      'Full-day dedicated photographer & certified drone pilot',
      '80 Master-edited high-resolution editorial photos',
      '60-Second cinematic 4K video reel optimized for Instagram/TikTok',
      'Licensed drone permits secured across historical zones',
      'Delivered in custom leather USB case + cloud vault'
    ],
    popularFor: 'Honeymoons, content creators & adventure seekers'
  },
  {
    id: 'diamond-heirloom',
    name: 'Diamond Heirloom Expedition',
    tagline: 'Full Expedition Dedicated Film Crew',
    priceUSD: 1450,
    gear: 'Dual Sony FX6/FX3 Crew + Leica SL2 + Drone Fleet',
    deliverables: [
      'Full expedition companion: Photographer + Cinematographer accompany entire tour',
      '200+ Heirloom master-graded fine-art photographs',
      '3-Minute cinematic travel documentary film with licensed music score',
      'Handcrafted Italian leather-bound fine art photo album (30 pages)',
      'Same-day sneak peek edits for daily social sharing'
    ],
    popularFor: 'VVIP families, anniversary celebrations & luxury connoisseurs'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'An unforgettable journey through Sri Lanka. Everything was organized around what we wanted to see, and having our private guide made every temple and tea estate feel deeply personal.',
    author: 'Elena & Marcus V.',
    origin: 'Zurich, Switzerland',
    tourName: 'Bespoke 10-Day Tour',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: '2',
    quote: 'The photography package was worth every penny. We returned home not just with memories, but with magazine-worthy photos of Sigiriya and the train in Ella. Absolute magic.',
    author: 'Sarah K.',
    origin: 'London, United Kingdom',
    tourName: 'Honeymoon Expedition',
    rating: 5,
    date: 'January 2026'
  },
  {
    id: '3',
    quote: 'Punctual, luxurious, and completely stress-free. Traveling with kids in Sri Lanka was effortless thanks to Unknown Traveler’s patient team and pristine vehicles.',
    author: 'David T.',
    origin: 'Sydney, Australia',
    tourName: 'Family Wildlife Tour',
    rating: 5,
    date: 'March 2026'
  },
  {
    id: '4',
    quote: 'Our chauffeur Nimal was not just a driver; he was an ambassador of Ceylon’s warmth and encyclopedic knowledge. The hotels booked were world-class.',
    author: 'Dr. Jean-Pierre & Claire L.',
    origin: 'Paris, France',
    tourName: 'Sri Lanka Grand Highlights',
    rating: 5,
    date: 'December 2025'
  }
];

export const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: 'prado',
    model: 'Toyota Land Cruiser Prado TX L',
    category: 'Luxury 4x4 Expedition SUV',
    passengers: 'Up to 3-4 Guests',
    luggage: '4 Large Hard Cases',
    amenities: ['Leather Reclining Seats', 'Climate Control Dual AC', 'High Ground Clearance', 'Onboard Chilled Water & Towels', 'USB-C Fast Charging'],
    imageUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mercedes',
    model: 'Mercedes-Benz E-Class / S-Class',
    category: 'Executive Sedan',
    passengers: 'Up to 2-3 Guests',
    luggage: '2 Large + 2 Cabin Bags',
    amenities: ['Whisper-Quiet Cabin', 'Burmester Sound System', 'Panoramic Glass Sunroof', 'Complimentary Ceylon High Tea Pack'],
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kdh-luxury',
    model: 'Toyota High-Roof VIP Luxury Van',
    category: 'First-Class Group Coach',
    passengers: 'Up to 6-8 Guests',
    luggage: '8-10 Large Bags',
    amenities: ['Captain Bucket Seats', 'High Ceiling Walkthrough', 'Dual Zone Cooling', 'Overhead Reading Lights', 'Mini Fridge'],
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Sigiriya Rock Citadel at Dawn',
    subtitle: 'Shot by UNKNOWN STUDIO • Drone Flight',
    category: 'Cultural',
    imageUrl: ASSETS.sigiriya,
    location: 'Sigiriya, Cultural Triangle',
    aspect: 'tall'
  },
  {
    id: 'g2',
    title: 'Demodara Nine Arches Viaduct',
    subtitle: 'Shot by UNKNOWN STUDIO • 8K Cine',
    category: 'Highlands',
    imageUrl: ASSETS.ella,
    location: 'Ella, Highlands',
    aspect: 'wide'
  },
  {
    id: 'g3',
    title: 'Temple of the Tooth at Twilight',
    subtitle: 'Shot by UNKNOWN STUDIO • Leica 35mm',
    category: 'Cultural',
    imageUrl: ASSETS.kandy,
    location: 'Kandy Royal City',
    aspect: 'square'
  },
  {
    id: 'g4',
    title: 'Colonial Tea Master Estate',
    subtitle: 'Shot by UNKNOWN STUDIO • Morning Mist',
    category: 'Highlands',
    imageUrl: ASSETS.nuwaraEliya,
    location: 'Nuwara Eliya Tea Valleys',
    aspect: 'square'
  },
  {
    id: 'g5',
    title: 'Wild Tusker at Sunset Lagoon',
    subtitle: 'Shot by UNKNOWN STUDIO • 600mm Prime',
    category: 'Wildlife',
    imageUrl: ASSETS.yala,
    location: 'Yala National Park',
    aspect: 'wide'
  },
  {
    id: 'g6',
    title: 'South Coast Golden Hour Toast',
    subtitle: 'Shot by UNKNOWN STUDIO • Sunset Cove',
    category: 'Coast',
    imageUrl: ASSETS.galle,
    location: 'Mirissa & Galle Ramparts',
    aspect: 'tall'
  }
];

export const FAQS = [
  {
    q: 'How does booking a private chauffeur-guide in Sri Lanka work?',
    a: 'You are assigned a professional, Sri Lanka Tourism Development Authority (SLTDA) certified English-speaking chauffeur-guide with a dedicated luxury air-conditioned vehicle. Your guide stays with you throughout your journey, manages all logistics, assists with luggage and hotel check-ins, provides historical context, and offers 100% flexibility to stop at any scenic overlook.'
  },
  {
    q: 'Can we customize the route and hotels?',
    a: 'Absolutely. Every tour shown on our platform can be customized. You can substitute any hotel for your preferred boutique property, adjust daily departure times, or add custom excursions like whale watching or helicopter transfers.'
  },
  {
    q: 'How does payment and currency work?',
    a: 'We quote and accept payment in both USD ($) and LKR (Rs.). You can toggle your preferred currency directly on the site. A 20% deposit secures your dates, with the remainder payable prior to or upon arrival in Sri Lanka.'
  },
  {
    q: 'What is the Unknown Studio Photography partnership?',
    a: 'Unknown Traveler has an exclusive partnership with Unknown Studio, Sri Lanka’s premier luxury cinematic team. We can embed an editorial photographer or certified drone pilot into your journey to capture heirloom portraits, aerial reels, and documentary films without interrupting your personal moments.'
  }
];
