import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  libroURL = environment.libroURL;

  constructor(private httpClient: HttpClient) {}

  private libro = new BehaviorSubject<Libro>({
    titulo: '',
    anio: '',
    descripcion: '',
    autor: '',
    img: '',
  });
  public customLibro = this.libro.asObservable();

  public changeLibro(lib: Libro): void {
    this.libro.next(lib);
  }

  public lista(): Observable<Libro[]> {
    //return this.httpClient.get<Libro[]>(this.libroURL + 'lista');
    return this.httpClient.get<Libro[]>(`${this.libroURL}`);
  }

  public detail(id: number): Observable<Libro> {
    return this.httpClient.get<Libro>(this.libroURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Libro> {
    return this.httpClient.get<Libro>(this.libroURL + `detailname/${nombre}`);
  }

  public save(libro: Libro): Observable<any> {
    return this.httpClient.post<any>(this.libroURL + 'create', libro);
  }

  public update(id: number, libro: Libro): Observable<any> {
    return this.httpClient.put<any>(this.libroURL + `update/${id}`, libro);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.libroURL + `delete/${id}`);
  }
}
