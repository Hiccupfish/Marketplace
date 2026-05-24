import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnChanges {

  @Input() rating: number = 0;

  stars: { filled: boolean; half: boolean }[] = [];

  ngOnChanges() {
    this.generateStars();
  }

  private generateStars() {
    const fullStars = Math.floor(this.rating);
    const hasHalfStar = this.rating % 1 >= 0.5;

    this.stars = Array.from({ length: 5 }, (_, i) => {
      return {
        filled: i < fullStars,
        half: i === fullStars && hasHalfStar
      };
    });
  }
}