export class Prestamo
{
  id?: number;
  idUsuario: number;
  idLibro: number;

  constructor (idU: number, idL: number) {
    this.idUsuario = idU;
    this.idLibro = idL;

  }
}
