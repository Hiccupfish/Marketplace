import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {

  @Input() service: any;

  get formattedPrice(): string {
    if (!this.service?.startingPrice) {
      return 'Request Quote';
    }

    return 'From R ' + this.service.startingPrice.toLocaleString('en-ZA');
  }

  get providerName(): string {
    return this.service?.provider?.name || 'Verified Professional';
  }

  get serviceLocation(): string {
    return this.service?.serviceArea ||
           this.service?.provider?.location ||
           'South Africa';
  }

  get image(): string {
    return this.service?.imageUrl ||
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&auto=format&fit=crop&q=80';
  }

}