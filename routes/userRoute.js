const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware'); 



const router = express.Router();


router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/dashboard', authMiddleware.authenticateToken, userController.getDashboardPage);


module.exports = {
    routes:router
}