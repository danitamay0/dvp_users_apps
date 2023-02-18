import { Route } from '@angular/router';
import { AuthGuard } from '@users-apps/authentication';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: 'people', component: RemoteEntryComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./features/people/people.module').then(m => m.PeopleModule) },
      { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UserseModule) }, 

    ]
  },
  { path: '**', redirectTo: 'people', pathMatch: 'full' }
];
