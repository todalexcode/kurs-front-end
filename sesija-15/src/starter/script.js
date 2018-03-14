var Person = function (name){
    this.name = name;
}

Person.prototype.getName = function(){
    return 'Ime je: ' + this.name;
}

var pera = new Person('Pera');
var djura = new Person('Djura');