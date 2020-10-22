const data = require('../data');

function getUsers() {
    return data.users;
};
function getUserById( id) {
    return data.users.find(user => user.user_id == id);
};
function addUser({name}) {
    //con push il nuovo elemento è inserito in coda, unshift inserisce il nuovo elemento all'inizio dell'array
   
    data.users.push(name);
    return name;
};


module.exports = {
    getUsers,
    getUserById,
    addUser,
    
}