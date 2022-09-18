import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { LocalService } from '../services/local.service';
import { EventEmitter } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  libros: Libro[] = [];
  usuarios: Usuario[] = [];
  usuario!: Usuario
  @Input() telefono = ""
  titulo = '';
  isHidden = true;
  nombre: string = '';
  apellidos: string = '';
  //telefono: string = '';
  @Output() salida:EventEmitter<string> = new EventEmitter();

  /*
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['telefono']) {
      console.log(this.telefono);
      //const dato = changes.telefono;
    } else {
      console.log("sin datos");

    }
  }*/

  ngOnInit(): void {
   // this.cargarUsuario();
   this.usuarioService.customTel.subscribe(usr => this.usuario = usr);
  }


  constructor(
    private libroService: LibroService,
    private usuarioService: UsuarioService,
    private router: Router //private local: LocalService
  ) {
    this.libroService.lista().subscribe(
      (data) => {
        this.libros = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.cargarUsuarios();
    //this.cargarNombre();
  }

  cargarNombre() {
    for(let i = 0; i < this.usuarios.length; i++ ) {
      if (this.telefono == this.usuarios[i].telefono) {
        this.usuario = this.usuarios[i];
        break;
      }
    }

    console.log(this.usuario);
    console.log(this.usuarios);


    if(this.usuario != null) {
      this.nombre = this.usuario.nombre;
      this.apellidos = this.usuario.apellidos;
      console.log("estoy aquiiii");
    }


  }

  cargarProductos(): void {
    this.libroService.lista().subscribe(
      (data) => {
        this.libros = data;
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.libros.length);
  }

  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      (data) => {
        this.usuarios = data;
        this.cargarNombre();
      },
      (err) => {
        console.log(err);
      }
    );
  }

 cargarUsuario() {
    this.usuarioService.disparador.subscribe ( (data) => {
      this.telefono = data;
      console.log(this.telefono);
    });

    /*this.usuarioService.disparador.pipe(
      tap(data => {
        this.telefono = data;
        console.log(this.telefono)
      })
    ).subscribe()
    console.log(this.telefono)*/
  }

  cargarPerfil() {
    //this.usuarioService.changeTel(this.usuario);
  }


}
