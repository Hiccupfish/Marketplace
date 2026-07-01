import { Component, OnInit } from '@angular/core';
import { UserVerification, UserVerificationsService } from './user-verifications.service';

@Component({
  selector: 'app-user-verifications',
  templateUrl: './user-verifications.component.html',
  styleUrls: ['./user-verifications.component.scss'],
})
export class UserVerificationsComponent implements OnInit {
  verifications: UserVerification[] = [];

  constructor(private service: UserVerificationsService) {}

  ngOnInit(): void {
    this.service.getVerifications().subscribe((data) => (this.verifications = data));
  }

  verify(id: number): void {
    this.service.verifyUser(id).subscribe(() => {
      const v = this.verifications.find((item) => item.id === id);
      if (v) {
        v.status = 'Verified';
      }
    });
  }

  // Placeholder for future row selection
  select(item: UserVerification): void {}
}