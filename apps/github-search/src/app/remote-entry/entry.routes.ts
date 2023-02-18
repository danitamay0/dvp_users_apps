import { Route } from '@angular/router';
import { AuthGuard } from '@users-apps/authentication';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '', component: RemoteEntryComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule) },

    ]
  },
  { path: '**', redirectTo: 'people', pathMatch: 'full' }
];