import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosDetailsComponent } from './usuarios-details/usuarios-details.component';


@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosComponent,
    UsuariosDetailsComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
