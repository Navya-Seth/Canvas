canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
Color = "yellow";
ctx.beginPath();
ctx.strokeStyle = Color;
ctx.lineWidth = 4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedowm);

function mymousedowm(e){
    Color = document.getElementById("color").value;
    console.log(Color);
    mouse_x = e.clientX - canvas.offsetLeft ;
    mouse_y = e.clientY - canvas.offsetTop ;
    console.log("x =" + mouse_x + "y =" + mouse_y);
    circle(mouse_x , mouse_y)
}

function circle (mouse_x , mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = Color;
ctx.lineWidth = 4;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
    
function cleararea();{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
