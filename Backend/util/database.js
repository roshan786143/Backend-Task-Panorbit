const Sequelize = require("sequelize");
// Create a new Sequelize instance
const sequelize = new Sequelize("world", "root", "Hutech$Mysql", {
  host: "localhost",
  dialect: "mysql",
});

// Asynchronous self-invoking function to authenticate the connection
(async () => {
  try {
    await sequelize.authenticate();
  } catch (err) {
    console.log(err);
  }
})();

module.exports = sequelize;
