const router = require('express')();

const { sendOTP } = require('../controllers/sendOtp');
const signup = require('../controllers/signup');
const searchData = require('../controllers/searchData');
const authenticate = require('../auth/authenticate');
const sendCountryDetails = require('../controllers/sendCountryDetails');
const validateOtpForLogin = require('../controllers/validateOtpForLogin');

// Route to send OTP
router.post('/sendotp', sendOTP);

// Route to validate OTP for login
router.post('/validateOtp', validateOtpForLogin);

// Route for user signup
router.post('/signup', signup);

// Route to send country details
router.post('/country', authenticate, sendCountryDetails);

// Route to search data
router.get('/search/:term', authenticate, searchData);

module.exports = router;
