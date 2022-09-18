import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  hide = true;
  usuarios: Usuario[] = [];
  btn_bloqueado = true;
  band_user = false;
  usuario!: Usuario;

  //@Output() onTelefono: EventEmitter<string> = new EventEmitter();
  //@Input() onTelefono: any;

  @ViewChild('telefonoInput') telefonoInput!: ElementRef;
  @ViewChild('contraInput') contraInput!: ElementRef;

  @Output() onTelefono: EventEmitter<string> = new EventEmitter();
  @Output() onContra: EventEmitter<string> = new EventEmitter();
  @Output() onUsuario: EventEmitter<Usuario> = new EventEmitter();
  telefono = "";
  contra = "";

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
    //private localService: LocalService
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      (data) => {
        this.usuarios = data;
        //console.log(this.usuarios);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  validarUsuario() {
    //console.log(this.usuarios);
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].telefono == this.telefono) {
        this.band_user = true;
        this.usuario = this.usuarios[i];
        break;
      } else {
        this.band_user = false;

      }
    }

    if (this.band_user) {
      console.log("usuario si esta");
      console.log(this.usuario);

      if (this.contra == this.usuario.contra) {
        this.router.navigate(['/catalogo']);
        this.usuarioService.changeTel(this.usuario);
      } else {
        alert("Contraseña incorrecta");
        //this.router.navigate(['/login']);

      }
    } else {
      alert("No existe el usuario");
    }

    //this.onTelefono = this.telefono;

    //this.usuarioService.disparador.emit(this.usuario);
    this.onUsuario.emit(this.usuario);

  }

  validarDatos() {
    console.log(this.usuarios);

    this.telefono = this.telefonoInput.nativeElement.value;
    this.contra = this.contraInput.nativeElement.value;

    if (this.telefono.trim() != "" &&
        this.contra.trim() != "") {
          this.btn_bloqueado = false;
        } else {
          this.btn_bloqueado = true;
        }


    /*console.log( {
      telefono: this.telefono,
      contra: this.contra
    });*/
  }
}
