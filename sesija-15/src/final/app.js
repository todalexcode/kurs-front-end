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