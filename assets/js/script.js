var questionEl = document.getElementById("questions");
navEl = document.getElementById("navbar");

scoreEl = document.getElementById("score");
scoreInputEl = document.getElementById("scoreInput")
formBoxEl = document.getElementById("formBox")
var setScoreEl = document.getElementById("setScore")
var startButtonEl = document.getElementById("start");
var nextButtonEl = document.getElementById("next");
var submitButtonEl = document.getElementById("submit");
var timeEl = document.querySelector(".time");
var interval;
var questionCount = 0;

setScoreEl.style.display = "none"
scoreEl.style.display = "none"
formBoxEl.style.display = "none"
nextButtonEl.style.display = "none"
submitButtonEl.style.display = "none"

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


    // var firstAns = document.getElementById("a1");
    // var secondAns = document.getElementById("a2");
    // var thirdAns = document.getElementById("a3");
    // var fourthAns = document.getElementById("a4");
    
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
          secondsLeft -= 3;
        };

      questionCount++;
    console.log(questionCount);

      displayQuestion(questionCount);


    }, {once: true});
    
   
    };
//compare question to answers.
// firstAns.addEventListener("click" function() {
//     if(firstAns === questionNum[5]){
//         alert("that's the right answer!")
//     }
// });

var secondsLeft = 10;

function startTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if (secondsLeft <= 0 || questionCount >= questions.length) {
        clearInterval(timerInterval);
        timeEl.style.animation = "glowing 999999ms infinite";
        nextButtonEl.style.display = "none"
        submitButtonEl.style.display = "block"

      };

    }, 1000);
  
    
    startButtonEl.style.display = "none";
    
    submitButtonEl.addEventListener("click", function() {
      clearInterval(timerInterval);
      questionEl.style.display = "none"
      navEl.style.display = "none"
      submitButtonEl.style.display = "none"
      timeEl.style.display = "none"
      nextButtonEl.display = "none"
      scoreEl.style.display = "block"
      formBoxEl.style.display = "block"
      setScoreEl.style.display = "block"
      //--------------------------------------------------------------------------------//
      scoreEl.innerText = "Your score is... \n" + secondsLeft.toString() + " units!\n"; 
      
      document.getElementById("formBox").addEventListener("submit", function(event){
        
        event.preventDefault();
        
        if (localStorage.getItem("highScores") === null) {
          localStorage.setItem("highScores", JSON.stringify([]))
        }
        
        var highScores = JSON.parse(localStorage.getItem("highScores"));

        highScores.push(scoreInputEl.value + "------" + secondsLeft);
        
        localStorage.setItem("highScores", JSON.stringify(highScores))

        displayHighScores();
        
      })
    });
  };
  
  
  function displayHighScores(){
    
    document.body.innerHTML = `<h1 id="nameColumns">High Scores</h1>
    <ul id=scoreList></ul><button id="clearButton">C L E A R</button>
    <button id=startOver>B E G I N &nbsp;&nbsp; A G A I N</button>`
    
    var scoreList = document.getElementById("scoreList")
    
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
    for (i = 0; i < highScores.length; i++){
      
      var liNode = document.createElement("li")
      
      liNode.innerHTML = highScores[i]
      scoreList.append(liNode)
          
      // highScores.sort(function(a, b){
      //       return
      //       b.final - a.final
      // })

      // highScores.splice(5);
      // localStorage.setItem("highScores");
  }
  //---------------------------------------------------------------------//

  clearButton.addEventListener("click", function(){
  clearLocalStorage();
  displayHighScores();
  clearButton.style.display = "none"
  });

  startOver.addEventListener("click", function(){
  location.reload();
  });

  }


function clearLocalStorage(){
  localStorage.clear();
}    


    startButtonEl.addEventListener("click", function(){
        startTimer();
        displayQuestion(questionCount);
        nextButtonEl.style.display = "block"
    });
  

    nextButtonEl.addEventListener("click", function(){
        questionCount++;
        displayQuestion(questionCount);
        console.log(this.innerText);
    });