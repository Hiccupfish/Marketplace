import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Request,
  RequestOffer,
  NegotiationMessage,
  Notification,
  PortfolioItem,
  RequestsResponse,
  CreateRequestData,
  CreateProposalData,
  NegotiationData,
} from '../models/request.model';

@Injectable({ providedIn: 'root' })
export class RequestService {
  private readonly apiUrl = `${environment.apiUrl}/requests`;

  constructor(private readonly http: HttpClient) {}

  // --- Requests ---

  getRequests(filters?: { search?: string; category?: string; location?: string; status?: string; marketplaceType?: string; page?: number; limit?: number }): Observable<RequestsResponse> {
    let params = new HttpParams();
    if (filters?.search) params = params.set('search', filters.search);
    if (filters?.category) params = params.set('category', filters.category);
    if (filters?.location) params = params.set('location', filters.location);
    if (filters?.status) params = params.set('status', filters.status);
    if (filters?.marketplaceType) params = params.set('marketplaceType', filters.marketplaceType);
    if (filters?.page) params = params.set('page', String(filters.page));
    if (filters?.limit) params = params.set('limit', String(filters.limit));

    return this.http.get<RequestsResponse>(this.apiUrl, { params });
  }

  getRequest(id: string): Observable<Request> {
    return this.http.get<Request>(`${this.apiUrl}/${id}`);
  }

  createRequest(data: CreateRequestData): Observable<Request> {
    return this.http.post<Request>(this.apiUrl, data);
  }

  getMyRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.apiUrl}/my`);
  }

  getMyOffers(): Observable<RequestOffer[]> {
    return this.http.get<RequestOffer[]>(`${this.apiUrl}/my/offers`);
  }

  updateRequestStatus(id: string, status: string): Observable<Request> {
    return this.http.patch<Request>(`${this.apiUrl}/${id}/status`, { status });
  }

  // --- Proposals ---

  submitProposal(requestId: string, data: CreateProposalData): Observable<RequestOffer> {
    return this.http.post<RequestOffer>(`${this.apiUrl}/${requestId}/offers`, data);
  }

  updateProposal(requestId: string, offerId: string, data: Partial<CreateProposalData>): Observable<RequestOffer> {
    return this.http.patch<RequestOffer>(`${this.apiUrl}/${requestId}/offers/${offerId}`, data);
  }

  updateProposalStatus(requestId: string, offerId: string, status: 'ACCEPTED' | 'REJECTED' | 'SHORTLISTED' | 'VIEWED'): Observable<RequestOffer> {
    return this.http.patch<RequestOffer>(`${this.apiUrl}/${requestId}/offers/${offerId}/status`, { status });
  }

  withdrawProposal(requestId: string, offerId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${requestId}/offers/${offerId}`);
  }

  // --- Negotiations ---

  sendNegotiationMessage(requestId: string, data: NegotiationData): Observable<NegotiationMessage> {
    return this.http.post<NegotiationMessage>(`${this.apiUrl}/${requestId}/negotiations`, data);
  }

  getNegotiations(requestId: string, offerId?: string): Observable<NegotiationMessage[]> {
    let params = new HttpParams();
    if (offerId) params = params.set('offerId', offerId);
    return this.http.get<NegotiationMessage[]>(`${this.apiUrl}/${requestId}/negotiations`, { params });
  }

  // --- Notifications ---

  getNotifications(): Observable<{ notifications: Notification[]; unreadCount: number }> {
    return this.http.get<{ notifications: Notification[]; unreadCount: number }>(`${this.apiUrl}/notifications`);
  }

  markNotificationAsRead(id: string): Observable<Notification> {
    return this.http.patch<Notification>(`${this.apiUrl}/notifications/${id}/read`, {});
  }

  markAllNotificationsAsRead(): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/notifications/mark-all-read`, {});
  }

  // --- Portfolio ---

  getPortfolio(): Observable<PortfolioItem[]> {
    return this.http.get<PortfolioItem[]>(`${this.apiUrl}/portfolio`);
  }

  addPortfolioItem(item: Partial<PortfolioItem>): Observable<PortfolioItem> {
    return this.http.post<PortfolioItem>(`${this.apiUrl}/portfolio`, item);
  }

  deletePortfolioItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/portfolio/${id}`);
  }
}
