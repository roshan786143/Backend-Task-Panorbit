const sendOTP = async (req, res) => {
    const userEmail = req.body.email;
    console.log(userEmail);
    console.log(process.env.GMAIL);
    console.log(process.env.PASSWORD);
    console.log(otp());
    try {
      const mailOptions = {
        from: process.env.GMAIL,
        to: userEmail,
        subject: "OTP Verification",
        text: `Your OTP is: ${otp()}`,
      };
  
      await email.sendMail(mailOptions);
      console.log("OTP sent successfully.");
      res.json({ msg: `otp sent succussfully --> ${otp()}` });
    } catch (error) {
      console.error("Error sending OTP:", error);
      res.json({ msg: "There's an error while sending the otp to the user" });
    }
}