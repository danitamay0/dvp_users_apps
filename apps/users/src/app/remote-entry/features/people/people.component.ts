import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePersonComponent } from './components/create-person/create-person.component';

@Component({
  selector: 'users-apps-people',
  templateUrl: './people.component.html',
  styles: [],
})
export class PeopleComponent {
  constructor(private dialog:MatDialog){

  }
  openModal(){
    this.dialog.open(CreatePersonComponent)
  }
}
