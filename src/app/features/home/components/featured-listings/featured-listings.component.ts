import { Component, OnInit } from '@angular/core';
import { Listing } from '../../../../shared/models/listing.model';
import { ListingService } from '../../../../shared/services/listing.service';

@Component({
  selector: 'app-featured-listings',
  templateUrl: './featured-listings.component.html',
  styleUrls: ['./featured-listings.component.scss']
})
export class FeaturedListingsComponent implements OnInit {
  featuredListings: Listing[] = [];
  loading = true;
  error = '';

  constructor(private readonly listingService: ListingService) {}

  ngOnInit(): void {
    this.loadListings();
  }

  loadListings(): void {
    this.loading = true;
    this.error = '';
    this.listingService.getListings().subscribe({
      next: (listings) => {
        this.featuredListings = listings.slice(0, 3);
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Unable to load listings. Make sure the backend API is running.';
        this.loading = false;
      },
    });
  }
}
