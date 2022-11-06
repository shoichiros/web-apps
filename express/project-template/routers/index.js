const express = require('express');
const router = express.Router();

const { renderIndex } = require('../controllers/index');


router.get('/', async (req, res) => await renderIndex(req, res));


module.exports = router;