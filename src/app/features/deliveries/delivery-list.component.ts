import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent {
  deliveryOptions = [
    { area: 'Johannesburg', time: 'Same-day delivery', detail: 'From R65 · Track your delivery from collection to drop-off' },
    { area: 'Pretoria', time: 'Next-day delivery', detail: 'From R80 · Reliable delivery for products and small parcels' },
    { area: 'Cape Town', time: 'Scheduled delivery', detail: 'From R75 · Choose a time that works for you' }
  ];
}
