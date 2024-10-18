function read() {
  const fs = require('fs');

  const puzzlesTxt = './puzzles.txt';
  const puzzles = fs.readFileSync(puzzlesTxt, 'utf-8');
  const arrSudoku = puzzles.split('\n');
  return arrSudoku;
}

// функция возвращает матрицу судоку БЕЗ заполнения
function solve(sudokuСontainers, current) {
  let operating = sudokuСontainers[current].split('');

  function getBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board[i] = [];
      for (let j = 0; j < 9; j++) {
        board[i][j] = operating.shift();
      }
    }
    return board;
  }
  return getBoard();
}

module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard,
};

