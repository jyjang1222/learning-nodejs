// 서버 세팅 
const express = require("express"); // express 변수생성
const app = express();              // app 에 express변수 저장
const port = 3403;				  // 포트번호 생성 
const server = app.listen(port, function(){
	console.log("서버가 가동되었습니다" + port);
});

// ejs 세팅
const ejs = require("ejs");    // ejs 변수생성
app.set("views", __dirname + "/views");  // 경로설정 
app.set("view engine", "ejs");  // ejs세팅1  
app.engine("ejs", ejs.renderFile); // ejs세팅2

// session 세팅
const session = require("express-session");
app.use(session({
	secret : "abcdefg",
	resave : false,
	saveUninitialized : false
}));

// 폴더 경로 셋팅
app.use(express.static("./"));

// router 세팅
require("./router/memberController")(app);


app.get('/', (req, res) => {
    res.redirect('main');
});

app.get('/main', (req, res) => {
    res.render('main.ejs');
});