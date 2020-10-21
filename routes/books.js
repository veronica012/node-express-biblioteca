const express = require('express');
const router = express.Router();

const logger = (req, res, next) => {
    console.log('calling server with params', req.params);
    next();
};
router.all('*', function(req, res, next){
    console.log('All middleware');
    next();
});

router.get('/', function(req, res){
    res.send('Books');
});
router.get('/:id', logger, function(req, res){
    res.send('Books with id: ' + req.params.id);
});

module.exports = router;