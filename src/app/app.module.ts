import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import {UsuariosModule} from './usuarios/usuarios.module';
import {DisciplinasModule} from './disciplinas/disciplinas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    DisciplinasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
