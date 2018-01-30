import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import {Aluno} from '../aluno';
const url:String = 'http://localhost:8100/';
@Injectable()
export class AlunoService {

  

  constructor(private _http: Http) { }

  getAlunos(){
    return this._http.get( url+'aluno')
      .map(resp=>resp.json());
  }
  get(id:Number){
    return this._http.get( url+`aluno/${id}`)
      .map(resp=>resp.json());
  }
  save(aluno:Aluno){
    if(!aluno.id){
      return this._http.post( url+'aluno', aluno)
        .map(resp=>resp.json());
    }else{
      return this._http.put( url+'aluno', aluno)
        .map(resp=>resp.json());
    }
  }
  remove(id:Number){
    return this._http.delete(url+'aluno/'+id);
  }
}
