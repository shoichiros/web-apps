const { renderIndex, renderPageNotFound } = require('../../controllers/index');
const { res } = require('../test-models');


describe('Function: renderIndex()', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Get status 200', async () => {
        const req = {};
        await renderIndex(req, res);

        const response = 200;
        expect(res.status.mock.calls[0][0]).toEqual(response);
    });
});


describe('Function: renderPageNotFound()', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Get status 404', async () => {
        const req = {};
        await renderPageNotFound(req, res);

        const response = 404;
        expect(res.status.mock.calls[0][0]).toEqual(response);
    });
});