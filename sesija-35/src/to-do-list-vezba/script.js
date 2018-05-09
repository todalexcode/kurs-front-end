//Zavrsiti primer kod kuce:
//1. Naci bugove (pre svega handle-ovati brisanje iz modela!!!)
//2. Promeniti code

var model = (function () {
	var items = [];
	
	function ToDoItem(todoText) {
		this.ToDo = todoText;
		this.done = false;
	}

	function isItemInArray(item){
		var isFound = false;
		
		for(var i = 0; i < items.length; i ++){
			if (item === items[i].ToDo){
				isFound = true;
			}
		}
		
		return isFound;
	}

	return {
		addNewItemToModel : function (text) {
			var item = new ToDoItem(text);
			if(!isItemInArray(text)){
				items.push(item);
				return item;
			}
			else {
				console.log('Sorry, ' + text + ' already exsist');
				return -1;
			}
			
		},
		allToDoItems: function () {
			return items;
		},
		changeDoneStatus(text, val){
			items.forEach(function(current) {
				if(current.ToDo === text){
					current.done = val;
				}
			});
		}
	}

})();

var view = (function () {

	var DOMStrings = {
		myList : 'myList',
		userInput : 'userInput',
		addButton : 'button1',
		deleteButton : 'button2'
	};



	return {
		getInput: function(){
			return document.getElementById(DOMStrings.userInput).value;
		},
		
		deleteItemFromView: function(){
			var list = document.getElementById(DOMStrings.myList);
			var listItems = list.children; 					
			for (var i = 0; i < listItems.length; i++) {
				if (listItems[i].children[0].checked) {
					listItems[i].parentElement.removeChild(listItems[i]);
				}
			}
		},
	
		checkBoxChanged : function(e){
			console.log(e);
		},

		addItemToView : function(text){
			var list = document.getElementById(DOMStrings.myList); 
			var listItem = document.createElement("li");  
	
			// creates checkbox
			var checkBoxLi = document.createElement("input");
			checkBoxLi.setAttribute("type", "checkbox");
			checkBoxLi.addEventListener("onchange", function(){
				this.checkBoxChanged(text)
			} );
	
	
			// puts user's input into <span>
			var spanElement = document.createElement("span");
			spanElement.innerText = text;
			spanElement.setAttribute("class", "precrtano")
	
			listItem.appendChild(checkBoxLi);				
			listItem.appendChild(spanElement);				
			list.appendChild(listItem);						
	
			userInput.value = "";			
		},


		getDOMStrings: function() {
            return DOMStrings;
        }
	}
})();

var controller = (function (m, v) {
	var setupEventListeners = function () {
		var DOM = v.getDOMStrings();
		var addButton = document.getElementById(DOM.addButton);
		addButton.onclick = ctrlAddNewItem;

		var delButton = document.getElementById(DOM.deleteButton);
		delButton.onclick = ctrlDeleteItem;

		document.getElementById(DOM.myList).addEventListener('click', ctrlClick);
	};

	var ctrlClick = function(event){
		
		var itemText = event.target.parentElement.children[1].textContent;
		var isChecked = event.target.checked;
		console.log(itemText);
		console.log(isChecked);

		m.changeDoneStatus(itemText, isChecked);
	}

	var ctrlAddNewItem = function () {
		//get input from the view
		var newItem;
		var input = v.getInput();
		if (input.trim() !== ''){
			
			var mNewItemm = m.addNewItemToModel(input);
			console.log(mNewItemm);
			if (mNewItemm !== -1){
				newItem = v.addItemToView(input);
				v.checkBoxChanged(input);
			}
		}
	};

	var ctrlDeleteItem = function(){
		v.deleteItemFromView();
	}

	return {
		init: function () {
			setupEventListeners();
		}
	}

})(model, view);

controller.init();