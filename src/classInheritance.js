class MathStudent {
    constructor(_name,_yearOfStudy){
        this.Name = _name;
        this.YearOfStudy = _yearOfStudy;
    }

    GetName(){
        console.log(`The of student ${this.Name}`);
    }
    GetYear(){
        console.log(`The of student ${this.YearOfStudy}`);
    }
}

class MathStudentFirstYear extends MathStudent {
    constructor(_name,_yearOfStudy,_newCources){
    super(_name,_yearOfStudy);
    this.NewCources = _newCources;
    }

    GetNewCources(){
        console.log(`The of student ${this.NewCources}`);
    }
    GetYear(){
        console.log(`MathStudentFirstYear MathStudentFirstYear MathStudentFirstYear`);
    }
}

let _MathStudentFirstYear = new MathStudentFirstYear('Lev',1994,'math advanced');
_MathStudentFirstYear.GetYear();
_MathStudentFirstYear.GetName();
_MathStudentFirstYear.GetNewCources();
