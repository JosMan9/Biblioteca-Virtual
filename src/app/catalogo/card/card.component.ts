import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Libro } from '../../models/libro';
import { Router } from '@angular/router';

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
  @Input() objeto!: object
  libro!: Libro;
  constructor(private UsuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit(): void {
    this.libro = new Libro(this.titulo, this.anio, "", this.autor, this.imgURL);
    //console.log(this.libro);
    //console.log(this.objeto);
  }

  sendDatos() {
    this.UsuarioService.disparador.emit(this.libro);
    //this.router.navigate(['/visya-detallada']);
  }

}
