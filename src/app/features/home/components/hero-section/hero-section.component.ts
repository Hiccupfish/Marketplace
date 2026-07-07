import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  searchQuery = '';

  constructor(private readonly router: Router) {}

  onSearch(): void {
    const query = this.searchQuery.trim();

    this.router.navigate(['/listings'], {
      queryParams: query ? { q: query } : undefined
    });
  }

  filter(category: string): void {
    this.router.navigate(['/listings'], {
      queryParams: { category }
    });
  }
}
