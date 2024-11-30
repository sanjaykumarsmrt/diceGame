var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll(".img11")[0];
image1.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll(".img21")[0];
image2.setAttribute("src", randomImage2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player One Wins! 1️⃣ 🚩";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player Two Wins! 2️⃣ 🚩";
}else{
    document.querySelector("h1").innerHTML = "Match Draw!";
}