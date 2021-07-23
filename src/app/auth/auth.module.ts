import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { OfficePictureComponent } from './office-picture/office-picture.component';
import { HeaderAuthComponent } from './header-auth/header-auth.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthPageComponent,
    OfficePictureComponent,
    HeaderAuthComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { 
}
