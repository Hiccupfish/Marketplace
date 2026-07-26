export interface UserSummary {
  id: string;
  name: string;
  email?: string;
  profilePicture?: string;
  location?: string;
  isVerified: boolean;
  accountType: string;
  rating?: number;
  reviewCount?: number;
  businessProfile?: {
    businessName?: string;
    logoUrl?: string;
    description?: string;
    completedTransactions?: number;
  };
  providerProfile?: {
    bio?: string;
    portfolio?: string;
  };
}

export interface CategorySummary {
  id: string;
  name: string;
  icon?: string;
}

export type MarketplaceType = 'PRODUCT' | 'SERVICE';
export type RequestStatus = 'OPEN' | 'RECEIVING_PROPOSALS' | 'UNDER_REVIEW' | 'NEGOTIATING' | 'ACCEPTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'EXPIRED';
export type ProposalStatus = 'PENDING' | 'VIEWED' | 'SHORTLISTED' | 'ACCEPTED' | 'REJECTED' | 'CANCELLED' | 'WITHDRAWN';

export interface Request {
  id: string;
  title: string;
  description: string;
  marketplaceType: MarketplaceType;
  requesterId: string;
  requester: UserSummary;
  categoryId: string;
  category: CategorySummary;
  budget?: number;
  location?: string;
  deadline?: string;
  preferredFulfilment?: string;
  images: string[];
  status: RequestStatus;
  shortlistedCount: number;
  proposalCount: number;
  offers?: RequestOffer[];
  negotiations?: NegotiationMessage[];
  createdAt: string;
  updatedAt: string;
}

export interface RequestOffer {
  id: string;
  requestId: string;
  providerId: string;
  provider: UserSummary;
  price: number;
  estimatedCompletionTime?: string;
  availability?: string;
  proposalMessage?: string;
  experience?: string;
  portfolioImages: string[];
  previousWork: string[];
  isShortlisted: boolean;
  status: ProposalStatus;
  viewedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface NegotiationMessage {
  id: string;
  requestId: string;
  offerId?: string;
  senderId: string;
  sender: UserSummary;
  message: string;
  messageType: 'TEXT' | 'COUNTER_OFFER' | 'INFO_REQUEST' | 'SITE_VISIT' | 'DEADLINE_CHANGE';
  offerPrice?: number;
  offerDeadline?: string;
  attachmentUrl?: string;
  isRead: boolean;
  createdAt: string;
}

export type NotificationType = 'NEW_REQUEST_MATCH' | 'NEW_PROPOSAL' | 'MESSAGE_RECEIVED' | 'PROPOSAL_ACCEPTED' | 'DEADLINE_REMINDER' | 'STATUS_CHANGE';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  relatedId?: string;
  request?: Request;
  isRead: boolean;
  createdAt: string;
}

export interface PortfolioItem {
  id: string;
  userId: string;
  title: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  category?: string;
  completedAt?: string;
  createdAt: string;
}

export interface RequestsResponse {
  requests: Request[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface CreateRequestData {
  title: string;
  description: string;
  marketplaceType: MarketplaceType;
  categoryId: string;
  budget?: number;
  location?: string;
  deadline?: string;
  preferredFulfilment?: string;
  images?: string[];
}

export interface CreateProposalData {
  price: number;
  estimatedCompletionTime?: string;
  availability?: string;
  proposalMessage?: string;
  experience?: string;
  portfolioImages?: string[];
  previousWork?: string[];
}

export interface NegotiationData {
  offerId?: string;
  message: string;
  messageType?: 'TEXT' | 'COUNTER_OFFER' | 'INFO_REQUEST' | 'SITE_VISIT' | 'DEADLINE_CHANGE';
  offerPrice?: number;
  offerDeadline?: string;
  attachmentUrl?: string;
}
