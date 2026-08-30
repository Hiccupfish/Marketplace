import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveriesRoutingModule } from './deliveries-routing.module';
import { DeliveryListComponent } from './delivery-list.component';

@NgModule({
  declarations: [DeliveryListComponent],
  imports: [
    CommonModule,
    DeliveriesRoutingModule
  ]
})
export class DeliveriesModule { }
