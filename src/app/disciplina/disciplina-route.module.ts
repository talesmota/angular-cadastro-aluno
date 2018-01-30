import { NgModule } from '@angular/core';

import { ListarDisciplinasComponent } from './listar-disciplinas/listar-disciplinas.component';
import { CadastrarDisciplinaComponent } from './cadastrar-disciplina/cadastrar-disciplina.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { path: 'listar-disciplinas', component: ListarDisciplinasComponent },
  { path: 'cadastrar-disciplinas', component: CadastrarDisciplinaComponent },
  { path: 'cadastrar-disciplinas/:id', component: CadastrarDisciplinaComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ], 
  exports: [ RouterModule ]
})
export class DisciplinaRouteModule { }
