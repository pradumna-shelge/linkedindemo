import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginForm!: FormGroup;
  constructor(private service:UserLoginService,private fb:FormBuilder,private route:Router){
   this.loginForm = this.fb.group({
    userName:[],
    password:[]
   })

  }


   check(){

    this.service.isCheck(this.userName?.value,this.password?.value);
   console.log(this.service.isLogedIn(),this.service.flag);
    this.service.isLogedIn()
    if(!(this.service.isLogedIn())){
alert('wrong password')
}
else{
      this.route.navigate(['/user'])

    }
    console.log(this.service.isLogedIn(),this.service.flag);

  }

  get(){
    console.log(this.service.flag);
  }

  get userName(){
    return this.loginForm.get('userName');
  }
  get password(){
    return this.loginForm.get('password');
  }
}

