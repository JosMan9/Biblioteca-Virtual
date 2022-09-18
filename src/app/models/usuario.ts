export class Usuario {
  id?: number;
  nombre: string;
  apellidos: string;
  telefono: string;
  correo: string;
  contra: string;


  constructor(nombre: string,
    apellidos: string,
    telefono: string,
    correo: string,
    contra: string) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.telefono = telefono;
      this.correo = correo;
      this.contra = contra;
  }

}
