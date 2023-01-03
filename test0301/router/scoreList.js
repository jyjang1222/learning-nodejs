module.exports = app => {
    app.get('/scoreList', (req, res) => {
        const data = {
            'scoreDB': req.session.scoreDB
        }
        res.render('scoreListMain.ejs', data);
    });

    app.get('/addScore', (req, res) => {
        const $scoreDB = req.session.scoreDB;
        const r = Math.trunc(Math.random() * 101);
        $scoreDB.push(r);
        req.session.scoreDB = $scoreDB;
        res.redirect('scoreList');
    });

    app.get('/deleteAll', (req, res) => {
        const $scoreDB = [];
        req.session.scoreDB = $scoreDB;
        res.redirect('scoreList');
    });

    app.get('/passList', (req, res) => {
        const data = {
            'scoreDB': req.session.scoreDB
        }
        res.render('passList.ejs', data);
    });

    app.get('/deleteElem', (req, res) => {
        const $scoreDB = req.session.scoreDB;
        const idx = req.query.index;
        $scoreDB.splice(idx, 1);
        req.session.scoreDB = $scoreDB;
        res.redirect('scoreList');
    });

    app.get('/changeScorePage', (req, res) => {
        const data = {
            'idx': req.query.index,
            'scoreDB': req.session.scoreDB
        }
        res.render('changeScorePage.ejs', data);
    });

    app.get('/changeScore', (req, res) => {
        const $scoreDB = req.session.scoreDB;
        const idx = req.query.index;
        const val = req.query.inputNumber; 
        $scoreDB[idx] = val;
        res.redirect('scoreList');
    })
}