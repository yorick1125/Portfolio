window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const context = canvas.getContext('2d');

    //Resizing 
   canvas.height = window.innerHeight;
   canvas.width = window.innerWidth;
/*
   context.strokeStyle = "red";
   context.strokeRect(100, 50, 200, 500);
   context.strokeStyle = "blue";
   context.strokeRect(200, 100, 200, 500);
   */
   var x = 100;
   var y = 50;
   var h = 200;
   var w = 500;
   for(var i = 0; i < 50; i++){
       context.strokeStyle = randomColor();
       context.strokeRect(x, y, h, w);
       context.strokeStyle = randomColor();
       context.strokeRect(x++, y++, h, w);
   }
   for(var i = 0; i < 50; i++){
       var zeroOrOne = Math.round(Math.random());//randomly 0 or 1
       var direction = 0;
       context.strokeStyle = randomColor();
       context.strokeRect(x, y, h, w);
       context.strokeStyle = randomColor();
       if(zeroOrOne == 0){
           direction = -1;
       }
       else{
           direction = 1;
       }

       context.strokeRect(x, y + direction, h, w);
   }



   function randomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
   }

});
