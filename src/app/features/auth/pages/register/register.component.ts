import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({ selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.scss'] })
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  phone = '';
  city = '';
  error = '';
  loading = false;

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  submit(): void {
    this.error = '';
    this.loading = true;
    this.auth.register({ name: this.name, email: this.email, password: this.password, phone: this.phone, city: this.city }).subscribe({
      next: () => this.router.navigate(['/listings/create']),
      error: (error) => { this.error = error.error?.message || 'Unable to register.'; this.loading = false; },
      complete: () => this.loading = false,
    });
  }
}
