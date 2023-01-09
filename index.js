// Modules 
const gameBoard = (() => {
    let board = [
        ["O", "X", "O"],
        ["X", "O", "X"],
        ["X", "X", "O"]
    ];
    const getBoard = () => board;
    return {
        getBoard,
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

console.log(gameBoard.getBoard());