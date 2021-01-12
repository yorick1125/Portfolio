 window.addEventListener('load', () => {
     const canvas = document.querySelector('#canvas');
     const context = canvas.getContext('2d');

    //Resizing 
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    //variables
    let isPainting = false;
    var color = "rgb(0, 0, 0)";
    var brushSize = 10;
    
    //Gets color based on button pressed
    document.getElementById("Red").onclick = function(){
        color = "rgb(255, 0, 0)";
    }

    document.getElementById("Green").onclick = function(){
        color = "rgb(0, 255, 0)";
    }

    document.getElementById("Blue").onclick = function(){
        color = "rgb(0, 0, 255)";
    }

    document.getElementById("White").onclick = function(){
        color = "rgb(255, 255, 255)";
    }

    document.getElementById("Black").onclick = function(){
        color = "rgb(0, 0, 0)";
    }

    document.getElementById("Clear").onclick = function(){
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    document.getElementById("Small").onclick = function(){
        brushSize = 5;
    }

    document.getElementById("Medium").onclick = function(){
        brushSize = 10;
    }

    document.getElementById("Large").onclick = function(){
        brushSize = 15;
    }
    
    function startPosition(e){
        isPainting = true;
        draw(e);
    }
    function finishedPosition(){
        isPainting = false;
        context.beginPath();
    }
    function draw(e){
        if(isPainting){
            context.lineWidth = brushSize;
            context.lineCap = "round";

            context.strokeStyle = color;
            context.lineTo(e.clientX, e.clientY - 31.6);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX, e.clientY - 31.6);
        }
        else{
            return;
        }
    }
    //EventListeners
    canvas.addEventListener('mousedown', startPosition);//starts painting when mouse is pressed
    canvas.addEventListener('mouseup', finishedPosition);//stops painting when mouse is released
    canvas.addEventListener('mousemove', draw);//


 });





