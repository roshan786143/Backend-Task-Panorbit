const router = require('express')();

const test = require('../controllers/test');

const {sendOTP} = require('../controllers/sendOtp');

const signup = require('../controllers/signup');

const searchData = require('../controllers/searchData');

const authenticate = require('../auth/authenticate');

const validateOtpForLogin = require('../controllers/validateOtpForLogin');

// router.get('/home',test);

router.post('/sendotp',sendOTP);

router.post('/validateOtp',validateOtpForLogin);

router.post('/signup',signup);

router.get('/search/:term',authenticate,searchData);

router.get('/:id',test);

module.exports = router;