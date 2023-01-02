// 서버 세팅 
var express = require("express");
var app = express();
var port = 3300;
var server = app.listen(port, function(){
	console.log("서버가 가동되었습니다" + port);
});

// ejs 세팅(views)
var ejs = require("ejs");
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);


// session 세팅
var session = require("express-session");
app.use(session({
	secret : "abcdefg", // 아무내용으로 해놓으면된다. 
	resave : false, // 매requst 마다 session 을 다시 저장하는 옵션 (true로 하면 호율이 나빠진다. )
	saveUninitialized : false // 빈세션이 계속 저장될수있다. false 로 해놓으면된다. (true로 하면 호율이 나빠진다. )
}));

// 라우터 세팅
app.get('/', (req, res) => {
    $scoreDB = [];
    req.session.scoreDB = $scoreDB;
    res.redirect('0101');
});

app.get('/0101', (req, res) => {
    const data = {
        'scoreDB' : req.session.scoreDB
    }
    res.render('0101.ejs', data);
});

// 랜덤으로 값 추가하기
app.get('/addRandomValue', (req, res) => {
    const $scoreDB = req.session.scoreDB;
    const r = Math.trunc(Math.random() * 101);
    $scoreDB.push(r);

    req.session.scoreDB = $scoreDB;

    res.redirect('0101');
});

// 전체 삭제
app.get('/delAll', (req, res) => {
    let $scoreDB = req.session.scoreDB;
    $scoreDB = [];

    req.session.scoreDB = $scoreDB;
    res.redirect('0101');
});

// 합격생페이지
app.get('/0102', (req, res) => {
    const data = {
        'scoreDB': req.session.scoreDB
    };
    res.render('0102.ejs', data);
});

// 점수 수정 페이지
app.get('/0103', (req, res) => {
    const data = {
        'scoreDB': req.session.scoreDB,
        'index': req.query.index
    }
    res.render('0103.ejs', data)
});

// 점수 하나 수정
app.get('/updateScore', (req, res) => {
    const $scoreDB = req.session.scoreDB;
    const idx = req.query.index;
    const val = req.query.updateValue;
    
    $scoreDB[idx] = val;
    req.session.scoreDB = $scoreDB;

    res.redirect('0101')
})

// 점수 하나 삭제하기
app.get('/deleteScore', (req, res) => {
    const idx = req.query.index;
    const $scoreDB = req.session.scoreDB;
    $scoreDB.splice(idx, 1);

    req.session.scoreDB = $scoreDB;
    res.redirect('0101');
});