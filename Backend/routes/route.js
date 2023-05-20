const router = require('express')();

const test = require('../controllers/test');

const {sendOTP} = require('../controllers/sendOtp');

const signup = require('../controllers/signup');

const validateOtpForLogin = require('../controllers/validateOtpForLogin');

// router.get('/home',test);

router.post('/sendotp',sendOTP);

router.post('/validateOtp',validateOtpForLogin);

router.post('/signup',signup);

module.exports = router;