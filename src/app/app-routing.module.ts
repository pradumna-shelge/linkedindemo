import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './defaultpage/sign-in/sign-in.component';
import { NavbarComponent } from './defaultpage/navbar/navbar.component';
import { LogincheckGuard } from './gard/logincheck.guard';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

const routes: Routes = [

  {path:'navbar',component:NavbarComponent,
children:[
  {path:'login',component:SignInComponent},

]},

{path:'',redirectTo:'/navbar/login',pathMatch:'full'},
{path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
,canActivate:[LogincheckGuard]},

{path:'**',component:PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
