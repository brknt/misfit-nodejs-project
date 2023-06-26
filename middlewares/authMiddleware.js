
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
    try {

        const token = res.cookies.jwt;

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, (err) => {

                if (err) {
                    console.log(err.message);
                    res.redirect('/login');
                } else {
                    next();
                }
            })
        } else {
            res.redirect('/login');
        }

    } catch (error) {
        res.status(401).json({
            succeeded: false,
            error: 'Not authorized'
        })

    }


}

module.exports = {
    authenticateToken
}