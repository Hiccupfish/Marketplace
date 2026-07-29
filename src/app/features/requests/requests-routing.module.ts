import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './pages/requests/requests.component';
import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { SubmitProposalComponent } from './pages/submit-proposal/submit-proposal.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { MyProposalsComponent } from './pages/my-proposals/my-proposals.component';
import { NegotiationsComponent } from './pages/negotiations/negotiations.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

const routes: Routes = [
  { path: '', component: RequestsComponent },
  { path: 'create', component: CreateRequestComponent },
  { path: 'my', component: MyRequestsComponent },
  { path: 'my/proposals', component: MyProposalsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: ':id/propose', component: SubmitProposalComponent },
  { path: ':id/negotiations', component: NegotiationsComponent },
  { path: ':id', component: RequestDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
