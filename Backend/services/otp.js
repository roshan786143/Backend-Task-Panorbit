const otpGenerator = require("otp-generator");

/**
 * Generate a random OTP (One-Time Password)
 * @returns {string} The generated OTP
 */
const generateOTP = () => {
  const otp = otpGenerator.generate(6, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false,
  });
  return otp;
};

module.exports = generateOTP;
