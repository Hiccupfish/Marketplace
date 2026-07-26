import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MarketplaceCategory {
  name: string;
  icon: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-categories-section',
  templateUrl: './categories-section.component.html',
  styleUrls: ['./categories-section.component.scss']
})
export class CategoriesSectionComponent {
  categories: MarketplaceCategory[] = [
    { name: 'Products', icon: '\u{1F6D2}', description: 'Buy and sell new or pre-owned items.', route: '/products' },
    { name: 'Services', icon: '\u{1F6E0}\u{FE0F}', description: 'Find trusted professionals near you.', route: '/services' },
    { name: 'Requests', icon: '\u{1F4E2}', description: 'Post what you need and receive offers.', route: '/requests' },
    { name: 'Deliveries', icon: '\u{1F69A}', description: 'Compare trusted delivery drivers.', route: '/deliveries' }
  ];

  constructor(private readonly router: Router) {}

  selectCategory(category: MarketplaceCategory): void {
    this.router.navigate([category.route]);
  }
}
