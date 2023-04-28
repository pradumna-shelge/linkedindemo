import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { UserLoginService } from 'src/app/Services/user-login.service';
import { UserdataService } from 'src/app/Services/userdata.service';
import { userInterfaces } from 'src/app/Structure/userInterFace';
import { userDatas } from 'src/assets/logindata/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user=''
  userData!:userInterfaces|undefined
constructor(private ser:UserdataService,private lser:UserLoginService,private route:Router){}

ngOnInit(): void {
  this.user = this.ser.user
  this.userData = userDatas.find(d => d.userName == this.user)
}

logout(){
this.route.navigate(['/navbar/login']);
  
this.lser.islogout()

}
}
