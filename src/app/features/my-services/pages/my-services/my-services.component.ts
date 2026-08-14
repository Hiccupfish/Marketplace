import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  priceRange: string;
  location: string;
  image: string;
  isAvailable: boolean;
  createdAt: string;
  quotes?: any[];
  quoteCount?: number;
}

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {
  services: Service[] = [];
  loading = true;
  error: string | null = null;
  deletingServiceId: string | null = null;

  private apiUrl = `${environment.apiUrl}/services`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMyServices();
  }

  loadMyServices(): void {
    this.loading = true;
    this.error = null;

    this.http.get<any>(`${this.apiUrl}/my-services`).subscribe({
      next: (response) => {
        this.services = response.data || response || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading services:', err);
        this.error = err.error?.message || 'Failed to load your services. Please try again.';
        this.loading = false;
      }
    });
  }

  createService(): void {
    this.router.navigate(['/services/create']);
  }

  editService(id: string): void {
    this.router.navigate(['/services/edit', id]);
  }

  deleteService(id: string): void {
    this.deletingServiceId = id;
  }

  cancelDelete(): void {
    this.deletingServiceId = null;
  }

  confirmDelete(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.services = this.services.filter(s => s.id !== id);
        this.deletingServiceId = null;
      },
      error: (err) => {
        console.error('Error deleting service:', err);
        this.error = err.error?.message || 'Failed to delete service. Please try again.';
        this.deletingServiceId = null;
      }
    });
  }

  toggleAvailability(service: Service): void {
    const updated = { ...service, isAvailable: !service.isAvailable };
    this.http.put(`${this.apiUrl}/${service.id}`, updated).subscribe({
      next: () => {
        service.isAvailable = !service.isAvailable;
      },
      error: (err) => {
        console.error('Error updating service:', err);
        this.error = err.error?.message || 'Failed to update service availability.';
      }
    });
  }

  getServiceImageUrl(imageJson: string): string {
    try {
      const images = JSON.parse(imageJson);
      return Array.isArray(images) && images.length > 0 ? images[0] : 'assets/placeholder.png';
    } catch {
      return imageJson || 'assets/placeholder.png';
    }
  }

  getQuoteCount(service: Service): number {
    return service.quotes?.length || service.quoteCount || 0;
  }

  closeError(): void {
    this.error = null;
  }
}
