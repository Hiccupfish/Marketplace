import { Component, OnInit } from '@angular/core';
import { User, UsersManagementService } from './users-management.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent implements OnInit {
  users: User[] = [];

  constructor(private service: UsersManagementService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => (this.users = data));
  }

  toggle(id: number): void {
    this.service.toggleStatus(id).subscribe(() => {
      const u = this.users.find((user) => user.id === id);
      if (u) {
        u.status = u.status === 'Active' ? 'Inactive' : 'Active';
      }
    });
  }

  // Placeholder for row selection
  select(user: User): void {}
}