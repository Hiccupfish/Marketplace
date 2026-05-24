import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  upload(file: File): Observable<{ url: string }> {
    void file;
    return of({ url: '' });
  }
}