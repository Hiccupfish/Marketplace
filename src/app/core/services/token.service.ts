import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor(private readonly storage: StorageService) {}

  getToken(): string | null {
    return this.storage.getItem('token');
  }

  saveToken(token: string): void {
    this.storage.setItem('token', token);
  }

  clearToken(): void {
    this.storage.removeItem('token');
  }
}
