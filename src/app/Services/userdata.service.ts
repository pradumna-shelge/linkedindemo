import { Injectable, OnInit } from '@angular/core';
import { UserLoginService } from './user-login.service';
import { HttpClient } from '@angular/common/http';
import { logindata } from 'src/assets/logindata/data';

@Injectable({
  providedIn: 'root'
})
export class UserdataService implements OnInit{

  url = 'assets/logindata/data.json'
  user='';
  constructor(private http:HttpClient){}

  Data(){

    return logindata;
    }

    ngOnInit(): void {
      this.Data()
    }

    currentUser(user:string){
this.user = user;
    }
}
