//Starting with Pseudocode




// Create Players

function createPlayer() {
    let player1 = {
        name: prompt("Enter player1 name"),
    };
    let player2 = {
        name: prompt("Enter player2 name"),
    };
    assignSymbols(player1, player2);
    goingFirst(player1, player2);
    console.log(player1, player2);
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
    //Render gameboard, create players and display board

    function gameStart() {
        let players = createPlayer(player1, player2);
        console.log(players);
    }

function clearBoard() {
    const gameGrid = document.querySelectorAll('.grid-container').forEach(item => {
        item.addEventListener('click', event => {
            if()
        })
    })
}

// Update board with choices and declare winner or tie


//game end. Option to reset