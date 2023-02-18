import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'users-apps-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  constructor(public dialog: MatDialog) {

  }
  openModal() {
    /* const dialogRef = this.dialog.open(CreateUserComponent); */
  }
}
