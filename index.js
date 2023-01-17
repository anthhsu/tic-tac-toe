// Modules 
const gameBoard = (() => {
    let playerOne;
    let playerTwo;
    let curPlayer;
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    let playerTurnText = document.getElementById("current-player");
    let messageText = document.getElementById("message");

    const initializeGame = (a, b) => {
        playerOne = a;
        playerTwo = b;
        curPlayer = playerOne;
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                let squareNum = board.length*(r) + (c+1);
                const curSquare = document.getElementById("square-"+squareNum.toString());
                curSquare.addEventListener("click", () => {
                    squareClicked(squareNum);
                });
            }
        }
        displayBoard();
    }
    const displayBoard = () => {
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                let squareNum = board.length*(r) + (c+1);
                const curSquare = document.getElementById("square-text-"+squareNum.toString());
                curSquare.innerText = board[r][c];
            }
        }
        playerTurnText.innerText = curPlayer.getName() + ", it's your turn!";
    }
    const isSquareEmpty = (squareNumber) => {
        let value = "";
        value = board[Math.floor((squareNumber-1)/3)][(squareNumber-1)%3];
        if (value == "") {
            return true;
        } else {
            return false;
        }
    }

    const squareClicked = (squareNum) => {
        // Add logic to handle actions when square is clicked
        if (isSquareEmpty(squareNum)) {
            board[Math.floor((squareNum-1)/3)][(squareNum-1)%3] = curPlayer.getMarker();
            if (curPlayer == playerOne) {
                curPlayer = playerTwo;
            } else {
                curPlayer = playerOne;
            }
            messageText.innerText = "";
        } else {
            messageText.innerText = "Please choose another square!";
        }
        displayBoard();
    }

    return {
        initializeGame,
        displayBoard,
        isSquareEmpty,
    }
})();

// Factory Functions
const Player = (name, marker) => {
    const getName = () => {return name};
    const getMarker = () => {return marker};
    return {
        getName,
        getMarker,
    };
};

// Execute Code
const playerOne = Player("Player 1", "O");
const playerTwo = Player("Player 2", "X");
gameBoard.initializeGame(playerOne, playerTwo);