import { Component, OnInit } from '@angular/core';
import { MarketplaceProfileService } from '../../../../shared/services/marketplace-profile.service';
import { MarketplaceProfile } from '../../../../shared/models/marketplace-profile.model';

@Component({
  selector: 'app-featured-providers',
  templateUrl: './featured-providers.component.html',
  styleUrls: ['./featured-providers.component.scss']
})
export class FeaturedProvidersComponent implements OnInit {
  featuredProviders: MarketplaceProfile[] = [];

  constructor(private readonly profileService: MarketplaceProfileService) {}

  ngOnInit(): void {
    this.profileService.profiles$.subscribe(profiles => {
      this.featuredProviders = profiles.slice(0, 3);
    });
  }

  rating(profile: MarketplaceProfile): string {
    if (!profile.reviews?.length) return 'New';
    const score = profile.reviews.reduce((acc, r) => acc + r.rating, 0) / profile.reviews.length;
    return score.toFixed(1);
  }
}
