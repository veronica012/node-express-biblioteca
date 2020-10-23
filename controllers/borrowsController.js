const pool = require('../db');

async function  getBorrows() {
    const [result,] = await pool.query('SELECT * FROM borrows');
    return result;
}

async function getBorrowById( id) {
    const [result,] = await pool.query('SELECT * FROM borrows where id=?',[id]);
     return result[0];
}
async function deleteBorrow( id) {
    const [result,] = await pool.query('DELETE FROM borrows where id=?',[id]);
    return result.affectedRows ;
}
async function addBorrow({book_id, name, lastname}){
    const created_at = new Date();
    const [result,] = await pool.query('INSERT INTO borrows (book_id, name, lastname, created_at, expire ) values (?, ?, ?, ?, ?)',
    [book_id, name, lastname, created_at, expire]);

    
    return {id: result.insertId, book_id, name, lastname, created_at, expire };
}
async function updateBorrow(id, {book_id, name, lastname}){
    console.log(name);
    const updated_at = new Date();
    const [result,] = await pool.query('UPDATE  borrows SET book_id =?, name=?, lastname=?, updated_at= ?, expire=?, where id=?',
    [book_id, name, lastname, updated_at, expire, id]);
    return getBookById(id);

}
module.exports = {
    getBorrows,
    getBorrowById,
    deleteBorrow,
    addBorrow,
    updateBorrow
};