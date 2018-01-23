import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarDisciplinasComponent } from './cadastrar-disciplinas/cadastrar-disciplinas.component';
import { ListarDisciplinasComponent } from './listar-disciplinas/listar-disciplinas.component';
import {HttpModule} from '@angular/http';
import {DisciplinaService} from './service/disciplina.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  providers:[DisciplinaService],
  declarations: [CadastrarDisciplinasComponent, ListarDisciplinasComponent ],
  exports: [CadastrarDisciplinasComponent, ListarDisciplinasComponent],
})
export class DisciplinasModule { }
