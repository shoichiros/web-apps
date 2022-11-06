
const res = {
    render: jest.fn(),
    redirect: jest.fn(),
    status: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis()
}


module.exports = {
    res
}