import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { UserContext } from '../../../../core/models/user.model';

interface QuickAction {
  label: string;
  route: string;
  icon: string;
  contexts: UserContext[];
}

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {
  userName: string;
  userContext: UserContext | null = null;

  quickActions: QuickAction[] = [
    { label: 'Browse Products', route: '/products', icon: '🛍️', contexts: ['BUYER'] },
    { label: 'Browse Services', route: '/services', icon: '🛠️', contexts: ['BUYER'] },
    { label: 'My Requests', route: '/requests', icon: '📝', contexts: ['BUYER', 'PRODUCT_PROVIDER', 'SERVICE_PROVIDER'] },
    { label: 'My Orders', route: '/deliveries', icon: '📦', contexts: ['BUYER'] },
    { label: 'My Products', route: '/my-products', icon: '📦', contexts: ['PRODUCT_PROVIDER'] },
    { label: 'Add Product', route: '/listings/create', icon: '➕', contexts: ['PRODUCT_PROVIDER'] },
    { label: 'My Services', route: '/my-services', icon: '🛠️', contexts: ['SERVICE_PROVIDER'] },
    { label: 'Add Service', route: '/listings/create', icon: '➕', contexts: ['SERVICE_PROVIDER'] },
    { label: 'My Proposals', route: '/my-proposals', icon: '💬', contexts: ['SERVICE_PROVIDER'] }
  ];

  get actions(): QuickAction[] {
    if (!this.userContext) return [];
    return this.quickActions.filter(a => a.contexts.includes(this.userContext));
  }

  get welcomeTitle(): string {
    if (!this.userContext) return 'Welcome';
    switch (this.userContext) {
      case 'PRODUCT_PROVIDER': return 'Manage Your Products';
      case 'SERVICE_PROVIDER': return 'Manage Your Services';
      case 'BUYER': return 'Discover Marketplace';
      default: return 'Dashboard';
    }
  }

  get welcomeSubtitle(): string {
    if (!this.userContext) return 'Here is your dashboard overview.';
    switch (this.userContext) {
      case 'PRODUCT_PROVIDER': return 'Track your products, orders, and enquiries.';
      case 'SERVICE_PROVIDER': return 'Manage your services, proposals, and requests.';
      case 'BUYER': return 'Browse products, services, and track your orders.';
      default: return 'Here is your dashboard overview.';
    }
  }

  constructor(public readonly auth: AuthService) {
    const user = this.auth.currentUser;
    this.userName = user?.name || 'User';
    this.userContext = user?.context || null;
  }
}
