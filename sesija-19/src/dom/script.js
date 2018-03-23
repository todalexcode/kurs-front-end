var text = 'dobro dosli u code.edu.rs';
var div = document.getElementById('rollercoaster');
var fontSize = 10;
for (var i = 0; i < text.length; i++) {
  var span = document.createElement('span');
  fontSize += 5;
  span.style.fontSize = fontSize + 'px';
  span.textContent = text[i];
  div.appendChild(span);
}
