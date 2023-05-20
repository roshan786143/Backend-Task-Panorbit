const city = require('../models/city');

const test = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const record = await city.findAll({
      attributes: ['ID', 'Name', 'CountryCode', 'District', 'Population'],
      where: {
        ID: id
      }
    });
    console.log(record);
  } catch (error) {
    console.log(error);
  }
  res.json({ msg: "hello from Rakul Preet Singh" });
}

module.exports = test;
