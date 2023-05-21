const User = require('../models/user');
const colors = require('colors');

/**
 * Handles the signup process by storing user details in the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const signup = async (req, res) => {
  const { firstName, lastName, gender, email, phoneNumber } = req.body;

  try {
    // Create a new user record in the database
    const user = await User.create({ firstName, lastName, gender, email, phoneNumber });
    console.log(user);
    console.log("Data stored in the database successfully".green);
    res.json({ msg: 'Success' });
  } catch (err) {
    console.log(err);
    console.log("There's an error while storing the user details in the database".red);
    res.json({ msg: "Failure" });
  }
};

module.exports = signup;
