import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  brand = 'Kasiverse';
  searchQuery = '';
  get isLoggedIn(): boolean { return this.auth.isAuthenticated(); }
  get userName(): string { return this.auth.currentUser?.name || 'User'; }

  constructor(private readonly router: Router, public readonly auth: AuthService) {}

  onSearch(): void {
    const query = this.searchQuery.trim();
    this.router.navigate(['/listings'], {
      queryParams: query ? { q: query } : undefined
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
