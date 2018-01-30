import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import {AlunoService} from './service/aluno.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers:[AlunoService],
  declarations: [ListarAlunosComponent, CadastrarAlunoComponent ],
  exports: [ListarAlunosComponent, CadastrarAlunoComponent],
})
export class AlunoModule { }
