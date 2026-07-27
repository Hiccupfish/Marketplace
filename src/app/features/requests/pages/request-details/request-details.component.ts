import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../../shared/services/request.service';
import { Request, RequestOffer, ProposalStatus, RequestStatus } from '../../../../shared/models/request.model';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
  request: Request | null = null;
  loading = true;
  error = '';
  activeTab: 'proposals' | 'negotiations' | 'details' = 'proposals';

  constructor(private readonly route: ActivatedRoute, private readonly requestService: RequestService, private readonly router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadRequest(id);
    }
  }

  loadRequest(id: string): void {
    this.loading = true;
    this.error = '';
    this.requestService.getRequest(id).subscribe({
      next: (data) => {
        this.request = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Unable to load request details.';
        this.loading = false;
      },
    });
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      'OPEN': '#52c41a',
      'RECEIVING_PROPOSALS': '#1890ff',
      'UNDER_REVIEW': '#faad14',
      'NEGOTIATING': '#fa8c16',
      'ACCEPTED': '#722ed1',
      'IN_PROGRESS': '#13c2c2',
      'COMPLETED': '#52c41a',
      'CANCELLED': '#ff4d4f',
      'EXPIRED': '#8c8c8c',
    };
    return colors[status] || '#8c8c8c';
  }

  formatStatus(status: string): string {
    return status ? status.replace(/_/g, ' ') : '';
  }

  getProposalStatusColor(status: string): string {
    const colors: Record<string, string> = {
      'PENDING': '#8c8c8c',
      'VIEWED': '#1890ff',
      'SHORTLISTED': '#722ed1',
      'ACCEPTED': '#52c41a',
      'REJECTED': '#ff4d4f',
      'CANCELLED': '#8c8c8c',
      'WITHDRAWN': '#8c8c8c',
    };
    return colors[status] || '#8c8c8c';
  }

  formatBudget(budget?: number): string {
    if (!budget) return 'Negotiable';
    return 'R ' + budget.toLocaleString('en-ZA');
  }

  formatDate(dateString?: string): string {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short' });
  }

  viewProposal(offer: RequestOffer): void {
    this.router.navigate(['/requests', this.request?.id, 'propose'], { queryParams: { offerId: offer.id } });
  }

  startNegotiation(offer: RequestOffer): void {
    this.router.navigate(['/requests', this.request?.id, 'negotiations'], { queryParams: { offerId: offer.id } });
  }

  updateProposalStatus(offerId: string, status: 'ACCEPTED' | 'REJECTED' | 'SHORTLISTED' | 'VIEWED'): void {
    if (!this.request?.id) return;
    this.requestService.updateProposalStatus(this.request.id, offerId, status).subscribe({
      next: (updated) => {
        if (this.request) {
          const idx = this.request.offers?.findIndex((o) => o.id === offerId);
          if (idx !== undefined && idx >= 0 && this.request.offers) {
            this.request.offers[idx] = { ...this.request.offers[idx], ...updated };
          }
          if (status === 'ACCEPTED') {
            this.request.status = 'ACCEPTED';
            this.request.offers = this.request.offers?.map((o) => o.id === offerId ? o : { ...o, status: 'REJECTED' });
          }
        }
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to update proposal status.';
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/requests']);
  }
}
