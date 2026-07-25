import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../../../../shared/services/listing.service';
import { Listing } from '../../../../shared/models/listing.model';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  listings: Listing[] = [];
  loading = true;
  error = '';
  searchQuery = '';
  selectedCategory = 'All';
  selectedSort = 'newest';
  viewMode: 'grid' | 'list' = 'grid';

  categories = [
    'All',
    'Electronics',
    'Vehicles',
    'Property',
    'Fashion',
    'Home & Garden',
    'Services',
    'Other'
  ];

  constructor(
    private readonly listingService: ListingService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const query = params.get('q') || params.get('search') || '';
      const cat = params.get('category') || 'All';
      this.searchQuery = query;
      this.selectedCategory = cat;
      this.loadListings(query || undefined, cat === 'All' ? undefined : cat);
    });
  }

  loadListings(search?: string, category?: string): void {
    this.loading = true;
    this.error = '';
    this.listingService.getListings(search, category).subscribe({
      next: (listings) => {
        this.listings = listings;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || 'Unable to load listings. Make sure the backend API is running.';
        this.loading = false;
      },
    });
  }

  onSearchChange(): void {
    this.updateQueryParams();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.updateQueryParams();
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.updateQueryParams();
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.selectedSort = 'newest';
    this.router.navigate(['/listings']);
  }

  private updateQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: this.searchQuery.trim() || null,
        category: this.selectedCategory !== 'All' ? this.selectedCategory : null
      },
      queryParamsHandling: 'merge'
    });
  }

  get displayListings(): Listing[] {
    let result = [...this.listings];

    // Client-side search refinement
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(item =>
        item.title?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.city?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q)
      );
    }

    // Client-side category refinement
    if (this.selectedCategory && this.selectedCategory !== 'All') {
      const cat = this.selectedCategory.toLowerCase();
      result = result.filter(item => item.category?.toLowerCase() === cat);
    }

    // Sorting
    if (this.selectedSort === 'price_asc') {
      result.sort((a, b) => (a.priceZar || 0) - (b.priceZar || 0));
    } else if (this.selectedSort === 'price_desc') {
      result.sort((a, b) => (b.priceZar || 0) - (a.priceZar || 0));
    } else if (this.selectedSort === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else {
      // Newest first (default)
      result.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    }

    return result;
  }
}

