const express = require('express');
const router = express.Router();

//importo i metodi del booksController
const {getBorrows, getBorrowById, deleteBorrow, addBorrow, updateBorrow} = require('../controllers/borrowsController');

const logger = (req, res, next) => {
    console.log('calling server with params', req.params);
    next();
};
//le rotte possono essere concatenate
router.all('*', function(req, res, next){
    console.log('All middleware');
    next();
});

router.get('/', async (req, res)=>{
    try{
        const result = await getBorrows();
        res.json(result);
    } catch (e) {
        res.status(500).send(e.toString());
    }

});

router.get('/:id([0-9]+)',  [logger, async (req, res)=>{

    try {
        const result = await getBorrowById(req.params.id);
         res.status(result ? 200 : 404).json(result ? result : null);
    }catch (e) {
        res.status(500).send(e.toString());
    }
}]);

router.delete('/:id([0-9]+)', async (req, res)=>{
    const deleted = await deleteBorrow(req.params.id);
    res.status(deleted? 200: 404).json(deleted? deleted: null);
});


router.post('/', async (req, res)=>{
    try{
        const result = await addBorrow(req.body);
        res.json(result);
    }catch (e) {
        res.status(500).send(e.toString());
    }

});
router.patch('/:id([0-9]+)', async (req, res)=>{
    try {
        const result = await updateBorrow(req.params.id, req.body);
        res.status(result ? 200 : 404).json(result ? result : null);
    }catch (e) {
        res.status(500).send(e.toString());
    }

});
module.exports = router;