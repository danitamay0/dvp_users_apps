import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSearchUsers } from '../../store/actions/search-user.actions';

@Component({
  selector: 'users-apps-search-profile',
  templateUrl: './search-profile.component.html',
  styles: [],
})
export class SearchProfileComponent {
  constructor(private store: Store) {
  }

  search(search: any) {
    this.store.dispatch(loadSearchUsers({user:search}))
    console.log(search);

  }
}
