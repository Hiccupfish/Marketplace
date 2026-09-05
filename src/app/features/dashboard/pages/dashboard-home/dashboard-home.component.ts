import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../../../core/services/auth.service';
import { RequestService } from '../../../../shared/services/request.service';
import { DeliveryService } from '../../../../shared/services/delivery.service';
import { MarketplaceProfileService } from '../../../../shared/services/marketplace-profile.service';
import { UserContext, UserRole } from '../../../../core/models/user.model';
import { VerificationTier } from '../../../../shared/models/marketplace-profile.model';
import { environment } from '../../../../../environments/environment';

interface QuickAction {
  label: string;
  route: string;
  icon: string;
  roles: UserRole[];
}

interface DashboardSection {
  id: string;
  title: string;
  description: string;
  route: string;
  icon: string;
  count: number | null;
  loading: boolean;
  roles: UserRole[];
  cta: string;
}

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  userName: string;
  userContext: UserContext | null = null;
  accountType: 'INDIVIDUAL' | 'BUSINESS' | null = null;

  quickActions: QuickAction[] = [
    { label: 'Browse Products', route: '/products', icon: '🛍️', roles: ['BUYER'] },
    { label: 'Browse Services', route: '/services', icon: '🛠️', roles: ['BUYER'] },
    { label: 'Browse Providers', route: '/providers', icon: '🏢', roles: ['BUYER', 'PRODUCT_PROVIDER', 'SERVICE_PROVIDER'] },
    { label: 'Post a Request', route: '/requests/create', icon: '📝', roles: ['BUYER', 'PRODUCT_PROVIDER', 'SERVICE_PROVIDER'] },
    { label: 'Add Product', route: '/listings/create', icon: '➕', roles: ['PRODUCT_PROVIDER'] },
    { label: 'My Products', route: '/my-products', icon: '📦', roles: ['PRODUCT_PROVIDER'] },
    { label: 'Add Service', route: '/listings/create', icon: '➕', roles: ['SERVICE_PROVIDER'] },
    { label: 'My Services', route: '/my-services', icon: '🛠️', roles: ['SERVICE_PROVIDER'] },
    { label: 'My Proposals', route: '/requests/my/proposals', icon: '💬', roles: ['PRODUCT_PROVIDER', 'SERVICE_PROVIDER'] },
    { label: 'My Deliveries', route: '/dashboard/deliveries', icon: '🚚', roles: ['PRODUCT_PROVIDER', 'SERVICE_PROVIDER', 'BUYER'] },
    { label: 'My Business', route: '/dashboard/profile', icon: '🏬', roles: [] }
  ];

  get actions(): QuickAction[] {
    if (!this.userContext) return [];
    const userRoles = this.auth.currentUser?.roles || [];
    return this.quickActions.filter(action => {
      if (action.roles.length === 0) return this.isBusiness;
      return action.roles.some(role => userRoles.includes(role));
    });
  }

  get welcomeTitle(): string {
    if (!this.userContext) return 'Welcome';
    const roles = this.auth.currentUser?.roles || [];
    const isBuyer = roles.includes('BUYER');
    const isProductProvider = roles.includes('PRODUCT_PROVIDER');
    const isServiceProvider = roles.includes('SERVICE_PROVIDER');

    if (isProductProvider && isServiceProvider && isBuyer) return 'Your Marketplace Dashboard';
    if (isProductProvider && isServiceProvider) return 'Manage Your Listings';
    if (isProductProvider && isBuyer) return 'Your Marketplace';
    if (isServiceProvider && isBuyer) return 'Your Marketplace';
    if (isProductProvider) return 'Manage Your Products';
    if (isServiceProvider) return 'Manage Your Services';
    if (isBuyer) return 'Discover Marketplace';
    return 'Dashboard';
  }

  get welcomeSubtitle(): string {
    if (!this.userContext) return 'Here is your dashboard overview.';
    const parts: string[] = [];
    if (this.auth.hasRole('PRODUCT_PROVIDER')) parts.push('track your products');
    if (this.auth.hasRole('SERVICE_PROVIDER')) parts.push('manage your services');
    if (this.auth.hasRole('BUYER')) parts.push('browse the marketplace');
    if (parts.length === 0) return 'Here is your dashboard overview.';
    return parts.join(' and ') + '.';
  }

  get isProductProvider(): boolean {
    return this.auth.hasRole('PRODUCT_PROVIDER');
  }

  get isServiceProvider(): boolean {
    return this.auth.hasRole('SERVICE_PROVIDER');
  }

  get isBuyer(): boolean {
    return this.auth.hasRole('BUYER');
  }

  get isBusiness(): boolean {
    return this.accountType === 'BUSINESS';
  }

  sections: DashboardSection[] = [];

  constructor(
    public readonly auth: AuthService,
    private readonly http: HttpClient,
    private readonly requestService: RequestService,
    private readonly deliveryService: DeliveryService,
    private readonly profileService: MarketplaceProfileService
  ) {
    const user = this.auth.currentUser;
    this.userName = user?.name || 'User';
    this.userContext = user?.context || null;
    this.accountType = user?.accountType || null;
  }

  ngOnInit(): void {
    this.buildSections();
  }

  private buildSections(): void {
    const sections: DashboardSection[] = [];

    if (this.isProductProvider) {
      sections.push({
        id: 'products',
        title: 'My Products',
        description: 'Manage your product listings, track offers, and control availability.',
        route: '/my-products',
        icon: '📦',
        count: null,
        loading: true,
        roles: ['PRODUCT_PROVIDER'],
        cta: 'View My Products'
      });
    }

    if (this.isServiceProvider) {
      sections.push({
        id: 'services',
        title: 'My Services',
        description: 'Manage your service offerings and track customer quotes.',
        route: '/my-services',
        icon: '🛠️',
        count: null,
        loading: true,
        roles: ['SERVICE_PROVIDER'],
        cta: 'View My Services'
      });
    }

    if (this.isBuyer) {
      sections.push({
        id: 'requests',
        title: 'My Requests',
        description: 'Track your posted requests and received proposals.',
        route: '/requests/my',
        icon: '📝',
        count: null,
        loading: true,
        roles: ['BUYER'],
        cta: 'View My Requests'
      });
    }

    if (this.isProductProvider || this.isServiceProvider) {
      sections.push({
        id: 'proposals',
        title: 'My Proposals',
        description: 'View proposals you have submitted on requests.',
        route: '/requests/my/proposals',
        icon: '💬',
        count: null,
        loading: true,
        roles: ['PRODUCT_PROVIDER', 'SERVICE_PROVIDER'],
        cta: 'View My Proposals'
      });
    }

    sections.push({
      id: 'deliveries',
      title: 'My Deliveries',
      description: 'Track the status of items you are buying or selling.',
      route: '/dashboard/deliveries',
      icon: '🚚',
      count: null,
      loading: true,
      roles: ['PRODUCT_PROVIDER', 'SERVICE_PROVIDER', 'BUYER'],
      cta: 'View Deliveries'
    });

    if (this.isBusiness) {
      sections.push({
        id: 'business',
        title: 'My Business',
        description: 'Manage your business profile, products, services, and portfolio.',
        route: '/dashboard/profile',
        icon: '🏬',
        count: null,
        loading: false,
        roles: [],
        cta: 'Manage Business'
      });
    }

    sections.push({
      id: 'verification',
      title: 'Verification',
      description: 'View and manage your verification status.',
      route: '/dashboard/profile',
      icon: '🛡️',
      count: null,
      loading: false,
      roles: [],
      cta: 'View Verification'
    });

    sections.push({
      id: 'profile',
      title: 'My Profile',
      description: 'Update your personal information and account settings.',
      route: '/dashboard/profile',
      icon: '👤',
      count: null,
      loading: false,
      roles: [],
      cta: 'Edit Profile'
    });

    this.sections = sections;

    const product$ = this.isProductProvider
      ? this.http.get<any[]>(`${environment.apiUrl}/products/my-products`).pipe(
          map(data => data.length),
          catchError(() => of(null))
        )
      : of(null);

    const service$ = this.isServiceProvider
      ? this.http.get<any>(`${environment.apiUrl}/services/my-services`).pipe(
          map(data => Array.isArray(data) ? data.length : (data?.data?.length || 0)),
          catchError(() => of(null))
        )
      : of(null);

    const request$ = this.isBuyer
      ? this.requestService.getMyRequests().pipe(
          map(data => data.length),
          catchError(() => of(null))
        )
      : of(null);

    const proposal$ = (this.isProductProvider || this.isServiceProvider)
      ? this.requestService.getMyOffers().pipe(
          map(data => data.length),
          catchError(() => of(null))
        )
      : of(null);

    const delivery$ = forkJoin({
      buyer: this.deliveryService.getDeliveriesAsBuyer().pipe(catchError(() => of([]))),
      seller: this.deliveryService.getDeliveriesAsSeller().pipe(catchError(() => of([])))
    }).pipe(
      map(({ buyer, seller }) => (buyer || []).length + (seller || []).length),
      catchError(() => of(null))
    );

    forkJoin({
      product: product$,
      service: service$,
      request: request$,
      proposal: proposal$,
      delivery: delivery$
    }).subscribe({
      next: (results) => {
        this.sections = sections.map(section => {
          let count = null;
          if (section.id === 'products') count = results.product;
          else if (section.id === 'services') count = results.service;
          else if (section.id === 'requests') count = results.request;
          else if (section.id === 'proposals') count = results.proposal;
          else if (section.id === 'deliveries') count = results.delivery;
          return { ...section, count, loading: false };
        });
      },
      error: () => {
        this.sections = sections.map(section => ({ ...section, loading: false }));
      }
    });
  }

  getVerificationSummary(): { approved: string[]; pending: string[] } {
    const profile = this.profileService.getCurrentUserProfile();
    const approved: string[] = [];
    const pending: string[] = [];

    if (!profile) return { approved, pending };

    const records = profile.verificationRecords || [];
    for (const record of records) {
      if (record.status === 'APPROVED') {
        approved.push(record.tier);
      } else if (record.status === 'PENDING') {
        pending.push(record.tier);
      }
    }

    return { approved, pending };
  }
}
