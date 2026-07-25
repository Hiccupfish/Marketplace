import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { MyListingsComponent } from './pages/my-listings/my-listings.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { DeliveryTrackingComponent } from './pages/delivery-tracking/delivery-tracking.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    MyListingsComponent,
    ProfileSettingsComponent,
    VerificationComponent,
    DeliveryTrackingComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  exports: [
    DashboardHomeComponent,
    MyListingsComponent,
    ProfileSettingsComponent,
    VerificationComponent,
    DeliveryTrackingComponent,
  ],
})
export class DashboardModule {}