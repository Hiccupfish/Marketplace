import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../../../../core/services/auth.service';
import { RequestService } from '../../../../shared/services/request.service';
import { DeliveryService } from '../../../../shared/services/delivery.service';
import { MarketplaceProfileService } from '../../../../shared/services/marketplace-profile.service';
import { UserService } from '../../../../shared/services/user.service';
import { UserContext, UserRole } from '../../../../core/models/user.model';
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
  cta: string;
  emptyMessage: string;
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

  hasBusiness = false;
  initialLoading = true;

  quickActions: QuickAction[] = [
    { label: 'Browse Products', route: '/products', icon: '🛍️', roles: [] },
    { label: 'Browse Services', route: '/services', icon: '🛠️', roles: [] },
    { label: 'Browse Providers', route: '/providers', icon: '🏢', roles: [] },
    { label: 'Post a Request', route: '/requests/create', icon: '📝', roles: [] },
    { label: 'Add Product', route: '/listings/create', icon: '➕', roles: [] },
    { label: 'Post a Service', route: '/listings/create?type=service', icon: '🛠️', roles: [] },
    { label: 'Add Business', route: '/dashboard/profile', icon: '🏬', roles: [] },
    { label: 'My Products', route: '/my-products', icon: '📦', roles: ['PRODUCT_PROVIDER'] },
    { label: 'My Services', route: '/my-services', icon: '📦', roles: ['SERVICE_PROVIDER'] },
    { label: 'My Proposals', route: '/requests/my/proposals', icon: '💬', roles: ['PRODUCT_PROVIDER', 'SERVICE_PROVIDER'] },
    { label: 'My Deliveries', route: '/dashboard/deliveries', icon: '🚚', roles: ['PRODUCT_PROVIDER', 'SERVICE_PROVIDER', 'BUYER'] },
  ];

  get actions(): QuickAction[] {
    if (!this.userContext) return this.quickActions.slice(0, 6);
    const userRoles = this.auth.currentUser?.roles || [];
    return this.quickActions.filter(action => {
      if (action.roles.length === 0) return true;
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

  get showGettingStarted(): boolean {
    if (this.initialLoading) return false;
    const hasActivity = this.sections.some(s => s.count && s.count > 0);
    return !hasActivity && !this.hasBusiness;
  }

  sections: DashboardSection[] = [];

  constructor(
    public readonly auth: AuthService,
    private readonly http: HttpClient,
    private readonly requestService: RequestService,
    private readonly deliveryService: DeliveryService,
    private readonly profileService: MarketplaceProfileService,
    private readonly userService: UserService
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
    const baseSections: DashboardSection[] = [
      {
        id: 'products',
        title: 'My Products',
        description: 'Manage your product listings, track offers, and control availability.',
        route: '/my-products',
        icon: '📦',
        count: null,
        loading: true,
        cta: 'Add Product',
        emptyMessage: "You haven't listed any products yet."
      },
      {
        id: 'services',
        title: 'My Services',
        description: 'Manage your service offerings and track customer quotes.',
        route: '/my-services',
        icon: '🛠️',
        count: null,
        loading: true,
        cta: 'Post a Service',
        emptyMessage: "You aren't offering any services yet."
      },
      {
        id: 'business',
        title: 'My Business',
        description: 'Manage your business profile, products, services, and portfolio.',
        route: '/dashboard/profile',
        icon: '🏬',
        count: null,
        loading: false,
        cta: 'Add Business',
        emptyMessage: "You don't have a business profile yet."
      },
      {
        id: 'requests',
        title: 'My Requests',
        description: 'Track your posted requests and received proposals.',
        route: '/requests/my',
        icon: '📝',
        count: null,
        loading: true,
        cta: 'Create Request',
        emptyMessage: "You haven't created any requests yet."
      },
      {
        id: 'proposals',
        title: 'My Proposals',
        description: 'View proposals you have submitted on requests.',
        route: '/requests/my/proposals',
        icon: '💬',
        count: null,
        loading: true,
        cta: 'Browse Requests',
        emptyMessage: "You haven't submitted any proposals yet."
      },
      {
        id: 'deliveries',
        title: 'My Deliveries',
        description: 'Track the status of items you are buying or selling.',
        route: '/dashboard/deliveries',
        icon: '🚚',
        count: null,
        loading: true,
        cta: 'View Deliveries',
        emptyMessage: "You don't have any deliveries yet."
      }
    ];

    this.sections = baseSections;

    this.userService.getBusinessProfile().pipe(
      catchError(() => of(null))
    ).subscribe(profile => {
      this.hasBusiness = !!profile;
      const businessSection = this.sections.find(s => s.id === 'business');
      if (businessSection) {
        businessSection.cta = this.hasBusiness ? 'Manage Business' : 'Add Business';
        businessSection.emptyMessage = this.hasBusiness
          ? 'Manage your business profile and settings.'
          : "You don't have a business profile yet.";
        businessSection.count = this.hasBusiness ? 1 : 0;
        businessSection.loading = false;
      }
    });

    const product$ = this.http.get<any[]>(`${environment.apiUrl}/products/my-products`).pipe(
      map(data => Array.isArray(data) ? data.length : 0),
      catchError(() => of(null))
    );

    const service$ = this.http.get<any>(`${environment.apiUrl}/services/my-services`).pipe(
      map(data => Array.isArray(data) ? data.length : (data?.data?.length || 0)),
      catchError(() => of(null))
    );

    const request$ = this.requestService.getMyRequests().pipe(
      map(data => Array.isArray(data) ? data.length : 0),
      catchError(() => of(null))
    );

    const proposal$ = this.requestService.getMyOffers().pipe(
      map(data => Array.isArray(data) ? data.length : 0),
      catchError(() => of(null))
    );

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
        this.sections = this.sections.map(section => {
          let count = results[section.id as keyof typeof results] ?? null;

          if (section.id === 'products') {
            section.cta = count && count > 0 ? 'View My Products' : 'Add Product';
          } else if (section.id === 'services') {
            section.cta = count && count > 0 ? 'View My Services' : 'Post a Service';
          } else if (section.id === 'requests') {
            section.cta = count && count > 0 ? 'View My Requests' : 'Create Request';
          } else if (section.id === 'proposals') {
            section.cta = count && count > 0 ? 'View My Proposals' : 'Browse Requests';
          } else if (section.id === 'deliveries') {
            section.cta = 'View Deliveries';
          }

          return { ...section, count: count ?? 0, loading: false };
        });
        this.initialLoading = false;
      },
      error: () => {
        this.sections = this.sections.map(section => ({ ...section, loading: false, count: section.count ?? 0 }));
        this.initialLoading = false;
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
