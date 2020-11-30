const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Token = require('../models/Token');

const userSchema = mongoose.Schema({

  firstName: {
    type: String,
    require: [true, "First Name is required"]
  },
  
  lastName: {
    type: String,
    require: [true, "Last Name is required"]
  },

  userName: {
    type: String,
    require: [true, "Please add a Username"]
  },

  email: {
    type: String,
    required: [true, "Please add an Email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },

  role: {
    type: String,
    enum: ['user', 'admin', 'customer']
  },

  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 6,
    select: false
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  isVerified: {
      type: Boolean,
      default: false
  },

  resetPasswordToken: {
      type: String,
      required: false
  },

  resetPasswordExpires: {
      type: Date,
      required: false
  }

}, {timestamps: true})


//Hashing the password before saving to db.
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  };
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//Signing the JWT token with the _id of user.
userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
};

//Comparing the entered password with hashed password
userSchema.methods.verifyPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generatePasswordReset = function() {
  this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

userSchema.methods.generateVerificationToken = function() {
  let payload = {
      userId: this._id,
      token: crypto.randomBytes(20).toString('hex')
  };

  return new Token(payload);
};

module.exports = mongoose.model('User', userSchema);