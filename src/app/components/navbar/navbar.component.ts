import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth:AuthService
  ) { }

  ngOnInit() {
  }

  login(){

    var A = Date.now(); 
    console.log(A);
    
    
    this.auth.login();
  }

  cerrarSesion(){
    this.auth.logout();

  }

}
