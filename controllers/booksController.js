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

module.exports = {
    getBooks,
    getBookById
}