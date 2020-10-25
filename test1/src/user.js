var md5 = require('md5');
class User {
    MIN_PASS_LENGTH = 4;
    user = [];
    constructor(user) {
        this.user = user;
    }
    get getUser() {
        return this.user;
    }
    setPassword(password) {
        if (password < this.MIN_PASS_LENGTH) {
            return false;
        }
        this.user['password'] = this.cryptPassword(password);
    }
    cryptPassword(password) {
        return md5(password);
    }
}
module.exports = User;
// const details = ['tuanquen', 123123];
// const a = new User(details);
// a.setPassword(123456);
// console.log(a.getUser);