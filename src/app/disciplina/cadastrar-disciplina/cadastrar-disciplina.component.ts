import { Component, OnInit } from '@angular/core';

import {Disciplina} from '../disciplina';
import {DisciplinaService} from '../service/disciplina.service';

import {AlunoService} from '../../aluno/service/aluno.service';
import {Aluno} from '../../aluno/aluno';

import { Router, ActivatedRoute } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastrar-disciplina',
  templateUrl: './cadastrar-disciplina.component.html',
  styleUrls: ['./cadastrar-disciplina.component.css']
})

export class CadastrarDisciplinaComponent implements OnInit {

  private disciplina:Disciplina=new Disciplina();
  private alunos:Array<Aluno>=[];
  private id:Number; 
  meuForm: FormGroup;
  constructor( 
    private disciplinaService:DisciplinaService, private router:Router,
    private alunoService:AlunoService, private route: ActivatedRoute
  ) { 
    this.route.params.subscribe( params => this.id=params.id );

  }

  ngOnInit() {
    this.meuForm = new FormGroup({
      'name': new FormControl(
        this.disciplina.name,[
          Validators.required,
          Validators.minLength(4) 
        ]
      ),
      'code': new FormControl(
        this.disciplina.code,[
          Validators.required,
          Validators.minLength(4),

        ]
      ),
    });

    this.alunoService.getAlunos()
      .subscribe(alunos=>{
        Object.assign(this.alunos, alunos);
      });
      if(this.id){
        this.disciplinaService.get(this.id).
          subscribe(resp=>{
            Object.assign(this.disciplina, resp);
            this.disciplina.students=[];
            this.disciplinaService.getAlunos(this.id).
              subscribe(resp=>{
                resp.map(resp=>{
                  console.log(resp)
                  this.disciplina.students.push(resp.id)
                });
              })
          })
      }
  }
  salvar(event){
    event.preventDefault();
    this.disciplinaService.save(this.disciplina).
      subscribe(resp=>{
        this.router.navigate(["/listar-disciplinas"]);
      });
  }
  addAluno(aluno:Aluno){
    let index = this.disciplina.students.indexOf(aluno.id);
    if(index == -1){
        this.disciplina.students.push(aluno.id);
    }else{
        this.disciplina.students.splice(index,1);
    }
}
  isChecked(aluno){
      return this.disciplina.students.indexOf(aluno.id)>-1?"checked":"";
  }
  get name() { return this.meuForm.get('name'); }
  
  get code() { return this.meuForm.get('code'); }

}
