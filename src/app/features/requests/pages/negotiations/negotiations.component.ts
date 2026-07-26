import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../../shared/services/request.service';
import { NegotiationMessage, Request } from '../../../../shared/models/request.model';

@Component({
  selector: 'app-negotiations',
  templateUrl: './negotiations.component.html',
  styleUrls: ['./negotiations.component.scss']
})
export class NegotiationsComponent implements OnInit {
  request: Request | null = null;
  messages: NegotiationMessage[] = [];
  loading = true;
  error = '';
  offerId: string | null = null;
  newMessage = '';
  sending = false;

  constructor(private readonly route: ActivatedRoute, private readonly requestService: RequestService, private readonly router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.offerId = this.route.snapshot.queryParamMap.get('offerId');
    if (id) {
      this.loadNegotiations(id);
    }
  }

  loadNegotiations(requestId: string): void {
    this.loading = true;
    this.error = '';
    this.requestService.getNegotiations(requestId, this.offerId || undefined).subscribe({
      next: (data) => {
        this.messages = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Unable to load negotiations.';
        this.loading = false;
      },
    });

    this.requestService.getRequest(requestId).subscribe({
      next: (data) => {
        this.request = data;
      },
      error: () => {},
    });
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.request?.id) return;

    this.sending = true;
    this.requestService.sendNegotiationMessage(this.request.id, {
      offerId: this.offerId || undefined,
      message: this.newMessage.trim(),
      messageType: 'TEXT',
    }).subscribe({
      next: (msg) => {
        this.messages = [...this.messages, msg];
        this.newMessage = '';
        this.sending = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Failed to send message.';
        this.sending = false;
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/requests', this.request?.id]);
  }
}
