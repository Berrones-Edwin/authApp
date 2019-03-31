import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate

} from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {



  constructor(
    private auth: AuthService

  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    console.log(`ActivatedRouteSnapshot `, route)
    console.log(`RouterStateSnapshot `, state)
    // return (this.auth.isAuthenticated())
    //   ? true
    //   : false;

    if(this.auth.isAuthenticated()){
      console.log('entro')
      return true;
    }else{
      console.log('no entro')
      return false;
    }
  }
}
