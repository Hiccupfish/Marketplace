import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../../shared/services/request.service';
import { Request, RequestStatus } from '../../../../shared/models/request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {
  requests: Request[] = [];
  loading = true;
  error = '';

  constructor(private readonly requestService: RequestService, private readonly router: Router) {}

  ngOnInit(): void {
    this.loadMyRequests();
  }

  loadMyRequests(): void {
    this.loading = true;
    this.error = '';
    this.requestService.getMyRequests().subscribe({
      next: (data) => {
        this.requests = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Unable to load your requests.';
        this.loading = false;
      },
    });
  }

  viewRequest(id: string): void {
    this.router.navigate(['/requests', id]);
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

  formatBudget(budget?: number): string {
    if (!budget) return 'Negotiable';
    return 'R ' + budget.toLocaleString('en-ZA');
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
