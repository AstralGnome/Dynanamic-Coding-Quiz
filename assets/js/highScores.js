scoreEl = document.getElementById("score");
scoreInputEl = document.getElementById("scoreInput")
formBoxEl = document.getElementById("formBox")

  // get inputted name and store with score in local storage

  // get local storage
  // if(localStorage.getItem("score") === null) {
  //   localStorage.setItem("score", JSON.stringify(theObject))

  // }

  //if scores are already scored, retrieve them first then add to them before...time

  //navigate to high scores page

scoreInputEl.addEventListener("return", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = scoreInputEl.value.trim()
  console.log(user);
  // validate the fields
  if (user.value === "") {
    displayMessage("error", "Name cannot be blank");

  }else{
    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    
    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));
    
    // userFirstNameSpan.textContent = lastUser.firstName;

  }
});
