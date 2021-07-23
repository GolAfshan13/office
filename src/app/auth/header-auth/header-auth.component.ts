import { Component, OnInit } from '@angular/core';
import { AuthPageComponent } from '../auth-page/auth-page.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.sass']
})
export class HeaderAuthComponent implements OnInit {

  headerViewMode : string = "register";
  bgColor : string = "reg";
  
  constructor(private _services:AuthService,private authPage:AuthPageComponent) { }
  
  viewMode(tabName : string){
    this.headerViewMode = tabName;
    switch (tabName) {
      case "register":
        this.bgColor = "reg";
        break;
      case "login":
        this.bgColor = "bg-success";
        break;
      case "logout":
        this.bgColor = "bg-danger";
        break;
        
      default:
        this.bgColor = "reg";
        break;
    }
    let tab = this._services;
    tab.viewMode(this.headerViewMode);
    this.authPage.getViewMode();
  }
  
  ngOnInit(): void {}

}
