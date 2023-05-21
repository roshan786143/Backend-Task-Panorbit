const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  console.log("The token ---->");

  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY).email;
    const userEmail = decoded;

    if (!userEmail) {
      console.log("User email is undefined or empty");
      return res.status(401).json({ error: "User email is missing" });
    }

    const record = await User.findAll({
      where: {
        email: userEmail,
      },
    });

    console.log(record);
    req.user = userEmail;
    console.log("req.user is ---->");
    console.log(req.user);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authenticate;
