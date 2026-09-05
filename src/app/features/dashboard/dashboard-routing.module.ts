import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { DeliveryTrackingComponent } from './pages/delivery-tracking/delivery-tracking.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardHomeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'home', 
    component: DashboardHomeComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'profile', 
    component: ProfileSettingsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'verification', 
    component: VerificationComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'deliveries', 
    component: DeliveryTrackingComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}