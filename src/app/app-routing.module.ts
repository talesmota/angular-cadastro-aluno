import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';
import { CadastrarUsuariosComponent } from './usuarios/cadastrar-usuarios/cadastrar-usuarios.component';

import {ListarDisciplinasComponent} from './disciplinas/listar-disciplinas/listar-disciplinas.component';
import {CadastrarDisciplinasComponent} from './disciplinas/cadastrar-disciplinas/cadastrar-disciplinas.component';
const routes: Routes = [
  { path: 'listar-alunos', component: ListarUsuariosComponent },
  { path: 'cadastrar-alunos', component: CadastrarUsuariosComponent },
  { path: 'cadastrar-alunos/:id', component: CadastrarUsuariosComponent },
  { path: 'remover-alunos/:id', component: CadastrarUsuariosComponent },

  { path: 'listar-disciplinas', component: ListarDisciplinasComponent },
  { path: 'cadastrar-disciplinas', component: CadastrarDisciplinasComponent },
  { path: 'cadastrar-disciplinas/:id', component: CadastrarDisciplinasComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
