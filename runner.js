const fs = require('fs');

const { solve, read } = require('./sudoku');
const { log } = require('console');

// функция для заполнения рядов
function filling(row) {
  let pull = ['1', '2', '3', '4', '5', '6', '7', '8', '9'].filter(
    (el) => !row.includes(el),
  );

  let newRow = [...row];

  for (let i = 0; i < row.length; i++) {
    if (newRow[i] === '-') newRow[i] = pull.shift();
  }
  return newRow;
}

function easyLevelGame(party, functionFilling) {
  const partyGame = solve(read(), party); // доска не заполненная
  let result = partyGame.map((el) => functionFilling(el));
  return result;
}
// console.log(easyLevelGame(3, filling));
// ---------------------------------------------------------------------------------------------------

function transpose(arr) {
  const transpored = [];
  const rows = arr.length;
  const cols = arr[0].length;

  for (var i = 0; i < cols; i++) {
    transpored.push([]);

    for (var j = 0; j < rows; j++) {
      transpored[i][j] = arr[j][i];
    }
  }
  return transpored;
}

function miidleLevelGame(party) {
  const partyGame = solve(read(), party);

  function fillNew(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '-') {
          const row = board[i];
          const col = board.map((row) => row[j]);
          for (let num = 1; num <= 9; num++) {
            const numStr = String(num);
            if (!row.includes(numStr) && !col.includes(numStr)) {
              board[i][j] = numStr;
              break;
            }
          }
        }
      }
    }
    return board;
  }

  return fillNew([...partyGame]);
}

console.log(miidleLevelGame(0));
