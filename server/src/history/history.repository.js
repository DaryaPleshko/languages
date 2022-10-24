const { pool } = require("../database");

const createHistoryDB = async (history_id, history) => {
    const connect = await pool.connect();
    try {
        connect.query('BEGIN')
        const sql = 'INSERT INTO history (history_id, history) VALUES ($1, $2) RETURNING history.*'
        const obj = (await connect.query(sql, [history_id, history])).rows;
        connect.query('COMMIT')
        return obj
    } catch (e) {
        console.log(`EXC IN createTaskDB ${e}`);
        connect.query('ROLLBACK')
    } finally {
        connect.release()
    }
}

module.exports = { createHistoryDB }