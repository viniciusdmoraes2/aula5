let canv =document.getElementById("myCanvas")
let ctx = canv.getContext("2d")

let posX = 300;
let posY = 200;

let radius = 40; 

let speedX = Math.random() * 10 - 5 ;//velocidade
let speedY = Math.random() * 10 - 5 ;//velocidade

function Desenha()
{
    ctx.clearRect(0, 0, canv.width, canv.height);
    posX += speedX; //soma speed ao valor posX
    posY += speedY  //soma speed ao valor posY
    if (posX > canv.width - radius|| posX < radius)
        speedX = - speedX;
    if (posY > canv.height - radius || posY < radius)
        speedY = -speedY;
    ctx.strokeStyle = "black";
    ctx.beginPath()
    ctx.arc(posX, posY, radius, 3, 5*Math.PI);
    
    ctx.stroke();
}

setInterval(Desenha, 20); //chama a funçao a cada 20 

