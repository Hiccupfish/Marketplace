import { Location } from './location.model';

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  categoryId: string;
  location: Location;
  imageUrl?: string;
  verified?: boolean;
  rating?: number;
}