import { Component, Input } from '@angular/core';
import { Delivery } from '../../models/delivery.model';

@Component({
  selector: 'app-delivery-status',
  templateUrl: './delivery-status.component.html',
  styleUrls: ['./delivery-status.component.scss']
})
export class DeliveryStatusComponent {
  @Input() delivery!: Delivery;
}
