import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class AuthService {
  
  tabMode : string = "register";
  allUsers = {'users':[
    {"name": "Alireza", "email":"alireza@gmail.com", "password":'123456'}
  ]}
  
  viewMode = (mode:string)=>this.tabMode = mode ;

  SelectedViewMode = () =>this.tabMode;

  checkUserOnLogin(email:AbstractControl | null, password:AbstractControl | null){
    let user =this.allUsers.users.find(u => u.email === email?.value && u.password == password?.value)

    if (user == undefined)return false
      else return true
  }


  addUser(name:AbstractControl | null , email:AbstractControl | null ,  password:AbstractControl | null ){
    if (email?.valid && name?.valid && password?.valid){
      let user =this.allUsers.users.find(u => u.email === email?.value)
      if (user !== undefined ){
        return "there is account with this email";
      }else{
        this.allUsers.users.push({"name":name?.value, "email":email?.value, "password":password?.value });
        console.log(this.allUsers.users)
        return "success";
      }

      // email as string
    }
    else return "false inputs"
  }

  constructor() { }
}
