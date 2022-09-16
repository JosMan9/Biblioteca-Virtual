import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegistrarIngresarComponent } from './catalogo/registrar-ingresar/registrar-ingresar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormRegistroComponent } from './registro/form-registro/form-registro.component';
import { PerfilComponent } from './perfil/perfil.component';

import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    RegistrarIngresarComponent,
    LoginComponent,
    FormLoginComponent,
    RegistroComponent,
    FormRegistroComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
