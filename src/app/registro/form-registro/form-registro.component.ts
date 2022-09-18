import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.scss'],
})
export class FormRegistroComponent implements OnInit {
  hide = true;
  btn_bloqueado = true;
  nombre = '';
  apellidos = '';
  telefono = '';
  correo = '';
  contra = '';

  usuarios: Usuario[] = [];

  @ViewChild('nombreInput') nombreInput!: ElementRef;
  @ViewChild('apellidosInput') apellidosInput!: ElementRef;
  @ViewChild('telefonoInput') telefonoInput!: ElementRef;
  @ViewChild('correoInput') correoInput!: ElementRef;
  @ViewChild('contraInput') contraInput!: ElementRef;

  constructor(
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    //console.log(this.usuarios);
  }

  getDatos() {
    const usuario = new Usuario(
      this.nombre,
      this.apellidos,
      this.telefono,
      this.correo,
      this.contra
    );

    console.log(usuario);

    if (this.telefono.length != 10) {
      alert('Telefono inválido');
    } else {
      this.usuarioService.save(usuario).subscribe(
        (data) => {
          this.toastr.success('Usuario Creado', 'OK', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
          this.router.navigate(['/login']);
        },
        (err) => {
          console.log('usuario ya creado');
          alert('Usuario ya creado. No repetir número de teléfono');
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
          this.router.navigate(['/registro']);
        }
      );
    }

    /* */
  }

  validarDatos() {
    console.log(this.usuarios);
    this.nombre = this.nombreInput.nativeElement.value;
    this.apellidos = this.apellidosInput.nativeElement.value;
    this.telefono = this.telefonoInput.nativeElement.value;
    this.correo = this.correoInput.nativeElement.value;
    this.contra = this.contraInput.nativeElement.value;

    if (
      this.nombre.trim() != '' &&
      this.apellidos.trim() != '' &&
      this.telefono.trim() != '' &&
      this.correo.trim() != '' &&
      this.contra.trim() != ''
    ) {
      this.btn_bloqueado = false;
    } else {
      this.btn_bloqueado = true;

    }
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
    //console.log(this.usuarios);
  }
}
