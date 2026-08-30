import { Component, OnInit } from '@angular/core';
import {
  MarketplaceProfile,
  PortfolioItem,
  ProfileKind,
  ProfileProductItem,
  ProfileServiceItem,
  VerificationTier
} from '../../../../shared/models/marketplace-profile.model';
import { MarketplaceProfileService } from '../../../../shared/services/marketplace-profile.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  profile: MarketplaceProfile | null = null;
  activeSection: 'general' | 'portfolio' | 'services' | 'products' | 'verification' = 'general';

  // Form State
  specialtiesInput = '';
  saveSuccessMessage = '';
  saveErrorMessage = '';
  isSaving = false;

  // New Portfolio Item Form
  newWork = {
    title: '',
    category: '',
    description: '',
    imageUrl: '',
    completedDate: '',
    clientFeedback: ''
  };
  showAddWorkForm = false;

  // New Service Form
  newService = {
    title: '',
    category: '',
    description: '',
    startingPrice: 0,
    turnaround: '',
    isPopular: false
  };
  showAddServiceForm = false;

  // New Product Form
  newProduct = {
    title: '',
    category: '',
    description: '',
    price: 0,
    imageUrl: '',
    inStock: true
  };
  showAddProductForm = false;

  // Verification request status
  verificationSuccess = '';

  constructor(private readonly profileService: MarketplaceProfileService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    const current = this.profileService.getCurrentUserProfile();
    // Clone object for form editing
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

    // Parse specialties
    this.profile.specialties = this.specialtiesInput
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    setTimeout(() => {
      try {
        this.profileService.saveProfile(this.profile!);
        this.isSaving = false;
        this.saveSuccessMessage = 'Your profile & storefront details have been saved successfully!';
        setTimeout(() => (this.saveSuccessMessage = ''), 3500);
      } catch (err: any) {
        this.isSaving = false;
        this.saveErrorMessage = 'Could not save profile. Please check your details.';
      }
    }, 300);
  }

  // PORTFOLIO MANAGEMENT
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
    this.saveSuccessMessage = 'New portfolio project added to your showcase!';
    setTimeout(() => (this.saveSuccessMessage = ''), 3000);
  }

  deletePortfolioItem(itemId: string): void {
    if (!this.profile) return;
    this.profileService.deletePortfolioItem(this.profile.id, itemId);
    this.profile.portfolio = this.profile.portfolio.filter(item => item.id !== itemId);
  }

  // SERVICES MANAGEMENT
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

  // PRODUCTS MANAGEMENT
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
    this.saveSuccessMessage = 'Product added to your storefront!';
    setTimeout(() => (this.saveSuccessMessage = ''), 3000);
  }

  deleteProduct(productId: string): void {
    if (!this.profile) return;
    this.profileService.deleteProductItem(this.profile.id, productId);
    this.profile.productsOffered = (this.profile.productsOffered || []).filter(p => p.id !== productId);
    this.profile.products = Math.max(0, (this.profile.products || 1) - 1);
  }

  // VERIFICATION
  hasTier(tier: VerificationTier): boolean {
    return this.profile?.verification?.includes(tier) || false;
  }

  applyForVerification(tier: VerificationTier): void {
    if (!this.profile) return;
    this.profileService.requestVerification(this.profile.id, tier);
    this.profile.verification = [...this.profile.verification, tier];
    this.verificationSuccess = `Verification submitted and verified for ${tier}!`;
    setTimeout(() => (this.verificationSuccess = ''), 3500);
  }
}