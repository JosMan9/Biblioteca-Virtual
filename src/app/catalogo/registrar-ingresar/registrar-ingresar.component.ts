import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-ingresar',
  templateUrl: './registrar-ingresar.component.html',
  styleUrls: ['./registrar-ingresar.component.scss']
})
export class RegistrarIngresarComponent implements OnInit {
  @Input() oculto!: boolean;
  @Input() nombre: string = "";
  @Input() apellidos: string = "";

  band = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.oculto);
  }

  revibir(name: string) {

  }

}
