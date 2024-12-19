//Starting with Pseudocode


// Create Players

function gameStart() {
    const gameGrid = document.querySelectorAll('.grid-item')
    clearBoard(gameGrid);
    const getPlayers = players();
    getPlayers.createPlayers();
    console.log(getPlayers);
}



const gameGrid = document.querySelectorAll('.grid-item')
    
    // This bottom forEach function appears to have a different scope.
    // Console.log is not logging anything which means the code after the 
    // click does not register.

function gamePlay() {
    console.log(players)
    gameGrid.forEach(item => {
        item.addEventListener('click', () => {
            if(players.player1.moveCount > players.player2.moveCount) {
                item.innerHTML = player1.symbol;
                player1.moveCount += 1;
            }
            else {
                item.innerHTML = player2.symbol;
                player2.moveCount += 1;
            }
        })
    })
};


const players = function () {
    let player1 = {};
    let player2 = {};

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

    function createPlayers() {
        playerNames();
        assignSymbols();
        goingFirst();
    }

    return {
        createPlayers
    };
};






// Assign symbols





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








// Update board with choices and declare winner or tie
