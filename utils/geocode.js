const axios = require('axios');

// Getting the a location's coordinates
const geoCode = async address => {
    let geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
    )}.json?access_token=${process.env.GEO_KEY}&limit=1`;

    try {
        let res = await axios.get(geocodeUrl);
        return {
            location: res.data.features[0].place_name,
            longitude: res.data.features[0].center[0],
            latitude: res.data.features[0].center[1]
        };
    } catch (error) {
        return {
            error:
                'Oops! Something went wrong with the location you provided :('
        };
    }
};

module.exports = geoCode;
