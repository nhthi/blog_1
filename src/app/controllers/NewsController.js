class NewController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send(' Details');
    }
}

module.exports = new NewController();
