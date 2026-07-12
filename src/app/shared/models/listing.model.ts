import { Location } from './location.model';

export interface Listing {
  id: number;
  title: string;
  description: string;
  priceZar: number;
  category: string;
  city: string;
  sellerId: number;
  createdAt: string;
  updatedAt: string;
}