const { pool } = require("../database");

const usersCreatedDB = async (name, email, password) => {
    const connect = await pool.connect();
        const sqlInfo = `
        INSERT INTO users ( name, email, password ) 
        VALUES ($1, $2, $3) RETURNING users.*
        `;
        const objInfo = (await connect.query(sqlInfo, [name, email, password])).rows;
        return objInfo;
}

const readUserDB = async (email, password) => {
    const connect = await pool.connect();
    const sqlInfo = `
        SELECT *
        FROM users 
        WHERE email = $1 
        AND password = $2
        `;
    const objInfo = (await connect.query(sqlInfo, [email, password])).rows;
    return objInfo;
}

module.exports = { usersCreatedDB, readUserDB }