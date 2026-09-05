import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingService } from '../../../../shared/services/listing.service';
import { CategoryService } from '../../../../shared/services/category.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Category } from '../../../../shared/models/category.model';

interface ListingFormModel {
  title: string;
  description: string;
  priceZar: number | null;
  category: string;
  categoryId: string;
  city: string;
}

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  listing: ListingFormModel = {
    title: '',
    description: '',
    priceZar: null,
    category: '',
    categoryId: '',
    city: 'Johannesburg'
  };

  images: string[] = [];
  imageUrlInput = '';
  urlInputError = '';
  error = '';
  successMessage = '';
  loading = false;
  categories: Category[] = [];
  categoriesLoading = false;

  popularLocations: string[] = [
    'Soweto, Gauteng',
    'Johannesburg Central',
    'Sandton, Johannesburg',
    'Pretoria / Tshwane',
    'Cape Town, Western Cape',
    'Durban / eThekwini',
    'Tembisa, Gauteng',
    'Khayelitsha, Western Cape',
    'Gqeberha (PE)',
    'Polokwane, Limpopo'
  ];

  samplePhotos: { label: string; url: string; category: string }[] = [
    {
      label: 'Smartphone / Tech',
      category: 'Electronics',
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80'
    },
    {
      label: 'Laptop / Computer',
      category: 'Electronics',
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80'
    },
    {
      label: 'Car / Vehicle',
      category: 'Vehicles',
      url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80'
    },
    {
      label: 'Furniture / Couch',
      category: 'Home & Garden',
      url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80'
    },
    {
      label: 'Clothing / Fashion',
      category: 'Fashion',
      url: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=80'
    },
    {
      label: 'Tools & Hardware',
      category: 'Services',
      url: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&auto=format&fit=crop&q=80'
    }
  ];

  constructor(
    private readonly listingService: ListingService,
    private readonly categoryService: CategoryService,
    public readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesLoading = true;
    this.categoryService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
        this.categoriesLoading = false;
        if (this.categories.length > 0 && !this.listing.category) {
          this.listing.category = this.categories[0].name;
          this.listing.categoryId = this.categories[0].id;
        }
      },
      error: () => {
        // Fallback default categories
        this.categories = [
          { id: 'Electronics', name: 'Electronics', slug: 'electronics' },
          { id: 'Vehicles', name: 'Vehicles', slug: 'vehicles' },
          { id: 'Property', name: 'Property', slug: 'property' },
          { id: 'Fashion', name: 'Fashion', slug: 'fashion' },
          { id: 'Home & Garden', name: 'Home & Garden', slug: 'home' },
          { id: 'Services', name: 'Services', slug: 'services' },
          { id: 'Automotive', name: 'Automotive', slug: 'automotive' },
          { id: 'Plumbing', name: 'Plumbing', slug: 'plumbing' },
          { id: 'Electrical', name: 'Electrical', slug: 'electrical' },
          { id: 'Cleaning', name: 'Cleaning', slug: 'cleaning' },
          { id: 'Gardening', name: 'Gardening', slug: 'gardening' },
          { id: 'Beauty', name: 'Beauty', slug: 'beauty' },
          { id: 'Other', name: 'Other', slug: 'other' }
        ];
        this.categoriesLoading = false;
        if (!this.listing.category) {
          this.listing.category = this.categories[0].name;
          this.listing.categoryId = this.categories[0].id;
        }
      }
    });
  }

  onCategorySelect(cat: Category): void {
    this.listing.category = cat.name;
    this.listing.categoryId = cat.id;
  }

  onCategoryChange(catName: string): void {
    this.listing.category = catName;
    const found = this.categories.find(c => c.name.toLowerCase() === catName.toLowerCase() || c.id === catName);
    if (found) {
      this.listing.categoryId = found.id;
    } else {
      this.listing.categoryId = catName;
    }
  }

  setLocation(loc: string): void {
    this.listing.city = loc;
  }

  // Photo management
  addImageUrl(): void {
    this.urlInputError = '';
    const url = this.imageUrlInput.trim();
    if (!url) return;

    if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:image/')) {
      this.urlInputError = 'Please enter a valid image URL (starting with https:// or http://)';
      return;
    }

    if (this.images.includes(url)) {
      this.urlInputError = 'This image has already been added.';
      return;
    }

    this.images.push(url);
    this.imageUrlInput = '';
  }

  addSamplePhoto(sample: { label: string; url: string; category: string }): void {
    if (!this.images.includes(sample.url)) {
      this.images.push(sample.url);
    }
  }

  removeImage(index: number): void {
    if (index >= 0 && index < this.images.length) {
      this.images.splice(index, 1);
    }
  }

  setCoverImage(index: number): void {
    if (index > 0 && index < this.images.length) {
      const cover = this.images.splice(index, 1)[0];
      this.images.unshift(cover);
    }
  }

  onFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    for (let i = 0; i < input.files.length; i++) {
      const file = input.files[i];
      if (!file.type.startsWith('image/')) continue;

      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        if (result && !this.images.includes(result)) {
          this.images.push(result);
        }
      };
      reader.readAsDataURL(file);
    }
    input.value = '';
  }

  get coverImage(): string {
    if (this.images.length > 0) return this.images[0];
    const cat = (this.listing.category || '').toLowerCase();
    if (cat.includes('electronics')) return 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60';
    if (cat.includes('vehicle')) return 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60';
    if (cat.includes('property')) return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60';
    if (cat.includes('fashion')) return 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60';
    return 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60';
  }

  submit(): void {
    this.error = '';
    this.successMessage = '';

    if (!this.listing.title || !this.listing.title.trim()) {
      this.error = 'Please enter a title for your listing.';
      return;
    }

    if (this.listing.priceZar == null || isNaN(Number(this.listing.priceZar)) || Number(this.listing.priceZar) < 0) {
      this.error = 'Please enter a valid price in ZAR.';
      return;
    }

    if (!this.listing.category || !this.listing.category.trim()) {
      this.error = 'Please select a category.';
      return;
    }

    if (!this.listing.city || !this.listing.city.trim()) {
      this.error = 'Please specify your location or city.';
      return;
    }

    this.loading = true;

    const payload = {
      title: this.listing.title.trim(),
      description: this.listing.description ? this.listing.description.trim() : '',
      price: Number(this.listing.priceZar),
      priceZar: Number(this.listing.priceZar),
      category: this.listing.category.trim(),
      categoryId: this.listing.categoryId || this.listing.category.trim(),
      location: this.listing.city.trim(),
      city: this.listing.city.trim(),
      images: this.images.length > 0 ? this.images : undefined,
      imageUrl: this.images.length > 0 ? this.images[0] : undefined
    };

    this.listingService.createListing(payload).subscribe({
      next: (created) => {
        this.loading = false;
        this.successMessage = 'Listing created successfully! Redirecting...';
        setTimeout(() => {
          this.router.navigate(['/listings', created.id]);
        }, 800);
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 401) {
          this.error = 'Please log in or register before publishing a listing. Your form details are saved.';
        } else {
          this.error = err.error?.message || 'Unable to create listing. Please check the fields and try again.';
        }
      }
    });
  }
}

