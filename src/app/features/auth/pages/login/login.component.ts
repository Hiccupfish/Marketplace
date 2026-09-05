import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { UserContext } from '../../../../core/models/user.model';

@Component({ selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.scss'] })
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error = '';
  loading = false;
  showPassword = false;

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  ngOnInit(): void {}

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  submit(): void {
    this.error = '';
    this.loading = true;

    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: () => {
        const context = this.auth.currentUser?.context || 'BUYER';
        const redirectMap: Record<UserContext, string> = {
          'PRODUCT_PROVIDER': '/my-products',
          'SERVICE_PROVIDER': '/my-services',
          'BUYER': '/listings'
        };
        this.router.navigate([redirectMap[context]]);
      },
      error: (error) => { this.error = error.error?.message || 'Unable to log in.'; this.loading = false; },
      complete: () => this.loading = false,
    });
  }
}

