var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/dice1.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/dice2.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/dice3.png';

imgArray[3] = new Image();
imgArray[3].src = 'images/dice4.png';

imgArray[4] = new Image();
imgArray[4].src = 'images/dice5.png';

imgArray[5] = new Image();
imgArray[5].src = 'images/dice6.png';

var player1Number = Math.floor(Math.random()*imgArray.length);
var player2Number = Math.floor(Math.random()*imgArray.length);

if (player1Number < player2Number) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else if (player2Number < player1Number) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
} else {
    document.querySelector(".container h1").innerHTML = "Draw!" ;
}

document.querySelector(".container .dice .img1").src = imgArray[player1Number].src;
document.querySelector(".container .dice .img2").src = imgArray[player2Number].src;





