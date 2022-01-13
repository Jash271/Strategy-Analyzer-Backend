const express = require('express');
const router = express.Router();
const {
  Signup,
  Login,
  test_middleware,
  My_Credits,
} = require('../controllers/users');
const { auth } = require('../middleware/auth');
router.route('/signup').post(Signup);
router.route('/login').post(Login);

module.exports = router;