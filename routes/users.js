const express = require('express');
const router = express.Router();
//importo i metodi del booksController
const {getUsers, getUserById, addUser} = require('../controllers/usersController');
// const logger = (req, res, next) => {
//     console.log('calling server with params', req.params);
//     next();
// }; esempio!!!

//le rotte possono essere concatenate
// router.all('*', function(req, res, next){
//     console.log('All middleware');
//     next();
// }); esempio!!!

//C R U D
router.get('/', function(req, res){
    res.json(getUsers());
});
router.get('/:id',function(req, res){
    res.json(getUserById(req.params.user_id));
});

//la rotta in post permette di aggiungere nuovi elementi
router.post('/', function(req, res){
    console.log(req.body);
    res.json(addUser(req.body));
});

module.exports = router;