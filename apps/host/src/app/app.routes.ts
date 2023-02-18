import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'github-search',
    loadChildren: () =>
      import('github-search/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'users',
    loadChildren: () => import('users/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
