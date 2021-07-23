import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.sass']
})
export class AuthPageComponent implements OnInit {

  viewMode : string = "register";

  constructor(private _services:AuthService) { }

  getViewMode(){
    let tabView = this._services;
    this.viewMode =  tabView.SelectedViewMode();
  }


  ngOnInit(): void {
  }

}
