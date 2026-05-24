import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ReportedListingsComponent } from './reported-listings/reported-listings.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { UserVerificationsComponent } from './user-verifications/user-verifications.component';
import { ReportsTableComponent } from './components/reports-table/reports-table.component';
import { VerificationTableComponent } from './components/verification-table/verification-table.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserVerificationsComponent,
    ReportedListingsComponent,
    UsersManagementComponent,
    VerificationTableComponent,
    ReportsTableComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}