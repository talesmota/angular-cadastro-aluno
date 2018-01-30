import { Component, OnInit } from '@angular/core';
import {Aluno} from '../aluno';
import {AlunoService} from '../service/aluno.service';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css']
})
export class ListarAlunosComponent implements OnInit {

  private alunos:Array<Aluno>=[];
  constructor(private alunoService:AlunoService) { }

  ngOnInit() {
    this.alunoService.getAlunos()
      .subscribe(resp=>{
        resp.map(item=>{
          let _aluno = new Aluno();
          _aluno.builder(item.id, item.name, item.cell, item.email, item.course, item.state, item.city);
          this.alunos.push(_aluno);
        })
      })
  }
  remover(aluno:Aluno){
    this.alunoService.remove(aluno.id)
      .subscribe(resp=>{
        this.alunos.splice( this.alunos.indexOf(aluno), 1);
      })
  }
}
