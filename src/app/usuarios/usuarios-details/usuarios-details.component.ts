import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/usuario';
import { UsuariosService } from '../usuarios.service';

export interface NavigationExtras {
  navigationId: string;
  usuario: Usuario;
}

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

  action: string = 'nuevo';

  navigationExtras = {} as NavigationExtras;

  constructor(private route:ActivatedRoute, private usuariosService: UsuariosService, private fb: FormBuilder, private router: Router, private location:Location) {

    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      puesto: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      departamento: ['', Validators.required],
      imagen: ['', Validators.compose([Validators.required, Validators.pattern('^(http(s?):\/\/).+')])]
    })

    this.inicializar();

   }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    if(this.action === 'editar' && !this.usuario){
      this.obtenerUsuario(this.id);
    } else {
      console.log('TENEMOS USUARIO');
      this.usuarioForm.patchValue(this.usuario);
    }
  }

  inicializar(): void {
    if(this.route.snapshot.params['id']){
      this.action = 'editar';
      this.id = this.route.snapshot.params['id'];
      this.navigationExtras = this.location.getState() as NavigationExtras;
      this.usuario = this.navigationExtras.usuario;
    } else {
      console.log('ESTAMOS CREANDO. Acción: ' + this.action);
    }
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

    if (this.action === 'nuevo') {
      this.nuevoUsuario();
    } else {
      this.updateDataUsuario();
    }

  }

  nuevoUsuario(): void {
    let usuario = {} as Usuario;

    usuario = this.usuarioForm.value;
    usuario.created = new Date();

    this.usuariosService.createUsuario(usuario).subscribe({
      next: (data: Usuario) => {
        console.log('Creado: ' + JSON.stringify(data));
        this.guardando = false;
        this.router.navigate(['usuarios/' + data.id]);
      },
      error: err => console.log(err)
    })
  }

  updateDataUsuario(): void {
    this.usuario = Object.assign({}, this.usuarioForm.value, {id: this.usuario.id});
    this.usuariosService.updateUsuario(this.usuario).subscribe({
      next: (data:Usuario) => {
        console.log('Actualizado: ' + JSON.stringify(data));
        this.guardando = false;
        this.router.navigate(['usuarios']);
      },
      error: err => console.log(err)
    });
  }

}
