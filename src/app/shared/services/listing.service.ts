import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Listing } from '../models/listing.model';

@Injectable({ providedIn: 'root' })
export class ListingService {
  private readonly apiUrl = `${environment.apiUrl}/listings`;

  constructor(private readonly http: HttpClient) {}

  getListings(search?: string, category?: string): Observable<Listing[]> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    if (category) params = params.set('category', category);
    return this.http.get<Listing[]>(this.apiUrl, { params });
  }

  createListing(listing: Pick<Listing, 'title' | 'description' | 'priceZar' | 'category' | 'city'>): Observable<Listing> {
    return this.http.post<Listing>(this.apiUrl, listing);
  }
}
