import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UserVerification {
  id: number;
  username: string;
  reason: string;
  date: Date;
  status: 'Pending' | 'Verified';
}

const MOCK_VERIFICATIONS: UserVerification[] = [
  { id: 1, username: 'john_doe', reason: 'Suspicious activity', date: new Date('2026-06-18'), status: 'Pending' },
  { id: 2, username: 'jane_smith', reason: 'Multiple reports', date: new Date('2026-06-21'), status: 'Pending' },
  { id: 3, username: 'bob_builder', reason: 'Policy violation', date: new Date('2026-06-24'), status: 'Verified' },
];

@Injectable({
  providedIn: 'root',
})
export class UserVerificationsService {
  getVerifications(): Observable<UserVerification[]> {
    // In a real app this would be an HTTP request
    return of(MOCK_VERIFICATIONS);
  }

  verifyUser(id: number): Observable<void> {
    // Stub for future API call – simulate immediate completion
    return of(undefined);
  }
}
