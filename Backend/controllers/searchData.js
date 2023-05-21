const city = require("../models/city");
const country = require("../models/country");
const countrylanguage = require("../models/countrylanguage");
const { Op } = require("sequelize");

/**
 * Searches for data based on the provided search term.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const searchData = async (req, res) => {
  const searchTerm = req.params.term;
  const userEmail = req.user;

  console.log(searchTerm);

  try {
    // Search for cities
    let cityResults = await city.findAll({
      attributes: ["Name"],
      where: {
        Name: {
          [Op.like]: `${searchTerm}%`,
        },
      },
    });

    // Extract city names from the results
    cityResults = cityResults.map((item) => item.dataValues.Name);

    // Search for countries
    let countryResults = await country.findAll({
      attributes: ["Name"],
      where: {
        Name: {
          [Op.like]: `${searchTerm}%`,
        },
      },
    });

    // Extract country names from the results
    countryResults = countryResults.map((item) => item.dataValues.Name);

    // Search for languages
    let languageResults = await countrylanguage.findAll({
      attributes: ["Language"],
      where: {
        Language: {
          [Op.like]: `${searchTerm}%`,
        },
      },
    });

    // Extract language names from the results
    languageResults = languageResults.map((item) => item.dataValues.Language);

    // Respond with the search results
    res.json({ cities: cityResults, countries: countryResults, languages: languageResults });
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchData;
