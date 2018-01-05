var button = document.getElementsByTagName('button');

button[0].onclick = function(){
  var menu = document.getElementById('menu');
  if(menu.style.display=="none"){
    menu.style.display="block";
  }
  else {
    menu.style.display="none";
  }
}