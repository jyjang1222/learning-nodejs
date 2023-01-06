module.exports = app => {
    app.get('/colorGame', (req, res) => {
        const data = {
            'colorGameInfo': req.session.colorGameInfo
        }
        res.render('colorGame.ejs', data);
    });

    app.get('/clickAnswerBlock', (req, res) => {
        const $colorGameInfo = req.session.colorGameInfo;
        $colorGameInfo.block = req.query.block;
        req.session.colorGameInfo = $colorGameInfo;
        const data = {
            'colorGameInfo': req.session.colorGameInfo
        }
        res.redirect('colorGame',data);
    })
}