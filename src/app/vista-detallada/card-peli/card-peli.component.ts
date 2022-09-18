import { Component, Input, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-card-peli',
  templateUrl: './card-peli.component.html',
  styleUrls: ['./card-peli.component.scss']
})
export class CardPeliComponent implements OnInit {
  @Input() libro_!: Libro;
  img = "";
  constructor() { }

  ngOnInit(): void {
    this.img = this.libro_.img;
  }

}
