let player1 = {};
let player2 = {};

function gameStart() {
    const gameGrid = document.querySelectorAll('.grid-item')
    clearBoard(gameGrid);
    playerNames();
    assignSymbols();
    goingFirst();


    gameGrid.forEach(item => {
        item.addEventListener('click', () => {
            if(item.innerHTML === "X" || item.innerHTML === "O") {
                alert("Space taken. Click on a different space")
                return
            }
            if(player1.moveCount < player2.moveCount) {
                    item.innerHTML = player1.symbol;
                    player1.moveCount += 1;
            }
            else {
                    item.innerHTML = player2.symbol;
                    player2.moveCount += 1;
            }
        })
    })
}


// Program Win Condition and checks against using same square

function winCondition() {
    /* If X or O are in the followings locations, you win. 
    1,2,3
    4,5,6 
    7,8,9
    1,4,7
    2,5,8
    3,6,9
    1,5,9
    3,5,7 
    */
}




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
