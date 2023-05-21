const { Sequelize, DataTypes } = require('sequelize');
const db = require('../util/database');
const colors = require('colors');

// Define the 'country' model
const country = db.define('country', {
  Code: {
    type: DataTypes.STRING
  },
  Name: {
    type: DataTypes.STRING
  },
  Continent: {
    type: DataTypes.STRING
  },
  Region: {
    type: DataTypes.STRING
  },
  SurfaceArea: {
    type: DataTypes.STRING
  },
  IndepYear: {
    type: DataTypes.STRING
  },
  Population: {
    type: DataTypes.STRING
  },
  LifeExpectancy: {
    type: DataTypes.STRING
  },
  GNP: {
    type: DataTypes.STRING
  },
  GNPOld: {
    type: DataTypes.STRING
  },
  LocalName: {
    type: DataTypes.STRING
  },
  GovernmentForm: {
    type: DataTypes.STRING
  },
  HeadOfState: {
    type: DataTypes.STRING
  },
  Capital: {
    type: DataTypes.STRING
  },
  Code2: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false,
  tableName: 'country'
});

console.log(country === db.models.country);

// Immediately invoked async function to sync the 'country' table
(async () => {
  try {
    await country.sync({ force: false });
    console.log("Country table synced successfully".green);
  } catch (err) {
    console.log("There's an error while syncing the country table".red);
    console.log(err);
  }
})();

module.exports = country;
