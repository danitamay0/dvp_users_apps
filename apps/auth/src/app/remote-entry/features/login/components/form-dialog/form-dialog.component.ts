import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AuthService} from '@users-apps/authentication';
import { environment } from 'apps/auth/src/environments/environment';
import { IApps } from 'libs/authentication/src/lib/core/enum/apps-enum';
import { TypeFetching } from '../../../../core/interfaces/IFetching';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'users-apps-form-dialog',
  templateUrl: './form-dialog.component.html',
})
export class FormDialogComponent {
  uri:string =`${environment.proxyUrl}/auth/login`
  apps : IApps[]
  constructor( private _auth: AuthService, @Inject(DOCUMENT) private document: Document){
    this.apps =this._auth.getApps()
  }

  redirect(path:string){
    window.location.href = path
  }
}
