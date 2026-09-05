import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { UserContext } from '../../../../core/models/user.model';
import {
  MarketplaceProfile,
  PortfolioItem,
  ProfileKind,
  ProfileProductItem,
  ProfileServiceItem,
  VerificationTier
} from '../../../../shared/models/marketplace-profile.model';
import { MarketplaceProfileService } from '../../../../shared/services/marketplace-profile.service';

type ProfileSection = 'general' | 'provider-settings' | 'portfolio' | 'services' | 'products' | 'verification' | 'requests' | 'proposals' | 'orders' | 'cta';

interface ProfileNavItem {
  id: ProfileSection;
  label: string;
  icon: string;
  show: boolean;
  requiresContext?: UserContext[];
}

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  profile: MarketplaceProfile | null = null;
  activeSection: ProfileSection = 'general';

  specialtiesInput = '';
  saveSuccessMessage = '';
  saveErrorMessage = '';
  isSaving = false;

  newWork = {
    title: '',
    category: '',
    description: '',
    imageUrl: '',
    completedDate: '',
    clientFeedback: ''
  };
  showAddWorkForm = false;

  newService = {
    title: '',
    category: '',
    description: '',
    startingPrice: 0,
    turnaround: '',
    isPopular: false
  };
  showAddServiceForm = false;

  newProduct = {
    title: '',
    category: '',
    description: '',
    price: 0,
    imageUrl: '',
    inStock: true
  };
  showAddProductForm = false;

  verificationSuccess = '';

  navItems: ProfileNavItem[] = [];

  constructor(
    private readonly profileService: MarketplaceProfileService,
    public readonly auth: AuthService
  ) {}

  ngOnInit(): void {
    this.buildNav();
    this.loadProfile();
  }

  get userName(): string {
    return this.auth.currentUser?.name || 'User';
  }

  private buildNav(): void {
    const ctx = this.auth.currentUser?.context;
    const roles = this.auth.currentUser?.roles || [];
    const isProvider = roles.some(r => r === 'PRODUCT_PROVIDER' || r === 'SERVICE_PROVIDER');
    const isProductProvider = roles.includes('PRODUCT_PROVIDER');
    const isServiceProvider = roles.includes('SERVICE_PROVIDER');
    const isBuyer = roles.includes('BUYER');
    const isBusiness = this.auth.currentUser?.accountType === 'BUSINESS';

    this.navItems = [
      { id: 'general', label: 'Personal Information', icon: '👤', show: true },
      { id: 'provider-settings', label: 'Provider Settings', icon: '🚀', show: true },
      { id: 'portfolio', label: 'My Portfolio', icon: '🖼️', show: isProvider },
      { id: 'services', label: 'My Services', icon: '🛠️', show: isServiceProvider },
      { id: 'products', label: 'My Products', icon: '📦', show: isProductProvider },
      { id: 'requests', label: 'My Requests', icon: '📝', show: isBuyer },
      { id: 'proposals', label: 'My Proposals', icon: '💬', show: isServiceProvider },
      { id: 'orders', label: 'My Orders & Enquiries', icon: '📦', show: isBuyer },
      { id: 'verification', label: 'Verification', icon: '🛡️', show: true },
      { id: 'cta', label: 'Grow Your Business', icon: '📈', show: !isProvider && !isBusiness }
    ];
  }

  get activeNavItems(): ProfileNavItem[] {
    return this.navItems.filter(item => item.show);
  }

  loadProfile(): void {
    const current = this.profileService.getCurrentUserProfile();
    this.profile = JSON.parse(JSON.stringify(current));
    if (this.profile) {
      this.specialtiesInput = (this.profile.specialties || []).join(', ');
    }
  }

  saveGeneralProfile(): void {
    if (!this.profile) return;
    this.isSaving = true;
    this.saveSuccessMessage = '';
    this.saveErrorMessage = '';

    this.profile.specialties = this.specialtiesInput
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    setTimeout(() => {
      try {
        this.profileService.saveProfile(this.profile!);
        this.isSaving = false;
        this.saveSuccessMessage = 'Your profile has been updated successfully!';
        setTimeout(() => (this.saveSuccessMessage = ''), 3500);
      } catch (err: any) {
        this.isSaving = false;
        this.saveErrorMessage = 'Could not save profile. Please check your details.';
      }
    }, 300);
  }

  addPortfolioItem(): void {
    if (!this.profile || !this.newWork.title.trim() || !this.newWork.category.trim()) return;

    const created = this.profileService.addPortfolioItem(this.profile.id, {
      title: this.newWork.title.trim(),
      category: this.newWork.category.trim(),
      description: this.newWork.description.trim(),
      imageUrl: this.newWork.imageUrl.trim() || 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&auto=format&fit=crop&q=80',
      completedDate: this.newWork.completedDate.trim() || 'Recent',
      clientFeedback: this.newWork.clientFeedback.trim()
    });

    this.profile.portfolio = [created, ...(this.profile.portfolio || [])];
    this.newWork = { title: '', category: '', description: '', imageUrl: '', completedDate: '', clientFeedback: '' };
    this.showAddWorkForm = false;
    this.saveSuccessMessage = 'New portfolio project added!';
    setTimeout(() => (this.saveSuccessMessage = ''), 3000);
  }

  deletePortfolioItem(itemId: string): void {
    if (!this.profile) return;
    this.profileService.deletePortfolioItem(this.profile.id, itemId);
    this.profile.portfolio = this.profile.portfolio.filter(item => item.id !== itemId);
  }

  addService(): void {
    if (!this.profile || !this.newService.title.trim() || this.newService.startingPrice <= 0) return;

    const created = this.profileService.addServiceItem(this.profile.id, {
      title: this.newService.title.trim(),
      category: this.newService.category.trim() || 'Services',
      description: this.newService.description.trim(),
      startingPrice: Number(this.newService.startingPrice),
      turnaround: this.newService.turnaround.trim() || '1–2 days',
      isPopular: this.newService.isPopular
    });

    this.profile.servicesOffered = [created, ...(this.profile.servicesOffered || [])];
    this.profile.services = (this.profile.services || 0) + 1;
    this.newService = { title: '', category: '', description: '', startingPrice: 0, turnaround: '', isPopular: false };
    this.showAddServiceForm = false;
    this.saveSuccessMessage = 'Service offering added!';
    setTimeout(() => (this.saveSuccessMessage = ''), 3000);
  }

  deleteService(serviceId: string): void {
    if (!this.profile) return;
    this.profileService.deleteServiceItem(this.profile.id, serviceId);
    this.profile.servicesOffered = (this.profile.servicesOffered || []).filter(s => s.id !== serviceId);
    this.profile.services = Math.max(0, (this.profile.services || 1) - 1);
  }

  addProduct(): void {
    if (!this.profile || !this.newProduct.title.trim() || this.newProduct.price <= 0) return;

    const created = this.profileService.addProductItem(this.profile.id, {
      title: this.newProduct.title.trim(),
      category: this.newProduct.category.trim() || 'Products',
      description: this.newProduct.description.trim(),
      price: Number(this.newProduct.price),
      imageUrl: this.newProduct.imageUrl.trim() || 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=80',
      inStock: this.newProduct.inStock
    });

    this.profile.productsOffered = [created, ...(this.profile.productsOffered || [])];
    this.profile.products = (this.profile.products || 0) + 1;
    this.newProduct = { title: '', category: '', description: '', price: 0, imageUrl: '', inStock: true };
    this.showAddProductForm = false;
    this.saveSuccessMessage = 'Product added to your store!';
    setTimeout(() => (this.saveSuccessMessage = ''), 3000);
  }

  deleteProduct(productId: string): void {
    if (!this.profile) return;
    this.profileService.deleteProductItem(this.profile.id, productId);
    this.profile.productsOffered = (this.profile.productsOffered || []).filter(p => p.id !== productId);
    this.profile.products = Math.max(0, (this.profile.products || 1) - 1);
  }

  getTierStatus(tier: VerificationTier): string {
    if (!this.profile) return 'UNVERIFIED';
    return this.profileService.getVerificationStatus(this.profile.id, tier);
  }

  isTierApproved(tier: VerificationTier): boolean {
    return this.getTierStatus(tier) === 'APPROVED';
  }

  isTierPending(tier: VerificationTier): boolean {
    return this.getTierStatus(tier) === 'PENDING';
  }

  applyForVerification(tier: VerificationTier, label: string): void {
    if (!this.profile) return;
    this.profileService.requestVerification(this.profile.id, tier);
    this.loadProfile();
    this.verificationSuccess = `Documents for "${label}" submitted for review.`;
    setTimeout(() => (this.verificationSuccess = ''), 4000);
  }

  demoApproveTier(tier: VerificationTier): void {
    if (!this.profile) return;
    this.profileService.demoAdminApproveVerification(this.profile.id, tier);
    this.loadProfile();
    this.verificationSuccess = `[Demo] ${tier} badge has been approved.`;
    setTimeout(() => (this.verificationSuccess = ''), 4000);
  }

  demoRejectTier(tier: VerificationTier): void {
    if (!this.profile) return;
    this.profileService.demoAdminRejectVerification(this.profile.id, tier, 'Document unreadable / expired');
    this.loadProfile();
    this.verificationSuccess = `[Demo] ${tier} verification has been rejected.`;
    setTimeout(() => (this.verificationSuccess = ''), 4000);
  }

  upgradeContext(newContext: UserContext): void {
    this.auth.upgradeContext(newContext);
    this.buildNav();
    this.saveSuccessMessage = `Your account now has ${newContext.replace('_', ' ')} capabilities!`;
    setTimeout(() => (this.saveSuccessMessage = ''), 4000);
  }

  upgradeAccountType(newAccountType: 'INDIVIDUAL' | 'BUSINESS'): void {
    this.isSaving = true;
    this.saveSuccessMessage = '';
    this.saveErrorMessage = '';

    this.auth.updateAccountType(newAccountType).subscribe({
      next: () => {
        this.isSaving = false;
        this.saveSuccessMessage = `Your account has been upgraded to ${newAccountType}!`;
        setTimeout(() => (this.saveSuccessMessage = ''), 4000);
        this.buildNav();
      },
      error: () => {
        this.isSaving = false;
        this.saveErrorMessage = 'Could not update account type. Please try again.';
      }
    });
  }
}
