import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { SellerListingsComponent } from './components/seller-listings/seller-listings.component';
import { SellerReviewsComponent } from './components/seller-reviews/seller-reviews.component';
import { SellerProfileComponent } from './pages/seller-profile/seller-profile.component';

@NgModule({
  declarations: [
    SellerProfileComponent,
    ProfileHeaderComponent,
    SellerReviewsComponent,
    SellerListingsComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}