window.onload = choosePic;

var myPix = new Array("../assets/headshots/vangoghheadshot1.png", "../assets/headshots/vangoghheadshot2.png", "../assets/headshots/vangoghheadshot3.png", "../assets/headshots/vangoghheadshot4.png", "../assets/headshots/matisseheadshot.png", "../assets/headshots/watercolorheadshot.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("headshot-photo").src = myPix[randomNum];
     console.log(myPix[randomNum]);
     console.log("testing");
}