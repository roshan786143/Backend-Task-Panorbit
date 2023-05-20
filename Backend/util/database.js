const Sequelize = require("sequelize");
const colors = require('colors');

const sequelize = new Sequelize('world', 'root', 'Hutech$Mysql', {
    host: 'localhost',
    dialect: 'mysql'
  });

  (async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection to the database established successfully'.bgGreen);
      } catch (err) {
        console.error('Unable to connect to the database'.bgRed);
        console.log(err);
      }
  })();

  module.exports = sequelize;