const mongoose = require('mongoose');
const secret = "signedByJash"
const jwt = require('jsonwebtoken');
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    
    u_id:{
      type:String,
      required:true,
    },
    role: {
      type: String,
      default: 'user',
    },
    created_at: {
      type: Date,
      default: Date.now,
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

UserSchema.methods.GetJwt = function () {
  payload = {
    user: {
      id: this._id,
    },
  };
  
  return jwt.sign(payload,secret, {
    expiresIn: 3600,
  });
};

module.exports = mongoose.model('user', UserSchema);