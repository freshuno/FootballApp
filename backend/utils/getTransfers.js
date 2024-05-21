require('dotenv').config();
const axios = require('axios');

const getOptions = () => {
  return {
    method: 'GET',
    url: 'https://v3.football.api-sports.io/transfers',
    qs: {team: '33'},
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': process.env.API_KEY
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



