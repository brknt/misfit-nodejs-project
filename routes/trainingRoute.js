const express = require("express");
const trainingController = require('../controllers/trainingController');

const router = express.Router();


router.post('/',trainingController.createTraining);
router.get('/:slug',trainingController.getTraining);
router.get('/',trainingController.getAllTraining);
router.post('/enroll',trainingController.enrollTraining);


module.exports = {
    routes:router
}