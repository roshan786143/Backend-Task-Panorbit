const jwt = require("jsonwebtoken");
const User = require("../models/user");

/**
 * Middleware to authenticate user using JWT token.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next function to call.
 */
const authenticate = async (req, res, next) => {
  try {
    // Retrieve token from authorization header
    const token = req.headers.authorization;

    // Check if token is missing
    if (!token) {
      return res.status(401).json({ error: "Token missing" });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    const userEmail = decoded.email;

    // Check if decoded email is missing
    if (!userEmail) {
      console.log("User email is undefined or empty");
      return res.status(401).json({ error: "User email is missing" });
    }

    // Find user record based on decoded email
    const record = await User.findAll({
      where: {
        email: userEmail,
      },
    });

    // Set user email in request object
    req.user = userEmail;

    // Call the next middleware
    next();
  } catch (error) {
    // Handle invalid token error
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authenticate;
