const axios = require('axios');

// Getting the weather forecast for a location
const url =
    'https://api.darksky.net/forecast/84a417bde77434d2a04386db5e16bd96/37.8267,-122.4233?units=si';

axios
    .get(url)
    .then(response => {
        const current = response.data.currently;

        console.log(
            `It is currently ${current.temperature} degrees out. There's a ${current.precipProbability}% chance to rain.`
        );
    })
    .catch(error => console.log(error));

// Getting the coordinates (latitude and longitude) of a location by its name
const geocodeUrl =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibHlrb3MyMiIsImEiOiJjazhnOGNwdXEwOW9nM25scWszN3o2dTRlIn0.g1dRey9Uo8qAYTvukBG-fw&limit=1';

axios.get(geocodeUrl).then(response => {
    const coords = response.data.features[0].center;
    console.log(`Lat: ${coords[0]}, Long: ${coords[1]}`);
});
