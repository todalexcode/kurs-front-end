var exp = (function (name, familyName){

    var x = 45;
    var y = x++;
    return {
        ime: name,
        prezime: familyName,
        visina: 180,
        godiste: 1966,
        starost: function(){
            return 2018 - this.godiste;
        }
    }
})('Cika Rade', 'Ostojic');

var Kocka = function(a, boja){
    this.boja = boja;
    this.zapremina = function (){
        return (a*a*a);
    }
    this.povrsina = function(){
        return 6*(a*a);
    }
}

var kockaPlava = new Kocka(3, 'Plava');
var kockaZuta = new Kocka(2, 'Zuta');


var Book = function(name, year){
    this.name = name;
    this.year = year;
}

var knjiga1 = new Book('Stranac', 1955);
var knjiga2 = new Book('Ana Karenjina', 1897);

var Course = function(name, teacher, students){
    this.name = name;
    this.teacher = teacher;
    this.students = students;
}


var kursFrontEnd = new Course('Kurs Front End','Rade', ['Alex', 'Nemanja', 'Jelena', 'Milica', 'Ivan']);




