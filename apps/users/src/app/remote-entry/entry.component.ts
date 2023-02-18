import { Component } from '@angular/core';
import { MenuItems, menuList } from '../core/enum/menu';

@Component({
  selector: 'users-apps-auth-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {
  menuItems:MenuItems[] = menuList

}
