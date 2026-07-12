import { Location } from './location.model';

export interface Listing {
  id: number;
  title: string;
  description: string;
  priceZar: number;
  category: string;
  city: string;
  imageUrl?: string;
  rating?: number;
  isVerified?: boolean;
  createdAt: string;
  updatedAt: string;
}