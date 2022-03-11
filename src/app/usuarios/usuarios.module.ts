import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosDetailsComponent } from './usuarios-details/usuarios-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PastDaysPipe } from '../pipes/past-days.pipe';
import { CompanyPipe } from '../pipes/company.pipe';


@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosComponent,
    UsuariosDetailsComponent,
    PastDaysPipe,
    CompanyPipe
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuariosModule { }
