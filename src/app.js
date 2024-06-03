// App de Express para la gestión de las rutas
const express = require('express');
const dayjs = require('dayjs');
const fs = require('node:fs/promises');

// Creación de la APP
const app = express();
app.use(express.json());

// Middlewares
app.use((req, res, next) => {
    const currentDate = dayjs().format('DD-MM-YYYY HH:mm.ss');
    console.log(currentDate);
    req.currentDate = currentDate;
    next();
});

app.use((req, res, next) => {
    // Comprobar si la petición tiene la cabecera de Authorization
    if (!req.headers['authorization']) {
        return res.status(401).send('No tienes acceso');
    }
    next();
});

app.use(async (req, res, next) => {
    // Registrar en un fichero las peticiones entrantes
    // [Fecha Actual] Método: GET. Url: /api/pacientes
    const currentDate = dayjs().format('DD-MM-YYYY HH:mm.ss');
    const data = `[${currentDate}] Método: ${req.method}. Url: ${req.url}\n`;

    await fs.appendFile('./main.log', data);

    next()
});

// Rutas
app.use('/api', require('./routes/api'));

// Middleware error
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

module.exports = app;