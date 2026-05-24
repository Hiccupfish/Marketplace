import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories(): Observable<Category[]> {
    return of([]);
  }
}