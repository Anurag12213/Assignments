function changeColor(){
  var pattern='0123456789ABCDEF';
  var color = "#";
  for(var i=0;i<6;i++){
    color+=pattern[Math.floor(Math.random() * 16)];
  }
  return color;
}
function moveBox(){
  var box = document.getElementById("shape");
  var top = Math.floor(Math.random() * 300);
  var left = Math.floor(Math.random() * 300);
  var wh=Math.floor(Math.random() * 200)+100;
  box.style.top = top + "px";
  box.style.left = left + "px";
  box.style.width = wh + "px";
  box.style.height = wh + "px";
  document.getElementById("shape").style.display="block";
  document.getElementById("shape").style.backgroundColor=changeColor();
}
var start=new Date().getTime();
var end=new Date().getTime();
document.getElementById("shape").onclick=()=>{
  document.getElementById("shape").style.visibility="none";
  var end=new Date().getTime();
  timeTaking=end-start;
  alert(timeTaking/1000+"s");
  moveBox();
}
