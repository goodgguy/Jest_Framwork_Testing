// api/users.js
const axios = require('axios');

const getUsers = async () => {
    const { data } = await axios.get('/api/users');
    return data;
};

const getUserData = async (id) => {
    const { data } = await axios.get(`/api/user/${id}`);
    return data;
};
module.exports = {
    getUsers: getUsers,
    getUserData: getUserData,
};