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
        console.log('error in userыCreateDB');
        await client.query('ROLLBACK');
    }

}


// const readUserDB = async (email, password) => {
//     const connect = await pool.connect();

//     const sql = `        
//     SELECT s.id, s.name, s.surname, i.age, i.city, i.birth 
//     FROM students as s 
//     JOIN students_info as i ON i.id = s.id 
//     where s.id = $1`;
//     const obj = (await connect.query(sql, [id])).rows;
//     console.log(obj)
//     return obj;

// }

module.exports = { usersCreatedDB }