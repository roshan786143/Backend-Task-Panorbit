const city = require("../models/city");
const country = require("../models/country");
const countrylanguage = require("../models/countrylanguage");
const { Op } = require("sequelize");

const searchData = async (req, res) => {
  const data = req.params.term;
  const userEmail = req.user;
  console.log(data);
  try {
    const cityResults = await city.findAll({
      attributes: ["Name"],
      where: {
        Name: {
          [Op.like]: `${data}%`,
        },
      },
    });

    const countryResults = await country.findAll({
      attributes: ["Name"],
      where: {
        Name: {
          [Op.like]: `${data}%`,
        },
      },
    });

    const languageResults = await countrylanguage.findAll({
      attributes: ["Language"],
      where: {
        Language: {
          [Op.like]: `${data}%`,
        },
      },
    });

    const output = [...cityResults, ...countryResults, ...languageResults].map(item => {
        return item.dataValues.Name;
    }).filter(item => item != undefined);

    // console.log(cityResults);
    // console.log(countryResults);
    // console.log(languageResults);

    res.json({ msg: output });
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchData;
