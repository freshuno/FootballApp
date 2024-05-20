require('dotenv').config();
const axios = require('axios');

const getOptions = (league = 'premierleague') => {
  return {
    method: 'GET',
    // url: 'https://football98.p.rapidapi.com/competitions',
    // url: 'https://football98.p.rapidapi.com/bundesliga/results',
    // url: `https://football98.p.rapidapi.com/${league}/transfers`,
    // url: 'https://football98.p.rapidapi.com/premierleague/fixtures',
    // url: 'https://football98.p.rapidapi.com/bundesliga/news',
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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = getTransfers;

