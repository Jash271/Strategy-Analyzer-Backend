const express = require('express');
const router = express.Router();

const {
CreateJob,
UpdateJobResult,
GetMyRuns,
} = require('../controllers/analyzer');
const {auth} = require('../middleware/auth');

router.route('/create_job').post(auth, CreateJob);
router.route('/UpdateJobResult').post(auth, UpdateJobResult);
router.route('/GetMyRuns').get(auth, GetMyRuns);
module.exports = router;