import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../../shared/services/request.service';
import { Request, CreateProposalData } from '../../../../shared/models/request.model';

@Component({
  selector: 'app-submit-proposal',
  templateUrl: './submit-proposal.component.html',
  styleUrls: ['./submit-proposal.component.scss']
})
export class SubmitProposalComponent implements OnInit {
  request: Request | null = null;
  loading = true;
  error = '';
  submitting = false;

  price: number | null = null;
  estimatedCompletionTime = '';
  availability = '';
  proposalMessage = '';
  experience = '';
  portfolioImages: string[] = [];
  previousWork: string[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly requestService: RequestService, private readonly router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadRequest(id);
    }
  }

  loadRequest(id: string): void {
    this.loading = true;
    this.requestService.getRequest(id).subscribe({
      next: (data) => {
        this.request = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Unable to load request details.';
        this.loading = false;
      },
    });
  }

  addPortfolioImage(): void {
    const url = prompt('Enter portfolio image URL:');
    if (url) {
      this.portfolioImages = [...this.portfolioImages, url.trim()];
    }
  }

  removePortfolioImage(index: number): void {
    this.portfolioImages = this.portfolioImages.filter((_, i) => i !== index);
  }

  addPreviousWork(): void {
    const url = prompt('Enter previous work image URL:');
    if (url) {
      this.previousWork = [...this.previousWork, url.trim()];
    }
  }

  removePreviousWork(index: number): void {
    this.previousWork = this.previousWork.filter((_, i) => i !== index);
  }

  submit(): void {
    this.error = '';

    if (!this.price || this.price <= 0) {
      this.error = 'Please enter a valid proposal price.';
      return;
    }

    this.submitting = true;
    const data: CreateProposalData = {
      price: this.price,
      estimatedCompletionTime: this.estimatedCompletionTime || undefined,
      availability: this.availability || undefined,
      proposalMessage: this.proposalMessage || undefined,
      experience: this.experience || undefined,
      portfolioImages: this.portfolioImages.length > 0 ? this.portfolioImages : undefined,
      previousWork: this.previousWork.length > 0 ? this.previousWork : undefined,
    };

    this.requestService.submitProposal(this.request!.id, data).subscribe({
      next: () => {
        this.router.navigate(['/requests/my/proposals']);
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to submit proposal. Please try again.';
        this.submitting = false;
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/requests', this.request?.id]);
  }
}
