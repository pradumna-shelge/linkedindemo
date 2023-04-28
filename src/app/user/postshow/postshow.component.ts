import { Component, Input } from '@angular/core';
import { UserdataService } from 'src/app/Services/userdata.service';
import { userInterfaces } from 'src/app/Structure/userInterFace';
import { userDatas } from 'src/assets/logindata/users';

@Component({
  selector: 'app-postshow',
  templateUrl: './postshow.component.html',
  styleUrls: ['./postshow.component.css']
})
export class PostshowComponent {
@Input() user=-1
  userData!:userInterfaces|undefined
constructor(private ser:UserdataService){}

ngOnInit(): void {
  this.userData = userDatas.find(d => d.id == this.user)
}
}
