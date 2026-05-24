import { StorageService } from './storage.service';

export class TokenService {
  constructor(private readonly storage: StorageService = new StorageService()) {}

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