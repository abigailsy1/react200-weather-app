const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/:location', (req,res) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&appid=${process.env.e0fbbd5dbef81aad943aad2e8595f6dc}&units=imperial`)
        .then(response => res.send(response.data));
})

module.exports = app;
