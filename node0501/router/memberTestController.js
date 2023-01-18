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

module.exports = app => {
    app.get("/memberTestCheckListAll", (req, res) => {
        const conn = mysql.createConnection(conn_info);
        const sql = " SELECT * FROM member ";

        conn.query(sql, (error, rows) => {
            const renderData = {
                "memberDB": rows
            };
            conn.end();

            res.render("memberTest/memberTestCheckListAll.ejs", renderData)
        });
    });

    app.get("/memberTestCheckDeletePro", (req, res) => {
        const chkDel = req.query.chkDel;
        console.log(chkDel);
        if (chkDel === undefined) {
            res.redirect("memberTestCheckListAll");
        } else {
            const conn = mysql.createConnection(conn_info);
            const sql1 = " DELETE FROM member WHERE memberNo=?;";
            let sqls = "";
            for (const memberNo of chkDel) {
                const inputData = memberNo;
                sqls += mysql.format(sql1, inputData);
            }
            console.log(sqls);
            conn.query(sqls, (error) => {
                conn.end();
                res.redirect("memberTestCheckListAll");
            });
        }
    });

    app.get("/memberTestRandomAddForm", (req, res) => {
        res.render("memberTest/memberTestRandomAddForm.ejs");
    });

    app.get("/memberTestRandomAddPro", (req, res) => {
        const randomCount = req.query.randomCount;
        console.log('ran', randomCount);
        if (randomCount === false) {
            res.redirect("memberTestRandomAddForm");
        } else {
            const conn = mysql.createConnection(conn_info);
            const sql1 = " SELECT MAX(memberNo) FROM member ";

            conn.query(sql1, (error, rows) => {
                const json = JSON.stringify(rows);
                const data = JSON.parse(json);
                console.log(json);
                console.log(data);
                const memberNo = data[0]["MAX(memberNo)"] + 1;
                let inputData = [];

                let sqls = "";
                const sql2 = " INSERT INTO member VALUES(?, ?, ?, ?, ?);";
    
                for (let i = 0; i < randomCount; i++) {
                    const nextMemberNo = memberNo + i;
                    const memberId = "sampleId" + nextMemberNo;
                    const memberPw = "samplePw" + nextMemberNo;
                    const memberName = "sampleName" + nextMemberNo;
                    const memberEmail = "sampleEmail" + nextMemberNo + "@naver.com";
    
                    inputData = [nextMemberNo, memberId, memberPw, memberName, memberEmail];
    
                    sqls += mysql.format(sql2, inputData);
                }

                console.log('sqls', sqls);

                conn.query(sqls, (error) => {
                    conn.end();
                    res.redirect("memberTestCheckListAll");
                });
            });

        }
    });
};