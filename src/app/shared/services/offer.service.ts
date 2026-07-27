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
  private readonly apiUrl = `${environment.apiUrl}/offers`;

  constructor(private readonly http: HttpClient) {}

  createOffer(offer: Offer): Observable<OfferResponse> {
    return this.http.post<OfferResponse>(this.apiUrl, offer);
  }

  getOffersForListing(listingId: number | string): Observable<{ listing: Listing; offers: Offer[] }> {
    return this.http.get<{ listing: Listing; offers: Offer[] }>(`${this.apiUrl}/listing/${listingId}`);
  }

  updateOfferStatus(offerId: number, status: 'ACCEPTED' | 'REJECTED'): Observable<Offer> {
    return this.http.patch<Offer>(`${this.apiUrl}/${offerId}/status`, { status });
  }
}
