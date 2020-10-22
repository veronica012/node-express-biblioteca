// get the client
const mysql = require('mysql2/promise');
 
// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'express-biblioteca-db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  password: 'root'
});

//permette di fare le query
module.exports = pool;