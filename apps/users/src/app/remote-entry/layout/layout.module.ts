import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationModule } from '@users-apps/authentication';

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule,AuthenticationModule],
    exports: [NavbarComponent],
    providers: [],
})
export class LayoutModule { }