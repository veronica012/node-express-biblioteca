const data = require('../data');
const pool = require('../db');

async function getUsers() {
  const [result] = await pool.query('SELECT * FROM prestiti');
  return result;
};

async function getUserById( id) {
    const [result] = await pool.query('SELECT * FROM prestiti WHERE id=?', [id]);
    return result;
};
function addUser({name}) {
    //con push il nuovo elemento è inserito in coda, unshift inserisce il nuovo elemento all'inizio dell'array
   const newuser =  {name, user_id:data.users.length +1};
    data.users.push(newuser);
    return newuser;
};


module.exports = {
    getUsers,
    getUserById,
    addUser
}