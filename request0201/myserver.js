// 서버 세팅
const express = require('express');
const app = express();
const port = 81;
const server = app.listen(port, () => {
    console.log('서버 구동', port);
});

// ejs 세팅
const ejs = require('ejs');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);

// 라우터 세팅
app.get('/', (req, res) => {
    res.redirect('main');
});
app.get('/main', (req, res) => {
    res.render('main.ejs');
});

// 0100번대
app.get('/0100', (req, res) => {
    res.render('0100main.ejs');
});
app.get('/0101P', (req, res) => {
    res.render('0101P.ejs');
});
app.get('/0101A', (req, res) => {
    const data = {
        'age': req.query.age
    };
    res.render('0101A.ejs', data);
});
app.get('/0102P', (req, res) => {
    res.render('0102P.ejs');
});
app.get('/0102A', (req, res) => {
    const data = {
        'number': req.query.number
    };
    res.render('0102A.ejs', data);
});
app.get('/0103P', (req, res) => {
    res.render('0103P.ejs');
});
app.get('/0103A', (req, res) => {
    const data = {
        'num1': req.query.num1,
        'num2': req.query.num2
    };
    res.render('0103A.ejs', data);
});
app.get('/0104P', (req, res) => {
    res.render('0104P.ejs');
});
app.get('/0104A', (req, res) => {
    const data = {
        'score1': req.query.score1,
        'score2': req.query.score2
    }
    res.render('0104A.ejs', data);
});
app.get('/0105P', (req, res) => {
    res.render('0105P.ejs');
});
app.get('/0105A', (req, res) => {
    const data = {
        'num1': req.query.num1,
        'num2': req.query.num2,
        'num3': req.query.num3
    };
    res.render('0105A.ejs', data);
});

// 0200번대
app.get('/0200', (req, res) => {
    res.render('0200main.ejs');
});
app.get('/0201P', (req, res) => {
    res.render('0201P.ejs');
});
app.get('/0201A', (req, res) => {
    const data = {
        'num1': req.query.num1,
        'num2': req.query.num2
    };
    res.render('0201A.ejs', data);
});
app.get('/0202P', (req, res) => {
    res.render('0202P.ejs');
});
app.get('/0202A', (req, res) => {
    const data = {
        'r': req.query.ran,
        'input': req.query.result
    }
    res.render('0202A.ejs', data);
});
app.get('/0203P', (req, res) => {
    res.render('0203P.ejs');
});
app.get('/0203A', (req, res) => {
    const data = {
        'input': Number(req.query.userInput),
        'n1': req.query.num1,
        'n2': req.query.num2
    };
    res.render('0203A.ejs', data);
});

// 0300번대
app.get('/0300', (req, res) => {
    res.render('0300main.ejs');
});
app.get('/0301P', (req, res) => {
    res.render('0301P.ejs');
});
app.get('/0301A', (req, res) => {
    const data = {
        'x': req.query.x,
        'y': req.query.y,
        'z': req.query.z
    };
    res.render('0301A.ejs', data);
});
app.get('/0301A2', (req, res) => {
    const data = {
        'x': req.query.x,
        'y': req.query.y,
        'z': req.query.z
    };
    res.render('0301A2.ejs', data);
});
app.get('/0302P', (req, res) => {
    res.render('0302P.ejs');
});
app.get('/0302A', (req, res) => {
    const data = {
        'sel': req.query.select,
        'r': req.query.ran
    };
    res.render('0302A.ejs', data);
});
app.get('/0303P', (req, res) => {
    res.render('0303P.ejs');
});
app.get('/0303A', (req, res) => {
    const data = {
        'r1': Number(req.query.r1),
        'r2': Number(req.query.r2),
        'res': Number(req.query.res),
        'op': Number(req.query.op)
    };
    res.render('0303A.ejs', data);
});