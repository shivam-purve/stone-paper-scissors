let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock ,paper,scissors
   const randIdx =  Math.floor(Math.random() * 3);
   return options[randIdx];


}

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "game was draw.Play again.";
    msg.style.backgroundColor = "#081b31";
}  

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win!");
        msg.innerText = `You win! your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose");
        msg.innerText =`You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp-scissor,paper
            userWin = compChoice === "paper" ? false :true;
        }
        else if(userChoice === "paper"){
            // comp choice-scissor,rock
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            //comp-rock,paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

        
    
    






choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
          const userChoice = choice.getAttribute("id");
        //   console.log("choice was clicked", choiceId);
        playGame(userChoice);


    });
});
