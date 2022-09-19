const { usersCreatedDB, readUserDB } = require("./users.repository");

const usersCreate = async (name, email, password) => {
    const userCreatedDB = await usersCreatedDB(name, email, password);
    return userCreatedDB;
}

const getUsers = async (email, password) => {
    const userReadedDB = await readUserDB(email, password);
    return userReadedDB;
}


module.exports = { usersCreate, getUsers }