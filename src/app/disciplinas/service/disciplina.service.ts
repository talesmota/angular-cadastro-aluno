import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

const url:String = 'http://localhost:8100/';
@Injectable()
export class DisciplinaService {

  constructor(private _http: Http) { }

  getDisciplinas(){
    return this._http.get( url+'disciplina')
      .map(resp=>resp.json());
  }
  save(disciplina){
    if(!disciplina.id){
      return this._http.post( url+'disciplina', disciplina)
        .map(resp=>resp.json());
    }else{
      return this._http.put( url+'disciplina', disciplina)
        .map(resp=>resp.json());
    }
  }

  get(id:Number){
    return this._http.get( url+'disciplina/'+id)
      .map(resp=>resp.json());
  }
  getAlunos(id:Number){
    return this._http.get( url+'disciplina/'+id+'/alunos')
      .map(resp=>resp.json());
  }
  remove(id:Number){
    return this._http.delete(url+'disciplina/'+id);
  }
}
