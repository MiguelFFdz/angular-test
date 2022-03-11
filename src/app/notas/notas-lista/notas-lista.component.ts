import { Component, OnInit } from '@angular/core';
import { Nota, NotasService } from '../../shared/services/notas.service';


@Component({
  selector: 'app-notas-lista',
  templateUrl: './notas-lista.component.html',
  styles: [
  ]
})
export class NotasListaComponent implements OnInit {

  arrNotas: Nota[]

  constructor(private notasService: NotasService) {
    this.arrNotas = [];
   }

  ngOnInit(): void {
    this.notasService.getNotas$().subscribe(notas => {
      this.arrNotas = notas;
    });
  }

  borrarNota(id: number): void {
    this.notasService.borrarNota(id);
  }

}
