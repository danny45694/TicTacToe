//Starting with Pseudocode


// Gameboard factory function
function gameBoard () {
    const gameBoard = [];
    for(i = 0; i > 9; i++) {
      //  const section = ();
        gameBoard.push(section[i])
    }
}

// Create Players

function createPlayer() {
    let player1 = {
        name: prompt("Enter player1 name"),
    };
    let player2 = {
        name: prompt("Enter player2 name"),
    };
    assignSymbols(player1, player2);
}


// Control game logic
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

// Game Logic

function gamePlay(player1, player2) {

}

//Game start
    //Render gameboard, create players and display board

function gameStart() {
    let players = createPlayer(player1, player2);
    console.log(players);
}

// Update board with choices and declare winner or tie


//game end. Option to reset