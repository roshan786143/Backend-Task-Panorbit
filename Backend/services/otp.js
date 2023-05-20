const otpGenerator = require('otp-generator');
// const { OTP_LENGTH, OTP_CONFIG } = require('../constants/constants');
// module.exports.generateOTP = () => {
//   const OTP = otpGenerator.generate(OTP_LENGTH, OTP_CONFIG);
//   return OTP;
// };

const generateOTP = () => {
    const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
    return otp;
  };
  
module.exports = generateOTP;