const pool = require('../db');

async function getUsers() {
  const [result] = await pool.query('SELECT * FROM prestiti');
  return result;
};

async function getUserById( id) {
    const [result] = await pool.query('SELECT * FROM prestiti WHERE id=?', [id]);
    return result;
};
async function addUser({name}) {
    const data_inizio = new Date();
    const [result] = await pool.query('INSERT INTO prestiti (libro_id, nome, cognome, data_inizio, data_fine) values (?, ?, ?, ?, ?)',
    [libro_id, nome, cognome, data_inizio, data_fine]);
    return {id: result.insertId, libro_id, nome, cognome, data_inizio, data_fine};
};


module.exports = {
    getUsers,
    getUserById,
    addUser
}