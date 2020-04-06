const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();

// Configure Express to use handlebars template engine
app.set('view engine', '.hbs');
app.engine(
    '.hbs',
    hbs({
        extname: '.hbs',
        layoutsDir: path.join(__dirname, 'views/layouts'), // specify the path for the base layout
        partialsDir: path.join(__dirname, 'views/partials') // specify the path for the partials
    })
);
app.set('views', path.join(__dirname, 'views/pages')); // specify the path for each page which extends default layout
app.use(express.static(path.join(__dirname, 'public'))); // point to the public dir

// Setting routes

// Home page
app.get('', (req, res) => {
    res.render('index', {
        heading: 'Weather App',
        name: 'Lykourgos'
    });
});

// Help page
app.get('/help', (req, res) => {
    res.render('help', {
        heading: 'This is the Help page'
    });
});

// About page
app.get('/about', (req, res) => {
    res.render('about', {
        heading: 'This is the About page'
    });
});

// Weather page
app.get('/weather', (req, res) => {
    res.send({
        location: 'Bristol, U.K.',
        forecast: 'The weather is fine'
    });
});

// 404 pages
app.get('/help/*', (req, res) => {
    res.render('fourOhfour', {
        heading: '404',
        errorMsg: 'Help article not found :('
    });
});

app.get('*', (req, res) => {
    res.render('fourOhfour', {
        heading: '404',
        errorMsg: 'Page not found :('
    });
});
app.listen(8080, () => console.log(`Server is running on port 8080`));
