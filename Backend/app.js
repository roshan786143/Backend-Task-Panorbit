const express = require("express");
const app = express();

const router = require("./routes/route");

const cors = require("cors");

require("dotenv").config();

const User = require("./models/user");

const port = process.env.PORT || 4040;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: "*",
  })
);

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());

// Route handling
app.use("/api", router);

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
