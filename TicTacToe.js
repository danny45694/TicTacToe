let player1 = {};
let player2 = {};

let startBtn = document.querySelector('#startGame');

startBtn.addEventListener('click', () => {
    gameStart();
})

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
            while(item.innerHTML === "X" || item.innerHTML === "O") {
                alert("Space taken. Click on a different space");
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
                    winCondition();
                }
        })
    })

}


function winCondition() {
    const gameGrid = document.querySelectorAll(".grid-item")
    
    const cell1 = gameGrid[0].innerHTML;
    const cell2 = gameGrid[1].innerHTML;
    const cell3 = gameGrid[2].innerHTML;
    const cell4 = gameGrid[3].innerHTML;
    const cell5 = gameGrid[4].innerHTML;
    const cell6 = gameGrid[5].innerHTML;
    const cell7 = gameGrid[6].innerHTML;
    const cell8 = gameGrid[7].innerHTML;
    const cell9 = gameGrid[8].innerHTML;

    switch(true) {
        
        case (cell1 === cell2 && cell2 === cell3 && (cell1 === "X")): {
            console.log(cell1,cell2, cell3)
            alert("Player 1 Wins!")
            break;
        }
        case (cell1 === cell2 && cell2 === cell3 && (cell1 === "O")): {
            console.log(cell1,cell2, cell3)
            alert("Player 2 Wins!")
            break;
        }
        case (cell4 === cell5 && cell5 === cell6 && (cell4 === "X")): {
            console.log(cell4,cell5,cell6)
            alert("Player 1 Wins!")
            break;
        }
        case (cell4 === cell5 && cell5 === cell6 && (cell4 === "O")): {
            console.log(cell4,cell5,cell6)
            alert("Player 2 Wins!")
            break;
        }
        case (cell7 === cell8 && cell8 === cell9 && (cell7 === "X")): {
            console.log(cell7,cell8,cell9)
            alert("Player 1 Wins!")
            break;
        }
        case (cell7 === cell8 && cell8 === cell9 && (cell7 === "O")): {
            console.log(cell7,cell8,cell9)
            alert("Player 2 Wins!")
            break;
        }
        case (cell1 === cell4 && cell4 === cell7 && (cell1 === "X")): {
            console.log(cell1,cell4,cell7)
            alert("Player 1 Wins!")
            break;
        }
        case (cell1 === cell4 && cell4 === cell7 && (cell1 === "O")): {
            console.log(cell1,cell4,cell7)
            alert("Player 2 Wins!")
            break;
        }
        case (cell2 === cell5 && cell5 === cell8 && (cell2 === "X")): {
            console.log(cell2,cell5,cell8)
            alert("Player 1 Wins!")
            break;
        }
        case (cell2 === cell5 && cell5 === cell8 && (cell2 === "O")): {
            console.log(cell2,cell5,cell8)
            alert("Player 2 Wins!")
            break;
        }
        case (cell3 === cell6 && cell6 === cell9 && (cell3 === "X")): {
            console.log(cell3,cell6,cell9)
            alert("Player 1 Wins!")
            break;
        }
        case (cell3 === cell6 && cell6 === cell9 && (cell3 === "O")): {
            console.log(cell3,cell6,cell9)
            alert("Player 2 Wins!")
            break;
        }
        case (cell1 === cell5 && cell5 === cell9 && (cell1 === "X")): {
            console.log(cell1,cell5,cell9)
            alert("Player 1 Wins!")
            break;
        }
        case (cell1 === cell5 && cell5 === cell9 && (cell1 === "O")): {
            console.log(cell1,cell5,cell9)
            alert("Player 2 Wins!")
            break;
        }
        case (cell3 === cell5 && cell5 === cell7 && (cell3 === "X")): {
            console.log(cell3,cell5,cell7)
            alert("Player 1 Wins!")
            break;
        }
        case (cell3 === cell5 && cell5 === cell7 && (cell3 === "O")): {
            console.log(cell3,cell5,cell7)
            alert("Player 2 Wins!")
            break;
        }
        case (cell1 !== cell2 || cell2 !== cell3): {
            console.log("It is a tie!")
            alert("It is a tie!")
        }
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
    let symbol1 = "X";
    let symbol2 = "O";
    player1.symbol = symbol1;
    player2.symbol = symbol2;
    }

function goingFirst() {
    const heads = 1;
    const tails = 0;
    player1.moveCount = 0;
    player2.moveCount = 1;
    let player1Choice = prompt("Player 1: heads or tails");
        if(player1Choice !== "heads" || "tails") {
            player1Choice = prompt("Error! Choose heads to tails");
        }
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
