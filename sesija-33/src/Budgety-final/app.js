var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percantage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percantage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percantage = -1;
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.percantage;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    var updatePercentage = function(){
        //1. Calculate percentage

        //2. Read percentage from the budget controller

        //3. Update the UI with the new percentage
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //[1 2 3 4 5] next ID = 6
            //[1 2 4 6 8]
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else {
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

        deleteItem: function (type, id) {
            var ids, index;
            ids = data.allItems[type].map(function (current) {
                return current.id;
            });
            console.log(ids);
            index = ids.indexOf(id);
            console.log(index);
            if(index !== -1 ){
                data.allItems[type].splice(index, 1);
            }
        },

        testing: function () {
            console.log(data);
        },
        calculateBudget: function () {
            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            //Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            //calculate the percantage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }
            else {
                data.percentage = -1;
            }

        },

        calculatePercentages : function(){
            data.allItems.exp.forEach(function(curr){
                curr.calcPercentage(data.totals.inc);
            });
        },

        getPercentages : function(){
            var allPerc = data.allItems.exp.map(function(curr){
                return curr.getPercentage();
            });
            return allPerc;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percantage: data.percentage
            };
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
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var html = '<div class="item clearfix" id="income-0"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">+ 2,100.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';


    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //'exp' or 'inc'
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        getDOMStrings: function () {
            return DOMStrings;
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;
            // create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">-%value%</div><div class="item__percentage">10%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem : function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function () {
            var inpDesc, inpValue;

            inpDesc = document.querySelector(DOMStrings.inputDescription);
            inpDesc.value = "";
            inpValue = document.querySelector(DOMStrings.inputValue);
            inpValue.value = "";
        },

        displayPercentages : function(percentages){
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);

            var nodeListForEach = function(list, callback){
                for(var i = 0; i < list.length; i ++){
                    callback(list[i],i);
                }
            };

            nodeListForEach(fields, function(current, index){
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        displayBudget: function (obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
            if (obj.percantage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percantage + '%';
            }
            else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    }

    var updateBudget = function () {
        //1. calculate budget
        budgetCtrl.calculateBudget();
        //2. return the budget
        var budget = budgetCtrl.getBudget();
        //3 display budget on the UI
        console.log(budget);
        UIctrl.displayBudget(budget);
    };

    var updatePercentages = function(){
        //1. calculate percentages 
        budgetCtrl.calculatePercentages();
        //2. read percentages from budg. controll.
        var percentages = budgetCtrl.getPercentages();

        //3. update UI with the new percentages
        console.log(percentages);
        UIctrl.displayPercentages(percentages);
    };

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
        //4. clear fields
        UIctrl.clearFields();
        //5. update budget
        updateBudget();
        //6. update percentages
        updatePercentages();
    };

    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //1. delete the item from data structure
            budgetCtrl.deleteItem(type, ID);
            //2. Delete the item from HTML
            UIctrl.deleteListItem(itemID);
            //3. Update and show the new budget
            updateBudget();
            //4. update percentages
            updatePercentages();
        }

    };

    return {
        init: function () {
            console.log('Application has started!');
            UIctrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percantage: -1
            });
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();

/* Ivan resio 
var prom = 'inc';

var obj = {
    inc : 200,
    exp : 100
}
*/