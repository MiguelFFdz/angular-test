import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Nota {
  titulo: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  notas: Nota[];

  private notas$ = new Subject<Nota[]>();

  constructor() {
    this.notas = [];
    this.notas$ = new Subject<Nota[]>();
  }

  agregarNota(nota: Nota): void {
    this.notas.push(nota);
    // Emitir el nuevo array de notas
    this.notas$.next(this.notas);
  }

  borrarNota(indice: number): void {
    this.notas.splice(indice, 1);
    // Emitir el nuevo array de notas
    this.notas$.next(this.notas);
  }

  // Transformar el Subject en un observable para poder suscribirnos
  getNotas$(): Observable<Nota[]>{
    return this.notas$.asObservable();
  }

}
