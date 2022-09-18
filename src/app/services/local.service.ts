import { outputAst } from '@angular/compiler';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  disparador: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
