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
        console.log("It is " + curPlayer.getName() + "'s turn!");
        if (isSquareEmpty(squareNum)) {
            board[Math.floor((squareNum-1)/3)][(squareNum-1)%3] = curPlayer.getMarker();
            if (curPlayer == playerOne) {
                curPlayer = playerTwo;
            } else {
                curPlayer = playerOne;
            }
        } else {
            console.log("Please choose another square!");
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
const playerOne = Player("Ant", "O");
const playerTwo = Player("Steph", "X");
gameBoard.initializeGame(playerOne, playerTwo);