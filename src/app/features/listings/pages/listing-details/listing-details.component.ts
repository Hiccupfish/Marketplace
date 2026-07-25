import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../../../../shared/services/listing.service';
import { Listing } from '../../../../shared/models/listing.model';
import { OfferService } from '../../../../shared/services/offer.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {
  listing: Listing | null = null;
  loading = true;
  error = '';
  isSaved = false;
  showContactModal = false;
  showOfferModal = false;

  // Offer fields
  offerBuyerName = '';
  offerBuyerEmail = '';
  offerBuyerPhone = '';
  offerAmount: number | null = null;
  offerMessage = '';
  submittingOffer = false;
  offerSuccessMessage = '';
  notificationDetails: any = null;
  copyLinkSuccess = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly listingService: ListingService,
    private readonly offerService: OfferService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadListing(id);
      } else {
        this.error = 'Invalid listing ID.';
        this.loading = false;
      }
    });
  }

  loadListing(id: string): void {
    this.loading = true;
    this.error = '';
    this.listingService.getListing(id).subscribe({
      next: (listing) => {
        this.listing = listing;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Listing not found or failed to load.';
        this.loading = false;
      }
    });
  }

  toggleSave(): void {
    this.isSaved = !this.isSaved;
  }

  copyLink(): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      this.copyLinkSuccess = true;
      setTimeout(() => (this.copyLinkSuccess = false), 3000);
    }
  }

  openOfferModal(): void {
    if (this.listing?.priceZar) {
      this.offerAmount = Math.round(this.listing.priceZar * 0.9);
    }
    this.showOfferModal = true;
    this.offerSuccessMessage = '';
    this.notificationDetails = null;
  }

  submitOffer(): void {
    if (!this.listing?.id || !this.offerAmount || this.offerAmount <= 0) return;
    if (!this.offerBuyerName.trim() || !this.offerBuyerEmail.trim()) {
      alert('Please provide your Name and Email so the seller can respond to your offer.');
      return;
    }

    this.submittingOffer = true;
    this.offerService.createOffer({
      listingId: this.listing.id,
      buyerName: this.offerBuyerName.trim(),
      buyerEmail: this.offerBuyerEmail.trim(),
      buyerPhone: this.offerBuyerPhone.trim(),
      amountZar: this.offerAmount,
      message: this.offerMessage.trim()
    }).subscribe({
      next: (res) => {
        this.submittingOffer = false;
        this.notificationDetails = res.notifications;
        this.offerSuccessMessage = `Offer of R ${this.offerAmount?.toLocaleString()} submitted successfully! Automated Email and WhatsApp notifications have been sent to the seller.`;
      },
      error: (err) => {
        this.submittingOffer = false;
        alert(err.error?.message || 'Failed to submit offer. Please try again.');
      }
    });
  }

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
      return 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop&q=80';
    }
    if (cat.includes('vehicle')) {
      return 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80';
    }
    if (cat.includes('property')) {
      return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80';
    }
    if (cat.includes('fashion')) {
      return 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80';
    }
    return 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80';
  }

  goBack(): void {
    this.router.navigate(['/listings']);
  }
}