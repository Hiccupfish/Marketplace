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
  accountType: string;
  sellerProfile?: { sellerType?: string };
  providerProfile?: { bio?: string; portfolio?: string };
  businessProfile?: {
    id?: string;
    businessName?: string;
    logoUrl?: string;
    description?: string;
    category?: string;
    contactNumber?: string;
    email?: string;
    physicalAddress?: string;
    city?: string;
    province?: string;
    website?: string;
    operatingHours?: string;
    gallery?: string;
    socialLinks?: string;
    isVerified?: boolean;
    completedTransactions?: number;
  };
}

export interface BusinessProfile {
  id?: string;
  businessName: string;
  logoUrl?: string;
  description?: string;
  category?: string;
  contactNumber?: string;
  email?: string;
  physicalAddress?: string;
  city?: string;
  province?: string;
  website?: string;
  operatingHours?: string;
  gallery?: string;
  socialLinks?: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiUrl = `${environment.apiUrl}/users`;

  constructor(private readonly http: HttpClient) {}

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/profile`);
  }

  getBusinessProfile(): Observable<BusinessProfile | null> {
    return this.http.get<BusinessProfile | null>(`${this.apiUrl}/business-profile`);
  }

  createBusinessProfile(profile: BusinessProfile): Observable<BusinessProfile> {
    return this.http.post<BusinessProfile>(`${this.apiUrl}/business-profile`, profile);
  }

  updateBusinessProfile(profile: BusinessProfile): Observable<BusinessProfile> {
    return this.http.put<BusinessProfile>(`${this.apiUrl}/business-profile`, profile);
  }
}
