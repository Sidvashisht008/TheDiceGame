var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
var image = document.querySelectorAll("img");
image[0].setAttribute("src","dice"+randomNumber1+".png");
image[1].setAttribute("src","dice"+randomNumber2+".png");

var heading=document.querySelector("h1");
if(randomNumber1 > randomNumber2){
  heading.innerHTML = "🚩 Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
  heading.innerHTML = "Player 2 Wins 🚩";
}
else{
  heading.innerHTML = "🚩 Damn its a draw 🚩";
}
