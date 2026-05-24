import { AuthService } from '../services/auth.service';

export class AuthGuard {
  constructor(private readonly authService: AuthService = new AuthService()) {}

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}