export class Disciplina {
     id:Number;
     name:String;
     code:String;
     students:Array<Number>=[];

    constructor(){}

    builder(id:Number, name:String, code:String, students:Array<Number>=[]){
        this.id=id;
        this.name=name;
        this.code=code;
        this.students = students;
    }
}
