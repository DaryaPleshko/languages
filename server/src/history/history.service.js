const { createHistoryDB } = require('./history.repository')

const historyCreate = async (history_id, history) => {
    const created = await createHistoryDB(history_id, history);
    return created;
}

module.exports = { historyCreate }          