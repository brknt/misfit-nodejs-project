const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(201).redirect("/login");
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });


    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          const token = cerateToken(user._id);
          res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24
          });
          res.redirect('/users/dashboard');
        } else {

          res.status(400).json({
            succeded: false,
            error: 'Password are not matched'
          });

        }

      });
    } else {
      res.status(400).json({
        succeded: false,
        error: 'There is no such user'
      });
    }



  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
}


const cerateToken = (userId) => {

  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
}


module.exports = {
  createUser,
  loginUser
};
