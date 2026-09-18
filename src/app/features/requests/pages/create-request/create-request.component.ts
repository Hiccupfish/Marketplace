import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../../../shared/services/request.service';
import { CategoryService } from '../../../../shared/services/category.service';
import { CreateRequestData, MarketplaceType } from '../../../../shared/models/request.model';

/** Images are sent as data URLs inside the JSON body, so keep the count and size sensible. */
const MAX_REQUEST_IMAGES = 6;
const MAX_REQUEST_IMAGE_BYTES = 3 * 1024 * 1024; // 3MB per image

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent {
  title = '';
  description = '';
  marketplaceType: MarketplaceType = 'SERVICE';
  categoryId = '';
  budget: number | null = null;
  location = '';
  deadline = '';
  preferredFulfilment = '';
  images: string[] = [];

  error = '';
  loading = false;
  submitted = false;

  categories: { id: string; name: string }[] = [];

  constructor(private readonly requestService: RequestService, private readonly categoryService: CategoryService, private readonly router: Router) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (cats) => { this.categories = cats; },
      error: () => { this.categories = []; },
    });
  }

  /**
   * Budget is opt-in. It needs its own flag because the amount starts empty —
   * deriving "is the budget set?" from the value would hide the input again as
   * soon as the toggle is switched on.
   */
  budgetEnabled = false;

  get hasBudget(): boolean {
    return this.budgetEnabled;
  }

  toggleBudget(): void {
    this.budgetEnabled = !this.budgetEnabled;
    if (!this.budgetEnabled) {
      this.budget = null;
    }
  }

  get hasDeadline(): boolean {
    return !!this.deadline;
  }

  toggleDeadline(): void {
    if (this.hasDeadline) {
      this.deadline = '';
    } else {
      this.deadline = new Date().toISOString().split('T')[0];
    }
  }

  // --- Images: device upload (primary) + optional URL ---

  readonly maxImages = MAX_REQUEST_IMAGES;
  readonly maxImageMb = MAX_REQUEST_IMAGE_BYTES / (1024 * 1024);

  imageUrlInput = '';
  imageError = '';
  dragActive = false;

  /** Handles files picked through the hidden <input type="file">. */
  onFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.readFiles(Array.from(input.files));
    }
    input.value = '';
  }

  onImageDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragActive = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.readFiles(Array.from(files));
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragActive = true;
  }

  onDragLeave(): void {
    this.dragActive = false;
  }

  /** Reads files as data URLs so they can be stored with the request. */
  private readFiles(files: File[]): void {
    this.imageError = '';
    for (const file of files) {
      if (this.images.length >= MAX_REQUEST_IMAGES) {
        this.imageError = `You can add up to ${MAX_REQUEST_IMAGES} images.`;
        break;
      }
      if (!file.type.startsWith('image/')) {
        this.imageError = `"${file.name}" is not an image. Please choose a PNG, JPG, WEBP or GIF file.`;
        continue;
      }
      if (file.size > MAX_REQUEST_IMAGE_BYTES) {
        this.imageError = `"${file.name}" is larger than ${this.maxImageMb}MB. Please choose a smaller image.`;
        continue;
      }

      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        if (result && !this.images.includes(result)) {
          this.images = [...this.images, result];
        }
      };
      reader.onerror = () => {
        this.imageError = `Could not read "${file.name}". Please try again.`;
      };
      reader.readAsDataURL(file);
    }
  }

  addImageUrl(): void {
    const url = this.imageUrlInput.trim();
    if (!url) return;

    if (this.images.length >= MAX_REQUEST_IMAGES) {
      this.imageError = `You can add up to ${MAX_REQUEST_IMAGES} images.`;
      return;
    }
    if (!/^https?:\/\//i.test(url) && !url.startsWith('data:image/')) {
      this.imageError = 'Enter a valid image URL starting with http:// or https://';
      return;
    }
    if (!this.images.includes(url)) {
      this.images = [...this.images, url];
    }
    this.imageUrlInput = '';
    this.imageError = '';
  }

  removeImage(index: number): void {
    this.images = this.images.filter((_, i) => i !== index);
    this.imageError = '';
  }

  submit(): void {
    this.error = '';

    if (!this.title.trim()) {
      this.error = 'Please enter a title for your request.';
      return;
    }
    if (!this.description.trim()) {
      this.error = 'Please describe what you need.';
      return;
    }
    if (!this.categoryId) {
      this.error = 'Please select a category.';
      return;
    }
    if (this.budgetEnabled && (!this.budget || this.budget <= 0)) {
      this.error = 'Please enter a budget amount, or switch Budget off.';
      return;
    }

    this.loading = true;
    const data: CreateRequestData = {
      title: this.title.trim(),
      description: this.description.trim(),
      marketplaceType: this.marketplaceType,
      categoryId: this.categoryId,
      budget: this.budget || undefined,
      location: this.location.trim() || undefined,
      deadline: this.deadline || undefined,
      preferredFulfilment: this.preferredFulfilment.trim() || undefined,
      images: this.images.length > 0 ? this.images : undefined,
    };

    this.requestService.createRequest(data).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to create request. Please try again.';
        this.loading = false;
      },
    });
  }

  goToRequests(): void {
    this.router.navigate(['/requests']);
  }
}
