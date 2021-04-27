var color ="black";
var width ="2";
var radius ="35";
var mode1 ="light";
var currentx,currenty;
var lastx,lasty;
var mouseEvent ="empty";
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",click);

function click(e){
mouseEvent="mouseDown";
color = document.getElementById("input").value;

width = document.getElementById("input2").value;

radius = document.getElementById("input3").value;

}
canvas.addEventListener("mouseup",click2);

function click2(e){
mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",click3);

function click3(e){
mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",click4);

function click4(e){
currentx = e.clientX-canvas.offsetLeft;
currenty = e.clientY-canvas.offsetTop;
if(mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(currentx,currenty,radius,0,2*Math.PI)
    ctx.stroke();
    console.log(currentx,currenty);
    console.log(lastx,lasty);
}
lastx = currentx;
lasty = currenty;
}
function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}
function changeforachange(){
    mode1 = document.getElementById("mode").value;

if (mode1 == "light") {
    document.getElementById("myCanvas").style.backgroundColor ="white";
    color = "black";
    document.getElementById('input').value ='black';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
if (mode1 == "dark") {
    document.getElementById("myCanvas").style.backgroundColor ="black";
    color = "white";
    document.getElementById('input').value ='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
}