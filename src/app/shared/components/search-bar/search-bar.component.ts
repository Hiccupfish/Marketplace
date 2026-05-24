import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  value = '';

  onInput(value: string): void {
    this.value = value;
  }

  onSearch(): void {
    this.search.emit(this.value);
  }
}