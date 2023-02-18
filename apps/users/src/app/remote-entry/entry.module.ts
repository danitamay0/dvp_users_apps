import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { LayoutModule } from './layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule,MatIconModule, LayoutModule,MatSidenavModule,  RouterModule.forChild(remoteRoutes),
   
  ],
  providers: [],
})
export class RemoteEntryModule {}
