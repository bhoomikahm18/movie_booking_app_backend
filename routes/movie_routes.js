const express = require('express');
const { addMovie } = require('../controllers/movie_controller');

const movieRouter = express.Router();

movieRouter.post("/", addMovie);

module.exports = movieRouter;