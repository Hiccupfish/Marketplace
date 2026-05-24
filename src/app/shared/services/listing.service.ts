import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Listing } from '../models/listing.model';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  getListings(): Observable<Listing[]> {
    return of([]);
  }
}