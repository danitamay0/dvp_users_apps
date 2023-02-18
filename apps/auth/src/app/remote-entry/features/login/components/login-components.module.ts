

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from '@users-apps/authentication';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [FormLoginComponent, FormDialogComponent],
    imports: [HttpClientModule, AuthenticationModule, MatDialogModule, CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
    exports: [FormLoginComponent],
    providers: [],
})
export class LoginComponentsModule { }