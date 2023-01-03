// 서버 세팅 
var express = require("express");
var app = express();
var port = 3302;
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
    const $scoreDB = [];
    req.session.scoreDB = $scoreDB;
    res.redirect('scoreList');
})

// 라우터 폴더 세팅
require(__dirname + '/router/scoreList')(app);