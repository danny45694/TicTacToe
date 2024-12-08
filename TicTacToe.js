//Starting with Pseudocode




// Create Players

function gameStart() {
    let gameGrid = document.querySelectorAll('.grid-container')
    let players = createPlayers();
    console.log(player1, player2)
    //clearBoard(gameGrid);
    //assignSymbols(player1, player2);
    //goingFirst(player1, player2);
    //gamePlay(player1, player2);
}

function createPlayers() {
    let player1 = {
        name: prompt("Enter player1 name"),
    };
    let player2 = {
        name: prompt("Enter player2 name"),
    };
    return {player1: player1, player2: player2};
}


// Assign symbols
function assignSymbols (player1, player2) {
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

function goingFirst(player1, player2) {
    const heads = 1;
    const tails = 0;
    let player1Choice = prompt("Player 1: heads or tails");
        if(player1Choice === "heads") {
            player1Choice = heads
        }
        else {
            player1Choice = tails;
        }
    let coinFlip = Math.floor(Math.random() * 2);
        if(coinFlip === 1 && player1Choice === 1) {
            alert("player 1 goes first");
        } 
        else {
            alert("player 2 goes first");
        }
}

function gamePlay(player1, player2) {

}

//Game start
    //Render gameboard, create players and display boardruby

function clearBoard(gameGrid) {
    gameGrid.innerHTML = "";
    }

function gamePlay(player1, player2, gameGrid) {
    let player1MoveCount = 0;
    let player2MoveCount = 1;
    gameGrid.forEach(item => {
        item.addEventListener('click', event => {
            if(player1MoveCount > player2MoveCount) {
                gameGrid.innerHTML = player1.symbol;
            }
            else {
                gameGrid.innerHTML = player2.symbol;
            }
        })
    })
}

    // Update board with choices and declare winner or tie

// Game Logic

// Gameboard factory function
function gameBoard () {
    const gameBoard = [];

    gameBoard.forEach(section => {
                                                                                                                                        
    })
    for(i = 0; i > 9; i++) {
      //  const section = ();
        gameBoard.push(section[i])
    }
}