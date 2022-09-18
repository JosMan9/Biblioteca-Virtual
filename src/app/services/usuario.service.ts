import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioURL = environment.usuarioURL;
  @Output() disparador: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  private usuario = new BehaviorSubject<Usuario>({nombre: "", apellidos: "", telefono: "", correo: "", contra: ""});
  public customTel = this.usuario.asObservable();

  public changeTel(usr: Usuario): void {
    this.usuario.next(usr);
  }

  public lista(): Observable<Usuario[]> {
    //return this.httpClient.get<Libro[]>(this.libroURL + 'lista');
    return this.httpClient.get<Usuario[]>(`${this.usuarioURL}`);
  }

  public detail(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + `${id}`);
  }

  public detailName(telefono: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + `${telefono}`);
  }

  public save(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.usuarioURL, usuario);
  }

  public update(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(this.usuarioURL + `update/${id}`, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.usuarioURL + `delete/${id}`);
  }
}
