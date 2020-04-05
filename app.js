const path = require('path');
const express = require('express');
const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '/public');

// Configure Express to point to the public dir
app.use(express.static(publicDirPath));

// Setting routes

// Home page
// app.get('', (req, res) => {
//     res.send('Hello Express.js!');
// });

// Help page
// app.get('/help', (req, res) => {
//     res.send('This is the Help page');
// });

// About page
// app.get('/about', (req, res) => {
//     res.send('<h1>This is the about page</h1>');
// });

// Weather page
app.get('/weather', (req, res) => {
    res.send({
        location: 'Bristol, U.K.',
        forecast: 'The weather is fine'
    });
});

app.listen(8080, () => console.log(`Server is running on port 8080`));
