import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateListingComponent } from './pages/create-listing/create-listing.component';
import { EditListingComponent } from './pages/edit-listing/edit-listing.component';
import { ListingDetailsComponent } from './pages/listing-details/listing-details.component';
import { ListingsComponent } from './pages/listings/listings.component';

const routes: Routes = [
  { path: '', component: ListingsComponent },
  { path: 'create', component: CreateListingComponent },
  { path: ':id/edit', component: EditListingComponent },
  { path: ':id', component: ListingDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingsRoutingModule {}