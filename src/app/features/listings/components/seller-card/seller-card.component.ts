import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-card',
  templateUrl: './seller-card.component.html',
  styleUrls: ['./seller-card.component.scss']
})
export class SellerCardComponent {

  seller: any;

  viewProfile(): void {
    console.log('Navigate to seller profile');
  }

  contactSeller(): void {
    console.log('Contact seller');
  }
}
