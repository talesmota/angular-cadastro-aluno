import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListarAlunosComponent } from './aluno/listar-alunos/listar-alunos.component';
import { CadastrarAlunoComponent } from './aluno/cadastrar-aluno/cadastrar-aluno.component';

import {ListarDisciplinasComponent} from './disciplina/listar-disciplinas/listar-disciplinas.component';
import {CadastrarDisciplinaComponent} from './disciplina/cadastrar-disciplina/cadastrar-disciplina.component';
const routes: Routes = [
  { path: 'listar-alunos', component: ListarAlunosComponent },
  { path: 'cadastrar-alunos', component: CadastrarAlunoComponent },
  { path: 'cadastrar-alunos/:id', component: CadastrarAlunoComponent },

  { path: 'listar-disciplinas', component: ListarDisciplinasComponent },
  { path: 'cadastrar-disciplinas', component: CadastrarDisciplinaComponent },
  { path: 'cadastrar-disciplinas/:id', component: CadastrarDisciplinaComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
