import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {

  @Input() category: any;

  @Output() select = new EventEmitter<any>();

  onSelectCategory() {
    this.select.emit(this.category);
  }
}