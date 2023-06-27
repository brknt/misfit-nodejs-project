const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify'); 


const TrainingSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        unique: true,
      },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
});


TrainingSchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
      lower: true,// küçük karakter olsun
      strict: true,// karakterleri kaldır 
    });
    next();
  });

const Training = mongoose.model('Training',TrainingSchema);

module.exports = Training;