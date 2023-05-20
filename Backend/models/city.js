const { Sequelize, DataTypes } = require('sequelize');
const db = require('../util/database');
const colors = require('colors');

const city = db.define('city', {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Name: {
    type: DataTypes.STRING
  },
  CountryCode: {
    type: DataTypes.STRING
  },
  District: {
    type: DataTypes.STRING
  },
  Population: {
    type: DataTypes.STRING
  },
  timestamps: false,

  createdAt: false,

  updatedAt: false,
},{
    tableName: 'city'
});

console.log(city === db.models.city); 

(async()=>{
    try{
        await city.sync({ force: false });
        console.log("City table synced succussfully".green);
    }catch(err){
        console.log("There's an error while syncing the user table".red);
        console.log(err);
    }
})();

module.exports = city;