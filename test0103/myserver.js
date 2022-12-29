// 서버 세팅
const express = require('express'); // express 변수 생성
const app = express(); // express를 app에 저장
const port = 3113; // 포트번호 생성
const server = app.listen(port, () => {
    console.log('서버가 가동되었습니다' + port);
});

// ejs 세팅 (views)
const ejs = require('ejs');
app.set('views', __dirname + '/views'); // 경로베이스설정
app.set('view engine', 'ejs'); // ejs 세팅1
app.engine('ejs', ejs.renderFile); // ejs 세팅2

// main
app.get('/', (req, res) => {
    res.redirect('main');
})
app.get('/main', (req, res) => {
    res.render('_main.ejs');
})

// 0100
app.get('/0100M', (req, res) => {
    res.render('_0100_main.ejs');
})
app.get('/0101P', (req, res) => {
    res.render('_0101_Problem.ejs');
})
app.get('/0101A', (req, res) => {
    res.render('_0101_Answer.ejs');
})
app.get('/0102P', (req, res) => {
    res.render('_0102_Problem.ejs');
})
app.get('/0102A', (req, res) => {
    res.render('_0102_Answer.ejs');
})
app.get('/0103P', (req, res) => {
    res.render('_0103_Problem.ejs');
})
app.get('/0103A', (req, res) => {
    res.render('_0103_Answer.ejs');
})

// 0200
app.get('/0200M', (req, res) => {
    res.render('_0200_main.ejs');
})
app.get('/0201P', (req, res) => {
    res.render('_0201_Problem.ejs');
})
app.get('/0201A', (req, res) => {
    res.render('_0201_Answer.ejs');
})
app.get('/0202P', (req, res) => {
    res.render('_0202_Problem.ejs');
})
app.get('/0202A', (req, res) => {
    res.render('_0202_Answer.ejs');
})
app.get('/0203P', (req, res) => {
    res.render('_0203_Problem.ejs');
})
app.get('/0203A', (req, res) => {
    res.render('_0203_Answer.ejs');
})

// 0300
app.get('/0300M', (req, res) => {
    res.render('_0300_main.ejs');
})
app.get('/0301P', (req, res) => {
    res.render('_0301_Problem.ejs');
})
app.get('/0301A', (req, res) => {
    res.render('_0301_Answer.ejs');
})
app.get('/0302P', (req, res) => {
    res.render('_0302_Problem.ejs');
})
app.get('/0302A', (req, res) => {
    res.render('_0302_Answer.ejs');
})
app.get('/0303P', (req, res) => {
    res.render('_0303_Problem.ejs');
})
app.get('/0303A', (req, res) => {
    res.render('_0303_Answer.ejs');
})

// 0400
app.get('/0400M', (req, res) => {
    res.render('_0400_main.ejs');
})
app.get('/0401P', (req, res) => {
    res.render('_0401_Problem.ejs');
})
app.get('/0401A', (req, res) => {
    res.render('_0401_Answer.ejs');
})
app.get('/0402P', (req, res) => {
    res.render('_0402_Problem.ejs');
})
app.get('/0403P', (req, res) => {
    res.render('_0403_Problem.ejs');
})
app.get('/0404P', (req, res) => {
    res.render('_0404_Problem.ejs');
})
app.get('/0405P', (req, res) => {
    res.render('_0405_Problem.ejs');
})
app.get('/0406P', (req, res) => {
    res.render('_0406_Problem.ejs');