import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ProductosListComponent } from './productos-list/productos-list.component';

const routes: Routes = [
  {
    path: '', component: ProductosListComponent,
    canActivate: [AuthGuard],
    data: { roles: [{name: "ROLE_ADMIN"}] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
