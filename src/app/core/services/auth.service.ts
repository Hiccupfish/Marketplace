import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../models/auth-response.model';
import { TokenService } from './token.service';

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegistrationData extends AuthCredentials {
  name: string;
  phone?: string;
  city?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  constructor(private readonly http: HttpClient, private readonly tokenService: TokenService) {}

  login(credentials: AuthCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(tap((response) => this.tokenService.saveToken(response.token)));
  }

  register(data: RegistrationData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data).pipe(tap((response) => this.tokenService.saveToken(response.token)));
  }

  logout(): void { this.tokenService.clearToken(); }
  isAuthenticated(): boolean { return Boolean(this.tokenService.getToken()); }
}
