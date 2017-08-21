import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';
// custom modules
import { HomeModule } from './home/index'


import { AuthGuard, RoleGuard } from './_guards/index';

import { AlertComponent } from './_directives/index';
import { LoginComponent } from './login/index';

import { AlertService, AuthenticationService, RestService } from './_services/index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HomeModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    // HomeComponent,
    // UserAdminComponent,
    // EditUserForm,
    // NewUserForm
  ],
  providers: [
    AppSettings,
    AlertService,
    AuthenticationService,
    RestService,
    AuthGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }