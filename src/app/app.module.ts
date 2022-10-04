import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavarComponent } from './components/navar/navar.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    PresentacionComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
