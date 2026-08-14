import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Router } from '@angular/router';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  isAvailable: boolean;
  location?: string;
  images?: string;
  createdAt: string;
  category?: { name: string };
  offers?: any[];
}

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  products: Product[] = [];
  loading = true;
  error = '';
  deleteConfirmId: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadMyProducts();
  }

  loadMyProducts(): void {
    this.loading = true;
    this.error = '';
    this.http.get<Product[]>(`${environment.apiUrl}/products/my-products`).subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to load your products';
        this.loading = false;
      }
    });
  }

  deleteProduct(id: string): void {
    this.http.delete(`${environment.apiUrl}/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== id);
        this.deleteConfirmId = null;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to delete product';
      }
    });
  }

  toggleAvailability(product: Product): void {
    const updated = { ...product, isAvailable: !product.isAvailable };
    this.http.put(`${environment.apiUrl}/products/${product.id}`, updated).subscribe({
      next: () => {
        product.isAvailable = !product.isAvailable;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to update product availability';
      }
    });
  }

  editProduct(id: string): void {
    this.router.navigate(['/listings', id, 'edit']);
  }

  createProduct(): void {
    this.router.navigate(['/listings/create']);
  }

  getProductImageUrl(product: Product): string {
    if (product.images) {
      try {
        const images = JSON.parse(product.images);
        return images[0] || 'https://via.placeholder.com/300x200?text=No+Image';
      } catch {
        return 'https://via.placeholder.com/300x200?text=No+Image';
      }
    }
    return 'https://via.placeholder.com/300x200?text=No+Image';
  }

  getOfferCount(product: Product): number {
    return product.offers?.length || 0;
  }
}
