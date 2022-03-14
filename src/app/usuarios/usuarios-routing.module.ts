import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { UsuariosDetailsComponent } from './usuarios-details/usuarios-details.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {
    path: '', component: UsuariosListComponent,
    canActivate: [AuthGuard],
    data: { roles: [{ name: "ROLE_ADMIN"}, { name: "ROLE_USER"}] }
  },
  {
    path: 'nuevo', component: UsuariosDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [{ name: "ROLE_ADMIN"}] }
   },
  {
    path: ':id', component: UsuariosDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [{ name: "ROLE_ADMIN"}] }
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
