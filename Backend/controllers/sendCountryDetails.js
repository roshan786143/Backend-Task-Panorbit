const Country = require('../models/country');

const sendCountryDetails = async (req, res) => {
  const countryName = req.body.country;
  try {
    const countryDetailsRecord = await Country.findAll({
      attributes: ['Name', 'Code', 'Continent', 'Region', 'SurfaceArea', 'IndepYear', 'Population', 'LifeExpectancy', 'GNP', 'GNPOld', 'LocalName', 'GovernmentForm', 'HeadOfState', 'Capital', 'Code2'],
      where: {
        'Name': countryName
      }
    });
    console.log(countryDetailsRecord);
    res.json({ msg: countryDetailsRecord });
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendCountryDetails;
