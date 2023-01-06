// 서버 세팅 
var express = require("express");
var app = express();
var port = 3402;
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
app.use(session({							// session에는 옵션3가지를 설정해야줘야 한다. 
	secret : "abcdefg",						// secret에는 아무 내용이나 작성해주고,
	resave : false,							// 나머지는 false로 설정한다.
	saveUninitialized : false				// 나머지는 false로 설정한다.
}));

// img폴더 경로 셋팅
app.use(express.static(__dirname + '/img'));

// 라우터 폴더 세팅
require(__dirname + '/router/memberController')(app);
require(__dirname + '/router/colorGameCont')(app);

// 라우터 세팅
app.get('/', (req, res) => {
	const $memberDB = getMemberSample();
	const $colorGameInfo = {'block': 2};
	req.session.colorGameInfo = $colorGameInfo;
	req.session.memberDB = $memberDB;
	res.redirect('main');
});
app.get('/main', (req, res) => {
	res.render('main.ejs');
});

// 멤버리스트
function getMemberSample() {
	const memberDB = [
		{"memberNo" : 1001 , "memberName" : "홍길동" , "memberGrade" : 1, "memberSubject" : "HTML",   "memberHobby" : "운동,독서", 		"memberMemo" : "반갑습니다1."},
		{"memberNo" : 1002 , "memberName" : "김말자" , "memberGrade" : 2, "memberSubject" : "CSS", 	  "memberHobby" : "공부", 			"memberMemo" : "반갑습니다2."},
		{"memberNo" : 1003 , "memberName" : "박홍성" , "memberGrade" : 3, "memberSubject" : "CSS", "memberHobby" : "운동,쇼핑", 		"memberMemo" : "반갑습니다3."},
		{"memberNo" : 1004 , "memberName" : "채민정" , "memberGrade" : 4, "memberSubject" : "JS", 	  "memberHobby" : "", 			    "memberMemo" : "반갑습니다4."},
		{"memberNo" : 1005 , "memberName" : "민소희" , "memberGrade" : 2, "memberSubject" : "CSS", 	  "memberHobby" : "운동,독서,공부",  "memberMemo" : "반갑습니다5."}
	];
	return memberDB;
}

