import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostshowComponent } from './postshow/postshow.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ConnectionComponent } from './connection/connection.component';
import { CreatepostComponent } from './createpost/createpost.component';


@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    PostshowComponent,
    ProfileComponent,
    ConnectionComponent,
    CreatepostComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ]
})
export class UserModule { }
