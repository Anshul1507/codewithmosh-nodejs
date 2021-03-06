const express = require('express');
const router = express.Router();


const genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Horror' },
    { id: 4, name: 'Musicals' },
    { id: 5, name: 'Romance' },
    { id: 6, name: 'Sci-fi' },
];

//GET_ALL service (/api/genres/)
router.get('/', (req, res) => {
    res.send(genres);
});

//GET_INDEX_WISE service
router.get('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(400).send('The genre with the given id was not found.');

    res.send(genre);
});

//POST service
router.post('/', (req, res) => {
    const { error } = vaildateGenres(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

//UDPATE service
router.put('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(400).send('The genre with the given id was not found.');

    const { error } = vaildateGenres(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
});

//DELETE service
router.delete('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(400).send('The genre with the given id was not found.');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
});


function vaildateGenres(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
}


module.exports = router;