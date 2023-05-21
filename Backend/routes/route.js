const router = require('express')();

const {sendOTP} = require('../controllers/sendOtp');

const signup = require('../controllers/signup');

const searchData = require('../controllers/searchData');

const authenticate = require('../auth/authenticate');

const sendCountryDetails = require('../controllers/sendCountryDetails');

const validateOtpForLogin = require('../controllers/validateOtpForLogin');

// router.get('/home',test);

router.post('/sendotp',sendOTP);

router.post('/validateOtp',validateOtpForLogin);

router.post('/signup',signup);

router.post('/country',authenticate,sendCountryDetails);

router.get('/search/:term',authenticate,searchData);

module.exports = router;