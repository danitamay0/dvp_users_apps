import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search.routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ComponentsSearchModule } from './components/components-search.module';
import { searchUserFeature } from './store/reducers/search-user.feature';
import { SearchUsersEffects } from './store/effects/search-users.effects';


@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule,
    HttpClientModule,
    StoreModule.forFeature(searchUserFeature),
    EffectsModule.forFeature([SearchUsersEffects]),

    MatDialogModule, SearchRoutingModule, MatIconModule,
    MatButtonModule, ComponentsSearchModule],
  exports: [],
  providers: [],
})
export class SearchModule { }
