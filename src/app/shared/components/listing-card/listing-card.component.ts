import { Component, Input } from '@angular/core';
import { Listing } from '../../models/listing.model';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss']
})
export class ListingCardComponent {
  @Input() listing: Listing | null = null;
  @Input() viewMode: 'grid' | 'list' = 'grid';

  get formattedPrice(): string {
    if (!this.listing?.priceZar) return 'Price on request';
    return 'R ' + this.listing.priceZar.toLocaleString('en-ZA');
  }

  get categoryColor(): string {
    const cat = this.listing?.category?.toLowerCase() || '';
    if (cat.includes('electronics')) return '#0d6efd';
    if (cat.includes('vehicle')) return '#fd7e14';
    if (cat.includes('property')) return '#20c997';
    if (cat.includes('fashion')) return '#d63384';
    if (cat.includes('home')) return '#6f42c1';
    return '#6c757d';
  }

  get fallbackImage(): string {
    const cat = this.listing?.category?.toLowerCase() || '';
    if (cat.includes('electronics')) {
      return 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60';
    }
    if (cat.includes('vehicle')) {
      return 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60';
    }
    if (cat.includes('property')) {
      return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60';
    }
    if (cat.includes('fashion')) {
      return 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60';
    }
    return 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60';
  }
}