import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Aluno} from '../aluno';
import {AlunoService} from '../service/aluno.service';
import {CURSOS} from '../cursos';
import {Cidades} from '../cidades';


import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-aluno',
  templateUrl: './cadastrar-aluno.component.html',
  styleUrls: ['./cadastrar-aluno.component.css'],

})
export class CadastrarAlunoComponent implements OnInit {

  private id:Number;
  private aluno:Aluno=new Aluno();
  private meuForm: FormGroup;
  private cursos = CURSOS;
  private estados:Array<any>=[];
  private cidades:Cidades = new Cidades();
  private cidadesDoEstado;
  private selectedOptions = {
    state:'',
    city:''
  };

  constructor(
    private route: ActivatedRoute, private alunoService:AlunoService,
    private router:Router) {
      this.route.params.subscribe( params => this.id=params.id );
      
   }

   createValidation(){
      this.meuForm = new FormGroup({
        'name':new FormControl(
          Validators.required,
          Validators.minLength(4)
        ),
        'cell':new FormControl(          
            Validators.required,
            Validators.pattern("^[0-9]{8,11}")
          
        ),
        'email':new FormControl(
            Validators.required,
            Validators.email
        ),
        'course':new FormControl(
          Validators.required,
          Validators.minLength(4)
        ),
        'state':new FormControl(
          Validators.required,
        ),
        'city':new FormControl(
          Validators.minLength(4)
        ),
      });

   }

  ngOnInit() {

    this.createValidation();
    this.estados = this.cidades.getEstados();
    if(this.id){
      this.alunoService.get(this.id)
        .subscribe(aluno=>{
          Object.assign(this.aluno, aluno);
          this.selectedOptions.state = aluno.state;
          this.changeEstado();
          this.selectedOptions.city = aluno.city;
        });
    }
  }

  changeEstado() {
    this.cidadesDoEstado = this.cidades.getCidades(this.cidades.findEstado(this.selectedOptions.state));

  }
  changeCidade(){
      this.aluno.state = this.selectedOptions.state;
      this.aluno.city = this.selectedOptions.city;
  }
  salvar(event){
    event.preventDefault();
    this.alunoService.save(this.aluno).
      subscribe(resp=>{
        this.router.navigate(["/listar-alunos"]);
      });
  }

  get name() { return this.meuForm.get('name'); }
  get cell() { return this.meuForm.get('cell'); }
  get email() { return this.meuForm.get('email'); }
  get course() { return this.meuForm.get('course'); }
  get state() { return this.meuForm.get('state'); }
  get city() { return this.meuForm.get('city'); }

}
