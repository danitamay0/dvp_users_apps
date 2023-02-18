import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { Subscription } from 'rxjs';
import { IPerson } from '../../interfaces/IPerson';
import { loadPeople } from '../../store/actions/person.actions';
import { selectPeopleFeaure } from '../../store/selectors/personSelector';

@Component({
  selector: 'users-apps-list-people',
  templateUrl: './list-people.component.html',
  styles: [],
})
export class ListPeopleComponent {
  people: IPerson[] = []
  fetching: TypeFetching = 'iddle'
  dataSub: Subscription

  constructor(private store: Store) {
    this.store.dispatch(loadPeople())

    this.dataSub = this.store.select(selectPeopleFeaure).subscribe(({ people, fetching }) => {
      this.fetching = fetching
      this.people = people
      console.log(this.people);
    })
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe()
  }

}
