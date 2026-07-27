import { Listing } from './listing.model';
import { Delivery } from './delivery.model';

export interface Offer {
  id: number;
  listingId: number | string;
  listing?: Listing;
  buyerName: string;
  buyerEmail: string;
  buyerPhone?: string;
  amountZar: number;
  status: string; // PENDING, ACCEPTED, REJECTED
  message?: string;
  delivery?: Delivery;
  createdAt: Date;
  updatedAt: Date;
}
