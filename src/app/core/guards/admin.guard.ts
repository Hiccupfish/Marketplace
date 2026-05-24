import { AuthGuard } from './auth.guard';

export class AdminGuard extends AuthGuard {
  override canActivate(): boolean {
    return super.canActivate();
  }
}