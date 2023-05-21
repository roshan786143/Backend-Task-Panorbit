const { Sequelize, DataTypes } = require('sequelize');
const db = require('../util/database');
const colors = require('colors');

// Define the 'countrylanguage' model
const countrylanguage = db.define('countrylanguage', {
  CountryCode: {
    type: DataTypes.STRING
  },
  Language: {
    type: DataTypes.STRING
  },
  IsOfficial: {
    type: DataTypes.STRING
  },
  Percentage: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'countrylanguage',
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

console.log(countrylanguage === db.models.countrylanguage);

// Immediately invoked async function to sync the 'countrylanguage' table
(async () => {
  try {
    await countrylanguage.sync({ force: false });
    console.log("Countrylanguage table synced successfully".green);
  } catch (err) {
    console.log("There's an error while syncing the countrylanguage table".red);
    console.log(err);
  }
})();

module.exports = countrylanguage;
