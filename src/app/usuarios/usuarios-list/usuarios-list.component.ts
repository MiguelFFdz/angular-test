import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { USUARIOS } from "../../shared/mock-usuarios";
import { Usuario } from "../../shared/usuario";
import { UsuariosService } from "../usuarios.service";

@Component({
  selector: "app-usuarios-list",
  templateUrl: "./usuarios-list.component.html",
  styleUrls: ["./usuarios-list.component.scss"]
})
export class UsuariosListComponent implements OnInit, OnDestroy {

  usuarios?: Usuario[];

  nombre: string = "";
  apellidos: string = "";
  puesto: string = "";
  departamento: string = "";
  imagen: string = "";

  constructor(private router: Router, private usuariosService: UsuariosService){
    console.log('Constructor UsuariosList:');
  }

  ngOnInit(): void {
    console.log('OnInit UsuariosList:');
    this.loadUsuarios();
  }

  ngOnDestroy(): void {
    console.log('OnDestroy UsuariosList:');
  }

  loadUsuarios():void {
    this.usuariosService.getUsuarios().subscribe({
      next:(data: Usuario[]) => {
        this.usuarios = data;
        console.log('Usuarios: ', this.usuarios);
      },
      error: err => console.log(err)
    });
  }

  // onEdit(usuario: Usuario) {
  //   console.log(usuario);
  //   this.router.navigate(['usuarios', usuario.id]);

  // }

  // addUsuario() {
  //   this.usuarios.push(
  //     {
  //     created: new Date(),
  //     nombre: this.nombre,
  //     apellidos: this.apellidos,
  //     puesto: this.puesto,
  //     departamento: this.departamento,
  //     imagen: this.imagen,
  //     id: this.usuarios.length + 1
  //   }
  //   );
  // }


}
