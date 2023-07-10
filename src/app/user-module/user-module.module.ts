import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/*Importaciones de Material*/
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AyudaComponent } from './ayuda/ayuda.component';
import { MicuentaComponent } from './micuenta/micuenta.component';



@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    PerfilComponent,
    ResetPasswordComponent,
    AyudaComponent,
    MicuentaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule
  ],exports:[
    RegistroComponent,
    LoginComponent,
    PerfilComponent,
    ResetPasswordComponent
  ]
})
export class UserModuleModule { }
