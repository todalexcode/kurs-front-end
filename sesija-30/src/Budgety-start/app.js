var budgetController = (function () {
    //console.log('ovo radi a niko nije pozvao');
    var x = 23;
    var add = function (a) {
        return x + a;
    }

    return {
        publicTest : function(b){
            return add(b);
        },
        publicX : x
    }
})();

//UI controller
var UIController = (function(){
    
    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value'
    }

    return {
        getInput : function(){
            return {
                type : document.querySelector(DOMStrings.inputType).value,
                description : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            };
        }
    }
})();

//global app controller 
var controller = (function(budgetCtrl, UIctrl){
    
    document.querySelector('.add__btn').addEventListener('click', function(){
        //1. Get (already filed) input data
        console.log(UIctrl.getInput().type);
        console.log(UIctrl.getInput().description);
        console.log(UIctrl.getInput().value);
        //2. Add the item to the budget controller
        //3. Add the item to the UI
        //4. Calculate the budget
        //5. Dispaly the budget on the UI
    });

    document.addEventListener('keypress', function(event){
        //console.log('pressed ' + event.code);
        //site for keycodes http://keycodes.atjayjo.com/
    });
   
})(budgetController, UIController);

