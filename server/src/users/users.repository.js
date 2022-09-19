const { pool } = require("../database");

const usersCreatedDB = async (name, email, password) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sqlInfo = `
        INSERT INTO users ( name, email, password ) 
        VALUES ($1, $2, $3) RETURNING users.*
    `;
        const objInfo = (await client.query(sqlInfo, [name, email, password])).rows;

        if (!objInfo.length) throw new Error('Некорректный ввод');

        await client.query('COMMIT');

        return objInfo;
    } catch (error) {
        console.log('error in usersCreateDB');
        await client.query('ROLLBACK');
    }
}


const readUserDB = async (email, password) => {
    const client = await pool.connect();

        const sqlInfo = `
        SELECT email, password FROM users WHERE email = $1 AND password = $2
    `;
        const objInfo = (await client.query(sqlInfo, [email, password])).rows;[{}]

        if (!objInfo.length) throw new Error('Data does not exist');

        return objInfo;
}

module.exports = { usersCreatedDB, readUserDB }