import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeFetching } from 'apps/users/src/app/core/interfaces/IFetching';
import { Store } from '@ngrx/store';
import { loadCreateUsers } from '../../store/actions/create-user.actions';
import { selectCreateUserFeaure } from '../../store/selectors/createUserSelector';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'users-apps-create-user',
  templateUrl: './create-user.component.html',
  styles: [],
})
export class CreateUserComponent {

  form: FormGroup
  fetching: TypeFetching = 'iddle'
  errorMessage = ''
  createUserSub: Subscription
  constructor(private _fb: FormBuilder, private store: Store, public dialog: MatDialog) {
    this.form = this._fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

    this.createUserSub = this.store.select(selectCreateUserFeaure).subscribe(r => {
      this.fetching = r.fetching
      this.errorMessage = r.errorMessage

      if (this.fetching == 'succeded') {
        this.dialog.closeAll()
      }
    })
  }



  createUser() {
    this.store.dispatch(loadCreateUsers({ data: this.form.value }))
  }

  ngOnDestroy(): void {
    this.createUserSub.unsubscribe()
  }
}

