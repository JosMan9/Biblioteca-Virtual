import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-vista-detallada',
  templateUrl: './vista-detallada.component.html',
  styleUrls: ['./vista-detallada.component.scss']
})
export class VistaDetalladaComponent implements OnInit {

  libro!: Libro;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.cargarLibro();

    console.log(this.libro);
  }

  cargarLibro() {
  this.usuarioService.disparador.subscribe( data => {
      this.libro = data;
      console.log(this.libro);

    });
  }

}
