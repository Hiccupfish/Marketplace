import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Listing } from '../models/listing.model';

export interface Offer {
  id?: number;
  listingId: number | string;
  buyerName: string;
  buyerEmail: string;
  buyerPhone?: string;
  amountZar: number;
  status?: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  message?: string;
  createdAt?: string;
}

export interface OfferResponse {
  offer: Offer;
  notifications: {
    emailSent: boolean;
    emailRecipient: string;
    whatsAppSent: boolean;
    whatsAppRecipient: string;
    whatsAppDeepLink: string;
  };
}

@Injectable({ providedIn: 'root' })
export class OfferService {
  constructor(private readonly http: HttpClient) {}

  createOffer(productId: number | string, offer: { buyerName: string; buyerEmail: string; buyerPhone?: string; amountZar: number; message?: string }): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/products/${productId}/offers`, {
      price: offer.amountZar,
      buyerName: offer.buyerName,
      buyerEmail: offer.buyerEmail,
      buyerPhone: offer.buyerPhone,
      message: offer.message
    });
  }

  getOffersForProduct(productId: number | string): Observable<{ offers: any[] }> {
    return this.http.get<{ offers: any[] }>(`${environment.apiUrl}/products/${productId}/offers`);
  }

  updateOfferStatus(productId: number | string, offerId: number | string, status: 'ACCEPTED' | 'REJECTED'): Observable<any> {
    return this.http.patch<any>(`${environment.apiUrl}/products/${productId}/offers/${offerId}/status`, { status });
  }
}
