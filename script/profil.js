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
    nextSibling.nextSibling.style.bottom = "0%";
    prevSibling.previousSibling.style.bottom = "85%";
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
