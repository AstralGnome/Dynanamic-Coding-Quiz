//score is from index.html
var scoreEl = document.getElementById("score");

var scoreInputEl = document.getElementById("scoreInput");
var formBoxEl = document.getElementById("formBox");
var highScoreList = document.getElementById("high-scores");



var contestants = [];


function scoreList(){
    var storedArray = JSON.parse(localStorage.getItem("playerListHighScores"));
    console.log(storedArray);

    for(i = 0; i < contestants.length; i++){
        var li = document.createElement("li");
        li.innerHTML =  "<span>Initials:</span>"+ storedArray[i].name + 
        "  <span>Score:</span>" + storedArray[i].score + 
        " <span>Time:</span>" + storedArray[i].time;
        listHighscores.append(li);
    }
}
