import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingService } from '../../../../shared/services/listing.service';
import { Listing } from '../../../../shared/models/listing.model';

@Component({ selector: 'app-create-listing', templateUrl: './create-listing.component.html', styleUrls: ['./create-listing.component.scss'] })
export class CreateListingComponent {
  listing: Partial<Listing> = {};
  error = '';
  loading = false;

  constructor(private readonly listingService: ListingService, private readonly router: Router) {}

  submit(): void {
    this.error = '';
    if (!this.listing.title || !this.listing.description || this.listing.priceZar == null || !this.listing.category || !this.listing.city) {
      this.error = 'Complete all required fields.';
      return;
    }

    this.loading = true;
    this.listingService.createListing(this.listing as Pick<Listing, 'title' | 'description' | 'priceZar' | 'category' | 'city'>).subscribe({
      next: (created) => this.router.navigate(['/listings']),
      error: (error) => { this.error = error.status === 401 ? 'Please log in before creating a listing.' : error.error?.message || 'Unable to create the listing.'; this.loading = false; },
    });
  }
}

