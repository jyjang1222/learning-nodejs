# node.js

## 노드 설치
1. 터미널을 열고 cd를 이용해 노드를 설치 하고싶은 폴더로 이동한다.
2. 터미널에 npm install express; 을 입력하면 노드 모듈이 다운로드된다.

## 서버 실행
1. 스크립트 파일(myserver.js)을 하나 만든후 서버 세팅코드를 작성하여 서버를 생성할 수 있다.
2. 터미널에 node myserver.js 를 입력하면 서버 실행이 된다.
3. 브라우저에서 localhost:(port number) 를 입력하면 서버에 접속이 가능하다.

## 추가 모듈 설치
- npm i express express-session ejs mysql

## 서버 세팅
```javascript
// 서버 세팅 
const express = require("express"); // express 변수생성
const app = express();              // app 에 express변수 저장
const port = 80;				  // 포트번호 생성 
const server = app.listen(port, function(){
	console.log("서버가 가동되었습니다" + port);
});
```

## ejs 세팅(views)
```javascript
const ejs = require("ejs");    // ejs 변수생성
app.set("views", __dirname + "/views");  // 경로설정 
app.set("view engine", "ejs");  // ejs세팅1  
app.engine("ejs", ejs.renderFile); // ejs세팅2  
```

## ejs파일 렌더링
```javascript
// res.render 하나당 ejs파일을 하나씩 추가한다. 
app.get("/main", function(req, res){ 
    res.render("test_main.ejs"); // res.render => ejs 파일을 출력한다. 
});
app.get("/test02", function(req, res){ 
    res.render("test02.ejs"); 
});
```

## session 세팅
```javascript
const session = require("express-session");
app.use(session({
	secret : "abcdefg", // 아무내용으로 해놓으면된다. 
	resave : false, // 매requst 마다 session 을 다시 저장하는 옵션 (true로 하면 호율이 나빠진다. )
	saveUninitialized : false // 빈세션이 계속 저장될수있다. false 로 해놓으면된다. (true로 하면 호율이 나빠진다. )
}));
```

1. 리퀘스트와 달리 데이터가 항상유지된다. 
2. 브라우저를 종료하면 세션의 데이터는 자동삭제된다. 
3. npm install express-session
4. 사용법 ==> req.session.변수명 = 값 


## 폴더 경로 세팅
```javascript
// 폴더 경로 셋팅
app.use(express.static('./'));
```

## router 폴더 연결
```javascript
require("./router/memberController")(app);
require("./router/memberTestController")(app);
```

## mysql 세팅
```javascript
// mysql 아래 명령어를 db상에서 반드시 실행해야한다.  
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
const mysql = require("mysql");
const conn_info = {
	host : "localhost",
	port : 3306,
	user : "root",
	password : "root",
	database : "_node_db_test",
    multipleStatements: true    // 여러 쿼리를 ;를 기준으로 한번에 보낼 수 있게 해줌.
};
```
