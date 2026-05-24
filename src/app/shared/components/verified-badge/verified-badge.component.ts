import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verified-badge',
  templateUrl: './verified-badge.component.html',
  styleUrls: ['./verified-badge.component.scss']
})
export class VerifiedBadgeComponent {
  @Input() verified = true;
}