import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginIntent } from '../../../../core/services/auth.service';

@Component({ selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss'] })
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error = '';
  loading = false;
  showPassword = false;
  showIntentModal = false;

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  ngOnInit(): void {
    // Show intent modal if user hasn't set one yet
    if (!this.auth.getLoginIntent()) {
      this.showIntentModal = true;
    }
  }

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  onIntentSelected(intent: LoginIntent): void {
    this.auth.setLoginIntent(intent);
    this.showIntentModal = false;
  }

  onIntentCancelled(): void {
    this.showIntentModal = false;
  }

  submit(): void {
    this.error = '';
    this.loading = true;
    const intent = this.auth.getLoginIntent() || 'BUY';
    
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: () => {
        // Navigate based on login intent
        const redirectMap: { [key in LoginIntent]: string } = {
          'BUY': '/listings',
          'SELL_PRODUCTS': '/my-products',
          'OFFER_SERVICES': '/my-services',
          'BUSINESS': '/business',
          'null': '/listings'
        };
        const redirect = redirectMap[intent] || '/listings';
        this.auth.clearLoginIntent(); // Clear after using
        this.router.navigate([redirect]);
      },
      error: (error) => { this.error = error.error?.message || 'Unable to log in.'; this.loading = false; },
      complete: () => this.loading = false,
    });
  }
}

