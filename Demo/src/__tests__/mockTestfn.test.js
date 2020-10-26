const app = require('../app');
const math = require('../math');

math.add = jest.fn();
math.subtract = jest.fn();

test("should math.add called", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("should math.subtract called", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});