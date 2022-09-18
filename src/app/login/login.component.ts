import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario!: Usuario
  band = true
  bandFrom = false
  telefono_ = ""

  constructor() {
    
   }



  ngOnInit(): void {
  }

  recibirUsr(usr: Usuario) {
    this.usuario = usr;
    console.log(this.usuario);
    this.telefono_ = this.usuario.telefono;
    console.log(this.telefono_);
    this.band = false;
    this.bandFrom = true;
  }

}
