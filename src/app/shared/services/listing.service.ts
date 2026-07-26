import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Listing } from '../models/listing.model';

@Injectable({ providedIn: 'root' })
export class ListingService {
  private readonly apiUrl = `${environment.apiUrl}/products`;

  constructor(private readonly http: HttpClient) {}

  getListings(search?: string, category?: string): Observable<Listing[]> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    if (category) params = params.set('category', category);
    return this.http.get<ProductResponse[]>(this.apiUrl, { params }).pipe(map(products => products.map(product => this.toListing(product))));
  }

  getListing(id: number | string): Observable<Listing> {
    return this.http.get<ProductResponse>(`${this.apiUrl}/${id}`).pipe(map(product => this.toListing(product)));
  }

  createListing(listing: Pick<Listing, 'title' | 'description' | 'priceZar' | 'category' | 'city'>): Observable<Listing> {
    return this.http.post<Listing>(this.apiUrl, listing);
  }

  deleteListing(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private toListing(product: ProductResponse): Listing {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      priceZar: product.price,
      category: product.category?.name || 'Other',
      city: product.location || product.seller?.location || 'Location not specified',
      createdAt: product.createdAt,
      updatedAt: product.updatedAt
    };
  }
}

interface ProductResponse {
  id: string;
  title: string;
  description: string;
  price: number;
  location?: string | null;
  category?: { name: string };
  seller?: { location?: string | null };
  createdAt: string;
  updatedAt: string;
}
