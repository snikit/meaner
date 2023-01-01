
exports = module.exports = function (app) {

    app.get('/hello', (req, res) => res.send({
        msg: 'Hi World!'
    }))
}