const express = require('express');
const router = express.Router();
//importo i metodi del booksController
const {getBooks, getBookById, deleteBook, addBook, updateBook} = require('../controllers/booksController');
const logger = (req, res, next) => {
    console.log('calling server with params', req.params);
    next();
};

//le rotte possono essere concatenate
// router.all('*', function(req, res, next){
//     console.log('All middleware');
//     next();
// });

//C R U D
router.get('/', function(req, res){
    res.json(getBooks());
});
router.get('/:id', function(req, res){
    res.json(getBookById(req.params.id));
});
router.delete('/:id', function(req, res){
    const deleted = deleteBook(req.params.id);
    res.status(deleted? 200: 404).json(deleted? deleted: null); //ternario
});
//la rotta in post permette di aggiungere nuovi elementi
router.post('/', function(req, res){
    console.log(req.body);
    res.json(addBook(req.body));
});
router.patch('/:id', function(req, res){
    console.log(req.body, req.params.id);
    const updated = updateBook(req.params, req.body);
    res.status(updated ? 200: 404).json(updated? updated : 'Record not found');

});

module.exports = router;