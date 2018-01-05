var a = document.getElementsByTagName('input')[0];

a.onblur = function(){
  a.style.border="1px solid red";
}