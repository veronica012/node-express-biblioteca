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
router.get('/', async(req, res) => {

    try {
        const result = await getUsers();
        res.json(result);
    } catch (e) {
        res.status(500).send(e.toString());
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await getUserById(req.params.id);
        res.status(result? 200: 404).json(result? 200: null)
    } catch (e) {
        res.status(500).send(e.toString());
    }
});

//la rotta in post permette di aggiungere nuovi elementi
router.post('/', async (req, res)=>{
    try{
        const result = await addUser(req.body.name);
        res.json(result);
    }catch (e) {
        res.status(500).send(e.toString());
    }
 
 });

module.exports = router;