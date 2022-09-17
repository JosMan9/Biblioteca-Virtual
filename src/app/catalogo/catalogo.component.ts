import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { Libro } from '../models/libro';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  libros: Libro[] = [];
  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
  this.cargarProductos();
  }

  cargarProductos(): void {
    this.libroService.lista().subscribe(
      (data) => {
        this.libros = data;
        console.log(this.libros);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
