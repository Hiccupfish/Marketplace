import { Offer } from './offer.model';

export interface Delivery {
  id: number;
  offerId: number;
  offer?: Offer;
  status: string; // PENDING, IN_TRANSIT, DELIVERED, FAILED
  distanceKm?: number;
  deliveryFeeZar?: number;
  trackingNumber?: string;
  estimatedDeliveryDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
