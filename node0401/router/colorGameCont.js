module.exports = app => {
    app.get('/colorGame', (req, res) => {
        const data = {
            'colorGameInfo': req.session.colorGameInfo
        }
        res.render('colorGame.ejs', data);
    });

    app.get('/clickAnswerBlock', (req, res) => {
        const $colorGameInfo = req.session.colorGameInfo;
        $colorGameInfo.block = Number(req.query.block);
        $colorGameInfo.colorGap = Number(req.query.colorGap);
        $colorGameInfo.level = Number(req.query.level);
        req.session.colorGameInfo = $colorGameInfo;
        res.redirect('colorGame');
    })
}