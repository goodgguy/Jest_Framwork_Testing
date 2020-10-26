const app = require('../app');
const math = require('../math');

test("should math.add called with (1,2)", () => {
    const addMock = jest.spyOn(math, "add");


    app.doAdd(1, 2)


    expect(addMock).toHaveBeenCalledWith(1, 2);
});