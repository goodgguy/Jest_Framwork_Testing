const axios = require('axios');
const myModuleUser = require('../user');
const getUsers = myModuleUser.getUsers;
const getUserData = myModuleUser.getUserData;

jest.mock('axios');

const axiosGet = axios.get;

beforeEach(() => {
    axiosGet.mockReset();
});

describe('getUsers', () => {
    it('should call the API and return the data', async () => {
        const usersData = [
            { id: 51, name: 'Allan' },
            { id: 120, name: 'George' },
        ];

        axiosGet.mockResolvedValue({ data: usersData });


        const returnedUsersData = await getUsers();

        expect(returnedUsersData).toEqual(usersData);

        expect(axiosGet).toHaveBeenCalledTimes(1);
        expect(axiosGet).toHaveBeenCalledWith('/api/users');
    });
});

describe('getUserData', () => {
    it('should call the API and return the data', async () => {
        const userId = 51;
        const userData = { id: userId, name: 'Allan' };

        axiosGet.mockResolvedValue({ data: userData });

        const returnedUserData = await getUserData(userId);

        expect(returnedUserData).toEqual(userData);
        expect(axiosGet).toHaveBeenCalledTimes(1);
        expect(axiosGet).toHaveBeenCalledWith(`/api/user/${userId}`);
    });
});