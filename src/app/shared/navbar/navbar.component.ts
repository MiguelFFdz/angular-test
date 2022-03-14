import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotasService } from '../services/notas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  numNotas: number;
  isLoggedIn?: boolean;
  isAdmin?: boolean;

  constructor(private notasService: NotasService, private authService: AuthService) {

    this.numNotas = 0;
    this.notasService.getNotas$().subscribe(notas => {
      this.numNotas = notas.length;
    });

  }

  ngOnInit(): void {
    this.authService.getCurrentUser$().subscribe(user => {
      if(user && Object.keys(user).length > 0) {
        this.isLoggedIn = true;
        this.isAdmin = user.admin;
      } else {
        this.isLoggedIn = false;
        this.isAdmin = false;
      }
    });
  }

  logOut() {
    this.authService.logOut();
  }

}
