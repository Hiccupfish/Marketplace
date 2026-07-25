import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { MyListingsComponent } from './pages/my-listings/my-listings.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { DeliveryTrackingComponent } from './pages/delivery-tracking/delivery-tracking.component';

const routes: Routes = [
  { path: '', component: DashboardHomeComponent },
  { path: 'my-listings', component: MyListingsComponent },
  { path: 'profile-settings', component: ProfileSettingsComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'deliveries', component: DeliveryTrackingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}