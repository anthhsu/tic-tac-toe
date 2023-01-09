// Modules 
const gameBoard = (() => {
    let board = [
        ["O", "X", "O"],
        ["X", "O", "X"],
        ["X", "X", "O"]
    ];
    const displayBoard = () => {
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                let squareNum = board.length*(r) + (c+1);
                const curSquare = document.getElementById("square-text-"+squareNum.toString());
                curSquare.innerText = board[r][c];
            }
        }
    }
    return {
        displayBoard,
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
gameBoard.displayBoard();