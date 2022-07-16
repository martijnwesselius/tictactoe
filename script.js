const player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign
    }

    return {getSign}
};

const gameBoard = (() => {

    const board = ["","","","","","","","",""];

    const setField = (index, sign) => {
        if (index <= board.length) board[setField] = sign; 
        // updateGameBoard();
    };

    const getField = (index) => {
        if (index < board.length) return board[index];
    };

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    };

    return {setField, getField, reset}

})();

const displayController = (() => {

    // buttons

    const updateGameBoard = () => {

    };

    const setResultMessage = () => {

    };

    const setMessageElement = () => {

    };

    return {}
})();

const gameController = (() => {

    const player1 = player("X");
    const player2 = player("O");
    const gam


    const playRound = () => {

    };

    const getCurrentPlayerSign = () => {

    };

    const checkWinner = () => {

    };

    const getIsOver = () => {

    };

    const reset = () => {

    };

    return {}
})();

