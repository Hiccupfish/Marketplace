import { Component } from '@angular/core';

const placeholderImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="%23eef2f5"/><text x="400" y="255" font-family="Arial" font-size="32" text-anchor="middle" fill="%235f6f7a">Marketplace listing</text></svg>';

@Component({
  selector: 'app-listing-gallery',
  templateUrl: './listing-gallery.component.html',
  styleUrls: ['./listing-gallery.component.scss'],
})
export class ListingGalleryComponent {
  images: string[] = [placeholderImage];
  selectedImage = placeholderImage;

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}
