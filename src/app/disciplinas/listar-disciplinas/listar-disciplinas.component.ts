import { Component, OnInit } from '@angular/core';

import {Disciplina} from '../disciplina';
import {DisciplinaService} from '../service/disciplina.service';
@Component({
  selector: 'app-listar-disciplinas',
  templateUrl: './listar-disciplinas.component.html',
  styleUrls: ['./listar-disciplinas.component.css']
})
export class ListarDisciplinasComponent implements OnInit {

  private disciplinas:Array<Disciplina>=[];

  constructor(private disciplinaService:DisciplinaService) { }

  ngOnInit() {
    this.disciplinaService.getDisciplinas()
      .subscribe(resp=>{
        resp.map(item=>{
          let disciplina = new Disciplina();
          disciplina.builder(item.id,item.name, item.code);
          this.disciplinas.push(disciplina);
        })
      });
  }
  remover(disciplina:Disciplina){
    this.disciplinaService.remove(disciplina.id)
      .subscribe(resp=>{
        this.disciplinas.splice( this.disciplinas.indexOf(disciplina), 1);
      })
  }

}
