import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/component/home/home.component';
import { ContactFormComponent } from './contacts/component/contact-form/contact-form.component';
import { AboutComponent } from './about/component/about/about.component';
import { Error404Component } from './pages/component/error404/error404.component';


const mesRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: Error404Component}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(mesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
