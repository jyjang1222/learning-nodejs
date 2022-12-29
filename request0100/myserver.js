// 서버세팅
const express = require('express');
const app = express();
const port = 801;
const server = app.listen(port, () => {
    console.log('서버가 가동되었습니다' + port);
});

// ejs세팅
const ejs = require('ejs');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);

// 라우터 세팅
app.get('/', (req, res) => {
    res.redirect('main');
})

app.get('/main', (req, res) => {
    res.render('_main.ejs');
});
app.get('/0100', (req, res) => {
    res.render('_0100_main.ejs');
});

app.get('/formTest', (req, res) => {
    res.render('_0101_formTest.ejs');
});
app.get('/formTestPro', (req, res) => {
    const data = {
        'age': req.query.age
    };
    res.render("_0101_formTestPro.ejs" , data);
});

app.get('/oddEven', (req, res) => {
    res.render('_0102_oddEven.ejs');
});
app.get('/oddEvenPro', (req, res) => {
    const data = {
        'num': req.query.number
    };
    res.render('_0102_oddEvenPro.ejs', data);
})


app.get('/compareNumber', (req, res) => {
    res.render('_0103_compareNumber.ejs');
});
app.get('/compareNumberPro', (req, res) => {
    const data = {
        'num1': req.query.num1,
        'num2': req.query.num2
    }
    res.render('_0103_compareNumberPro.ejs', data);
});

app.get('/score', (req, res) => {
    res.render('_0104_score.ejs');
});
app.get('/scorePro', (req, res) => {
    const data = {
        'score1': req.query.score1,
        'score2': req.query.score2
    }
    res.render('_0104_scorePro.ejs', data);
});

app.get('/maxNumber', (req, res) => {
    res.render('_0105_maxNumber.ejs');
});
app.get('/maxNumberPro', (req, res) => {
    const data = {
        'num1': req.query.num1,
        'num2': req.query.num2,
        'num3': req.query.num3
    }
    res.render('_0105_maxNumberPro.ejs', data);
})