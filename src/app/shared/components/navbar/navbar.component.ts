import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  brand = 'Marketplace';
  searchQuery = '';
  get isLoggedIn(): boolean { return this.auth.isAuthenticated(); }
  userName = 'User';

  constructor(private readonly router: Router, private readonly auth: AuthService) {}

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
