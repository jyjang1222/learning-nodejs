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
    app.get("/memberTestCheckListAll", (req, res) => {
        const conn = mysql.createConnection(conn_info);
        const sql = " SELECT * FROM member ";

        conn.query(sql, (error, rows) => {
            const renderData = {
                "memberDB": rows
            }
            
            conn.end();
            res.render("memberTest/memberTestCheckListAll", renderData);
        });
    });

    app.get("/memberTestCheckDeletePro", (req, res) => {
        const checkedMember = req.query.memberCheck;
        console.log(checkedMember);

        const conn = mysql.createConnection(conn_info);
        const sql = " DELETE FROM member WHERE memberNo=?;";
        let sqls = "";

        for (const memberNo of checkedMember) {
            const inputData = [memberNo];
            sqls += mysql.format(sql, inputData);
        }
        console.log(sqls);

        conn.query(sqls, (error) => {
            conn.end();
            res.redirect("memberTestCheckListAll");
        });
    });

    app.get("/memberTestRandomAddForm", (req, res) => {
        res.render("memberTest/memberTestRandomAddForm.ejs");
    });

    app.get("/memberTestRandomAddPro", (req, res) => {
        const addCount = req.query.randomCount;

        const conn = mysql.createConnection(conn_info);
        const sql1 = " SELECT MAX(memberNo) FROM member ";
        
        conn.query(sql1, (error, rows) => {
            const json = JSON.stringify(rows);
            const data = JSON.parse(json);
            // console.log(data);

            const lastMemberNo = data[0]["MAX(memberNo)"];

            const sql2 = " INSERT INTO member VALUES (?, ?, ?, ?, ?);";
            let sqls = "";
    
            for (let i = 1; i <= addCount; i++) {
                const memberNo = lastMemberNo + i;
                const memberId = 'defaultId' + i;
                const memberPw = 'defaultPw' + i;
                const memberName = 'defaultName' + i;
                const memberEmail = 'defaultEmail' + i;

                const inputData = [memberNo, memberId, memberPw, memberName, memberEmail];

                sqls += mysql.format(sql2, inputData);
            }

            conn.query(sqls, (error) => {
                conn.end();
                res.redirect("memberTestCheckListAll");
            })
        });
    });
};
