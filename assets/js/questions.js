let startButton = document.querySelector("#start");
let choicesEl = document.querySelector("#choices")


// put all the questions within one object array
// structure question so you have an array of object this 



let questions = [{question: "The conditions in and if / else statement is enclosed within __________ .", answers:[ "1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"], correctAnswer:3 },

{question:"Array in JavaScript can be used to store ___________ .", answers:[ "1. numbers and strings", "2. other arrays ", "3. booleans", "4. all of the above"], correctAnswer:3 },
{question:"A very useful tool used during development and debugging for printing content to the debugger is:", answers:[ "1. JavaScript", "2. Terminal / Bash", "3. for loops", "4. console.log"], correctAnswer:3 },
{question:"Commonly used data types DO NOT include:", answers:[ "1. strings", "2. booleans",  "3. alerts", "4. number"], correctAnswer:3 },


]

let currentQuestion =0;

for (let index = 0; index < questions.length; index++) {


    
    
}









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