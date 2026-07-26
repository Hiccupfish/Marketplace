import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../../../shared/services/request.service';
import { CategoryService } from '../../../../shared/services/category.service';
import { CreateRequestData, MarketplaceType } from '../../../../shared/models/request.model';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent {
  title = '';
  description = '';
  marketplaceType: MarketplaceType = 'SERVICE';
  categoryId = '';
  budget: number | null = null;
  location = '';
  deadline = '';
  preferredFulfilment = '';
  images: string[] = [];

  error = '';
  loading = false;
  submitted = false;

  categories: { id: string; name: string }[] = [];

  constructor(private readonly requestService: RequestService, private readonly categoryService: CategoryService, private readonly router: Router) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (cats) => { this.categories = cats; },
      error: () => { this.categories = []; },
    });
  }

  get hasBudget(): boolean {
    return this.budget !== null && this.budget !== undefined && this.budget > 0;
  }

  toggleBudget(): void {
    if (this.hasBudget) {
      this.budget = null;
    } else {
      this.budget = 0;
    }
  }

  get hasDeadline(): boolean {
    return !!this.deadline;
  }

  toggleDeadline(): void {
    if (this.hasDeadline) {
      this.deadline = '';
    } else {
      this.deadline = new Date().toISOString().split('T')[0];
    }
  }

  addImageUrl(): void {
    const url = prompt('Enter image URL:');
    if (url) {
      this.images = [...this.images, url.trim()];
    }
  }

  removeImage(index: number): void {
    this.images = this.images.filter((_, i) => i !== index);
  }

  submit(): void {
    this.error = '';

    if (!this.title.trim()) {
      this.error = 'Please enter a title for your request.';
      return;
    }
    if (!this.description.trim()) {
      this.error = 'Please describe what you need.';
      return;
    }
    if (!this.categoryId) {
      this.error = 'Please select a category.';
      return;
    }

    this.loading = true;
    const data: CreateRequestData = {
      title: this.title.trim(),
      description: this.description.trim(),
      marketplaceType: this.marketplaceType,
      categoryId: this.categoryId,
      budget: this.budget || undefined,
      location: this.location.trim() || undefined,
      deadline: this.deadline || undefined,
      preferredFulfilment: this.preferredFulfilment.trim() || undefined,
      images: this.images.length > 0 ? this.images : undefined,
    };

    this.requestService.createRequest(data).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to create request. Please try again.';
        this.loading = false;
      },
    });
  }

  goToRequests(): void {
    this.router.navigate(['/requests']);
  }
}
