import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent {
  @Input() value = 0;

  get stars(): boolean[] {
    return Array.from({ length: 5 }, (_, index) => index < Math.round(this.value));
  }
}