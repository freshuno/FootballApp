require('dotenv').config();
const axios = require('axios');

const getOptions = (league = 'premierleague') => {
  return {
    method: 'GET',
    url: `https://football98.p.rapidapi.com/${league}/transfers`,
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'football98.p.rapidapi.com'
    }
  };
}

const getTransfers = async(league) => {
  try {
    const options = getOptions(league)
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getTransfers;

