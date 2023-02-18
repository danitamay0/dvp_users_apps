import { NgModule } from "@angular/core";
import { LoginComponentsModule } from "./components/login-components.module";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login.routing.module";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from "@angular/common";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations:[LoginComponent],
    exports:[],
    imports:[ CommonModule,MatButtonModule,MatIconModule, MatSlideToggleModule , MatCardModule, LoginComponentsModule,LoginRoutingModule]
})
export class LoginModule{}