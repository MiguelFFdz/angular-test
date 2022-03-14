import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { NotasComponent } from './notas.component';

const routes: Routes = [
  {
    path: '', component: NotasComponent,
    canActivate: [AuthGuard],
    data: { roles: [{name: "ROLE_ADMIN"}] }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRoutingModule { }
