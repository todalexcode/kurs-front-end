
///////////////////////////////////////
// Lecture: Arrays

//var myNames = ['Marija', 'Milica', 'Todor', 'Nemanja', 'Jelena', 'Alex'];

var myNames = [];

function napraviNiz(par1, par2, par3){
    var niz = [];

    niz.push(par1);
    niz.push(par2);
    niz.push(par3);

    return niz;

}

var nekaProm = napraviNiz('Cika Rade', 52, true);


myNames.unshift('Cika Rade');

myNames.push('Darko');
myNames.push('Ivan');
myNames.push('Stefan');
myNames.push('Nikola');
myNames.push('Vukan');
myNames.push('Vojkan');



var years = new Array(1990, 1969, 1948);

var john = ['John', 'Smith', 1990, 'designer', false];



var car = {
    color : "Red",
    maxspeed: 165,
    brand: 'Volvo',
    drive: function(){
        return "Ja sada vozim";
    },
    gears: [1, 2, 3, 4, 5, 6, 'R'],
    stop: function(){
        return "Moram da stanem jer kocis!"
    }
}


var person = {
    firstName: 'Nemanja',
    lastName: 'Stefanovic',
    yearOfBirth: 1996,
    age: function(){
        return 2018 - this.yearOfBirth;
    },
    deca: {
        prvo: 'NIje rodjeno',
        drugo: 'Isto'
    }
}





/*





console.log(names[2]);
names[1] = 'Ben';
console.log(names);




john.push('blue');

john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}


*/

///////////////////////////////////////
// Lecture: Objects
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);




var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/



///////////////////////////////////////
// Lecture: Objects and methods

// v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        return 2016 - yearOfBirth;
    }
};

console.log(john.calculateAge(1970));


var age = john.calculateAge();
john.age = age;

console.log(john);



//v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/

