import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { DeliveryService } from '../../../../shared/services/delivery.service';
import { Delivery } from '../../../../shared/models/delivery.model';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-delivery-tracking',
  templateUrl: './delivery-tracking.component.html',
  styleUrls: ['./delivery-tracking.component.scss']
})
export class DeliveryTrackingComponent implements OnInit {
  deliveriesAsBuyer: Delivery[] = [];
  deliveriesAsSeller: Delivery[] = [];
  loading = true;
  error = '';
  activeTab: 'buying' | 'selling' = 'buying';

  constructor(
    private readonly deliveryService: DeliveryService,
    public readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadDeliveries();
  }

  loadDeliveries(): void {
    this.loading = true;
    this.error = '';
    forkJoin({
      buyer: this.deliveryService.getDeliveriesAsBuyer(),
      seller: this.deliveryService.getDeliveriesAsSeller()
    }).subscribe({
      next: ({ buyer, seller }) => {
        this.deliveriesAsBuyer = buyer;
        this.deliveriesAsSeller = seller;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to load deliveries.';
        this.loading = false;
      }
    });
  }

  setActiveTab(tab: 'buying' | 'selling'): void {
    this.activeTab = tab;
  }
}
