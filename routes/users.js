const express = require('express');
const router = express.Router();
const {
  Signup,
  Login,
  register,
  GenToken,
  test_middleware,
  My_Credits,
} = require('../controllers/users');
const { auth } = require('../middleware/auth');
router.route('/signup').post(register);
router.route('/login').post(Login);
router.route('/get_token').post(GenToken)

module.exports = router;