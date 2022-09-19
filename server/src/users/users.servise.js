const { usersCreatedDB } = require("./users.repository");

const usersCreate = async (name, email, password) => {
    const userCreatedDB = await usersCreatedDB(name, email, password);
    return userCreatedDB;
}

// const usersGet = async (email, password) => {
//     const userReadedDB = await readUserDB(email, password);
//     return userReadedDB;
// }


module.exports = { usersCreate }