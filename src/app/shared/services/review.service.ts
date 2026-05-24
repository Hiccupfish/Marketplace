import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Review } from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  getReviews(listingId: string): Observable<Review[]> {
    void listingId;
    return of([]);
  }
}