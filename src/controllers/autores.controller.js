const Autor = require('../models/autor.model');

const getAllautores = async (req, res, next) => {
    try {
        const [result] = await Autor.selectAll();
        res.json(result);
    } catch (err) {
        next(err);
    }
}

const crearAutores = async (req, res, next) => {

    try {
        const [result] = await Autor.insert(req.body);
        res.json(req.body);
    } catch (err) {
        next(err);
    }

}


const getAutorById = async (req, res, next) => {
    try {
        const autoresId = req.params.id; // Assuming you are passing the ID as a URL parameter
        const [result] = await Autor.selectById(autoresId);
        if (result != 0) {
            res.json(result);
        } else {
            res.json("No exite un autor con esa ID");
        }
    } catch (err) {
        next(err);
    }
}

const getPostByIdAutor = async (req, res, next) => {
    try {
        const autoresId = req.params.id; // Assuming you are passing the ID as a URL parameter
        const [result] = await Autor.selectByIdautor(autoresId);
        if (result != 0) {
            res.json(result);
        } else {
            res.json("Este Autor no a escrito ningun post");
        }
    } catch (err) {
        next(err);
    }
}
module.exports = {
    getAllautores, crearAutores, getAutorById, getPostByIdAutor
}