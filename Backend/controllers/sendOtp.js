const email = require("../services/mail");
const otp = require("../services/otp");

const sendOTP = async (req, res) => {
  const userEmail = req.body.email;
  console.log(userEmail);
  console.log(process.env.GMAIL);
  console.log(process.env.PASSWORD);
  const usergeneratedOtp = otp();
  console.log(usergeneratedOtp);
  try {
    const mailOptions = {
      from: process.env.GMAIL,
      to: userEmail,
      subject: "OTP Verification",
      text: `Your OTP is: ${usergeneratedOtp}`,
    };

    await email.sendMail(mailOptions);
    console.log("OTP sent successfully.");

    localStorage.setItem("userOtp",usergeneratedOtp);

    res.json({ msg: `otp sent succussfully --> ${usergeneratedOtp}` });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.json({ msg: "There's an error while sending the otp to the user" });
  }
};

module.exports = sendOTP;
