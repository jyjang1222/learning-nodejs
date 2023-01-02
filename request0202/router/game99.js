// 라우터 세팅
module.exports = app => {
    app.get('/game99Main', (req, res) => {
        res.render('game99/game99Main.ejs');
    });

    app.get('/game99Play', (req, res) => {
        const data = {
            'gameCount': Number(req.query.gameCount),
            'gameScore': Number(req.query.gameScore)
        };
        res.render('game99/game99Play.ejs', data);
    });

    app.get('/game99Result', (req, res) => {
        const data =  {
            'gameCount': Number(req.query.gameCount),
            'gameScore': Number(req.query.gameScore),
            'answer': req.query.answer,
            'inputAnswer': Number(req.query.inputAnswer)
        };
        res.render('game99/game99Result.ejs', data);
    })
}