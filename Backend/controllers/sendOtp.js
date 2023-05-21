const User = require('../models/user');
const email = require("../services/mail");
const otp = require("../services/otp");

let serverOTP = null;
let userEmail = null;

/**
 * Sends an OTP to the user's email.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const sendOTP = async (req, res) => {
  userEmail = req.body.email;
  try {
    const user = await User.findAll({
      where: {
        email: userEmail
      }
    });
    console.log(user.length);
    if (user.length !== 0) {
      // Generate a new OTP
      serverOTP = otp();

      console.log(serverOTP);

      const mailOptions = {
        from: process.env.GMAIL,
        to: userEmail,
        subject: "OTP Verification",
        text: `Your OTP is: ${serverOTP}`,
      };

      // Send the OTP via email
      await email.sendMail(mailOptions);

      console.log("OTP sent successfully.");
      console.log(serverOTP);

      res.json({ msg: `OTP sent successfully --> ${serverOTP}`, check: true });
    } else {
      res.json({ msg: 'User not found', check: false });
    }

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendOTP,
  getUserEmail: () => userEmail,
  getServerOTP: () => serverOTP,
};
