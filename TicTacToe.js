let player1 = {};
let player2 = {};

function gameStart() {
    const gameGrid = document.querySelectorAll('.grid-item')
    turnCount = 0;
    clearBoard(gameGrid);
    playerNames();
    assignSymbols();
    goingFirst();
    doICheckWinner = false;

    gameGrid.forEach(item => {
        item.addEventListener('click', () => {
            if(item.innerHTML === "X" || item.innerHTML === "O") {
                alert("Space taken. Click on a different space")
                return
            }
            if(player1.moveCount < player2.moveCount) {
                    item.innerHTML = player1.symbol;
                    player1.moveCount += 1;
                    turnCount++
            }
            else {
                    item.innerHTML = player2.symbol;
                    player2.moveCount += 1;
                    turnCount++
            }
            if(turnCount == 9) {
                checkWinner();
            }
        })
    })

}


function checkWinner() {
    const gameGrid = document.querySelectorAll(".grid-item")
    gameGrid.forEach(item => {
        const value = item.dataset.value; // Access the data-value attribute
        console.log(`Value: ${value}, Text: ${item.textContent}`);
    
        if(item.textContent == player1.symbol || player2.symbol && item.dataset.value == 1, 2, 3) 
        {
            alert ("player wins!")
        }
        }
   )}


function winCondition() {
    const gameGrid = document.querySelectorAll(".grid-container")
    for(i = 0; i < gameGrid.length; i++) {
        if(gameGrid[0,1,2] === "X" || gameGrid[0,1,2] === "O")
        console.log("player Wins!")
        alert("Player wins!")
    }
}


// Program Win Condition and checks against using same square
    
    /* If X or O are in the followings locations, you win. 

    The dataset value returns a number but I am unsure if I can use that as an identifier for the 
    griditem. I am considering using a calling the parent container and using a
    for loop may be the ideal solution here. 


    1,2,3
    4,5,6 
    7,8,9
    1,4,7
    2,5,8
    3,6,9
    1,5,9
    3,5,7 
    */





function playerNames() {
    player1.name = prompt("Enter player1 name");
    player2.name = prompt("Enter player2 name");
}

function assignSymbols () {
    let choice = Math.floor(Math.random() * 2);
    let symbol1 = "X";
    let symbol2 = "O";
        if(choice === 1) {
        player1.symbol = symbol1;
        player2.symbol = symbol2;
        }
        else {
            player1.symbol = symbol2;
            player2.symbol = symbol1;
    }
    }

function goingFirst() {
    const heads = 1;
    const tails = 0;
    player1.moveCount = 0;
    player2.moveCount = 1;
    let player1Choice = prompt("Player 1: heads or tails");
    /*    if(player1Choice != "heads" || "tails") {
            player1Choice = prompt("Error! Choose heads to tails");
        }
    */
        if(player1Choice === "heads") {
            player1Choice = heads
        }
        else {
            player1Choice = tails;
        }
    let coinFlip = Math.floor(Math.random() * 2);
        if(coinFlip === 1 && player1Choice === 1) {
            player1.moveCount = 0;
            alert("player 1 goes first");
        } 
        else {
            player1.moveCount = 1;
            alert("player 2 goes first");
        }
}




//Game start
    //Render gameboard, create players and display boardruby
function clearBoard(gameGrid) {
    gameGrid.forEach(item => {
        item.innerHTML = "";
        console.log(item);
    })
}









// Update board with choices and declare winner or tie
