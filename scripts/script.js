///////////////////////////////////////////////////////////////
//
//                    Countdown Timer
//
// https://www.w3schools.com/howto/howto_js_countdown.asp
///////////////////////////////////////////////////////////////


var timer =  document.querySelector(".timer");
// Set the date we're counting down to
var countDownDate = new Date("Jun 28, 2019 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  timer.innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    timer.innerHTML = "EXPIRED";
  }
}, 1000);



// variable med alle profilbilleder
var picture = document.querySelectorAll(".ProfilPicture");

// Loop igennem alle billeder
for (var i = 0; i < picture.length; i++){
  // mouseover event på det billede med mus på
  picture[i].addEventListener("mouseover", function(){
    // hover billedet og skalere den 
    this.style.transform = "scale(1.2)";
    // Finder hover billedets forrige og næste søskende node
    var nextSibling = this.nextSibling;
    var prevSibling = this.previousSibling;
    //ændre teksten opacity
    nextSibling.nextSibling.style.opacity = "1";
    prevSibling.previousSibling.style.opacity = "1";
    //ændre hvor langt fra bunden de skal sidde
    nextSibling.nextSibling.style.bottom = "10%";
    prevSibling.previousSibling.style.bottom = "100%";
  });
  // mouseout event på det billede med mus på
  picture[i].addEventListener("mouseout", function(){
    // hover billedet og skalere den 
    this.style.transform = "scale(1)";
    
    // Finder hover billedets forrige og næste søskende node
    var nextSibling = this.nextSibling;
    var prevSibling = this.previousSibling;
    //ændre teksten opacity
    nextSibling.nextSibling.style.opacity = "0";
    prevSibling.previousSibling.style.opacity = "0";
    //ændre hvor langt fra bunden de skal sidde
    nextSibling.nextSibling.style.bottom = "50%";
    prevSibling.previousSibling.style.bottom = "50%";
  });
}
