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
        playerTurnText.innerText = curPlayer.getName() + ", it's your turn!";
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
    
    const isGameWon = (r, c) => {
        let marker = board[r][c];
        let curR;
        let curC;
        let count;

        // vertical
        count = 1;
        curR = r + 1;
        curC = c;
        while (validate(curR, curC, marker)) {
            count += 1;
            if (count == 3) {
                return true;
            }
            curR += 1;
        }
        curR = r - 1;
        curC = c;
        while (validate(curR, curC, marker)) {
            count += 1;
            if (count == 3) {
                return true;
            }
            curR -= 1;
        }

        // horizontal
        count = 1;
        curR = r;
        curC = c + 1;
        while (validate(curR, curC, marker)) {
            count += 1;
            if (count == 3) {
                return true;
            }
            curC += 1;
        }
        curR = r;
        curC = c - 1;
        while (validate(curR, curC, marker)) {
            count += 1;
            if (count == 3) {
                return true;
            }
            curC -= 1;
        }

        // diagonal "\"
        count = 1;
        curR = r + 1;
        curC = c + 1;
        while (validate(curR, curC, marker)) {
            count += 1;
            if (count == 3) {
                return true;
            }
            curR += 1;
            curC += 1;
        }
        curR = r - 1;
        curC = c - 1;
        while (validate(curR, curC, marker)) {
            count += 1;
            if (count == 3) {
                return true;
            }
            curR -= 1;
            curC -= 1;
        }

        // diagonal "/"
        count = 1;
        curR = r + 1;
        curC = c - 1;
        while (validate(curR, curC, marker)) {
            count += 1;
            if (count == 3) {
                return true;
            }
            curR += 1;
            curC -= 1;
        }
        curR = r - 1;
        curC = c + 1;
        while (validate(curR, curC, marker)) {
            count += 1;
            if (count == 3) {
                return true;
            }
            curR -= 1;
            curC += 1;
        }

        return false;
    }

    const isGameTied = () => {
    }

    const validate = (r, c, marker) => {
        if (r < 0 || c < 0 || r >= 3 || c >= 3) {
            return false;
        } else if (board[r][c] != marker) {
            return false;
        } else {
            return true;
        }
    }

    const squareClicked = (squareNum) => {
        // Add logic to handle actions when square is clicked
        if (isSquareEmpty(squareNum)) {
            let r = Math.floor((squareNum-1)/3);
            let c = (squareNum-1)%3;
            board[r][c] = curPlayer.getMarker();
            if (isGameWon(r, c)) {
                playerTurnText.innerText = "Game Over! " + curPlayer.getName() + " wins!";
                messageText.innerText = "";
                // Reset game.
            } else {
                if (curPlayer == playerOne) {
                    curPlayer = playerTwo;
                } else {
                    curPlayer = playerOne;
                }
                playerTurnText.innerText = curPlayer.getName() + ", it's your turn!";
                messageText.innerText = "";
            }
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