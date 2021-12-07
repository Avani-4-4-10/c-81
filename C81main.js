canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
console.log(ctx)
var color="red"

ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(100,200,30,0,2*Math.PI)
ctx.stroke()

canvas.addEventListener( "mousedown",my_mousedown)
function my_mousedown(e){
    console.log(e)
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y)
}
function circle(x,y){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=2
    ctx.arc(x,y,30,0,2*Math.PI)
    ctx.stroke() 
}
