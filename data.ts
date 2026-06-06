import { MenuItem, GalleryItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // ROYAL STARTERS
  {
    id: 'starter-1',
    name: 'Murgh Malai Tikka',
    englishTranslation: 'Velvet Cashew Tandoori Chicken',
    price: '₹625',
    description: 'Indulgent boneless chicken medallions marinated in a velvet cream paste of sun-ground cashew nuts, white pepper, fresh mountain cheese, and green cardamom, gently charcoal-roasted.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=800&auto=format&fit=crop',
    dietary: ['Non-Vegetarian'],
    signature: true
  },
  {
    id: 'starter-2',
    name: 'Tandoori Prawns',
    englishTranslation: 'Flame-Seared Jumbo Tiger Prawns',
    price: '₹795',
    description: 'Skewered jumbo tiger prawns marinated in yellow chili paste, carom seeds, home-churned mustard oil, and citrus juice, charred inside our traditional clay oven.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop',
    dietary: ['Non-Vegetarian'],
    signature: false
  },
  {
    id: 'starter-3',
    name: 'Paneer Tikka',
    englishTranslation: 'Spiced Clay-Aged Cottage Cheese',
    price: '₹495',
    description: 'Hand-pressed premium cottage cheese blocks layered with bell peppers, marinated in robust Kashmiri red chili, hand-ground garam masala, and thick yogurt.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: false
  },
  {
    id: 'starter-4',
    name: 'Hara Bhara Kebab',
    englishTranslation: 'Spiced Spinach & Green Pea Croquettes',
    price: '₹425',
    description: 'Delicate pan-seared patties of fresh garden spinach, green peas, and mashed potatoes, laced with royal cumin and stuffed with chopped nuts and raisins.',
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: false
  },

  // SHAHI DAWAT (MAIN COURSE)
  {
    id: 'main-1',
    name: 'Shahi Tandoori Gosht',
    englishTranslation: 'Clay-Oven Charred Prime Lamb Chops',
    price: '₹1,199',
    description: 'Slow-tenderized prime lamb chops infused with dry-roasted royal cumin, cardamom, and thick clotted yogurt, flame-charred to a sizzling golden crown in our traditional clay oven.',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop',
    dietary: ['Non-Vegetarian'],
    signature: true
  },
  {
    id: 'main-2',
    name: 'Hyderabadi Mutton Biryani',
    englishTranslation: 'Aged Basmati & Slow-Dum Goat Feast',
    price: '₹1,250',
    description: 'Aged vintage Basmati rice and organic baby goat meat layered with fresh mint leaves, visual saffron milk, and aromatic whole spices, cooked slow-dum under a sealed clay handi lid.',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
    dietary: ['Non-Vegetarian'],
    signature: true
  },
  {
    id: 'main-3',
    name: 'Butter Chicken',
    englishTranslation: 'Classic Velvet Tomato Cream Chicken',
    price: '₹695',
    description: 'Flame-broiled tandoori chicken shreds simmered inside a velvety, mildly-spiced tomato gravy enriched with fresh cold-pressed butter, cream, and dry fenugreek.',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop',
    dietary: ['Non-Vegetarian'],
    signature: false
  },
  {
    id: 'main-4',
    name: 'Paneer Butter Masala',
    englishTranslation: 'Farm Cottage Cheese in Rich Cashew Tomato Gravy',
    price: '₹575',
    description: 'Soft cubes of fresh farmhouse cottage cheese folded into a creamy, golden tomato-cashew curry, seasoned with freshly toasted spices.',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1601382270349-49c15babf697?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: false
  },
  {
    id: 'main-5',
    name: 'Dal Makhani',
    englishTranslation: 'Charcoal-Slowed Creamy Black Lentils',
    price: '₹495',
    description: 'Slow-cooked black urad lentils and red kidney beans simmered overnight on live charcoal embers, creamed, and finished with a traditional butter-smoke glaze.',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: false
  },
  {
    id: 'main-6',
    name: 'Chettinad Pepper Chicken',
    englishTranslation: 'Hand-Crushed Spicy Pepper Chicken Curry',
    price: '₹725',
    description: 'Fiery chicken tenders tossed with spicy hand-roasted black peppercorns, roasted grated coconut, fresh curry leaves, and cold-pressed sesame oil in a South-Indian heritage style.',
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?q=80&w=800&auto=format&fit=crop',
    dietary: ['Non-Vegetarian'],
    signature: false
  },

  // ROYAL DESSERTS
  {
    id: 'dessert-1',
    name: 'Gulab Jamun',
    englishTranslation: 'Warm Saffron Milk Dumplings',
    price: '₹325',
    description: 'Delicate golden milk dumplings deep-fried in organic cow ghee and steeped in a warm green-cardamom and saffron sugar syrup, finished with a touch of rose water.',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: false
  },
  {
    id: 'dessert-2',
    name: 'Rasmalai Royale',
    englishTranslation: 'Saffron Cream Cottage Cheese Discs',
    price: '₹395',
    description: 'Spongy cottage cheese patties poached in sweet syrup and soaked in thick, creamy cardamom-spiced milk, crowned with almond slivers and pistachios.',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: false
  },
  {
    id: 'dessert-3',
    name: 'Kesar Pista Phirni',
    englishTranslation: 'Royal Saffron Pistachio Ground Rice Pudding',
    price: '₹475',
    description: 'Traditional slow-condensed ground basmati rice pudding seasoned with Kashmiri saffron threads, cardamom seeds, almonds, and pistachio slivers, served in traditional earthen pots with edible silver foil.',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: true
  },
  {
    id: 'dessert-4',
    name: 'Shahi Tukda',
    englishTranslation: 'Golden Ghee Brioche Saffron Dessert',
    price: '₹450',
    description: 'Crispy ghee-fried brioche fingers soaked in cardamom syrup, smothered under rich saffron-reduced milk, decorated with silver foil and chopped nuts.',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: true
  },

  // ROYAL SIPS (Formerly wine-pairings)
  {
    id: 'sip-1',
    name: 'Mango Lassi',
    englishTranslation: 'Alphonso Premium Spiced Blend',
    price: '₹295',
    description: 'An opulent, velvety-smooth yogurt shake pureed with the premium pulp of Ratnagiri Alphonso mangoes and a delicate hint of green cardamom.',
    category: 'wine-pairings',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: true
  },
  {
    id: 'sip-2',
    name: 'Shahi Sharbat',
    englishTranslation: 'Damascus Petal & Saffron Elixir',
    price: '₹250',
    description: 'An imperial summer refreshment blending triple-distilled Damascus rose waters, saffron threads, sweet basil seeds (sabja), and citrus squeeze over crystal ice.',
    category: 'wine-pairings',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: true
  },
  {
    id: 'sip-3',
    name: 'Masala Chai',
    englishTranslation: 'Assam Seven-Spice Imperial Tea',
    price: '₹195',
    description: 'Hand-harvested Assam black tea leaves charcoal-simmered with clotted whole milk, fresh ginger, green cardamom pods, and a dusting of our imperial seven-spice powder.',
    category: 'wine-pairings',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: false
  },
  {
    id: 'sip-4',
    name: 'Fresh Lime Soda',
    englishTranslation: 'Sparkling Citrus Refreshment',
    price: '₹150',
    description: 'Classic effervescent fizz mixed with freshly-squeezed citrus limes, sparkling club soda, and choice of sweet elixir, pink Himalayan mineral salt, or both.',
    category: 'wine-pairings',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: false
  },
  {
    id: 'sip-5',
    name: 'Filter Coffee',
    englishTranslation: 'South Indian Hand-Frothed Chicory Blend',
    price: '₹195',
    description: 'Traditional South Indian chicory-blend coffee decoction, frothed by stretching with hot bubbling milk in classic brass tumblers.',
    category: 'wine-pairings',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop',
    dietary: ['Vegetarian'],
    signature: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = []; // No longer using Gallery, replaced with FeaturedDishes section.

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Aparajita Devi Reviews',
    role: 'Heritage Fine Dining Chronicle',
    rating: 5,
    highlight: 'Imperial heritage dining reborn with exquisite balance',
    review: 'From the minute we stepped into the Royal Shubh, we were swept away. The Shahi Tandoori Gosht literally melted away like pure silk. This is high-luxury modern Indian gastronomy at its absolute pinnacle, matching unmatched imperial palace magnificence.',
    date: 'May 2026'
  },
  {
    id: 'test-2',
    author: 'Chef Ranveer Shubh',
    role: 'Michelin Culinary Patron',
    rating: 5,
    highlight: 'Pure Awadhi and multi-cuisine poetry on a plate',
    review: 'Royal Shubh achieves an incomparable balance: magnificent respect for classical Royal Indian heritage recipes, layered with high-end modern precision. The Hyderabadi Mutton Biryani is a masterpiece of technical dum-cooking.',
    date: 'April 2026'
  },
  {
    id: 'test-3',
    author: 'Lord Harrison Sterling',
    role: 'Elite Asian Gastronomy Guide',
    rating: 5,
    highlight: 'The true crown jewel of luxury dining',
    review: 'An exceptional theatrical tribute to the royal feast halls of ancient India. The service is seamlessly spectacular. The Kesar Pista Phirni is a triumph of sensory culinary drama.',
    date: 'March 2026'
  }
];
