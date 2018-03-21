var selectElements = document.getElementsByName('cssProperty');
var divModify = document.getElementById('modify');

function set () {
    for(var i = 0; i < selectElements.length; i++){
        //mi smo izvukli jedan css rule - prop + value
        var cssProperty = selectElements[i].getAttribute('id');
        var cssValue = selectElements[i].value;
        //taj rule treba primeniti na divModify:
        divModify.style[cssProperty] = cssValue;
    }
}

document.getElementById('set').addEventListener('click', set);
