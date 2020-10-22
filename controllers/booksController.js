const data = require('../data');
const pool = require('../db');

async function getBooks(){
    const [result] = await pool.query('SELECT * FROM libri');
    return result;
};

async function getBookById(id){
    const[result] = await pool.query('SELECT * FROM libri WHERE id=?', [id]);
    return result[0];
};

async function deleteBook(id) {
    const [result] = await pool.query('DELETE * FROM libri WHERE id=?', [id])
    return result.affectedRows;
};

async function addBook({titolo, autore, prestato}) {
    //con push il nuovo elemento è inserito in coda, unshift inserisce il nuovo elemento all'inizio dell'array
    const created_at = new Date();
    const [result] = await pool.query('INSERT INTO libri (titolo, autore, prestato, created_at) values (?,?,?,?' [titolo, autore, 0, created_at]);
    return {id: result.insertId, titolo, autore, created_at};
};

async function updateBook(id, {titolo, autore, prestato}) {
    console.log(titolo);
    const updated_at = new Date;
    const [result] = await pool.query('UPDATE libri SET titolo =?, autore=?, updated_at=?, prestato=? WHERE id=?', [titolo, autore, updated_at, prestato, id]);
    return getBookById(id);
    
};

module.exports = {
    getBooks,
    getBookById,
    deleteBook,
    addBook,
    updateBook
}