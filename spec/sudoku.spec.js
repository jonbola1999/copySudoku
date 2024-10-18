const { read, solve, isSolved, prettyBoard } = require('./sudoku'); 
jest.mock('fs');
describe('read()', () => {
    it('должен читать файл и возвращать игровое поле как массив чисел', () => {
        const mockData = `105802000\n090076405\n200400819\n019007306\n762083090\n000061050\n007600030\n430020501\n600308900`;
        fs.readFileSync.mockReturnValue(mockData); 
    
        const result = read();
        const expectedBoard = [
          [1, 0, 5, 8, 0, 2, 0, 0, 0],
          [0, 9, 0, 0, 7, 6, 4, 0, 5],
          [2, 0, 0, 4, 0, 0, 8, 1, 9],
          [0, 1, 9, 0, 0, 7, 3, 0, 6],
          [7, 6, 2, 0, 8, 3, 0, 9, 0],
          [0, 0, 0, 0, 6, 1, 0, 5, 0],
          [0, 0, 7, 6, 0, 0, 0, 3, 0],
          [4, 3, 0, 0, 2, 0, 5, 0, 1],
          [6, 0, 0, 3, 0, 8, 9, 0, 0],
        ];
    
        expect(result).toEqual(expectedBoard);
      });
    });
