const getByAutor = (autorID) => {
    return db.query('select * from  blogautores.posts where id = ?', [autorID])
}

// Funciones con las queries que lanzamos contra la tabla blogautores
const selectAll = () => {
    return db.query('select * from blogautores.autores');
}

const insert = ({ nombre, email, imagen }) => {
    return db.query('insert into blogautores.autores (nombre, email, imagen) values (?, ?, ?)', [nombre, email, email]);
}

const selectById = (autoresId) => {
    return db.query('select * from blogautores.autores where id = ?', [autoresId]);
}

const selectByIdautor = (autoresId) => {
    return db.query('select * from blogautores.posts where autor_id = ?', [autoresId]);
}

module.exports = {
    selectAll, insert, selectById, selectByIdautor
}