import { Component, Input , Output, EventEmitter} from '@angular/core';
import {AuthService} from '@users-apps/authentication';

@Component({
  selector: 'users-apps-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  @Input("title") title : string = ''
  @Input("showMenu") showMenu = false
  @Output("menuClicked") menuClicked = new EventEmitter<boolean>()

  constructor(private _ath:AuthService){

  }
  openMenu(){
    this.menuClicked.emit(true)
  }

  logOut(){
    this._ath.logOut()
  }
}
