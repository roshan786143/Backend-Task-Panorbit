const Country = require('../models/country');

/**
 * Sends the details of a country based on the provided country name.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const sendCountryDetails = async (req, res) => {
  const countryName = req.body.country;

  try {
    // Find country details based on the country name
    const countryDetailsRecord = await Country.findAll({
      attributes: ['Name', 'Code', 'Continent', 'Region', 'SurfaceArea', 'IndepYear', 'Population', 'LifeExpectancy', 'GNP', 'GNPOld', 'LocalName', 'GovernmentForm', 'HeadOfState', 'Capital', 'Code2'],
      where: {
        'Name': countryName
      }
    });

    console.log(countryDetailsRecord);

    // Respond with the country details
    res.json({ msg: countryDetailsRecord });
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendCountryDetails;
