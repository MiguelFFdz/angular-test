import { Component, OnInit } from '@angular/core';
import { NotasService } from '../services/notas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  numNotas: number;

  constructor(private notasService: NotasService) {

    this.numNotas = 0;
    this.notasService.getNotas$().subscribe(notas => {
      this.numNotas = notas.length;
    });

  }

  ngOnInit(): void {
  }

}
