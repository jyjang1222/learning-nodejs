// mysql세팅
const mysql = require("mysql");
const conn_info = {
	host : "localhost",
	port : 3306,
	user : "root",
	password : "root",
	database : "_node_db_test_2",
    multipleStatements: true    // 여러 쿼리를 ;를 기준으로 한번에 보낼 수 있게 해줌.
};

module.exports = app => {
    app.get("/memberListAll", (req, res) => {
        const conn = mysql.createConnection(conn_info);
        const sql = " SELECT * FROM member ";

        conn.query(sql, (error, rows) => {
            const renderData = {
                "memberDB": rows
            };

            conn.end();
            res.render("member/memberListAll", renderData);
        });
    });

    app.get("/memberListSort", (req, res) => {
        const sortType = req.query.sortStandard;

        const conn = mysql.createConnection(conn_info);
        const sql = ` SELECT * FROM member ORDER BY ${sortType} `;

        conn.query(sql, (error, rows) => {
            const renderData = {
                "memberDB": rows
            };

            conn.end();
            res.render("member/memberListAll", renderData);
        });
    });

    app.get("/memberAddForm", (req, res) => {
        res.render("member/memberAddForm.ejs");
    });

    app.get("/memberAddPro", (req, res) => {
        const memberId = req.query.memberId;
        const memberPw = req.query.memberPw;
        const memberName = req.query.memberName;
        const memberEmail = req.query.memberEmail;

        const conn = mysql.createConnection(conn_info);
        const sql1 = " SELECT MAX(memberNo) FROM member ";

        conn.query(sql1, (error, rows) => {
            const json = JSON.stringify(rows);
            const data = JSON.parse(json);

            const memberNo = data[0]["MAX(memberNo)"] + 1;

            const sql2 = " INSERT INTO member VALUES (?, ?, ?, ?, ?) ";
            const inputData = [memberNo, memberId, memberPw, memberName, memberEmail];

            conn.query(sql2, inputData, (error) => {
                conn.end();
                res.redirect("memberListAll");
            });
        }); 
    });

    app.get("/memberUpdateForm", (req, res) => {
        const memberNo = req.query.memberNo;

        const conn = mysql.createConnection(conn_info);
        const sql = " SELECT * FROM member WHERE memberNo=? "
        const inputData = [memberNo];

        conn.query(sql, inputData, (error, rows) => {
            const renderData = {
                "memberDB": rows
            };

            conn.end();
            res.render("member/memberUpdateForm.ejs", renderData);
        });
    });

    app.get("/memberUpdatePro", (req, res) => {
        const memberNo = req.query.memberNo;
        const memberId = req.query.memberId;
        const memberPw = req.query.memberPw;
        const memberName = req.query.memberName;
        const memberEmail = req.query.memberEmail;

        const conn = mysql.createConnection(conn_info);
        const sql = " UPDATE member SET memberId=?, memberPw=?, memberName=?, memberEmail=? WHERE memberNo=? ";
        const inputData = [memberId, memberPw, memberName, memberEmail, memberNo];

        conn.query(sql, inputData, (error) => {
            conn.end();
            res.redirect('memberListAll');
        });
    });

    app.get("/memberDeleteForm", (req, res) => {
        const memberNo = req.query.memberNo;

        const conn = mysql.createConnection(conn_info);
        const sql = " SELECT * FROM member WHERE memberNo=? ";
        const inputData = [memberNo];

        conn.query(sql, inputData, (error, rows) => {
            const renderData = {
                "memberDB": rows
            };
            
            conn.end();
            res.render('member/memberDeleteForm.ejs', renderData);
        });
    });

    app.get("/memberDeletePro", (req, res) => {
        const memberId = req.query.memberId;
        const memberPw = req.query.memberPw;

        const conn = mysql.createConnection(conn_info);
        const sql = " DELETE FROM member WHERE memberId=? AND memberPw=? ";
        const inputData =  [memberId, memberPw];

        conn.query(sql, inputData, (error) => {
            console.log(error)
            conn.end();
            res.redirect('memberListAll');
        });
    });
};