import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { authenticationRoutes } from './lib.routes';
import { AuthApiService } from './core/api/auth.api';
import { AuthService } from './core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './core/guards/authGuard.guard';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers:[AuthApiService,AuthService,CookieService,AuthGuard]
})
export class AuthenticationModule {}
