//Path: JavaScript\Home.js
const circle = $("<svg><circle r='50%' cx='50%' cy='50%' stroke='black' fill='white'/></svg>");
const toggle = $("#toggle_btn");
const center = $("#center");
const centerchild = $("#center").children().first();
console.log(centerchild);
toggle.click(function(){
  toggle.src = "Graphics/Toggle_on.png";
  
});