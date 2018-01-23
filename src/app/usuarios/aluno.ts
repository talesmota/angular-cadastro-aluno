export class Aluno {
     id:Number;
     name:String;
     cell:Number;
     email:String;
     course:String;
     state:String;
     city:String;

    constructor(){

    }
    builder( id:Number, name:String, cell:Number, email:String, course:String, state:String, city:String ){
        this.id=id;
        this.name=name;
        this.cell=cell;
        this.email=email;
        this.course=course;
        this.state=state;
        this.city=city;
    }remover
}
