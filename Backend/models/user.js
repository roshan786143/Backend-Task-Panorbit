const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");

// Define the 'User' model
const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "users",
  }
);

// Immediately invoked async function to sync the 'User' table
(async () => {
  try {
    await User.sync({ force: false });
  } catch (err) {
    console.log(err);
  }
})();

module.exports = User;
