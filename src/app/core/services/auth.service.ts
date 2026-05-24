import { AuthResponse } from '../models/auth-response.model';
import { TokenService } from './token.service';

export class AuthService {
  constructor(private readonly tokenService: TokenService = new TokenService()) {}

  login(response: AuthResponse): void {
    this.tokenService.saveToken(response.token);
  }

  logout(): void {
    this.tokenService.clearToken();
  }

  isAuthenticated(): boolean {
    return Boolean(this.tokenService.getToken());
  }
}