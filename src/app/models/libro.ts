export class Libro {
  id?: number;
  titulo: string;
  anio: string;
  descripcion: string;
  autor: string;
  img: string;


  constructor(titulo: string,
    anio: string,
    descripcion: string,
    autor: string,
    img: string) {
      this.titulo = titulo;
      this.anio = anio;
      this.descripcion = descripcion;
      this.autor = autor;
      this.img = img;
  }
}
