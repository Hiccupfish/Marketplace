import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  phone = '';
  city = '';
  error = '';
  loading = false;
  showPassword = false;
  showConfirmPassword = false;
  agreeToTerms = false;

  constructor(private readonly auth: AuthService, private readonly router: Router) {}

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  get passwordStrengthScore(): number {
    if (!this.password) return 0;
    let score = 0;
    if (this.password.length >= 8) score += 25;
    if (this.password.length >= 12) score += 15;
    if (/[A-Z]/.test(this.password)) score += 20;
    if (/[0-9]/.test(this.password)) score += 20;
    if (/[^A-Za-z0-9]/.test(this.password)) score += 20;
    return Math.min(100, score);
  }

  get passwordStrengthLabel(): string {
    const score = this.passwordStrengthScore;
    if (score === 0) return '';
    if (score < 40) return 'Weak';
    if (score < 75) return 'Fair';
    if (score < 90) return 'Good';
    return 'Strong';
  }

  get passwordStrengthClass(): string {
    const score = this.passwordStrengthScore;
    if (score < 40) return 'weak';
    if (score < 75) return 'fair';
    if (score < 90) return 'good';
    return 'strong';
  }

  get passwordsMismatch(): boolean {
    return !!this.confirmPassword && this.password !== this.confirmPassword;
  }

  submit(): void {
    this.error = '';

    if (!this.name.trim() || !this.email.trim() || !this.password) {
      this.error = 'Please fill in all required fields.';
      return;
    }

    if (this.password.length < 8) {
      this.error = 'Password must be at least 8 characters long.';
      return;
    }

    if (this.confirmPassword && this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }

    if (!this.agreeToTerms) {
      this.error = 'You must agree to the Terms of Service to create an account.';
      return;
    }

    this.loading = true;
    this.auth.register({
      name: this.name.trim(),
      email: this.email.trim(),
      password: this.password,
      phone: this.phone.trim(),
      city: this.city.trim()
    }).subscribe({
      next: () => this.router.navigate(['/listings/create']),
      error: (error) => {
        this.error = error.error?.message || 'Unable to register. Please try again.';
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }
}

