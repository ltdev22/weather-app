const axios = require('axios');

// Getting the weather forecast for a location by its coordinates
const forecast = async (latitude, longitude) => {
    let url = `https://api.darksky.net/forecast/84a417bde77434d2a04386db5e16bd96/${latitude},${longitude}?units=si`;

    try {
        let res = await axios.get(url);
        let { currently, hourly } = res.data;
        return `${hourly.summary} It is currently ${currently.temperature} degrees out. There's a ${currently.precipProbability}% chance to rain.`;
    } catch (error) {
        return { error: 'Oops! Something went wrong :(' };
    }
};

module.exports = forecast;
