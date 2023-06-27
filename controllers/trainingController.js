const Training = require('../models/Training');
const User = require('../models/User');


const createTraining = async (req, res) => {
    try {

        await Training.create({
            name: req.body.name,
            description: req.body.description,
            user: res.locals.user._id
        });

        res.status(201).redirect('/users/dashboard');

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const getTraining = async (req, res) => {
    try {
        const training = await Training.findOne({ slug: req.params.slug }).populate('user');


        console.log(training);

        res.status(201).render('training', {
            page_name: 'dashboard',
            training
        });

    } catch (error) {
        res.status(400).json({
            succeeded: false,
            error
        });
    }
}

const getAllTraining = async (req, res) => {
    try {
        const trainings = await Training.find();

        res.status(201).render('trainings', {
            page_name: 'trainings',
            trainings: trainings
        });

    } catch (error) {
        res.status(400).json({
            succeeded: false,
            error
        });
    }
}


const enrollTraining = async (req, res) => {
    try {
        const user = await User.findById({ _id: res.locals.user._id });
        await user.trainings.push({ _id: req.body.training_id });
        await user.save();
        res.status(200).redirect('/users/dashboard');
    } catch (error) {
        res.status(400).json({
            succeeded: false,
            error: error.message
        });
    }
}

module.exports = {
    createTraining,
    getTraining,
    getAllTraining,
    enrollTraining

}

