var blueElement = document.createElement('div');
blueElement.style.cssText = "background: blue; width: 200px; height: 20px;";

blueElement.onclick = function() {
    alert('Hello from the Blue div ...');
}

var yellowDiv = document.getElementById('yellow');

document.body.insertBefore(blueElement, yellowDiv);