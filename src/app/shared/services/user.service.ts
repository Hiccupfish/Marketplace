import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  phoneNumber?: string;
  location?: string;
  profilePicture?: string;
  isVerified: boolean;
  isAdmin: boolean;
  accountType: string; // "INDIVIDUAL" | "BUSINESS"
  sellerProfile?: any;
  businessProfile?: any;
  providerProfile?: any;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(private readonly http: HttpClient) {}

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/profile`);
  }
}
