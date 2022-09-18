import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from '../models/prestamo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  prestamoURL = environment.prestamoURL;

  constructor(private httpClient: HttpClient) {

  }

  public lista(): Observable<Prestamo[]> {
    //return this.httpClient.get<Libro[]>(this.libroURL + 'lista');
    return this.httpClient.get<Prestamo[]>(`${this.prestamoURL}`);
  }

  public save(prestamo: Prestamo): Observable<any> {
    return this.httpClient.post<any>(this.prestamoURL, prestamo);
  }

}
