var questionEl = document.getElementById("questions");
// var velocityAns = document.getElementById("velocityA");
// var colorAns = document.getElementById("colorA");
// var currencyAns = document.getElementById("currencyA");
var startButtonEl = document.getElementById("start");
var nextButtonEl = document.getElementById("next");
var submitButtonEl = document.getElementById("submit");
var timeEl = document.querySelector(".time");
var interval;
var questionCount = 0;

var questions = [
  ["Velocity?", "Weight", "Height", "Speed", "Speed"],
  ["Color?", "White", "Black", "Blue", "Blue"],
  ["Currency?", "Shells", "Dabloons", "Dollar Bills", "Dollar Bills"]
];

//This function should create a single question.

//This should display questions and answers.
function displayQuestion(questionNum) {

    questionEl.innerHTML = `<h1>${questions[questionNum][0]}</h1>
    <h2 id="a1">${questions[questionNum][1]}</h2>
    <h2 id="a2">${questions[questionNum][2]}</h2>
    <h2 id="a3">${questions[questionNum][3]}</h2>`

//add variable to target answers. attach event listers to answer elements.

    var velocityWrong;
    velocityWrong = questions[0][1, 2, 3].innerText;

    console.log(velocityAns);
    var secondAns = document.getElementById("a2");
    var thirdAns = document.getElementById("a3");


//compare question to answers.

//Display next question.

}

var secondsLeft = 100;

function startTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  };

  
    startButtonEl.addEventListener("click", function(){
        startTimer();
        displayQuestion(questionCount);
    });

    nextButtonEl.addEventListener("click", function(){
        questionCount++;
        displayQuestion(questionCount);
        console.log(this.innerText);
    });