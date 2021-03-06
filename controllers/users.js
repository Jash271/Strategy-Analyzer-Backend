const User = require('../models/users');
const bcrypt = require('bcryptjs');
const secret = "signedByJash"

exports.Signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(1);
    if (user) {
      res.status(400).json({ message: 'User already exists' });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const newUser = new User({
        name,
        email,
        password: hash,
      });
      await newUser.save();
      console.log(2);
      token = newUser.GetJwt();
      return res.status(201).json({
        msg: 'Successfully Registered',
        success: true,
        token: token,
        user: newUser,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

exports.register = async (req,res,next) => {
  const {name,email,u_id} = req.body
  try{
    const user = await User.findOne({ email });
    console.log(1);
    if (user) {
      res.status(400).json({ message: 'User already exists' });
    }
    else{
      const newUser = new User({
        name,
        email,
        u_id
      })
      await newUser.save()
      token = newUser.GetJwt();
      return res.status(201).json({
        msg: 'Successfully Registered',
        success: true,
        token: token,
        user: newUser,
      });

    }



  }catch(err){
    console.log(err.message)
    res.status(500).send("Server Error")
  }
  
}







exports.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ email: username }).select('+password');
    if (!user) {
      return res.status(400).json({ msg: 'Authentication Error' });
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return res.status(400).json({ msg: 'Authentication Error' });
    }
    const token = user.GetJwt();
    return res.status(200).json({
      msg: 'Successfully Logged In',
      success: true,
      token: token,
      user: user,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
};


exports.GenToken = async (req,res,next) => {
  const  {u_id} = req.body
  try{
    const user = await User.findOne({u_id})
    const token = user.GetJwt()
    return res.status(200).json({
      msg: 'Successfully Logged In',
      success: true,
      token: token,
      user: user,
    });
  }catch(err){
    console.log(err.message)
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
}