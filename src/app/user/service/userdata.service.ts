import { Injectable, OnInit } from '@angular/core';
import { userInterfaces } from 'src/app/Structure/userInterFace';
import { userDatas } from 'src/assets/logindata/users';

@Injectable({
  providedIn: 'root'
})
export class UserdataService implements OnInit {


  user='pradumna'
  userData!:userInterfaces|undefined
constructor(private ser:UserdataService){

  this.user = this.ser.user
  this.userData = userDatas.find(d => d.userName == this.user)
}

ngOnInit(): void {
}
getdata(){
  return this.userData;
}
}
