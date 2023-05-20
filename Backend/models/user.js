const { Sequelize, DataTypes } = require('sequelize');
const db = require('../util/database');
const colors = require('colors');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  phoneNumber: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
},{
    tableName: 'users'
});

console.log(User === db.models.User); 

(async()=>{
    try{
        await User.sync({ force: false });
        console.log("User table synced succussfully".green);
    }catch(err){
        console.log("There's an error while syncing the user table".red);
        console.log(err);
    }
})();

module.exports = User;