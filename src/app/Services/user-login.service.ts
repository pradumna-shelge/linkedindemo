import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { loginInterface } from '../Structure/userInterFace';
import { UserdataService } from './userdata.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
 flag = false;




 constructor(private service:UserdataService,private route:Router){
   
 }

isCheck(userName:string,password:string){
  let userloginData=this.service.Data()
  
  
    
    for(let d in userloginData){
     
     if(userloginData[d].password==password && userloginData[d].username==userName){
       this.flag = true;
       this.service.currentUser(userName)
     }
    }
    this.isLogedIn()
}

  isLogedIn(): boolean {
    return this.flag
    console.log( this.flag)
  }

islogout(){
  this.flag = false
}




}
