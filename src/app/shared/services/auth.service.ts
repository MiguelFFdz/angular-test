import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserAuth } from '../user-auth';
import { LoginMockService } from './login-mock.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject$: BehaviorSubject<UserAuth>;

  constructor(private mockService: LoginMockService, private router: Router) {
    this.currentUserSubject$ = new BehaviorSubject<UserAuth>(JSON.parse(localStorage.getItem('currentUser')!));
  }

  get currentUserValue(): UserAuth {
    return this.currentUserSubject$.getValue();
  }

  getCurrentUser$(): Observable<UserAuth> {
    return this.currentUserSubject$.asObservable();
  }

  login(email: string, password: string) {
    let response =this.mockService.login(email, password);

    let usuario = response?.usuario as UserAuth;

    if (usuario && response?.accessToken) {
      usuario.token = response.accessToken;
      localStorage.setItem('currentUser', JSON.stringify(response.usuario));
      this.currentUserSubject$.next(usuario);
    }

    return usuario;
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
    this.currentUserSubject$.next({} as UserAuth);
  }

}
