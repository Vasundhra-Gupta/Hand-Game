let option = document.querySelectorAll(".option"); //array
let message = document.querySelector(".msg");
let win = document.querySelector(".winner");
let user = document.querySelector(".user");
let comp = document.querySelector(".comp");
let attempts = 0;
let userScore = 0;
let compScore = 0;
let drawsNum = document.querySelector(".draw");
let draw = 0;
//winner
showWinner = (userChoice, userWin, compChoice) => {
    // console.log("Computer choice final", compChoice);
    // console.log("User choice final", userChoice);
    message.innerHTML = `Computer Chose ${compChoice}. <br> You Chose ${userChoice}`;

    if (userWin) {
        // console.log(`You win! Your ${userChoice} beats computer's ${compChoice}.`);
        win.innerHTML = `You win! Your ${userChoice} beats computer's ${compChoice}.`;
        userScore++;
        user.innerHTML = userScore;
        // user.style.backgroundColor="rebeccapurple"
        win.style.backgroundColor = "yellowGreen";
    } else {
        // console.log(`You Lose! Computer's ${compChoice} beats Your ${userChoice}.`);
        win.innerHTML = `You Lose! Computer's ${compChoice} beats Your ${userChoice}.`;
        compScore++;
        comp.innerHTML = compScore;
        comp.style.backgroundColor = "rebeccapurple";
        win.style.backgroundColor = "red";
    }

    if (attempts == 10) {
        if (userScore > compScore) {
            alert(
                `!!You won!!. Your Total score is ${userScore} and Computer's Total score is ${compScore} out of 10 and Number of draw Matches are ${draw}.`
            );
        } else if (userScore == compScore) {
            alert(`Match was Draw. Because both got ${userScore} and Number of draw Matches are ${draw}.`);
        } else {
            alert(
                `!!Computer won!!. Computer's Total score is ${compScore} and Your Total score is ${userScore} out of 10 and Number of draw Matches are ${draw}.`
            );
        }
        location.reload();
    }
};

//game
function playGame(userChoice) {
    compChoice = getRandom();
    if (userChoice == compChoice) {
        message.innerHTML = `Both Chose ${compChoice}.`;
        win.innerHTML = "Game was Draw.";
        win.style.backgroundColor = "blueviolet";
        draw++;
        drawsNum.innerHTML = draw;
        // console.log(`Game is Draw. Both got ${compChoice}.`);
    } else {
        let userWin = true;
        if (userChoice == "snake") {
            userWin = compChoice == "water" ? true : false;
        } else if (userChoice == "water") {
            userWin = compChoice == "gun" ? true : false;
        } else {
            userWin = compChoice == "snake" ? true : false;
        }
        showWinner(userChoice, userWin, compChoice);
    }
}

//start
let object = ["snake", "water", "gun"];
//Generating compChoice
function getRandom() {
    let rand = Math.floor(Math.random() * 3);
    let compChoice = object[rand];
    return compChoice;
}

//Take userChoice
option.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        attempts++;
        console.log(attempts);
        if (attempts > 10) {
            console.log("exit.");
            return;
        }
        playGame(userChoice);
    });
});
