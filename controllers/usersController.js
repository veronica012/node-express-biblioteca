const data = require('../data');

function getUsers() {
    return data.users;
};
function getUserById( id) {
    return data.users.find(user => user.id == id);
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