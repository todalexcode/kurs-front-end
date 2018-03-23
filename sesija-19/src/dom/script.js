var text = 'Pozdrav od Cika Radeta!';
var div = document.getElementById('rollercoaster');
var fontSize = 10;
for(var i = 0; i < text.length; i++){
  var span = document.createElement('span');
  span.style.fontSize = fontSize + 'px';
  fontSize += 5;
  span.textContent = text[i];
  div.appendChild(span);
}
