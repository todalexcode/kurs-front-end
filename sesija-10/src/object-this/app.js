/*
function a() {
    console.log(this);
    this.newvariable = 'hello';
}

a();


var b = function() {
    console.log(this);   
}



console.log(newvariable); // not good!

b();
*/
var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Pozvana Updated again! The c object');
        console.log(self);
    }
}

c.log();







