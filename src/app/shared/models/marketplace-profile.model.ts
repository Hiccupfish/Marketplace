import { Review } from './review.model';

export type ProfileKind = 'INDIVIDUAL' | 'BUSINESS';

/**
 * Standardized Verification Tiers:
 * - PHONE: Direct mobile / WhatsApp number confirmed
 * - ID: National ID / FICA verification
 * - BUSINESS: CIPC registered business entity / enterprise
 * - PRO: Trade test certificate / licensed professional credentials
 */
export type VerificationTier = 'PHONE' | 'ID' | 'BUSINESS' | 'PRO';

export type VerificationStatus = 'UNVERIFIED' | 'PENDING' | 'APPROVED' | 'REJECTED';

export interface TierVerificationRecord {
  tier: VerificationTier;
  status: VerificationStatus;
  submittedAt?: string;
  reviewedAt?: string;
  notes?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  completedDate?: string;
  clientFeedback?: string;
}

export interface ProfileServiceItem {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  category: string;
  turnaround?: string;
  isPopular?: boolean;
}

export interface ProfileProductItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  inStock?: boolean;
}

export interface MarketplaceProfile {
  id: string;
  slug: string;
  kind: ProfileKind;
  name: string;
  headline: string;
  bio: string;
  location: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  avatar?: string;
  coverImage?: string;
  coverColor: string;
  specialties: string[];
  verification: VerificationTier[]; // Approved tiers displayed publicly
  verificationRecords?: TierVerificationRecord[]; // Internal submission lifecycle
  openingHours?: string;
  establishedYear?: number;
  responseRate?: string;
  products: number;
  services: number;
  portfolio: PortfolioItem[];
  servicesOffered?: ProfileServiceItem[];
  productsOffered?: ProfileProductItem[];
  reviews: Review[];
}

