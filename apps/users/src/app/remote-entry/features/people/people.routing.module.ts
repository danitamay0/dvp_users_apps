import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component:PeopleComponent
  }
]

@NgModule({

  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule],

})
export class PeopleRoutingModule {}
