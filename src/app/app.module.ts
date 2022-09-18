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
import { CardPeliComponent } from './vista-detallada/card-peli/card-peli.component';
import { CardComponent } from './catalogo/card/card.component';
import { VistaDetalladaComponent } from './vista-detallada/vista-detallada.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { ToastrModule } from 'ngx-toastr';
import { UsuarioService } from './services/usuario.service';

import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    RegistrarIngresarComponent,
    LoginComponent,
    FormLoginComponent,
    RegistroComponent,
    FormRegistroComponent,
    PerfilComponent,
    VistaDetalladaComponent,
    CardPeliComponent,
    CardComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
