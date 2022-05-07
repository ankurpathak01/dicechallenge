var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomImage="dice"+ randomNumber1 +".png";
var imgSource="images/" + randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgSource);
var randomNumber2=Math.floor(Math.random() * 6) + 1;
var randomImage2="dice"+randomNumber2+".png";
var imgSource2="images/" + randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imgSource2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER ONE WINS";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "PLAYER TWO WINS";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw:";
  }
  