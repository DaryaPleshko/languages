const { usersCreatedDB, readUserDB, userGetDB } = require("./users.repository");

const usersCreate = async (name, email, password) => {
    const userCreatedDB = await usersCreatedDB(name, email, password);
    return userCreatedDB;
}

const getUsers = async (email, password) => {
    const userReadedDB = await readUserDB(email, password);
    return userReadedDB;
}


const getNameUser = async () => {
    const userCreatedDB = await userGetDB();
    return userCreatedDB;
}

module.exports = { usersCreate, getUsers, getNameUser }