import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { LibrosComponent } from './components/libros/libros.component';
import { NavarComponent } from './components/navar/navar.component';
import { SelfiesComponent } from './components/selfies/selfies.component';

const routes: Routes = [
  {
    path: '',
    component:NavarComponent,
    children : [
      {
        path:'',
        component:FrontpageComponent
      },
      {
        path: 'Libros',
        component:LibrosComponent
      },
      {
        path: 'Selfies',
        component:SelfiesComponent
      },
      {
        path: 'Juegos',
        component:JuegosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
