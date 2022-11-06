const config = require('../app-config');
const ROOT_PATH = config.main.rootPath;


/**
 * Index page
 * @param {Request} req
 * @param {Response} res
 */
const renderIndex = async (req, res) => {
    try {
        const context = { rootPath: ROOT_PATH };
        res.status(200).render('index', context);
    } catch (error) {
        console.error(error.stack);
        res.status(400).send({ target: 'renderIndex', response: error.message });
    }
}


/**
 * 404 page
 * @param {Request} req
 * @param {Response} res
 */
const renderPageNotFound = async (req, res) => {
    const context = { rootPath: ROOT_PATH };
    res.status(404).render('404', context);
}


module.exports = {
    renderIndex,
    renderPageNotFound
}