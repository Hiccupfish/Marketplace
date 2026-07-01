import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ReportedListing {
  id: number;
  title: string;
  reportReason: string;
  date: Date;
  status: 'Pending' | 'Resolved';
}

const MOCK_LISTINGS: ReportedListing[] = [
  { id: 1, title: 'Vintage Lamp', reportReason: 'Inappropriate content', date: new Date('2026-06-20'), status: 'Pending' },
  { id: 2, title: 'Antique Clock', reportReason: 'Spam', date: new Date('2026-06-22'), status: 'Pending' },
  { id: 3, title: 'Wooden Chair', reportReason: 'Harassment', date: new Date('2026-06-25'), status: 'Resolved' },
];

@Injectable({
  providedIn: 'root',
})
export class ReportedListingsService {
  getListings(): Observable<ReportedListing[]> {
    // Placeholder for real HTTP call
    return of(MOCK_LISTINGS);
  }

  resolveListing(id: number): Observable<void> {
    // Simulate resolve – in real app would PATCH/PUT
    return of(undefined);
  }
}
