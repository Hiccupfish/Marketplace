import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ListingCardComponent } from './components/listing-card/listing-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VerifiedBadgeComponent } from './components/verified-badge/verified-badge.component';
import { PhoneFormatDirective } from './directives/phone-format.directive';
import { PricePipe } from './pipes/price.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    ListingCardComponent,
    CategoryCardComponent,
    SearchBarComponent,
    RatingStarsComponent,
    VerifiedBadgeComponent,
    EmptyStateComponent,
    ConfirmDialogComponent,
    PricePipe,
    TruncatePipe,
    PhoneFormatDirective
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    ListingCardComponent,
    CategoryCardComponent,
    SearchBarComponent,
    RatingStarsComponent,
    VerifiedBadgeComponent,
    EmptyStateComponent,
    ConfirmDialogComponent,
    PricePipe,
    TruncatePipe,
    PhoneFormatDirective
  ]
})
export class SharedModule {}
