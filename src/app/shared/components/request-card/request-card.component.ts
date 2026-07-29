import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent {

  @Input() request: any;

  getTypeColor(type: string): string {
    return type === 'PRODUCT' ? '#0d6efd' : '#52c41a';
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      OPEN: '#52c41a',
      RECEIVING_PROPOSALS: '#1890ff',
      UNDER_REVIEW: '#faad14',
      NEGOTIATING: '#fa8c16',
      ACCEPTED: '#722ed1',
      IN_PROGRESS: '#13c2c2',
      COMPLETED: '#52c41a',
      CANCELLED: '#ff4d4f',
      EXPIRED: '#8c8c8c'
    };

    return colors[status] || '#8c8c8c';
  }

  getTypeLabel(type: string): string {
    return type === 'PRODUCT' ? 'Product' : 'Service';
  }

  formatStatus(status: string): string {
    return status ? status.replace(/_/g, ' ') : '';
  }

  formatBudget(budget?: number): string {
    if (!budget) {
      return 'Budget Negotiable';
    }

    return 'R ' + budget.toLocaleString('en-ZA');
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

    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'short'
    });
  }

  get budget(): string {
    return this.formatBudget(this.request?.budget);
  }

  get requester(): string {
    return this.request?.requester?.name || 'Community Member';
  }

  get location(): string {
    return this.request?.location || 'South Africa';
  }

  get category(): string {
    return this.request?.category?.name || 'Request';
  }
}