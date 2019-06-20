import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UserInterface} from '../../../../_interfaces/user.interface';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  checked = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [{value: '', disabled: !this.checked}],
      lastName: [{value: '', disabled: !this.checked}],
      email: [{value: '', disabled: !this.checked}],
      phoneNumber: [{value: '', disabled: !this.checked}],
      password: [{value: '', disabled: !this.checked}],
    });
  }

  onSubmit() {
    const user: UserInterface = {
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      email: this.registerForm.get('email').value,
      phoneNumber: this.registerForm.get('phoneNumber').value,
      password: this.registerForm.get('password').value,
    };
    this.authService.register(user).subscribe(response => {
      if (response) {
        this.dialogRef.close();
      }
    });
  }

  handleChange(value: boolean) {
    value['checked'] ? this.registerForm.enable() : this.registerForm.disable();
  }

}
