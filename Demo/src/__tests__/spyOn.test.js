const helpers = require("../helpers");

it("returns correct result", () => {
    const addMock = jest.spyOn(helpers, "add");

    const result = addMock(1, 2);

    expect(result).toBe(3);
});

it("returns mocked and original result", () => {
    const addMock = jest.spyOn(helpers, "add");
    addMock.mockImplementation(() => 4);

    expect(helpers.add()).toBe(4);

    addMock.mockRestore();

    expect(helpers.add(1, 2)).toBe(3);
});