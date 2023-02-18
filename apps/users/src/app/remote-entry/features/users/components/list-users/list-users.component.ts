import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { Subscription } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { loadUsers } from '../../store/actions/user.actions';
import { selectUsersFeaure } from '../../store/selectors/userSelector';
@Component({
  selector: 'users-apps-list-users',
  templateUrl: './list-users.component.html',
  styles: [],
})
export class ListUsersComponent implements OnDestroy {
  users: IUser[] = []
  fetching: TypeFetching = 'iddle'
  dataSub: Subscription

  constructor(private store: Store) {
    this.store.dispatch(loadUsers())

    this.dataSub = this.store.select(selectUsersFeaure).subscribe(({ users, fetching }) => {
      this.fetching = fetching
      this.users = users
    })
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe()
  }
}
