export type Currency = 'USD' | 'LKR';

export interface TourItineraryDay {
  day: number;
  title: string;
  location: string;
  description: string;
  highlights: string[];
  mealsIncluded: string;
  accommodationType: string;
}

export interface TourPackage {
  id: string;
  title: string;
  badge: string;
  durationLabel: string;
  durationDays: number;
  route: string[];
  description: string;
  longDescription: string;
  highlights: string[];
  vehicle: string;
  startingPriceUSD: number;
  imageUrl: string;
  galleryUrls: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: TourItineraryDay[];
  category: 'day-tour' | 'highland' | 'wildlife' | 'grand-expedition';
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  elevation: string;
  distanceFromColombo: string;
  bestTimeToVisit: string;
  tagline: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  highlights: string[];
  photoSpots: string[];
  insiderTip: string;
}

export interface PhotographyPackage {
  id: string;
  name: string;
  tagline: string;
  priceUSD: number;
  gear: string;
  deliverables: string[];
  popularFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  origin: string;
  tourName: string;
  rating: number;
  date: string;
}

export interface TripPlannerData {
  duration: string;
  style: 'Ultra-Luxury' | 'Boutique Comfort' | 'Curated Explorer';
  inclusions: string[];
  fullName: string;
  email: string;
  phone: string;
  travelDate?: string;
  guests: number;
  notes?: string;
}

export interface FleetVehicle {
  id: string;
  model: string;
  category: string;
  passengers: string;
  luggage: string;
  amenities: string[];
  imageUrl: string;
}
