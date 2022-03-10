import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  id: any;

  constructor(private route:ActivatedRoute, private usuariosService: UsuariosService, private fb: FormBuilder) {
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
        console.log(this.usuario);
      },
      error: err => console.log(err)
    });
  }

  onSubmit(){

  }



}
