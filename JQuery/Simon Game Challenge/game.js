var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
// var for the level
var started = false;
var level = 0;

// the main function! for the nextSequence
function nextSequence() {
  //for the use clicked pattern
  userClickedPattern = [];

  var randomNumber = Math.floor(Math.random() * 4);
  //Assigning random number to desired color
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //plus the level when clicked
  level++;
  $("#level-title").text("Level " + level);

  //Animate flash
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
}

//sounds
function playSound() {
  $(".btn").click(function () {
    var audio = new Audio("sounds/" + this.id + ".mp3");
    audio.play();

    //play sound here if not il get echo (for some reason)?
    playSound(randomChosenColour);
  });
}

//using the .click to press for sound & animation
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  //check answer user click pattern
  checkAnswer(userClickedPattern.length - 1);
});

//Animate using the .pressed in Css
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

//started
$(document).keypress(function () {
  if (!started) {
    // selecting the title to change
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

///check
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      //Call nextSequence() delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    /// the failed part text colo calling ccs and sound
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    // the part that resets
    startOver();
  }
}
//reset
function startOver() {
  started = false;
  gamePattern = [];
  level = 0;
}
