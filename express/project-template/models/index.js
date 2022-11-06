const express = require('express');
const router = express.Router();


/**
 * @param {Request} req
 * @param {Response} res
 */
const helloApi = async (req, res) => {
    try {
        res.status(200).json({ response: 'Hello' });
    } catch (error) {
        res.status(400).json({ response: 'Hello Error' });
    }
}

router.get('/', async (req, res) => await helloApi(req, res));


module.exports = {
    indexApi: router,
    helloApi
};