import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Delivery } from '../models/delivery.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private apiUrl = `${environment.apiUrl}/delivery`;

  constructor(private http: HttpClient) { }

  getDeliveriesAsBuyer(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(`${this.apiUrl}/as-buyer`);
  }

  getDeliveriesAsSeller(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(`${this.apiUrl}/as-seller`);
  }

  getDeliveryByOfferId(offerId: number): Observable<Delivery> {
    return this.http.get<Delivery>(`${this.apiUrl}/offer/${offerId}`);
  }

  updateDeliveryStatus(deliveryId: number, status: string): Observable<Delivery> {
    return this.http.patch<Delivery>(`${this.apiUrl}/${deliveryId}/status`, { status });
  }
}
