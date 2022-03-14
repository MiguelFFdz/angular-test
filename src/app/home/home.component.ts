import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { UserAuth } from '../shared/user-auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  isLoggedIn?: boolean;
  currentUser?: UserAuth;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.authService.getCurrentUser$().subscribe(user => {
      if(user && Object.keys(user).length > 0) {
        this.isLoggedIn = true;
        this.currentUser = user;
        console.log(this.currentUser);
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }

}
