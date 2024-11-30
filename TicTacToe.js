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
        name: prompt("Enter your name"),
        symbol: symbol1,
    }
}


// Control game logic
function assignSymbols (player1, player2) {
    
    for(let i = 0; i > choices.length; i++) {
        let choice = Math.floor(Math.random() * 2);
        
        if(choice === 1) {
        player1.symbol = "X";
        player2.symbol = "O";
        }
    }
}

// Displaycontroller


//Game start
    //Render gameboard, create players and display board


// Update board with choices and declare winner or tie


//game end. Option to reset