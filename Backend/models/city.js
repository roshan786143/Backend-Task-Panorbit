const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");

// Define the 'city' model
const city = db.define(
  "city",
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    CountryCode: {
      type: DataTypes.STRING,
    },
    District: {
      type: DataTypes.STRING,
    },
    Population: {
      type: DataTypes.STRING,
    },
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
  {
    tableName: "city",
  }
);

// Immediately invoked async function to sync the 'city' table
(async () => {
  try {
    await city.sync({ force: false });
  } catch (err) {
    console.log(err);
  }
})();

module.exports = city;
