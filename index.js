// Modules 
const gameBoard = (() => {
    let board = [
        ["O", "X", ""],
        ["X", "", "X"],
        ["X", "", "O"]
    ];
    let squareOne = document.getElementById("square-text-1");
    let squareTwo = document.getElementById("square-text-2");
    let squareThree = document.getElementById("square-text-3");
    let squareFour = document.getElementById("square-text-4");
    let squareFive = document.getElementById("square-text-5");
    let squareSix = document.getElementById("square-text-6");
    let squareSeven = document.getElementById("square-text-7");
    let squareEight = document.getElementById("square-text-8");
    let squareNine = document.getElementById("square-text-9");

    const initializeBoard = () => {
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                let squareNum = board.length*(r) + (c+1);
                const curSquare = document.getElementById("square-"+squareNum.toString());
                curSquare.addEventListener("click", () => {
                    console.log(isSquareEmpty(squareNum));
                });
            }
        }
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
        switch (squareNumber) {
            case 1:
                value = board[0][0];
                break;
            case 2:
                value = board[0][1];
                break;
            case 3:
                value = board[0][2];
                break;
            case 4:
                value = board[1][0];
                break;
            case 5:
                value = board[1][1];
                break;
            case 6:
                value = board[1][2];
                break;
            case 7:
                value = board[2][0];
                break;
            case 8:
                value = board[2][1];
                break;
            case 9:
                value = board[2][2];
                break;
        }
        if (value == "") {
            return true;
        } else {
            return false;
        }
    }
    return {
        initializeBoard,
        displayBoard,
        isSquareEmpty,
    }
})();

// Factory Functions
const Player = (name, age) => {
    const getName = () => name;
    const getAge = () => age;
    return {
        getName, 
        getAge,
    };
};

// Execute Code
gameBoard.initializeBoard();
gameBoard.displayBoard();
