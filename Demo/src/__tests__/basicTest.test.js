const plusThreeNumbers = require('../plus');

test('should 1 + 2 + 3 to equal 6', () => {
    expect(plusThreeNumbers(1, 2, 3)).toBe(6);
});