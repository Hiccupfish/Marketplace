import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-service-detail',
  template: `
    <section class="service-detail" *ngIf="service; else state">
      <button type="button" class="back" (click)="goBack()">? Back to services</button>
      <span class="category">{{ service.category?.name || 'Services' }}</span>
      <h1>{{ service.title }}</h1>
      <p class="description">{{ service.description }}</p>
      <div class="info">
        <div><small>Starting from</small><strong>R {{ service.startingPrice | number:'1.0-0' }}</strong></div>
        <div><small>Service area</small><strong>{{ service.serviceArea || service.provider?.location || 'Not specified' }}</strong></div>
        <div><small>Provider</small><strong>{{ service.provider?.name || 'Local provider' }}</strong></div>
        <div><small>Availability</small><strong>{{ service.availability || 'Available' }}</strong></div>
      </div>
    </section>
    <ng-template #state>
      <section class="service-detail state" [class.error]="error">
        <p>{{ error || 'Loading service details...' }}</p>
        <button *ngIf="error" type="button" class="back" (click)="goBack()">Back to services</button>
      </section>
    </ng-template>
  `,
  styles: [`
    .service-detail { max-width: 820px; min-height: calc(100vh - 70px); margin: 0 auto; padding: 3.5rem 1.5rem; color: #f8fafc; }
    .back { margin-bottom: 2rem; padding: .6rem 0; border: 0; background: transparent; color: #93c5fd; cursor: pointer; font: inherit; font-weight: 700; }
    .category { display: inline-block; padding: .35rem .7rem; border-radius: 999px; background: rgba(59,130,246,.18); color: #bfdbfe; font-size: .78rem; font-weight: 700; text-transform: uppercase; }
    h1 { margin: 1rem 0; font-size: clamp(2rem, 5vw, 3.25rem); letter-spacing: -.04em; }
    .description { max-width: 680px; color: #cbd5e1; font-size: 1.08rem; line-height: 1.7; }
    .info { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-top: 2.5rem; }
    .info div { padding: 1.15rem; border: 1px solid rgba(148,163,184,.2); border-radius: 14px; background: rgba(30,41,59,.75); }
    small, strong { display: block; } small { margin-bottom: .45rem; color: #94a3b8; } strong { color: #fff; }
    .state { text-align: center; } .error { color: #fecaca; }
  `]
})
export class ServiceDetailComponent implements OnInit {
  service: any = null;
  error = '';

  constructor(private readonly route: ActivatedRoute, private readonly http: HttpClient, private readonly router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) { this.error = 'This service could not be found.'; return; }
    this.http.get<any>(`${environment.apiUrl}/services/${id}`).subscribe({
      next: service => this.service = service,
      error: err => this.error = err.error?.message || 'Unable to load this service.',
    });
  }

  goBack(): void { this.router.navigate(['/services']); }
}
