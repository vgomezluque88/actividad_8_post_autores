// Funciones con las queries que lanzamos contra la tabla blogautores
const selectAll = () => {
    return db.query('select * from blogautores.posts');
}

const insert = ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
    return db.query('insert into blogautores.posts (titulo, descripcion, fecha_creacion,categoria,autor_id) values (?, ?, ?, ?, ?)', [titulo, descripcion, fecha_creacion, categoria, autor_id]);
}

const selectById = (PostId) => {
    return db.query('select * from blogautores.posts where id = ?', [PostId]);
}

module.exports = {
    selectAll, insert, selectById
}