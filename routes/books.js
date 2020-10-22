const express = require('express');
const router = express.Router();
//importo i metodi del booksController
const {getBooks, getBookById, deleteBook, addBook, updateBook} = require('../controllers/booksController');

const logger = (req, res, next) => {
    console.log('calling server with params', req.params);
    next();
};
//le rotte possono essere concatenate
router.all('*', function(req, res, next){
    console.log('All middleware');
    next();
});

//C R U D
router.get('/', async(req, res) => {
    try {
        const result = await getBooks();
        res.json(result);

    } catch (e) {
        res.status(500).send(e.toString());

    }
});
router.get('/:id', logger, async(req, res) => {
    try {
        const [result] = await getBookById(req.params.id);
        res.status(result? 200: 404).json(result? result: null);
    } catch (e) {
        res.status(500).send(e.toString());
    }
    
});

router.delete('/:id', async(req, res) => {
    try {
        const [result] = await deleteBook(req.params.id);
    } catch (e) {
        res.status(500).send(e.toString());
    }
});

//la rotta in post permette di aggiungere nuovi elementi
router.post('/', async(req, res) => {
        const[result] = await addBook(req.body);
        res.json(result);
});

router.patch('/:id', async(req, res) => {
    try {
        const[result] = await updateBook(req.params.id, req.body);
        res.status(result? 200: 404).json(result? result: null);
    } catch(e) {
        res.status(500).send(e.toString());
    }
});

module.exports = router;