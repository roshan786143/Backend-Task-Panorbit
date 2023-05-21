const User = require("../models/user");

/**
 * Handles the signup process by storing user details in the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const signup = async (req, res) => {
  const { firstName, lastName, gender, email, phoneNumber } = req.body;

  try {
    // Create a new user record in the database
    const user = await User.create({
      firstName,
      lastName,
      gender,
      email,
      phoneNumber,
    });

    res.json({ msg: "Success" });
  } catch (err) {
    console.log(err);
    res.json({ msg: "Failure" });
  }
};

module.exports = signup;
