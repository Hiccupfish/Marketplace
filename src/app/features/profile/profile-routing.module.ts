import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerProfileComponent } from './pages/seller-profile/seller-profile.component';

const routes: Routes = [
  { path: '', component: SellerProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}