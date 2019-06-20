import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {passwordValidator} from '../validators/password.directive';
import { CookieService } from 'ngx-cookie-service';
import {MatDialog} from '@angular/material';
import {RegisterComponent} from '../../register';
import {AuthService} from '../../services/auth.service';
import {AppRouterLinks} from '../../../../app-routing.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookies: CookieService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4), passwordValidator()]]
    });
  }

  onSubmit() {
    const {email, password} = this.loginForm.value;
    this.authService.login({email, password})
      .subscribe(response => {
        if (response && response.token) {
          this.cookies.set('token', response.token);
          this.router.navigate(AppRouterLinks.HOME);
        }
      });
  }

  register() {
    this.dialog.open(RegisterComponent, {
      panelClass: 'custom-modalbox'
    })
      .afterClosed();
  }
}
