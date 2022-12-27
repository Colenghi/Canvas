var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;

   
    canvas.addEventListener("mousedown", my_mousedown)

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    /*
    Crie um event listener para "mousemove"
    e chame a função my_mousemove
    */

canvas.addEventListener("mousemove", my_mousemove)

    function my_mousemove(e)
    {
        
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseX = e.clientX - canvas.offsetRight;

       
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }

    canvas.addEventListener("mouseup",my_mouseup )

    function my_mouseup(e)
    {
        
        currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        currentPositionOfMouseX = e.clientX - canvas.offsetRight;

       
        currentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseup") {
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }
    
 canvas,addEventListener("mouseleave",my_mouseleave)

 function my_mouseleave(e)
 {
     
     currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
     currentPositionOfMouseX = e.clientX - canvas.offsetRight;

    
     currentPositionOfMouseY = e.clientY - canvas.offsetTop;

     if (mouseEvent == "mouseleave") {
     console.log("Posição atual das coordenadas x e y= ");
     console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = widthOfLine;
     ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
     ctx.stroke();
     }

 }    

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
