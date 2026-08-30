import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerProfileComponent } from './pages/seller-profile/seller-profile.component';
import { ProviderDirectoryComponent } from './pages/provider-directory/provider-directory.component';

const routes: Routes = [
  { path: 'directory', component: ProviderDirectoryComponent },
  { path: ':slug', component: SellerProfileComponent },
  { path: '', redirectTo: 'sipho-carpentry', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
