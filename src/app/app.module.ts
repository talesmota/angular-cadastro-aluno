import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { AlunoModule } from './aluno/aluno.module';
import {DisciplinaModule} from './disciplina/disciplina.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunoModule,
    DisciplinaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
