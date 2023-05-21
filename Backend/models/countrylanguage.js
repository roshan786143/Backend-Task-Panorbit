const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");

// Define the 'countrylanguage' model
const countrylanguage = db.define(
  "countrylanguage",
  {
    CountryCode: {
      type: DataTypes.STRING,
    },
    Language: {
      type: DataTypes.STRING,
    },
    IsOfficial: {
      type: DataTypes.STRING,
    },
    Percentage: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "countrylanguage",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

// Immediately invoked async function to sync the 'countrylanguage' table
(async () => {
  try {
    await countrylanguage.sync({ force: false });
  } catch (err) {
    console.log(err);
  }
})();

module.exports = countrylanguage;
