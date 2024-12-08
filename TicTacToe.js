//Starting with Pseudocode


// Create Players

function gameStart() {
    let gameGrid = document.querySelectorAll('.grid-item')
    let player1 = {};
    let player2 = {};
    let moveCount1 = 0;
    let moveCount2 = 1;
    createPlayers(player1, player2); 
    clearBoard(gameGrid);
    assignSymbols(player1, player2);
    goingFirst(player1, player2, moveCount1, moveCount2);
    gamePlay(gameGrid, player1, player2, moveCount1, moveCount2);
}

function createPlayers(player1, player2) {
    player1.name = prompt("Enter player1 name");
    player2.name = prompt("Enter player2 name");
    console.log(player1, player2);
    return {player1, player2}
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
            alert("player 1 goes first");
        } 
        else {
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



/* function testing() {
const nodeList = document.querySelectorAll('.grid-item')

    nodeList.forEach(node => {
        console.log(node);
    })
}
*/


function gamePlay(player1, player2, gameGrid, moveCount1, moveCount2) {
    gameGrid.forEach(item => {
        item.addEventListener('click', event => {
            if(moveCount1 > moveCount2) {
                item.innerHTML = player1.symbol;
                moveCount1 += 1;
            }
            else {
                item.innerHTML = player2.symbol;
                moveCount2 += 1;
            }
        })
    })
}



// Update board with choices and declare winner or tie
