import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  dateCreated: Date;
  status: 'Active' | 'Inactive';
}

const MOCK_USERS: User[] = [
  { id: 1, username: 'alice', email: 'alice@example.com', role: 'Admin', dateCreated: new Date('2024-01-15'), status: 'Active' },
  { id: 2, username: 'bob', email: 'bob@example.com', role: 'Editor', dateCreated: new Date('2025-03-22'), status: 'Inactive' },
  { id: 3, username: 'carol', email: 'carol@example.com', role: 'Viewer', dateCreated: new Date('2025-07-08'), status: 'Active' },
];

@Injectable({
  providedIn: 'root',
})
export class UsersManagementService {
  getUsers(): Observable<User[]> {
    return of(MOCK_USERS);
  }

  toggleStatus(id: number): Observable<void> {
    // In a real app this would call an API; here we just simulate success.
    return of(undefined);
  }
}
