var canvas = document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Demo Text Here", canvas.width/2, canvas.height/2);

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Demo Text Here", canvas.width/2, canvas.height/2);

var canvas = document.getElementById("myCanvas3");
var ctx=canvas.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Demo Text Here", canvas.width/2, canvas.height/2);

var canvas = document.getElementById("myCanvas4");
var ctx=canvas.getContext("2d");
ctx.font="30px Comic Sans MS";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Demo Text Here", canvas.width/2, canvas.height/2);

var splash = document.querySelector('.splash');
document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        splash.classList.add('hidden')
    },2000);

})
var button = document.querySelector('.btn');
var container = document.querySelector('.canvas');
var can = document.querySelector('.can_block');
var button2 = document.querySelector('.movebtn');
var button3 = document.querySelector('.movebtn2');
var img = document.querySelector('back-img');

document.getElementById('btn2').addEventListener("click",()=>{
    
    button.classList.add('display-btn')
    button2.classList.add('display-btn2')
    button3.classList.add('display-btn3')
    can.classList.add('display-can');
    container.classList.add('display-canvas');
    show();

}
);
var canvasWidth = window.innerWidth; 
var canvasHeight = 350;

var spriteWidth = 864; 
var spriteHeight = 280; 

var rows = 2; 
var cols = 8; 

var trackRight = 0; 
var trackLeft = 1; 

var width = spriteWidth/cols; 
var height = spriteHeight/rows; 

var curFrame = 0; 
var frameCount = 8; 

var x=0;
var y=200; 

var srcX; 
var srcY; 

var left = false; 
var right = true;

var speed = 12; 

var canvas = document.getElementById('canvas5');
canvas.width = canvasWidth;
canvas.height = canvasHeight; 

var ctx = canvas.getContext("2d");

var character = new Image(); 
character.src = "character.png";

function updateFrame(){
curFrame = ++curFrame % frameCount; 
srcX = curFrame * width; 
ctx.clearRect(x,y,width,height); 

if(left && x>0){
srcY = trackLeft * height; 
x-=speed; 
}

if(right && x<canvasWidth-width){
srcY = trackRight * height; 
x+=speed; 
}
}

function draw(){
updateFrame();
ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
}


function moveLeft(){
left = true; 
right = false; 
}

function moveRight(){
left = false;
right = true; 
}

setInterval(draw,100);

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
function show(){
    var image2 = document.getElementById("img");
    image2.style.backgroundImage = "url('background2.jpg')";
    image2.show();
}




