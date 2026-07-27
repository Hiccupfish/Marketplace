import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../../shared/services/request.service';
import { Request, RequestsResponse, MarketplaceType, RequestStatus } from '../../../../shared/models/request.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  requests: Request[] = [];
  loading = true;
  error = '';
  page = 1;
  limit = 12;
  totalPages = 1;

  searchQuery = '';
  selectedCategory = '';
  selectedStatus = '';
  selectedType: MarketplaceType | '' = '';

  categories: string[] = ['Electronics', 'Vehicles', 'Property', 'Fashion', 'Home & Garden', 'Services', 'Other'];
  statuses: RequestStatus[] = ['OPEN', 'RECEIVING_PROPOSALS', 'UNDER_REVIEW', 'NEGOTIATING', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED', 'EXPIRED'];

  constructor(private readonly requestService: RequestService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.loading = true;
    this.error = '';
    this.requestService.getRequests({
      search: this.searchQuery || undefined,
      category: this.selectedCategory || undefined,
      status: this.selectedStatus || undefined,
      marketplaceType: this.selectedType || undefined,
      page: this.page,
      limit: this.limit,
    }).subscribe({
      next: (response) => {
        this.requests = response.requests;
        this.totalPages = response.totalPages;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Unable to load requests.';
        this.loading = false;
      },
    });
  }

  onSearch(): void {
    this.page = 1;
    this.loadRequests();
  }

  onFilterChange(): void {
    this.page = 1;
    this.loadRequests();
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.selectedStatus = '';
    this.selectedType = '';
    this.page = 1;
    this.loadRequests();
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadRequests();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadRequests();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

  getTypeColor(type: string): string {
    return type === 'PRODUCT' ? '#0d6efd' : '#52c41a';
  }

  getTypeLabel(type: string): string {
    return type === 'PRODUCT' ? 'Product' : 'Service';
  }

  formatStatus(status: string): string {
    return status ? status.replace(/_/g, ' ') : '';
  }

  formatBudget(budget?: number): string {
    if (!budget) return 'Budget: Negotiable';
    return 'R ' + budget.toLocaleString('en-ZA');
  }

  formatDeadline(deadline?: string): string {
    if (!deadline) return '';
    const date = new Date(deadline);
    return 'By ' + date.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' });
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
}
