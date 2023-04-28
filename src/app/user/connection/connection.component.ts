import { Component } from '@angular/core';
import { UserdataService } from 'src/app/Services/userdata.service';
import { userInterfaces } from 'src/app/Structure/userInterFace';
import { userDatas } from 'src/assets/logindata/users';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent {
  user='';
  id=-1;
  userData!:number[]|undefined;
  uid=-1
  AllData = userDatas
constructor(private ser:UserdataService){}

ngOnInit(): void {
  this.user = this.ser.user
  let userd = userDatas.find(d => d.userName == this.user);
this.userData = userd?.connection;
if(userd)
this.uid = userd?.id;
}
}
