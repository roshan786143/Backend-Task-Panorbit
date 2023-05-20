const email = require("../services/mail");
const otp = require("../services/otp");

let serverOTP = null;
let userEmail = null;

const sendOTP = async (req, res) => {
  userEmail = req.body.email;

  serverOTP = otp();
  console.log(serverOTP);
  try {
    const mailOptions = {
      from: process.env.GMAIL,
      to: userEmail,
      subject: "OTP Verification",
      text: `Your OTP is: ${serverOTP}`,
    };

    await email.sendMail(mailOptions);

    console.log("OTP sent successfully.");
    console.log(serverOTP);

    res.json({ msg: `otp sent succussfully --> ${serverOTP}` });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.json({ msg: "There's an error while sending the otp to the user" });
  }
};

module.exports = {
  sendOTP,
  getUserEmail: () => userEmail,
  getServerOTP: () => serverOTP, // Export a getter function for serverOTP
};
