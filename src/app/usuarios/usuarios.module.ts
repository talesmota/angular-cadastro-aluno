import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';
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
  declarations: [ListarUsuariosComponent, CadastrarUsuariosComponent ],
  exports: [ListarUsuariosComponent, CadastrarUsuariosComponent],
})
export class UsuariosModule { }
