canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseevent="empty";
var lx,ly;
color = "cyan";
width=6;
canvas.addEventListener("mousedown",mym);
function mym(e)
{
    mouseevent="mouseDown";

}
canvas.addEventListener("mouseup",myu);
function myu(e)
{
    mouseevent="mouseUP";

}
canvas.addEventListener("mouseleave",myl);
function myl(e)
{
    mouseevent="mouseleave";

}
canvas.addEventListener("mousemove",mymo);
function mymo(e)
{
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lx,ly);
    ctx.lineTo(x,y);
    ctx.stroke();
    }
    lx=x;
    ly=y;
}