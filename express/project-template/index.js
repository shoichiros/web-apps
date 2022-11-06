const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const { indexApi } = require('./models/index');
const { renderPageNotFound } = require('./controllers/index');

const router = require('./routers/index');
const config = require('./app-config');
const ROOT_PATH = config.main.rootPath;
const API_BASE_PATH = config.api.baseUrl;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(ROOT_PATH, express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${API_BASE_PATH}`, indexApi);
app.use(ROOT_PATH, router);
app.use('*', async (req, res, next) => await renderPageNotFound(req, res));


module.exports = app;