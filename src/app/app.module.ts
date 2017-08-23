import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Main App Components
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppSettings } from './app.settings';
//Custom modules
import { UserAdminModule } from './userAdmin/user.admin.module';
//Guards
import { AuthGuard, RoleGuard } from './_guards/index';
//Components
import { AlertComponent } from './_directives/index';
import { LoginComponent } from './login/index';
import { HomeComponent, NavMenu } from './home/index';
//Services
import { AlertService, AuthenticationService, RestService, UserService } from './_services/index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    UserAdminModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    HomeComponent,
    NavMenu
  ],
  providers: [
    AppSettings,
    AlertService,
    AuthenticationService,
    RestService,
    AuthGuard,
    RoleGuard,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }