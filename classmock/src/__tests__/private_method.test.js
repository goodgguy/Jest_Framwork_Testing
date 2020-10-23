const User = require('../user');
test('private method', () => {
    const user = new User(['tuanquen', 123123]);
    user.setPassword(123456);
    expect(user.getUser['password']).toBe('6ac1e56bc78f031059be7be854522c4c');
})