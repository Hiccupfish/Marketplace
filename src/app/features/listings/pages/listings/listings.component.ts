import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../../../../shared/services/listing.service';
import { Listing } from '../../../../shared/models/listing.model';

@Component({ selector: 'app-listings', templateUrl: './listings.component.html', styleUrls: ['./listings.component.scss'] })
export class ListingsComponent implements OnInit {
  listings: Listing[] = [];
  loading = true;
  error = '';

  constructor(private readonly listingService: ListingService, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const query = params.get('q') || params.get('search') || undefined;
      this.loadListings(query, params.get('category') || undefined);
    });
  }

  private loadListings(search?: string, category?: string): void {
    this.loading = true;
    this.error = '';
    this.listingService.getListings(search, category).subscribe({
      next: (listings) => { this.listings = listings; this.loading = false; },
      error: (error) => { this.error = error.error?.message || 'Unable to load listings. Make sure the API is running on port 3000.'; this.loading = false; },
    });
  }
}
