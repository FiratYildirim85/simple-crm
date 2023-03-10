import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loading = false;
  @ViewChild('loginForm') loginform: NgForm;



  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

 async  loginUser() {
    this.loading = true;
    await this.authService.SignIn(this.loginform.value.userName, this.loginform.value.userPassword)
    this.loading = false
  }



}

