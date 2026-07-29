import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../../../shared/services/listing.service';
import { Listing } from '../../../../shared/models/listing.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listings: Listing[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private readonly listingService: ListingService) {}

  ngOnInit(): void {
    this.listingService.getListings().subscribe({
      next: (items) => {
        this.listings = items;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load products right now.';
        this.isLoading = false;
      }
    });
  }
}
