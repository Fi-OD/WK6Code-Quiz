let startButton = document.querySelector("#start");
let choicesEl = document.querySelector("#choices");
let timer = document.querySelector("#time");

// this is where the data for the quiz is stored
let questions = [{question: "The conditions in and if / else statement is enclosed within __________ .", answers:[ "1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"], correctAnswer:3 },

{question:"Array in JavaScript can be used to store ___________ .", answers:[ "1. numbers and strings", "2. other arrays ", "3. booleans", "4. all of the above"], correctAnswer:3 },
{question:"A very useful tool used during development and debugging for printing content to the debugger is:", answers:[ "1. JavaScript", "2. Terminal / Bash", "3. for loops", "4. console.log"], correctAnswer:3 },
{question:"Commonly used data types DO NOT include:", answers:[ "1. strings", "2. booleans",  "3. alerts", "4. number"], correctAnswer:3 },

]
/*
// this function adds the class .hide to the start quiz element

function hideStart(){
    let element = document.querySelector(".start");
    element.classList.add(".hide")
}

// this function removes the .hide function from the question

function showQuestions(){
    let element = document.querySelector("#questions");
    element.classList.remove(".hide");
}
*/

let currentQuestion =0;

//this code loops through the questions
for (let index = 0; index < questions.length; index++) {

    
}

document.querySelector("#question-title").textContent = questions[0].question


// when the start button is clicked the start screen div is hidden 
// the timer starts
// the first question is made visible

startButton.addEventListener("click", function (){
        console.log("click");
       let showQuestions = document.querySelector("#questions");
       showQuestions.classList.remove("hide");



       let hideStart = document.querySelector(".start");
       hideStart.classList.add("hide");

});


   



/*todoList.addEventListener("click", function (event) {


    if (event.target.matches("button")) {
  
      let removeIndex = event.target.getAttribute("data-index");
  
  
      todos.splice(removeIndex, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
  
      renderTodos();
  
  
    }
  
  
  
  })







// clear the coices div
//increment the currentQuestion value by 1


 startButton.addEventListener("click",function(event){


 })


choicesEl.addEventListener("click",function(event){


if(event.target.matchese("button")){

    // need to make sure i was generating data index when looping over button
    // console log to make sure you can access it
    // compare the anser selected by the user with the answer that is in the correctAnswer for the current object
    // if it's a correct answer move on 
    // if incorrect punish them by subracting from the timer
    


console.log(event.target.getAttribute("data-index"))


}


})









 /*
 Array in JavaScript can be sued to store ___________ .

 1 numbers and string
 2. other arrays
 3. booleans
 4. all of the above

 A very useful tool used during development and debugging for printing content to the debugger is:

 
 1. JavaScript
 2. Terminal / Bash
 3. for loops
 4. console.log

 Commonly used data types DO NOT include:

 1. strings
 2. booleans
 3. alerts
 4. number

 The conditions in and if / else statement is enclosed within __________ .

 1. quotes
 2. curly brackets
 3. parentheses
 4. square brackets*/