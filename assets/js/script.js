var questionEl = document.getElementById("questions");
var velocityAns = document.getElementById("velocityA");
var colorAns = document.getElementById("colorA");
var currencyAns = document.getElementById("currencyA");
var startButtonEl = document.getElementById("start");
var nextButtonEl = document.getElementById("next");
var totalSeconds = document.getElementById("seconds");
var interval;
var questionCount = 0;


var questions = [
  ["Velocity?", "Weight", "Height", "Speed", "Speed"],
  ["Color?", "White", "Blue", "Black", "Blue"],
  ["Currency?", "Dollar Bills", "Shells", "Dabloons", "Dollar Bills" ]
];

//This function should create a single question.

//Start should display questions and answers.
function displayQuestion(questionNum) {

    questionEl.innerHTML = `<h1>${questions[questionNum][0]}</h1>
    <h2 id="a1">${questions[questionNum][1]}</h2>
    <h2 id="a2">${questions[questionNum][2]}</h2>
    <h2 id="a3">${questions[questionNum][3]}</h2>`

//add variable to target answers. attach event listers to answer elements.

    var firstAns = document.getElementById("a1");
    var secondAns = document.getElementById("a2");
    var thirdAns = document.getElementById("a3");


//compare question to answers.

//Display next question.

}

// setInterval() {
//     totalSeconds = 100;

//     if (totalSeconds >= 0) {
//         totalSeconds--;
//     }
// };

// questionEl = document.append();

// console.log(questionEl);
// function renderQuestion()
// function displayQuestion()

// function startGame () {
    startButtonEl.addEventListener("click", function(){
        displayQuestion(questionCount);
    });

    nextButtonEl.addEventListener("click", function(){
        questionCount++;
        displayQuestion(questionCount);
        console.log(this.innerText);
    });