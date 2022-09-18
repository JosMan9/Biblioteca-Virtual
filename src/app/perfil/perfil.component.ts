import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario!: Usuario;
  nombre = "";
  apellidos = "";
  correo = "";
  telefono = "";

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.customTel.subscribe(usr => this.usuario = usr);
    console.log(this.usuario);

    this.nombre = this.usuario.nombre;
    this.apellidos = this.usuario.apellidos;
    this.correo = this.usuario.correo;
    this.telefono = this.usuario.telefono;

  }

}
