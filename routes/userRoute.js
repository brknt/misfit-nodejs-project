const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware'); 



const router = express.Router();


router.post('/signup', userController.createUser);
router.post('/login',userController.loginUser);


module.exports = {
    routes:router
}