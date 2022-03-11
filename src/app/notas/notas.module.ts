import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas.component';
import { NotasFormularioComponent } from './notas-formulario/notas-formulario.component';
import { NotasListaComponent } from './notas-lista/notas-lista.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotasComponent,
    NotasFormularioComponent,
    NotasListaComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NotasModule { }
