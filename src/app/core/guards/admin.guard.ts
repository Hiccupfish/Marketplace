import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

export class AdminGuard extends AuthGuard {
  override canActivate(): boolean {
    return super.canActivate() && this.authService.hasRole('ADMIN');
  }
}