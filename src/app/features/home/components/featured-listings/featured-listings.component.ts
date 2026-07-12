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

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    this.listingService.getListings().subscribe((listings) => {
      // Take first three listings as featured (could be refined)
      this.featuredListings = listings.slice(0, 3);
    });
  }
}
