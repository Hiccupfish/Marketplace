import { Component } from '@angular/core';

import { Listing } from '../../../../shared/models/listing.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-featured-listings',
  templateUrl: './featured-listings.component.html',
  styleUrls: ['./featured-listings.component.scss']
})
export class FeaturedListingsComponent {
  featuredListings: Listing[] = [
    {
      id: 1,
      title: 'Mobile mechanic',
      description: 'Reliable car diagnostics, minor repairs, and maintenance.',
      priceZar: 450,
      category: 'mechanics',
      city: 'Johannesburg',
      sellerId: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Interior painting service',
      description: 'Clean residential painting for rooms and feature walls.',
      priceZar: 1200,
      category: 'painters',
      city: 'Pretoria',
      sellerId: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: 'Laptop and phone repairs',
      description: 'Screen replacements, software setup, and device checks.',
      priceZar: 350,
      category: 'electronics',
      city: 'Soweto',
      sellerId: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}
