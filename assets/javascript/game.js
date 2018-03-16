var crystals = $("#crystals");
var counter = 0;
var wins = 0;
var losses = 0;
var numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
var targetNumber = Math.floor(Math.random()*(101+1)+19);

newGame()

function newGame() {
  $("#number-to-guess").text(targetNumber);
  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    if (i == 0) {
      imageCrystal.attr("src", "assets/images/crystals1.png");
    }
    if (i == 1) {
      imageCrystal.attr("src", "assets/images/crystals2.png");
    }
    if (i == 2) {
      imageCrystal.attr("src", "assets/images/crystals3.png");
    }
    if (i == 3) {
      imageCrystal.attr("src", "assets/images/crystals4.png");
    }
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystalsDiv").append(imageCrystal);
  }
}


$("#crystalsDiv").on("click", ".crystal-image", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#scoreText").text(counter)
if (counter === targetNumber) {
  alert("You win! Press Ok to keep playing");
  wins++
  $("#Wins").text(wins)
  targetNumber = Math.floor(Math.random()*(101+1)+19);
  numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
  $("#crystalsDiv").empty();
  counter = 0
  $("#scoreText").text(counter)
  newGame()
}
else if (counter >= targetNumber) {
  alert("You lose! Press Ok to keep playing");
  losses++
  $("#Losses").text(losses)
  targetNumber = Math.floor(Math.random()*(101+1)+19);
  numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
  $("#crystalsDiv").empty();
  counter = 0
  $("#scoreText").text(counter)
  newGame()
}
})
