const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Getting today's weather forecast for a given location
const givenLocation = process.argv[2];
if (!givenLocation) {
    return console.log('Please type a location.');
}

geoCode(givenLocation)
    .then(response => {
        let { latitude, longitude, location } = response;
        forecast(latitude, longitude)
            .then(response => {
                console.log(location);
                console.log(response);
            })
            .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
console.log("Today's weather forecast:");
// This prints the following on the terminal
//
// Today's weather forecast:
// Bristol, City Of Bristol, England, United Kingdom
// It is currently 7.85 degrees out. There's a 0% chance to rain.
