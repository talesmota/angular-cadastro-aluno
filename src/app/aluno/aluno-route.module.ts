import { NgModule } from '@angular/core';

import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'listar-alunos', component: ListarAlunosComponent },
  { path: 'cadastrar-alunos', component: CadastrarAlunoComponent },
  { path: 'cadastrar-alunos/:id', component: CadastrarAlunoComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ], 
  exports: [ RouterModule ]
})
export class AlunoRouteModule { }
