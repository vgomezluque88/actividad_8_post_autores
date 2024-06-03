// Rutas /api/posts
const router = require('express').Router();

const { getAllautores, crearAutores, getAutorById, getPostByIdAutor } = require('../../controllers/autores.controller');

router.get('/', getAllautores);
router.get('/:id', getAutorById);
router.get('/autor/:id', getPostByIdAutor);
router.post('/', crearAutores);
//router.get('/post/:paciente_id', getAutorPostById);

module.exports = router;