const Posts = require('../models/posts.model');
const Autor = require('../models/autor.model');

const getAllposts = async (req, res, next) => {
    try {
        const [result] = await Posts.selectAll();
        res.json(result);
    } catch (err) {
        next(err);
    }
}

const getByIdlposts = async (req, res, next) => {
    try {
        const PostsId = req.params.id; // Assuming you are passing the ID as a URL parameter
        const [result] = await Posts.selectById(PostsId);
        if (result != 0) {
            res.json(result);
        } else {
            res.json("No exite un Posts con esa ID");
        }
    } catch (err) {
        next(err);
    }
}


const crearPosts = async (req, res, next) => {
    try {
        const AutorId = req.body.autor_id; // Assuming you are passing the ID as a URL parameter
        const [result] = await Posts.selectById(AutorId);
        if (result != 0) {
            const [result] = await Posts.insert(req.body);
            res.json(req.body);
        } else {
            res.json("No exite un Posts con esa ID");
        }
    } catch (err) {
        next(err);
    }

}


module.exports = {
    getAllposts, crearPosts, getByIdlposts
}