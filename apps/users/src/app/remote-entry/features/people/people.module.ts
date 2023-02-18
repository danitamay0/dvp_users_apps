import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people.routing.module';
import { ComponentsPeopleModule } from './components/components-people.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { peopleFeature } from './store/reducers/person.feature';
import { PeopleEffects } from './store/effects/people.effects';
import { EffectsModule } from '@ngrx/effects';
import { createPersonFeature } from './store/reducers/createUser.feature';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PeopleComponent],
  imports: [CommonModule, PeopleRoutingModule,ComponentsPeopleModule,
    
    StoreModule.forFeature(peopleFeature),
    StoreModule.forFeature(createPersonFeature),
    EffectsModule.forFeature([PeopleEffects]),


    MatIconModule,
    MatButtonModule,
    MatDialogModule
   
  ],
  exports: [],
  providers: [],
})
export class PeopleModule {}
