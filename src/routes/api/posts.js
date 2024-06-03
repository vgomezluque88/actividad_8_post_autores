// Rutas /api/posts
const router = require('express').Router();

const { getAllposts, crearPosts, getByIdlposts } = require('../../controllers/posts.controller');

router.get('/', getAllposts);
router.post('/', crearPosts);
router.get('/:id', getByIdlposts);

module.exports = router;