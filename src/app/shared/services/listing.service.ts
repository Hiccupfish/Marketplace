import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Listing } from '../models/listing.model';

export interface CreateListingPayload {
  title: string;
  description?: string;
  priceZar: number;
  price?: number;
  category?: string;
  categoryId?: string;
  city?: string;
  location?: string;
  images?: string[];
  imageUrl?: string;
}

@Injectable({ providedIn: 'root' })
export class ListingService {
  private readonly apiUrl = `${environment.apiUrl}/products`;

  constructor(private readonly http: HttpClient) {}

  getListings(search?: string, category?: string): Observable<Listing[]> {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    if (category && category !== 'All') params = params.set('category', category);
    return this.http.get<ProductResponse[]>(this.apiUrl, { params }).pipe(
      map(products => products.map(product => this.toListing(product)))
    );
  }

  getListing(id: number | string): Observable<Listing> {
    return this.http.get<ProductResponse>(`${this.apiUrl}/${id}`).pipe(
      map(product => this.toListing(product))
    );
  }

  createListing(listing: CreateListingPayload): Observable<Listing> {
    const rawPrice = listing.price != null ? listing.price : listing.priceZar;
    const catName = listing.category || 'Other';
    const catId = listing.categoryId || catName;
    const loc = listing.city || listing.location || 'Johannesburg';

    // Normalize images array
    let imagesArr: string[] = [];
    if (Array.isArray(listing.images)) {
      imagesArr = listing.images.filter(img => typeof img === 'string' && img.trim().length > 0);
    } else if (listing.imageUrl && typeof listing.imageUrl === 'string' && listing.imageUrl.trim()) {
      imagesArr = [listing.imageUrl.trim()];
    }

    const payload = {
      title: listing.title?.trim(),
      description: listing.description?.trim() || '',
      price: Number(rawPrice),
      priceZar: Number(rawPrice),
      category: catName,
      categoryId: catId,
      location: loc,
      city: loc,
      images: imagesArr,
      imageUrl: imagesArr.length > 0 ? imagesArr[0] : undefined
    };

    return this.http.post<ProductResponse>(this.apiUrl, payload).pipe(
      map(product => this.toListing(product))
    );
  }

  createService(payload: {
    title: string;
    description: string;
    categoryId: string;
    serviceArea: string;
    startingPrice: number;
    availability?: string;
    images?: string[];
  }): Observable<any> {
    const body = {
      title: payload.title.trim(),
      description: payload.description.trim(),
      categoryId: payload.categoryId,
      serviceArea: payload.serviceArea.trim(),
      startingPrice: Number(payload.startingPrice),
      availability: payload.availability || 'AVAILABLE',
      images: payload.images && payload.images.length > 0 ? payload.images : undefined,
      imageUrl: payload.images && payload.images.length > 0 ? payload.images[0] : undefined
    };

    return this.http.post<any>(`${environment.apiUrl}/services`, body);
  }

  deleteListing(id: number | string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  private toListing(product: ProductResponse): Listing {
    let images: string[] = [];
    let imageUrl: string | undefined = undefined;

    if (product.images) {
      if (Array.isArray(product.images)) {
        images = product.images;
      } else if (typeof product.images === 'string') {
        try {
          const parsed = JSON.parse(product.images);
          if (Array.isArray(parsed)) {
            images = parsed;
          } else if (typeof parsed === 'string') {
            images = [parsed];
          }
        } catch {
          images = [product.images];
        }
      }
    }

    if (images.length > 0) {
      imageUrl = images[0];
    }

    const sellerType = product.seller?.sellerProfile?.sellerType as Listing['sellerType'];

    return {
      id: product.id,
      title: product.title,
      description: product.description,
      priceZar: product.price,
      category: product.category?.name || 'Other',
      categoryId: product.categoryId || product.category?.id,
      city: product.location || product.seller?.location || 'Location not specified',
      imageUrl,
      images,
      isVerified: product.seller?.isVerified,
      sellerType,
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
  images?: string[] | string | null;
  categoryId?: string;
  category?: { id?: string; name: string };
  seller?: {
    id?: string;
    name?: string | null;
    location?: string | null;
    profilePicture?: string | null;
    isVerified?: boolean;
    sellerProfile?: { sellerType?: string } | null;
  };
  createdAt: string;
  updatedAt: string;
}
