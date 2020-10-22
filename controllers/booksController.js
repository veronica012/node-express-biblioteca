const data = require('../data');

function getBooks() {
    return data.books;
};
function getBookById( id) {
    return data.books.find(book => book.id == id);
};
function deleteBook( id) {
    const idx = data.books.findIndex(book => book.id == id);
    if(idx > -1) {
      const elementes =  data.books.splice(idx, 1);
        return 1;
    }
    return 0;
};

function addBook({title, autore, given}) {
    //con push il nuovo elemento è inserito in coda, unshift inserisce il nuovo elemento all'inizio dell'array
    const newbook = {title, autore, given}
    data.books.push(newbook);
    return newbook;
};

module.exports = {
    getBooks,
    getBookById,
    deleteBook,
    addBook
}