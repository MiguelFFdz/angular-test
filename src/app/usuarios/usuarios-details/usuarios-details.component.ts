import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-details',
  templateUrl: './usuarios-details.component.html',
  styleUrls: ['./usuarios-details.component.scss']
})
export class UsuariosDetailsComponent implements OnInit {

  usuario: Usuario = {} as Usuario;

  usuarioForm: FormGroup;

  guardando: boolean = false;

  id: any;

  constructor(private route:ActivatedRoute, private usuariosService: UsuariosService, private fb: FormBuilder, private router: Router) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      puesto: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      departamento: ['', Validators.required],
    })
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.obtenerUsuario(this.id);
  }

  obtenerUsuario(id: any): void {

    this.usuariosService.getUsuario(id).subscribe({
      next: (data: Usuario) => {
        this.usuario = data;
        this.usuarioForm.patchValue(data);
      },
      error: err => console.log(err)
    });
  }

  onSubmit(){
    this.guardando = true;
    console.log('Original: '+ JSON.stringify(this.usuarioForm.value));

    this.usuario.nombre = this.usuarioForm.value.nombre;
    this.usuario.apellidos = this.usuarioForm.value.apellidos;
    this.usuario.puesto = this.usuarioForm.value.puesto;
    this.usuario.departamento = this.usuarioForm.value.departamento;

    // let usuarioUpdated: Usuario = {
    //   id: this.id,
    //   nombre: this.usuarioForm.value.nombre,
    //   apellidos: this.usuarioForm.value.apellidos,
    //   puesto: this.usuarioForm.value.puesto,
    //   departamento: this.usuarioForm.value.departamento,
    //   imagen: this.usuario.imagen,
    //   created: this.usuario.created
    // }

    this.updateDataUsuario(this.usuario);
  }

  updateDataUsuario(usuario: Usuario): void {
    this.usuariosService.updateUsuario(usuario).subscribe({
      next: (data:Usuario) => {
        console.log('Actualizado: ' + JSON.stringify(data));
        this.guardando = false;
        this.router.navigate(['usuarios']);
      },
      error: err => console.log(err)
    });
  }

}
