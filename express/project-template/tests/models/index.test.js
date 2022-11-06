const { helloApi } = require('../../models/index');
const { res } = require('../test-models');


describe('Function: helloApi()', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Get data json.', async () => {
        const req = {};
        await helloApi(req, res);

        const result = { "response": "Hello" };
        expect(res.json.mock.calls[0][0]).toEqual(result);
    });
});