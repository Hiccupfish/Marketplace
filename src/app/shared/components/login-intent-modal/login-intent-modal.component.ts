import { Component, Output, EventEmitter } from '@angular/core';

export type LoginIntent = 'BUY' | 'SELL_PRODUCTS' | 'OFFER_SERVICES' | 'BUSINESS' | null;

@Component({
  selector: 'app-login-intent-modal',
  templateUrl: './login-intent-modal.component.html',
  styleUrls: ['./login-intent-modal.component.scss']
})
export class LoginIntentModalComponent {
  @Output() intentSelected = new EventEmitter<LoginIntent>();
  @Output() cancelled = new EventEmitter<void>();

  selectIntent(intent: LoginIntent): void {
    this.intentSelected.emit(intent);
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
