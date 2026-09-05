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
    if (cat.includes('electronics')) return '#174a35';
    if (cat.includes('vehicle')) return '#1e5e3e';
    if (cat.includes('property')) return '#134e38';
    if (cat.includes('fashion')) return '#246949';
    if (cat.includes('home')) return '#1a563b';
    return '#174a35';
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

  get sellerTypeLabel(): string {
    const type = this.listing?.sellerType;
    switch (type) {
      case 'BUSINESS': return 'Business';
      case 'INDEPENDENT_PROVIDER': return 'Independent Provider';
      case 'CASUAL':
      default: return 'Casual Seller';
    }
  }

  get sellerTypeClass(): string {
    const type = this.listing?.sellerType;
    switch (type) {
      case 'BUSINESS': return 'seller-type--business';
      case 'INDEPENDENT_PROVIDER': return 'seller-type--provider';
      case 'CASUAL':
      default: return 'seller-type--casual';
    }
  }
}