import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AuthService} from '@users-apps/authentication';
import { environment } from 'apps/auth/src/environments/environment';
import { TypeFetching } from '../../../../core/interfaces/IFetching';
import {MatDialog} from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
@Component({
  selector: 'users-apps-form-login',
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {
  uri:string =`${environment.proxyUrl}/auth/login`
  form:FormGroup
  fetching:TypeFetching = 'iddle'
  constructor(private _fb:FormBuilder, private _auth: AuthService,public dialog: MatDialog){
    this.form = this._fb.group({
      user:['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  logIng(){
    
    this.fetching = 'pending'
    this._auth.logIn(this.uri,this.form.value).subscribe(r=>{
      if (r.logged==false) {
        this.fetching = 'rejected'
        return
      }

      this.fetching = 'succeded'
      this.openApps()
      return
    })
    
    
  }
  openApps(){
    const dialogRef = this.dialog.open(FormDialogComponent);
  }
}
