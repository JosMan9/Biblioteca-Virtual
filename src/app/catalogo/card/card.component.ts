import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Libro } from '../../models/libro';
import { Router } from '@angular/router';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() titulo: string = ""
  @Input() autor: string = ""
  @Input() anio: string = ""
  @Input() imgURL: string = ""
  @Input() telefono: string = ""
  @Input() descripcion: string = ""
  @Input() objeto!: Libro
  //@Input() id = 0;
  libro!: Libro;
  constructor(private UsuarioService: UsuarioService, private router: Router, private libroService: LibroService) {
  }

  ngOnInit(): void {
   // this.libro = new Libro(this.titulo, this.anio, this.descripcion, this.autor, this.imgURL);
   this.libro = this.objeto;
  }

  sendDatos() {
    this.libroService.changeLibro(this.libro);
  }

}
