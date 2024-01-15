const jwt = require('jsonwebtoken');
const Movie = require('../models/Movie.js');

module.exports.addMovie = async (req, res, next) => {
    const extractedToken = req.headers.authorization.split(" ")[1];
    if (!extractedToken && extractedToken.trim() === "") {
        return res.status(404).json({ message: "Token Not Found" });
    }

    let adminId;

    // verify token
    jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
        if (err) {
            return res.status(400).json({ message: `${err.message}` });
        } else {
            adminId = decrypted.id;
            return;
        }
    });

    //create new movie
    const { title, description, releaseDate, posterUrl, featured, actors } =
        req.body;
    if (
        !title &&
        title.trim() === "" &&
        !description &&
        description.trim() == "" &&
        !posterUrl &&
        posterUrl.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }

    let movie;
    try {
        movie = new Movie({
            description,
            releaseDate: new Date(`${releaseDate}`),
            featured,
            actors,
            admin: adminId,
            posterUrl,
            title,
        });
        await movie.save();
    } catch (err) {
        return console.log(err);
    }

    if (!movie) {
        return res.status(500).json({ message: "Request Failed" });
    }

    return res.status(201).json({ movie });
};