import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProfileComponent } from './search-profile/search-profile.component';
import { SearchProfileDetailComponent } from './search-profile-detail/search-profile-detail.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [SearchProfileComponent, SearchProfileDetailComponent],
    imports: [CommonModule,

        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatInputModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonModule,
    ],
    exports: [SearchProfileComponent, SearchProfileDetailComponent],
    providers: [],
})
export class ComponentsSearchModule { }
