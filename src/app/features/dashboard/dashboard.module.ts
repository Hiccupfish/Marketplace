import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { MyListingsComponent } from './pages/my-listings/my-listings.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { VerificationComponent } from './pages/verification/verification.component';

@NgModule({
  declarations: [
    DashboardHomeComponent,
    MyListingsComponent,
    ProfileSettingsComponent,
    VerificationComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [
    DashboardHomeComponent,
    MyListingsComponent,
    ProfileSettingsComponent,
    VerificationComponent,
  ],
})
export class DashboardModule {}