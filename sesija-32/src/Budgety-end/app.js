var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //[1 2 3 4 5] next ID = 6
            //[1 2 4 6 8]
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else{
                ID = 0;
            }
            
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;

        },
        testing : function(){
            console.log(data);
        }
    }

})();



//UI controller
var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer : '.income__list',
        expenseContainer : '.expenses__list'
    }

    var html = '<div class="item clearfix" id="income-0"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">+ 2,100.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';


    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //'exp' or 'inc'
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function () {
            return DOMStrings;
        },
        addListItem : function (obj, type) {
            var html, newHtml, element;
            // create HTML string with placeholder text
            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">-%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        }
    }
})();

//global app controller 
var controller = (function (budgetCtrl, UIctrl) {

    var setupEventListeners = function () {
        var DOM = UIctrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
                ctrlAddItem();
            }
        });
    }

    var ctrlAddItem = function () {

        //1. Get the field input data
        var input = UIctrl.getInput();
        console.log(input);
        //2. Add new item to the to budget controller
        var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testing();
        //3. add the item to the UI
        console.log(newItem);
        UIctrl.addListItem(newItem, input.type);
    };

    return {
        init: function () {
            console.log('Application has started!');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();