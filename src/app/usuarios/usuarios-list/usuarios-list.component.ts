import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { USUARIOS } from "../../shared/mock-usuarios";
import { Usuario } from "../../shared/usuario";

@Component({
  selector: "app-usuarios-list",
  templateUrl: "./usuarios-list.component.html",
  styleUrls: ["./usuarios-list.component.scss"]
})
export class UsuariosListComponent implements OnInit {

  usuarios: Usuario[] = [];

  nombre: string = "";
  apellidos: string = "";
  puesto: string = "";
  departamento: string = "";
  imagen: string = "";

  constructor(private router: Router){

  }

  ngOnInit(): void {
   this.usuarios = USUARIOS;

  }

  onEdit(usuario: Usuario) {
    console.log(usuario);
    this.router.navigate(['usuarios', usuario.id]);

  }

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
