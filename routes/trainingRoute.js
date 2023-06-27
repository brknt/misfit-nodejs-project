const express = require("express");
const trainingController = require('../controllers/trainingController');

const router = express.Router();


router.post('/',trainingController.createTraining);
router.get('/:slug',trainingController.getTraining);
router.get('/',trainingController.getAllTraining);


module.exports = {
    routes:router
}