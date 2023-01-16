let startButton = document.querySelector("#start");
let choices = document.querySelector("#choices");
let timer = document.querySelector("#time");
let answerButton1 = document.querySelector("#answer1");
let answerButton2 = document.querySelector("#answer2");
let answerButton3 = document.querySelector("#answer3");
let answerButton4 = document.querySelector("#answer4");
let answerFeedback = document.querySelector("#feedback");

let countDown = 90

// this is where the data for the quiz is stored
let questions = [{question: "The conditions in and if / else statement is enclosed within __________ .", answers:[ "1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"], correctAnswer:"answer3" },
{question:"Array in JavaScript can be used to store ___________ .", answers:[ "1. numbers and strings", "2. other arrays ", "3. booleans", "4. all of the above"], correctAnswer:3 },
{question:"A very useful tool used during development and debugging for printing content to the debugger is:", answers:[ "1. JavaScript", "2. Terminal / Bash", "3. for loops", "4. console.log"], correctAnswer:3 },
{question:"Commonly used data types DO NOT include:", answers:[ "1. strings", "2. booleans",  "3. alerts", "4. number"], correctAnswer:3 },

]
//this adds the call the question content and answers
document.querySelector("#question-title").textContent = questions[0].question
document.querySelector("#answer1").textContent = questions[0].answers[0]
document.querySelector("#answer2").textContent = questions[0].answers[1]
document.querySelector("#answer3").textContent = questions[0].answers[2]
document.querySelector("#answer4").textContent = questions[0].answers[3]


// when the start button is clicked the start screen div is hidden and the first question and answer options are revealed
// the timer starts

startButton.addEventListener("click", function (){
        console.log("click");
       let showQuestions = document.querySelector("#questions");
       showQuestions.classList.remove("hide");

       let hideStart = document.querySelector(".start");
       hideStart.classList.add("hide");

       // start the timer button
    
        let intervalId = setInterval(function(){
            countDown --;
            timer.innerHTML = countDown

        },1000)



       let currentQuestion =0;

})



choices.addEventListener('click', function(event) {
  if (event.target.matches('button')) {
    const buttonId = event.target.getAttribute('id');
    //Test to see if the button chosen matches the correct answer
    console.log(buttonId);
    console.log(questions[0].correctAnswer);
    if (buttonId=== questions[0].correctAnswer){
        console.log('Correct!');
        
        let correctFeedback = document.querySelector("#feedback");
        correctFeedback.classList.remove("hide");
        document.querySelector("#feedback").innerHTML = "Correct!";
    }
    else{
        console.log('Incorrect');
        let correctFeedback = document.querySelector("#feedback");
        correctFeedback.classList.remove("hide");
        document.querySelector("#feedback").innerHTML = "Wrong, try again.";
        //remove 5 second from the timer
        countDown -=10
    }
  }
});




    /*at the end of the loop we need to clear the interval id

//when an answer is clicked a message appears saying if is correct or wrong
// if #answer[] === correct answer[] add correct answer text to #feedback and continue through loop
// if #answer[] !== correct answer[] add wrong answer text and remove 5 seconds from the timer


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