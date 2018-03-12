$(document).ready(function () {

    // variables

    var totalScore = 0;
    var wins = 0;
    $("#wins").text(wins);
    var losses = 0;
    $("#losses").text(losses);

    var numberChosen = Math.floor(Math.random() * 120 - 19 + 1) + 19;
    $("#number-chosen").text(numberChosen);
    console.log("Number Chosen = " + numberChosen);

    var aquaValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
    console.log("Aqua Value = " + aquaValue);
    var greenValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
    console.log("Green Value = " + greenValue);
    var redValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
    console.log("Red Value = " + redValue);
    var yellowValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
    console.log("Yellow Value = " + yellowValue);

    // functions

    function newGame() {
        numberChosen = Math.floor(Math.random() * 120 - 19 + 1) + 19;
        $("#number-chosen").text(numberChosen);
        console.log("Number Chosen = " + numberChosen);

        totalScore = 0;
        $("#totalScore").text(totalScore);

        aquaValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
        console.log("Aqua Value = " + aquaValue);
        greenValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
        console.log("Green Value = " + greenValue);
        redValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
        console.log("Red Value = " + redValue);
        yellowValue = Math.floor(Math.random() * 12 - 1 + 1) + 1;
        console.log("Yellow Value = " + yellowValue);
    }

    function winOrLose() {
        if (totalScore === numberChosen) {
            alert("Congrats! You Win!");
            wins++;
            $("#wins").text(wins);
            newGame();
        } else if (totalScore > numberChosen) {
            alert("Bummer, but you went above " + numberChosen + " and hit " + totalScore + ". Please try again.");
            losses++;
            $("#losses").text(losses);
            newGame();
        }
    }

    // logic

    $(".aqua").on("click", function () {
        totalScore += aquaValue;
        $("#totalScore").text(totalScore);
        console.log("Total Score = " + totalScore);
        winOrLose();
    })

    $(".green").on("click", function () {
        totalScore += greenValue;
        $("#totalScore").text(totalScore);
        console.log("Total Score = " + totalScore);
        winOrLose();
    })

    $(".red").on("click", function () {
        totalScore += redValue;
        $("#totalScore").text(totalScore);
        console.log("Total Score = " + totalScore);
        winOrLose();
    })

    $(".yellow").on("click", function () {
        totalScore += yellowValue;
        $("#totalScore").text(totalScore);
        console.log("Total Score = " + totalScore);
        winOrLose();
    });

});

