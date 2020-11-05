var questionEl = document.getElementById("questions");
navEl = document.getElementById("navbar");
scoreEl = document.getElementById("score");
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
  ["Velocity?", "Weight", "Height", "Volume", "Speed", "Speed"],
  ["Color?", "White", "Blue", "Black", "Opaque", "Blue"],
  ["Currency?", "Dollar Bills", "Shells", "Doubloons", "Pokemon", "Dollar Bills"]
  // ["Your score is...", " "," "," "," "," "]
];

//This function should create a single question.

//This should display questions and answers.
function displayQuestion(questionNum) {

    questionEl.innerHTML = `<h1>${questions[questionNum][0]}</h1>
    <button id="a1">${questions[questionNum][1]}</button>
    <button id="a2">${questions[questionNum][2]}</button>
    <button id="a3">${questions[questionNum][3]}</button>
    <button id="a4">${questions[questionNum][4]}</button>`

//add variable to target answers. attach event listers to answer elements.


    var firstAns = document.getElementById("a1");
    var secondAns = document.getElementById("a2");
    var thirdAns = document.getElementById("a3");
    var fourthAns = document.getElementById("a4");
    
    // console.log(firstAns);

    questionEl.addEventListener("click", function(event){
      event.preventDefault();
      
      var rightAns = questions[questionNum][5];

      var questionTar = event.target;

      if (questionTar.textContent == rightAns){
          secondsLeft += 5;
          // alert("right answer!")
      }
        else{
          // alert("wrong answer!")
          secondsLeft -= 5;
        };

      questionCount++;
    

      displayQuestion(questionCount);


    }, {once: true});
    
   
    };
//compare question to answers.
// firstAns.addEventListener("click" function() {
//     if(firstAns === questionNum[5]){
//         alert("that's the right answer!")
//     }
// });

var secondsLeft = 5;

function startTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if (secondsLeft <= 0) {
        clearInterval(timerInterval);
      };

    }, 1000);
  
    
    startButtonEl.style.display = "none";
    
    submitButtonEl.addEventListener("click", function() {
      clearInterval(timerInterval);
      questionEl.style.display = "none"
      navEl.style.display = "none"
      nextButtonEl.style.display = "none"
      submitButtonEl.style.display = "none"
      timeEl.style.display = "none"
      scoreEl.innerText = "Your score is... \n \n" + secondsLeft.toString() + " pts!\n"; 
        });
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