const { Sequelize, DataTypes } = require("sequelize");
const db = require("../util/database");

// Define the 'country' model
const country = db.define(
  "country",
  {
    Code: {
      type: DataTypes.STRING,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Continent: {
      type: DataTypes.STRING,
    },
    Region: {
      type: DataTypes.STRING,
    },
    SurfaceArea: {
      type: DataTypes.STRING,
    },
    IndepYear: {
      type: DataTypes.STRING,
    },
    Population: {
      type: DataTypes.STRING,
    },
    LifeExpectancy: {
      type: DataTypes.STRING,
    },
    GNP: {
      type: DataTypes.STRING,
    },
    GNPOld: {
      type: DataTypes.STRING,
    },
    LocalName: {
      type: DataTypes.STRING,
    },
    GovernmentForm: {
      type: DataTypes.STRING,
    },
    HeadOfState: {
      type: DataTypes.STRING,
    },
    Capital: {
      type: DataTypes.STRING,
    },
    Code2: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "country",
  }
);

// Immediately invoked async function to sync the 'country' table
(async () => {
  try {
    await country.sync({ force: false });
  } catch (err) {
    console.log(err);
  }
})();

module.exports = country;
