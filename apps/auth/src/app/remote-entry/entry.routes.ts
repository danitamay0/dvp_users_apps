import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '', component: RemoteEntryComponent, 
    children: [{ path: '', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
    ]
  },
  {path:'**',redirectTo:'',pathMatch:'full'}
];
