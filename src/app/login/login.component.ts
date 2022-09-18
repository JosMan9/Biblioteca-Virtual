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

  //@Input() usuario: any;
  constructor(private usrService: UsuarioService,
    private rutaActiva: ActivatedRoute) { }



  ngOnInit(): void {
  }

  recibirUsr(usr: Usuario) {
    this.usuario = usr;
    console.log(this.usuario);
    this.telefono_ = this.usuario.telefono;
    console.log(this.telefono_);
    //this.router.navigate(['/login']);
    //this.router.navigate(['/login']);
    //this.rutaActiva.snapshot.params['telefono'];
   // console.log(this.rutaActiva.snapshot.params['telefono']);
    //this.usrService.disparador.emit(this.usuario.telefono);
    this.band = false;
    this.bandFrom = true;
  }

}
