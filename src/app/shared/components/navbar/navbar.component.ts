import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  brand = 'Marketplace';
  searchQuery = '';
  isLoggedIn = false;
  userName = 'User';

  constructor(private readonly router: Router) {}

  onSearch(): void {
    const query = this.searchQuery.trim();

    this.router.navigate(['/listings'], {
      queryParams: query ? { q: query } : undefined
    });
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
