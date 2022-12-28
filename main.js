
// To get all the main id's to display computer choice, user choice and results
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.button');


// we declared userChoice  to make it accessible  globally and to be assigned later
let userChoice;
let computerChoice;
let numOfAttempts;
let userScore = 0;
let computerScore = 0;



function setAttempt(){
     // variable for storing value from user-attempt
     numOfAttempts = document.querySelector('#user-attempts').value;
     // to store the numOfAttempts to be used in gamepage.html
     localStorage.setItem('numOfAttempts',numOfAttempts);
  
}

// to get value of numOfAttempts from index page
function getAttempt(){
    numOfAttempts = localStorage.getItem('numOfAttempts');
    numOfAttempts = Number(numOfAttempts);
    console.log(numOfAttempts);
    return numOfAttempts;
    
    
}
getAttempt()
// for all the buttons gotten from line 6(possibleChoices) run this callback function when you click a button



    let attemptCounter=0;
    possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click', (e) => {
        
        // when the event e happens target and store the id in userChoice
        userChoice = e.target.id;
        //  display userChoice in  userChoiceDisplay
        userChoiceDisplay.innerHTML = userChoice;
        if (userChoice =="Rock"){
            rock();
        } else if  (userChoice == "Paper"){
            paper();
        } else if  (userChoice == "Scissors"){
            scissors();
        }
        // function for computerChoiceDisplay
        const waitPeriod = setTimeout(generateComputerChoice,500)
    
        //function for resultDispaly
        const waitResult = setTimeout(generateResult,1000);
        

        attemptCounter++;
        console.log(attemptCounter);

        const endGame = setTimeout(countAttempts,2500);

        function countAttempts(){
            if(attemptCounter == numOfAttempts){
                document.querySelector('#full-body').style.display = 'none';
                document.querySelector('.final-score').style.display='block'
                finalResult()
            }
        };

      
       
    }));

function rock(){
    document.querySelector('#user-display').style.display = 'inline-block';
    document.querySelector('#user-display').src = "./images/b.PNG"; //displays picture of userChoice
}

function paper(){
    document.querySelector('#user-display').style.display = 'inline-block';
    document.querySelector('#user-display').src = "./images/a.PNG"; //displays picture of userChoice

}

function scissors(){
    document.querySelector('#user-display').style.display = 'inline-block';
    document.querySelector('#user-display').src = "./images/c.PNG"; //displays picture of userChoice
}

// function to generate the computer's choice
function generateComputerChoice(){

    // randomChoiceNumber generates a random number from 1-3
    let randomChoiceNumber = Math.floor(Math.random() * 3 + 1);
  
    if(randomChoiceNumber === 1){
        computerChoice  = "Paper";
        document.querySelector('#computer-display').style.display = 'inline-block';
        document.querySelector('#computer-display').src = "./images/f.PNG" ;//displays picture of computer's choice
        

    } else if (randomChoiceNumber === 2){
             computerChoice  = "Rock";
             document.querySelector('#computer-display').style.display = 'inline-block';
             document.querySelector('#computer-display').src = "./images/d.PNG" ; //displays picture of computer's choice
    }  else if (randomChoiceNumber === 3){
        computerChoice = "Scissors";
        document.querySelector('#computer-display').style.display = 'inline-block';
        document.querySelector('#computer-display').src = "./images/e.PNG" ; //displays picture of computer's choice
      
    } 
    computerChoiceDisplay.innerHTML= computerChoice;
}


function trophy(){
    document.querySelector('#trophy').style.display = 'inline-block';
    document.querySelector('#trophy').src = "./images/trophy2.jpg";
}

function noTrophy(){
    document.querySelector('#trophy').style.display = 'none';
    
}
let numOfAttemptsCounter = numOfAttempts
//function to generate results
function generateResult(){
    if ((userChoice == "Paper" && computerChoice == "Rock") || (userChoice == "Scissors" && computerChoice == "Paper") || (userChoice == "Rock" && computerChoice == "Scissors")){
        resultDisplay.innerHTML = `YOU WIN, You have ${numOfAttemptsCounter-=1} attempts left`;
        userScore++
        document.querySelector('.user-score').innerHTML = userScore
        trophy();

    } else if ((userChoice == "Paper" && computerChoice == "Scissors") || (userChoice == "Scissors" && computerChoice == "Rock") || (userChoice == "Rock" && computerChoice == "Paper")){
        resultDisplay.innerHTML = `YOU LOSE, TRY AGAIN , You have ${numOfAttemptsCounter-=1} attempts left`;
        computerScore++
        document.querySelector('.comp-score').innerHTML = computerScore
        noTrophy();

    } else if ((userChoice == "Paper" && computerChoice == "Paper") || (userChoice == "Scissors" && computerChoice == "Scissors") || (userChoice == "Rock" && computerChoice == "Rock")){
        resultDisplay.innerHTML = `ITS A TIE, UNTIE IT! You have ${numOfAttemptsCounter-=1} attempts left`;
        noTrophy()

    }
}

function finalResult(){
    document.querySelector("#final-computer-score").innerHTML = computerScore
    document.querySelector("#final-user-score").innerHTML = userScore
    if(userScore > computerScore){
        document.querySelector('.win-lose').innerHTML = 'YOU WIN'
        document.querySelector('#final-image').src = "./images/winner.jpg";

    } else if(userScore < computerScore){
        document.querySelector('.win-lose').innerHTML = 'YOU LOSE! SORRY :('
        document.querySelector('#final-image').src = "./images/sadface.jpg";
    } else{
        document.querySelector('.win-lose').innerHTML = "IT'S  A  TIE"
        document.querySelector('#final-image').src = "./images/tie.jpg";
    }
}