import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { Subscription } from 'rxjs';
import { TypeIdentifier } from '../../enum/typeIdentification';
import { loadCreatePerson } from '../../store/actions/create-person.actions';
import { selectCreatePersonFeaure } from '../../store/selectors/createPersonSelector';

@Component({
  selector: 'users-apps-create-person',
  templateUrl: './create-person.component.html',
  styles: [],
})
export class CreatePersonComponent {

  typesIdentifier : string[] = TypeIdentifier

  form: FormGroup
  fetching: TypeFetching = 'iddle'
  errorMessage = ''
  createUserSub: Subscription
  constructor(private _fb: FormBuilder, private store: Store, public dialog: MatDialog) {
    this.form = this._fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      identifier: ['', [Validators.required]],
      email: ['', [Validators.required]],
      type_identifier: ['', [Validators.required]],
    })

    this.createUserSub = this.store.select(selectCreatePersonFeaure).subscribe(r => {
      this.fetching = r.fetching
      this.errorMessage = r.errorMessage

      if (this.fetching == 'succeded') {
        this.dialog.closeAll()
      }
    })
  }



  createPerson() {
    this.store.dispatch(loadCreatePerson({ data: this.form.value }))
  }

  ngOnDestroy(): void {
    this.createUserSub.unsubscribe()
  }

}
