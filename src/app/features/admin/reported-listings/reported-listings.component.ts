import { Component, OnInit } from '@angular/core';
import { ReportedListing, ReportedListingsService } from './reported-listings.service';

@Component({
  selector: 'app-reported-listings',
  templateUrl: './reported-listings.component.html',
  styleUrls: ['./reported-listings.component.scss'],
})
export class ReportedListingsComponent implements OnInit {
  listings: ReportedListing[] = [];

  constructor(private service: ReportedListingsService) {}

  ngOnInit(): void {
    this.service.getListings().subscribe((data) => (this.listings = data));
  }

  resolve(id: number): void {
    this.service.resolveListing(id).subscribe(() => {
      const listing = this.listings.find((l) => l.id === id);
      if (listing) {
        listing.status = 'Resolved';
      }
    });
  }

  // Optional: handle row selection for future features
  select(listing: ReportedListing): void {}
}