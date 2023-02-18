import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { Subscription } from 'rxjs';
import { Item } from '../../interfaces/gitHubUsers';
import { selectCreateUserFeaure } from '../../store/selectors/searchUserSelector';

@Component({
  selector: 'users-apps-search-profile-detail',
  templateUrl: './search-profile-detail.component.html',
  styles: [],
})
export class SearchProfileDetailComponent {
  users: Item[] = []
  fetching: TypeFetching = 'iddle'
  dataSub: Subscription

  constructor(private store: Store) {
    this.dataSub = this.store.select(selectCreateUserFeaure)
      .subscribe(({ users, fetching }) => {
        this.users = users
        this.fetching = fetching
      })
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe()
  }

  redirect(uri:string){

  }
}
