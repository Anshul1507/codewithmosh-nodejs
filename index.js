const Joi = require('joi');
const express = require('express');
const app = new express();

//middlewares
app.use(express.json());

const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Horror' },
    { id: 4, name: 'Musicals' },
    { id: 5, name: 'Romance' },
    { id: 6, name: 'Sci-fi' },
];



const port = process.env.PORT || 1507;
app.listen(port, () => console.log(`Listening on a magical port: ${port}`));