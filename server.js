const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const booksRoutes = require('./routes/books');
app.use('/books', booksRoutes);
const borrowRoutes = require('./routes/borrows');
app.use('/borrows', borrowRoutes);

app.listen(3000, function(){
    console.log('Listening on port 3000')
});