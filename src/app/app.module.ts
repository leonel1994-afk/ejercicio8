import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiccionarioComponent } from './diccionario/diccionario.component';
import { SolucionComponent } from './solucion/solucion.component';

@NgModule({
  declarations: [
    AppComponent,
    DiccionarioComponent,
    SolucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
