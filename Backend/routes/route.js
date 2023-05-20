const router = require('express')();

const test = require('../controllers/test');

const sendOtp = require('../controllers/sendOtp');

const signup = require('../controllers/signup');

const validateOtpForLogin = require('../controllers/validateOtpForLogin');

// router.get('/home',test);

router.post('/sendotp',sendOtp);

router.post('/validateOtp',sendOtp,validateOtpForLogin);

router.post('/signup',signup);

module.exports = router;