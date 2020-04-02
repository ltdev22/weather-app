const axios = require('axios');

const geoCode = async address => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
    )}.json?access_token=pk.eyJ1IjoibHlrb3MyMiIsImEiOiJjazhnOGNwdXEwOW9nM25scWszN3o2dTRlIn0.g1dRey9Uo8qAYTvukBG-fw&limit=1`;

    try {
        let res = await axios.get(geocodeUrl);
        return {
            location: res.data.features[0].place_name,
            latitude: res.data.features[0].center[0],
            longitude: res.data.features[0].center[1]
        };
    } catch (error) {
        return 'Ooops! Something went wrong :( - Error: ' + error;
    }
};

module.exports = geoCode;
