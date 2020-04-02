// const axios = require('axios');
const geoCode = require('./utils/geocode');

// Getting the weather forecast for a location
// const url =
//     'https://api.darksky.net/forecast/84a417bde77434d2a04386db5e16bd96/37.8267,-112?units=si';

// axios
//     .get(url)
//     .then(response => {
//         const current = response.data.currently;
//         console.log(
//             `It is currently ${current.temperature} degrees out. There's a ${current.precipProbability}% chance to rain.`
//         );
//     })
//     .catch(error => console.log(error));

const geoLocation = geoCode('Bristol')
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log(error));
console.log(geoLocation);
