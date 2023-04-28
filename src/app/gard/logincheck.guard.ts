import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from '../Services/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class LogincheckGuard implements CanActivate {

  constructor(private route:Router,private ser:UserLoginService){}
  canActivate(){
    let  p = this.ser.isLogedIn()
    return p;
  }
}
