import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../models/auth-response.model';
import { User, UserContext, UserRole } from '../models/user.model';
import { TokenService } from './token.service';

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegistrationData extends AuthCredentials {
  name: string;
  phone?: string;
  city?: string;
  context: UserContext;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  private _currentUser: User | null = null;

  get currentUser(): User | null {
    return this._currentUser;
  }

  constructor(private readonly http: HttpClient, private readonly tokenService: TokenService) {}

  login(credentials: AuthCredentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).pipe(tap((response) => {
      this.tokenService.saveToken(response.token);
      this._currentUser = response.user;
    }));
  }

  register(data: RegistrationData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, data).pipe(tap((response) => {
      this.tokenService.saveToken(response.token);
      this._currentUser = response.user;
    }));
  }

  logout(): void {
    this.tokenService.clearToken();
    this._currentUser = null;
  }

  isAuthenticated(): boolean {
    return Boolean(this.tokenService.getToken());
  }

  hasRole(role: UserRole | UserRole[]): boolean {
    if (!this._currentUser) return false;
    const roles = Array.isArray(role) ? role : [role];
    return roles.some((r) => this._currentUser?.roles.includes(r));
  }

  hasContext(context: UserContext): boolean {
    return this.hasRole(context);
  }

  upgradeContext(context: UserContext): void {
    if (!this._currentUser) return;
    this._currentUser = {
      ...this._currentUser,
      context,
      roles: Array.from(new Set([...this._currentUser.roles, context]))
    };
  }

  updateAccountType(accountType: 'INDIVIDUAL' | 'BUSINESS'): Observable<any> {
    return this.http.put(`${environment.apiUrl}/users/me`, { accountType }).pipe(
      tap((updatedUser: any) => {
        if (this._currentUser) {
          this._currentUser = {
            ...this._currentUser,
            accountType: updatedUser.accountType || accountType,
          };
        }
      })
    );
  }
}
