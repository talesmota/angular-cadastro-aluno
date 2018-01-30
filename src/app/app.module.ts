import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AlunoModule } from './aluno/aluno.module';
import {DisciplinaModule} from './disciplina/disciplina.module';
import { AppRouteModule } from './/app-route.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    
    AlunoModule,
    DisciplinaModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
