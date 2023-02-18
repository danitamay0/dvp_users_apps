import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing.module';
import { ComponentsUsersModule } from './components/components-users.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { usersFeature } from './store/reducers/users.feature';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';
import { createUserFeature } from './store/reducers/createUser.feature';



@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule,
    HttpClientModule,
    StoreModule.forFeature(usersFeature),
    StoreModule.forFeature(createUserFeature),
    EffectsModule.forFeature([UsersEffects]),

    MatDialogModule, UsersRoutingModule, MatIconModule,
    MatButtonModule, ComponentsUsersModule],
  exports: [],
  providers: [],
})
export class UserseModule { }
