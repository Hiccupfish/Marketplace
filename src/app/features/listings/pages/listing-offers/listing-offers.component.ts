import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService, Offer } from '../../../../shared/services/offer.service';
import { Listing } from '../../../../shared/models/listing.model';

@Component({
  selector: 'app-listing-offers',
  templateUrl: './listing-offers.component.html',
  styleUrls: ['./listing-offers.component.scss']
})
export class ListingOffersComponent implements OnInit {
  listing: Listing | null = null;
  offers: Offer[] = [];
  loading = true;
  error = '';
  updatingOfferId: number | null = null;
  statusMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly offerService: OfferService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadOffers(id);
      } else {
        this.error = 'Invalid listing ID.';
        this.loading = false;
      }
    });
  }

  loadOffers(listingId: string): void {
    this.loading = true;
    this.error = '';
    this.offerService.getOffersForListing(listingId).subscribe({
      next: (res) => {
        this.listing = res.listing;
        this.offers = res.offers;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to load offers for this listing.';
        this.loading = false;
      }
    });
  }

  updateStatus(offer: Offer, newStatus: 'ACCEPTED' | 'REJECTED'): void {
    if (!offer.id) return;
    this.updatingOfferId = offer.id;
    this.statusMessage = '';

    this.offerService.updateOfferStatus(offer.id, newStatus).subscribe({
      next: (updated) => {
        Object.assign(offer, updated);
        this.updatingOfferId = null;
        this.statusMessage = `Offer from ${offer.buyerName} has been ${newStatus.toLowerCase()}.`;
        setTimeout(() => (this.statusMessage = ''), 4000);
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to update offer status.';
        this.updatingOfferId = null;
      }
    });
  }

  getPriceDiff(amount: number): { text: string; isAbove: boolean } {
    if (!this.listing?.priceZar) return { text: '', isAbove: false };
    const diff = amount - this.listing.priceZar;
    if (diff === 0) return { text: 'Full Asking Price', isAbove: true };
    if (diff > 0) return { text: `R ${diff.toLocaleString()} above asking price`, isAbove: true };
    return { text: `R ${Math.abs(diff).toLocaleString()} below asking price`, isAbove: false };
  }

  getWhatsAppLink(phone: string, offer: Offer): string {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const msg = encodeURIComponent(`Hi ${offer.buyerName}, regarding your offer of R ${offer.amountZar.toLocaleString()} for "${this.listing?.title}"...`);
    return `https://wa.me/${cleanPhone}?text=${msg}`;
  }

  goBack(): void {
    if (this.listing?.id) {
      this.router.navigate(['/listings', this.listing.id]);
    } else {
      this.router.navigate(['/listings']);
    }
  }
}
