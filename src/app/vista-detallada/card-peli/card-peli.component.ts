import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';
import { LibroService } from '../../services/libro.service';
import { UsuarioService } from '../../services/usuario.service';
import { PrestamoService } from '../../services/prestamo.service';
import { Prestamo } from 'src/app/models/prestamo';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-peli',
  templateUrl: './card-peli.component.html',
  styleUrls: ['./card-peli.component.scss'],
})
export class CardPeliComponent implements OnInit {
  libro_!: Libro;
  usuario!: Usuario;
  prestamos: Prestamo[] = [];
  prestamosUser: Prestamo[] = [];
  librosUser: Libro[] = [];
  libros: Libro[] = [];
  idU: any;
  udL: any;
  imgURL = '';
  constructor(
    private libroServicve: LibroService,
    private usuarioService: UsuarioService,
    private prestamoSerice: PrestamoService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.libroServicve.customLibro.subscribe((lib) => (this.libro_ = lib));
    this.usuarioService.customTel.subscribe((usr) => (this.usuario = usr));

    this.idU = this.usuario.id;

    this.cargarLibros();
    this.cargarPrestamos();

    this.udL = this.libro_.id;

    this.imgURL = this.libro_.img;

  }

  solicitarPrestamo() {
    if (this.usuario.telefono == '') {
      alert('Para solicitar prestamos, primero inicie sesión');
    } else {
      //console.log(this.prestamosUser);
      if (this.prestamosUser.length >= 3) {
        //console.log('No puedo hacer prestamos');
        this.prestamosUser.sort((a, b) => {
          if (a.idLibro < b.idLibro) return -1;
          else if (a.idLibro > b.idLibro) return 1;
          else return 0;
        });

        let acumulador = ``;
        let k = 0;
        for (let i = 0; i < this.prestamosUser.length; i++) {
          for (let j = 0; j < this.libros.length; j++) {
            console.log("j " + this.libros[j].id);
            console.log("i " + this.prestamosUser[i].idLibro);
            if (this.libros[j].id == this.prestamosUser[i].idLibro) {
              this.librosUser[k] = this.libros[j];
              acumulador += this.librosUser[k].titulo + '\n';
              k++;
            }
          }
        }


        alert("No es posible hacer prestamos, se alcanzó el límite: Libros prestados:\n" + acumulador);
      } else {
        console.log('Puedo hacer prestamos');

        const prestamo = new Prestamo(
          this.idU,
          this.udL
        );

        console.log(this.idU);
        console.log(this.udL);

        this.prestamoSerice.save(prestamo).subscribe(
          (data) => {
            this.toastr.success('Prestamo Realziado', 'OK', {
              timeOut: 3000,
              positionClass: 'toast-top-center',
            });
            this.router.navigate(['/catalogo']);
          },
          (err) => {
            alert('No se realizó el préstamo');
            this.toastr.error(err.error.mensaje, 'Fail', {
              timeOut: 3000,
              positionClass: 'toast-top-center',
            });
            this.router.navigate(['/vista-detallada']);
          }
        );
      }
    }
  }

  cargarPrestamos() {
    this.prestamoSerice.lista().subscribe((data) => {
      this.prestamos = data;
      console.log(this.prestamos);
      let j = 0;

      for (let i = 0; i < this.prestamos.length; i++) {
        if (this.prestamos[i].idUsuario == this.usuario.id) {
          //console.log(`El usuario ${this.usuario.nombre} tiene un prestamo`);
          this.prestamosUser[j] = this.prestamos[i];
          j++;
        }
      }

      console.log(this.prestamosUser);
    });
  }

  cargarLibros() {
    this.libroServicve.lista().subscribe((data) => {
      this.libros = data;
    });
  }
}
