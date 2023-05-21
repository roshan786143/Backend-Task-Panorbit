const city = require("../models/city");
const country = require("../models/country");
const countrylanguage = require("../models/countrylanguage");
const { Op } = require("sequelize");

const searchData = async (req, res) => {
  const data = req.params.term;
  const userEmail = req.user;
  console.log(data);
  try {
    let cityResults = await city.findAll({
      attributes: ["Name"],
      where: {
        Name: {
          [Op.like]: `${data}%`,
        },
      },
    });

    cityResults = cityResults.map(item => {
        return item.dataValues.Name;
    })

    let countryResults = await country.findAll({
      attributes: ["Name"],
      where: {
        Name: {
          [Op.like]: `${data}%`,
        },
      },
    });

    console.log(countryResults);

    countryResults = countryResults.map(item => {
        return item.dataValues.Name;
    })

    let languageResults = await countrylanguage.findAll({
      attributes: ["Language"],
      where: {
        Language: {
          [Op.like]: `${data}%`,
        },
      },
    });

    // console.log(languageResults);

    languageResults = languageResults.map(item => {
        return item.dataValues.Language;
    })


    // const output = [...cityResults, ...countryResults, ...languageResults].map(item => {
    //     return item.dataValues.Name;
    // }).filter(item => item != undefined);

    // console.log(cityResults);
    // console.log(countryResults);
    // console.log(languageResults);

    res.json({ cities: cityResults, countries: countryResults, languages : languageResults });
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchData;
