import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;


  constructor(private _service : AuthService, fb:FormBuilder) {
    this.form = fb.group({
      email : ['', [
        Validators.email,
        Validators.required
      ]],
      password: ['', Validators.required]
    })
   }

   get email(){return this.form.get('email')} 
   get password(){return this.form.get('password')}

  checkUsers(email:AbstractControl | null, password:AbstractControl | null){
    let checkUser = this._service;
    let validUser = checkUser.checkUserOnLogin(email, password)

    if (validUser) console.log("welcome")
      else console.log("No chance")
  }

  ngOnInit(): void {
  }

}
