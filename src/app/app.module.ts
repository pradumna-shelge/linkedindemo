import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './defaultpage/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './defaultpage/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NavbarComponent,
    PagenotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
