const Joi = require('joi');
const express = require('express');
const app = new express();

const routes_genres = require('./routes/genres');

//middlewares
app.use(express.json());
app.use('/api/genres', routes_genres);

const port = process.env.PORT || 1507;
app.listen(port, () => console.log(`Listening on a magical port: ${port}`));