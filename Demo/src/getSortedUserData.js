const myModuleUser = require('./user');
const getUserData = myModuleUser.getUserData;

const getSortedUserData = async (id) => {
    const userData = await getUserData(id);

    const contactsSortedByName = [...userData.contacts]
        .sort((a, b) => {
        });
};

return {
    user: userData,
    contactsSortedByName,
    contactsSortedByAge,
};