import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
import { SearchProfileDetailComponent } from './components/search-profile-detail/search-profile-detail.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      { path: '', component: SearchProfileComponent },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

]

@NgModule({

  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule],

})
export class SearchRoutingModule { }
