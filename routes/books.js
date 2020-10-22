const express = require('express');
const router = express.Router();
//importo i metodi del booksController
const {getBooks, getBookById, deleteBook} = require('../controllers/booksController');
const logger = (req, res, next) => {
    console.log('calling server with params', req.params);
    next();
};

//le rotte possono essere concatenate
router.all('*', function(req, res, next){
    console.log('All middleware');
    next();
});

router.get('/', function(req, res){
    res.json(getBooks());
});
router.get('/:id', logger, function(req, res){
    res.json(getBookById(req.params.id));
});
router.delete('/:id', function(req, res){
    const deleted = deleteBook(req.params.id);
    res.status(deleted? 200: 404).json(deleted? deleted: null); //ternario
});

module.exports = router;