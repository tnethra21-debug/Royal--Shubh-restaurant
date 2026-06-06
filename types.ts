export interface MenuItem {
  id: string;
  name: string;
  englishTranslation?: string;
  price: string;
  description: string;
  category: 'starters' | 'mains' | 'desserts' | 'wine-pairings';
  image: string;
  dietary?: string[];
  signature?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cuisine' | 'ambiance' | 'cellar' | 'behind-scenes';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  highlight: string;
  review: string;
  date: string;
}

export interface Reservation {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  timeSlot: string;
  diningArea: 'imperial-hall' | 'golden-terrace' | 'chefs-atelier';
  specialRequests?: string;
  referenceCode: string;
}
