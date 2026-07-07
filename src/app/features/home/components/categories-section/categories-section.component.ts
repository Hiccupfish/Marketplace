import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'app-categories-section',
  templateUrl: './categories-section.component.html',
  styleUrls: ['./categories-section.component.scss']
})
export class CategoriesSectionComponent {
  categories: Category[] = [
    { id: 'mechanics', name: 'Mechanics', slug: 'mechanics', icon: 'Tools' },
    { id: 'painters', name: 'Painters', slug: 'painters', icon: 'Paint' },
    { id: 'electronics', name: 'Electronics', slug: 'electronics', icon: 'Tech' },
    { id: 'plumbing', name: 'Plumbing', slug: 'plumbing', icon: 'Pipe' },
    { id: 'furniture', name: 'Furniture', slug: 'furniture', icon: 'Home' },
    { id: 'repairs', name: 'Repairs', slug: 'repairs', icon: 'Fix' }
  ];

  constructor(private readonly router: Router) {}

  selectCategory(category: Category): void {
    this.router.navigate(['/listings'], {
      queryParams: { category: category.slug }
    });
  }
}
