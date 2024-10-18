const fs = require('fs');
const { EOL } = require('os');

let readFile = fs.readFileSync('./puzzles.txt', 'utf-8');

function read() {
  return readFile.trim().split(EOL);
}

// console.log(read());

function solve(sudokuContainer, value) {
  let game = [];

  for (let i = 0; i < 9; i++) {
    const row = sudokuContainer[value].slice(i * 9, (i + 1) * 9).split('');
    game.push(row);
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (game[i][j] === '-') {
        game[i][j] = Math.floor(Math.random() * 9) + 1 + '';
      }
    }
  }
  return game;
}
console.log(solve(read(), 0));

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}


module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard,
};
