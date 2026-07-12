import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './pages/listings/listings.component';
import { ListingDetailsComponent } from './pages/listing-details/listing-details.component';
import { CreateListingComponent } from './pages/create-listing/create-listing.component';
import { EditListingComponent } from './pages/edit-listing/edit-listing.component';
import { ListingFiltersComponent } from './components/listing-filters/listing-filters.component';
import { ListingGalleryComponent } from './components/listing-gallery/listing-gallery.component';
import { ListingInfoComponent } from './components/listing-info/listing-info.component';
import { SellerCardComponent } from './components/seller-card/seller-card.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@NgModule({
  declarations: [
    ListingsComponent,
    ListingDetailsComponent,
    CreateListingComponent,
    EditListingComponent,
    ListingGalleryComponent,
    ListingInfoComponent,
    ListingFiltersComponent,
    SellerCardComponent,
    WhatsappButtonComponent,
  ],
  imports: [CommonModule, SharedModule, ListingsRoutingModule, FormsModule],
  exports: [
    ListingsComponent,
    ListingDetailsComponent,
    CreateListingComponent,
    EditListingComponent,
    ListingGalleryComponent,
    ListingInfoComponent,
    ListingFiltersComponent,
    SellerCardComponent,
    WhatsappButtonComponent,
  ],
})
export class ListingsModule {}
