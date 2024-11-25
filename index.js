
var num = document.querySelectorAll(".drum").length;
var i = 0; // Initialize i

while (i < num) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var innerButtonElement=this.innerHTML; 
        soundGenerator(innerButtonElement);
     });
  i++; // Increment i
}
function soundGenerator(key){
    switch (key) {
        case "w": var audio=new Audio("tom-1.mp3");
                   audio.play();
                   break;
        case "s": var audio=new Audio("tom-2.mp3");
                  audio.play();
                  break;
        case "a": var audio=new Audio("tom-3.mp3");
                  audio.play();
                  break;
        case "d": var audio=new Audio("tom-4.mp3");
                  audio.play();
                  break;
        case "j": var audio=new Audio("snare.mp3");
                  audio.play();
                  break;
        case "k": var audio=new Audio("crash.mp3");
                  audio.play();
                  break;
        case"l":  var audio=new Audio("kick-bass.mp3");
                  audio.play();
                  break;
       }
}
document.addEventListener("keydown",function(event){
    soundGenerator(event.key);
});

