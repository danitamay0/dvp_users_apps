

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '', // Default view for this feature accessible at /feature
                component: LoginComponent,
            },

        ]
    }
]

@NgModule({

    imports: [CommonModule, RouterModule.forChild(routes),],
    exports: [RouterModule],

})
export class LoginRoutingModule { }


