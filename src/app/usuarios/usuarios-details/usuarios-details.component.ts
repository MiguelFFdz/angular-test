import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USUARIOS } from 'src/app/shared/mock-usuarios';
import { Usuario } from 'src/app/shared/usuario';

@Component({
  selector: 'app-usuarios-details',
  templateUrl: './usuarios-details.component.html',
  styleUrls: ['./usuarios-details.component.scss']
})
export class UsuariosDetailsComponent implements OnInit {

  usuarios: Usuario[] = [];

  identificador: number = 0;

  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.usuarios = USUARIOS;
    this.identificador = this.route.snapshot.params['id'];

    // Simulamos la ejecución de un servicio que nos devuelva el usuario con el id que nos llega por la url
    let usuarioSelected = this.usuarios.find(u => u.id === Number(this.identificador));

    console.log(usuarioSelected);

  }



}
