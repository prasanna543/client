import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { httpInterceptor } from '../core/interceptors';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,FormsModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthService,httpInterceptor],

})
export class UsersModule { }
