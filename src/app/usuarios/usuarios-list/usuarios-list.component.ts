import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "../../shared/usuario";
import { UsuariosService } from "../usuarios.service";

@Component({
  selector: "app-usuarios-list",
  templateUrl: "./usuarios-list.component.html",
  styleUrls: ["./usuarios-list.component.scss"]
})
export class UsuariosListComponent implements OnInit, OnDestroy {

  usuarios?: Usuario[];

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

  onDelete(id: number): void {
    if(window.confirm("¿Seguro?")) {
      this.usuariosService.deleteUsuario(id).subscribe(
        data => {
          console.log('Eliminado usuario: ' + JSON.stringify(data));
          this.loadUsuarios();
        }
      );
    }

  }

}
