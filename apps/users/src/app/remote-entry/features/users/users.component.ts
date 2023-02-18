import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './components/create-user/create-user.component';

@Component({
  selector: 'users-apps-users',
  templateUrl: './users.component.html',
  styles: [],
})
export class UsersComponent {
  constructor(public dialog: MatDialog) {

  }
  openModal() {
    const dialogRef = this.dialog.open(CreateUserComponent);
  }
}
