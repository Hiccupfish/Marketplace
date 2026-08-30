import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MarketplaceProfile,
  PortfolioItem,
  ProfileKind,
  VerificationTier
} from '../../../../shared/models/marketplace-profile.model';
import { MarketplaceProfileService } from '../../../../shared/services/marketplace-profile.service';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss'],
})
export class SellerProfileComponent implements OnInit {
  profile?: MarketplaceProfile;
  activeTab: 'work' | 'services' | 'products' | 'reviews' | 'about' = 'work';
  selectedPortfolioItem?: PortfolioItem;
  portfolioFilter = 'ALL';

  // Review Submission State
  showReviewModal = false;
  reviewAuthor = '';
  reviewRating = 5;
  reviewComment = '';
  reviewSubmitting = false;
  reviewSuccessMessage = '';

  // Copy feedback
  linkCopied = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly profileService: MarketplaceProfileService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || 'sipho-carpentry';
      this.loadProfile(slug);
    });
  }

  loadProfile(slug: string): void {
    this.profile = this.profileService.getProfile(slug);
    if (!this.profile) {
      // Default to first profile if not found
      this.profile = this.profileService.getCurrentUserProfile();
    }
  }

  get averageRating(): string {
    if (!this.profile?.reviews?.length) return 'New';
    const total = this.profile.reviews.reduce((sum, r) => sum + r.rating, 0);
    return (total / this.profile.reviews.length).toFixed(1);
  }

  get ratingCount(): number {
    return this.profile?.reviews?.length || 0;
  }

  get portfolioCategories(): string[] {
    if (!this.profile?.portfolio?.length) return [];
    const categories = new Set(this.profile.portfolio.map(p => p.category));
    return ['ALL', ...Array.from(categories)];
  }

  get filteredPortfolio(): PortfolioItem[] {
    if (!this.profile?.portfolio) return [];
    if (this.portfolioFilter === 'ALL') return this.profile.portfolio;
    return this.profile.portfolio.filter(item => item.category === this.portfolioFilter);
  }

  getRatingCountByStar(star: number): number {
    if (!this.profile?.reviews) return 0;
    return this.profile.reviews.filter(r => Math.round(r.rating) === star).length;
  }

  getRatingPercentageByStar(star: number): number {
    if (!this.profile?.reviews?.length) return 0;
    return Math.round((this.getRatingCountByStar(star) / this.profile.reviews.length) * 100);
  }

  getVerificationInfo(tier: VerificationTier): { label: string; icon: string; desc: string } {
    switch (tier) {
      case 'PHONE':
        return {
          label: 'Phone & WhatsApp Verified',
          icon: '📱',
          desc: 'Direct phone number and WhatsApp confirmed for active communication.'
        };
      case 'ID':
        return {
          label: 'ID / Identity Verified',
          icon: '🪪',
          desc: 'National ID document / business owner identity vetted and recorded.'
        };
      case 'CERTIFIED':
        return {
          label: this.profile?.kind === 'BUSINESS' ? 'CIPC Registered Business' : 'Certified Trade Artisan',
          icon: '🏅',
          desc: this.profile?.kind === 'BUSINESS'
            ? 'Official company registration / trade proof verified.'
            : 'Department of Labour wireman, trade test, or formal qualification verified.'
        };
      case 'COMMUNITY_VOUCHED':
        return {
          label: 'Community Vouched',
          icon: '🤝',
          desc: 'Endorsed by verified local township clients with confirmed completed jobs.'
        };
      default:
        return { label: tier, icon: '✓', desc: 'Verified status.' };
    }
  }

  openReviewModal(): void {
    this.reviewAuthor = '';
    this.reviewRating = 5;
    this.reviewComment = '';
    this.reviewSuccessMessage = '';
    this.showReviewModal = true;
  }

  closeReviewModal(): void {
    this.showReviewModal = false;
  }

  setRating(rating: number): void {
    this.reviewRating = rating;
  }

  submitReview(): void {
    if (!this.profile || !this.reviewComment.trim()) return;
    this.reviewSubmitting = true;

    setTimeout(() => {
      this.profileService.addReview(this.profile!.id, {
        author: this.reviewAuthor.trim() || 'Verified Client',
        rating: this.reviewRating,
        comment: this.reviewComment.trim()
      });

      this.loadProfile(this.profile!.slug);
      this.reviewSubmitting = false;
      this.reviewSuccessMessage = 'Thank you! Your review has been published.';

      setTimeout(() => {
        this.closeReviewModal();
      }, 1200);
    }, 400);
  }

  openWhatsApp(phone?: string): void {
    if (!phone) return;
    const cleanNumber = phone.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(`Hi ${this.profile?.name}, I found your profile on Kasiverse and would like to inquire about your services/products.`);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
  }

  copyProfileLink(): void {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    this.linkCopied = true;
    setTimeout(() => (this.linkCopied = false), 2500);
  }
}
