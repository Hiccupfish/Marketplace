import { Component } from '@angular/core';

import { Listing } from '../../../../shared/models/listing.model';

@Component({
  selector: 'app-featured-listings',
  templateUrl: './featured-listings.component.html',
  styleUrls: ['./featured-listings.component.scss']
})
export class FeaturedListingsComponent {
  featuredListings: Listing[] = [
    {
      id: '1',
      title: 'Mobile mechanic',
      description: 'Reliable car diagnostics, minor repairs, and maintenance.',
      price: 450,
      currency: 'ZAR',
      categoryId: 'mechanics',
      location: { city: 'Johannesburg', country: 'South Africa' },
      imageUrl: 'assets/placeholder-listing.svg',
      verified: true,
      rating: 4.8
    },
    {
      id: '2',
      title: 'Interior painting service',
      description: 'Clean residential painting for rooms and feature walls.',
      price: 1200,
      currency: 'ZAR',
      categoryId: 'painters',
      location: { city: 'Pretoria', country: 'South Africa' },
      imageUrl: 'assets/placeholder-listing.svg',
      verified: true,
      rating: 4.6
    },
    {
      id: '3',
      title: 'Laptop and phone repairs',
      description: 'Screen replacements, software setup, and device checks.',
      price: 350,
      currency: 'ZAR',
      categoryId: 'electronics',
      location: { city: 'Soweto', country: 'South Africa' },
      imageUrl: 'assets/placeholder-listing.svg',
      verified: false,
      rating: 4.4
    }
  ];
}
