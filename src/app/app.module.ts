import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contacts/component/contact-form/contact-form.component';
import { AboutComponent } from './about/component/about/about.component';
import { Error404Component } from './pages/component/error404/error404.component';
import { HomeComponent } from './pages/component/home/home.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    AboutComponent,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
