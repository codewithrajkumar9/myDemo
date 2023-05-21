import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any = new FormGroup({
    email: new FormControl('',Validators.required),
    pswd: new FormControl('',Validators.required)
  })
  get form(){
    return this.loginForm.controls;
  }
  constructor(){

  }
}
