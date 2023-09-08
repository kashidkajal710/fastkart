import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './component/home/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopdealComponent } from './component/home/topdeal/topdeal.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NavbarComponent,
    TopdealComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule
  ],


  providers: [],
  bootstrap: [AppComponent]


})

export class AppModule { }
