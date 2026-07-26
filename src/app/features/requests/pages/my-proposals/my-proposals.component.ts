import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../../shared/services/request.service';
import { RequestOffer } from '../../../../shared/models/request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-proposals',
  templateUrl: './my-proposals.component.html',
  styleUrls: ['./my-proposals.component.scss']
})
export class MyProposalsComponent implements OnInit {
  offers: RequestOffer[] = [];
  loading = true;
  error = '';

  constructor(private readonly requestService: RequestService, private readonly router: Router) {}

  ngOnInit(): void {
    this.loadMyProposals();
  }

  loadMyProposals(): void {
    this.loading = true;
    this.error = '';
    this.requestService.getMyOffers().subscribe({
      next: (data) => {
        this.offers = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Unable to load your proposals.';
        this.loading = false;
      },
    });
  }

  viewRequest(requestId: string): void {
    this.router.navigate(['/requests', requestId]);
  }

  getStatusColor(status: string): string {
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

  getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / 86400000);
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short' });
  }
}
