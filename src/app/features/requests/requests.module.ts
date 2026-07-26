import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsComponent } from './pages/requests/requests.component';
import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { SubmitProposalComponent } from './pages/submit-proposal/submit-proposal.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { MyProposalsComponent } from './pages/my-proposals/my-proposals.component';
import { NegotiationsComponent } from './pages/negotiations/negotiations.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

@NgModule({
  declarations: [
    RequestsComponent,
    CreateRequestComponent,
    RequestDetailsComponent,
    SubmitProposalComponent,
    MyRequestsComponent,
    MyProposalsComponent,
    NegotiationsComponent,
    NotificationsComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule, RequestsRoutingModule],
  exports: [
    RequestsComponent,
    CreateRequestComponent,
    RequestDetailsComponent,
    SubmitProposalComponent,
    MyRequestsComponent,
    MyProposalsComponent,
    NegotiationsComponent,
    NotificationsComponent,
  ],
})
export class RequestsModule {}
