const {  read,
    solve,
    isSolved,
    prettyBoard} = require('../sudoku.js')

describe('тест функции read', () => {
    


      test('проверка функции read', () => {
        const result = read();
    //  // Проверяем, что функция возвращает массив
        expect(Array.isArray(result)).toBe(true);
    
        // Проверяем, что каждый элемент массива является строкой
        result.forEach(line => {
            expect(typeof line).toBe('string');
        });
    
        // Проверяем, что массив содержит ожидаемое количество строк
        expect(result.length).toBe(15);
    
    });
    });
   