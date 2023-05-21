const { getServerOTP, getUserEmail } = require("./sendOtp");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Validates the OTP entered by the user for login.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const validateOtpForLogin = async (req, res) => {
  const userOTP = req.body.otpInput;

  // Retrieve server-generated OTP and user email
  const serverOTP = await getServerOTP();
  const userEmail = await getUserEmail();

  const validate = userOTP === serverOTP;

  if (validate) {
    // Generate a JWT token with the user email as the payload
    const payload = { email: userEmail };
    const token = jwt.sign(payload, process.env.SECRETKEY);

    res.json({ msg: "Success", token });
  } else {
    res.json({ msg: "Failure" });
  }
};

module.exports = validateOtpForLogin;
