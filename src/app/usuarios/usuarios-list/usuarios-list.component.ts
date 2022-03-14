import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";
import { Usuario } from "../../shared/usuario";
import { UsuariosService } from "../usuarios.service";

@Component({
  selector: "app-usuarios-list",
  templateUrl: "./usuarios-list.component.html",
  styleUrls: ["./usuarios-list.component.scss"]
})
export class UsuariosListComponent implements OnInit, OnDestroy {

  usuarios?: Usuario[];

  isAdmin?: boolean;
  constructor(private router: Router, private usuariosService: UsuariosService, private authService: AuthService){
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

  compruebaPrivilegios(){
    this.authService.getCurrentUser$().subscribe(user=> {
      if(user && Object.keys(user).length > 0 ){
        this.isAdmin = user.admin;
      } else {
        this.isAdmin = false;
      }
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
