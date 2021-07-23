import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  isRegistrationInvalid : boolean = false ;
  form: FormGroup; 
  constructor(private _services : AuthService, fb:FormBuilder) {
    this.form = fb.group({
      username : ['', Validators.required],
      email : ['',[
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]]
    })
   }
   get username(){return this.form.get('username')}
   get email(){return this.form.get('email')}
   get password(){return this.form.get('password')}

  // let popOver = new bootstra

  

  addNewUser(username:AbstractControl | null, email:AbstractControl | null, password:AbstractControl | null ){
    let addUser = this._services;
    let msg = addUser.addUser(username, email, password);
    if (msg === "false inputs"){
      this.isRegistrationInvalid = true
    }else{this.isRegistrationInvalid = false}
  }

  ngOnInit(): void {}

}
