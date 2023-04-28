import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/Services/userdata.service';
import { userInterfaces } from 'src/app/Structure/userInterFace';
import { userDatas } from 'src/assets/logindata/users';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user=''
  userData!:userInterfaces|undefined
constructor(private ser:UserdataService){}

ngOnInit(): void {
  this.user = this.ser.user
  this.userData = userDatas.find(d => d.userName == this.user)
}

}
