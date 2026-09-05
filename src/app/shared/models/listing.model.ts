export interface Listing {
  id: number | string;
  title: string;
  description: string;
  priceZar: number;
  category: string;
  categoryId?: string;
  city: string;
  imageUrl?: string;
  images?: string[];
  rating?: number;
  isVerified?: boolean;
  createdAt: string;
  updatedAt: string;
}

