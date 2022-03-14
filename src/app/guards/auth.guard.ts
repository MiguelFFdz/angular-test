import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../shared/role';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      console.log('RUTA PROTEGIDA PARA: ',route.data['roles']);
      console.log('ROLES USUARIO: ', currentUser.roles);

      // El usuario no tiene el rol necesario para activar la ruta
      if(route.data['roles'] && !route.data['roles'].some((r:Role) => r.name === currentUser.roles[0].name)){
        this.router.navigate(['/404']);
        return false;
      }

      // Autorizado
      return true;
    }

    // No logueado
    this.router.navigate(['/home']);
    return false;
  }

}
