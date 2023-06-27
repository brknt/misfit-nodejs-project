const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;



const UserSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Name area is required'],
        validate: [validator.isAlphanumeric,'Only alphanumeric characters']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email area is required'],
        validate: [validator.isEmail, 'Valid email is required' ]
    },
    role: {
        type: String,
        enum: ['trainer','member','admin'],
        default: 'member'
    },
    password: {
        type: String,
        required: [true, 'Password area is required'],
        minLength:[4,'At least 4 characters']
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    trainings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Training'
    }]
});

UserSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next(); // If the password is the same, continue
  
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
  });

const User = mongoose.model('User',UserSchema);

module.exports = User;