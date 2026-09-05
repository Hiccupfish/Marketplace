import { Component, OnInit } from '@angular/core';
import { MarketplaceProfileService } from '../../../../shared/services/marketplace-profile.service';
import { MarketplaceProfile, ProfileKind, VerificationTier } from '../../../../shared/models/marketplace-profile.model';
import { AuthService } from '../../../../core/services/auth.service';

type ProviderTypeFilter = 'ALL' | 'PRODUCTS' | 'SERVICES' | 'BOTH';

@Component({
  selector: 'app-provider-directory',
  templateUrl: './provider-directory.component.html',
  styleUrls: ['./provider-directory.component.scss']
})
export class ProviderDirectoryComponent implements OnInit {
  kind: 'ALL' | ProfileKind = 'ALL';
  query = '';
  selectedSpecialty = 'ALL';
  verifiedOnly = false;
  sortBy: 'rating' | 'reviews' | 'name' = 'rating';
  providerType: ProviderTypeFilter = 'ALL';

  profilesList: MarketplaceProfile[] = [];

  constructor(
    private readonly profileService: MarketplaceProfileService,
    public readonly auth: AuthService
  ) {}

  ngOnInit(): void {
    this.profileService.profiles$.subscribe(profiles => {
      this.profilesList = profiles;
    });
  }

  get allCategories(): string[] {
    const set = new Set<string>();
    this.profilesList.forEach(p => {
      p.specialties.forEach(s => set.add(s));
    });
    return ['ALL', ...Array.from(set)];
  }

  get countAll(): number {
    return this.profilesList.length;
  }

  get countIndividual(): number {
    return this.profilesList.filter(p => p.kind === 'INDIVIDUAL').length;
  }

  get countBusiness(): number {
    return this.profilesList.filter(p => p.kind === 'BUSINESS').length;
  }

  get countProductProviders(): number {
    return this.profilesList.filter(p => (p.products || 0) > 0).length;
  }

  get countServiceProviders(): number {
    return this.profilesList.filter(p => (p.services || 0) > 0).length;
  }

  get countBoth(): number {
    return this.profilesList.filter(p => (p.products || 0) > 0 && (p.services || 0) > 0).length;
  }

  get showBecomeProvider(): boolean {
    const user = this.auth.currentUser;
    if (!user) return true;
    const hasProviderContext = user.roles.some(r => r === 'PRODUCT_PROVIDER' || r === 'SERVICE_PROVIDER');
    return !hasProviderContext;
  }

  get results(): MarketplaceProfile[] {
    const text = this.query.trim().toLowerCase();

    let list = this.profilesList.filter(p => {
      // Kind filter
      if (this.kind !== 'ALL' && p.kind !== this.kind) {
        return false;
      }

      // Verified only
      if (this.verifiedOnly && (!p.verification || p.verification.length === 0)) {
        return false;
      }

      // Specialty filter
      if (this.selectedSpecialty !== 'ALL' && !p.specialties.some(s => s.toLowerCase() === this.selectedSpecialty.toLowerCase())) {
        return false;
      }

      // Provider type filter (what they provide)
      const hasProducts = (p.products || 0) > 0;
      const hasServices = (p.services || 0) > 0;
      if (this.providerType === 'PRODUCTS' && !hasProducts) return false;
      if (this.providerType === 'SERVICES' && !hasServices) return false;
      if (this.providerType === 'BOTH' && (!hasProducts || !hasServices)) return false;

      // Search text (name, headline, location, bio, specialties)
      if (text) {
        const hay = `${p.name} ${p.headline} ${p.location} ${p.bio} ${p.specialties.join(' ')}`.toLowerCase();
        if (!hay.includes(text)) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    list = [...list].sort((a, b) => {
      if (this.sortBy === 'rating') {
        const rateA = this.calcNumericRating(a);
        const rateB = this.calcNumericRating(b);
        return rateB - rateA;
      }
      if (this.sortBy === 'reviews') {
        return (b.reviews?.length || 0) - (a.reviews?.length || 0);
      }
      if (this.sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return list;
  }

  calcNumericRating(profile: MarketplaceProfile): number {
    if (!profile.reviews?.length) return 0;
    return profile.reviews.reduce((sum, r) => sum + r.rating, 0) / profile.reviews.length;
  }

  rating(profile: MarketplaceProfile): string {
    if (!profile.reviews?.length) return 'New';
    const score = this.calcNumericRating(profile);
    return score.toFixed(1);
  }

  getVerificationBadgeLabel(tier: VerificationTier): string {
    switch (tier) {
      case 'PHONE': return 'Phone Verified';
      case 'ID': return 'Identity Verified';
      case 'BUSINESS': return 'Business Verified';
      case 'PRO': return 'Verified Professional';
      default: return tier;
    }
  }

  clearFilters(): void {
    this.kind = 'ALL';
    this.query = '';
    this.selectedSpecialty = 'ALL';
    this.verifiedOnly = false;
    this.sortBy = 'rating';
    this.providerType = 'ALL';
  }
}

