const pool = require('../db');

async function  getBooks() {
    const [result,] = await pool.query('SELECT * FROM books');
    return result;
}

async function getBookById( id) {
    const [result,] = await pool.query('SELECT * FROM books where id=?',[id]);
     return result[0];
}
async function deleteBook( id) {
    const [result,] = await pool.query('DELETE FROM books where id=?',[id]);
    return result.affectedRows ;
}
async function addBook({title, author, borrowed}){
    const created_at = new Date();
    const [result,] = await pool.query('INSERT INTO books (title, author, borrowed, created_at) values (?, ?, ?, ?)',
    [title, author, borrowed, created_at]);

    return {id: result.insertId, title, author, created_at, };
}
async function updateBook(id, {title, author, borrowed}){
    console.log(title);
    borrowed = borrowed || 0;
    const updated_at = new Date();
    const [result,] = await pool.query('UPDATE books SET title =?, author=?, updated_at=?, borrowed= ? where id=?',[title, author, updated_at, borrowed, id]);
    return getBookById(id);

}
module.exports = {
    getBooks,
    getBookById,
    deleteBook,
    addBook,
    updateBook
};