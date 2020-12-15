const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "W":
        break;
      default:
    }
  });
}

//  var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
