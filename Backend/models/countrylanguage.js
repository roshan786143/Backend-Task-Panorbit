const { Sequelize, DataTypes } = require('sequelize');
const db = require('../util/database');
const colors = require('colors');

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
},{
    tableName: 'city'
});

console.log(countrylanguage === db.models.countrylanguage); 

(async()=>{
    try{
        await countrylanguage.sync({ force: false });
        console.log("Countrylanguage table synced succussfully".green);
    }catch(err){
        console.log("There's an error while syncing the user table".red);
        console.log(err);
    }
})();

module.exports = countrylanguage;