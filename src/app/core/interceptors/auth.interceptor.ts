import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = this.tokenService.getToken();
    return next.handle(token ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : request);
  }
}
