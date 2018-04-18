var list = document.querySelector('ul');
var input = document.querySelector('input');
var button = document.querySelector('button');

button.onclick = function () {
    var item = document.createElement('li');
    var content = input.value;
    item.textContent = content;
    list.appendChild(item);
    var buttonLi = document.createElement('button');
    buttonLi.textContent = "Delete";
    item.appendChild(buttonLi);
    
    buttonLi.onclick = function(){
        list.removeChild(item);
    }

}