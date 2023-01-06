module.exports = app => {
    app.get('/memberListMain', (req, res) => {
        const data = {
            'memberDB': req.session.memberDB
        };
        res.render('member/memberListMain.ejs', data)
    });

    app.get('/delMember', (req, res) => {
        $memberDB = req.session.memberDB;
        const idx = req.query.index;
        $memberDB.splice(idx, 1);

        res.redirect('memberListMain');
    });

    app.get('/addMemberPage', (req, res) => {
        res.render('member/memberAddPage.ejs');
    });

    app.get('/addMember', (req, res) => {
        $memberDB = req.session.memberDB;
        const di = {
            "memberNo" : Number(req.query.memberNo),
            "memberName" : req.query.memberName,
            "memberGrade" : req.query.grade,
            "memberSubject" : req.query.subjectMenu,
            "memberHobby" : req.query.hobby,
            "memberMemo" : req.query.memo
        }
        $memberDB.push(di);
        req.session.memberDB = $memberDB;
        res.redirect('memberListMain');
    });

    app.get('/memberChangePage', (req, res) => {
        const data = {
            'index': req.query.index
        }
        res.render('member/memberChangePage.ejs', data);
    });

    app.get('/changeMemberInfo', (req, res) => {
        $memberDB = req.session.memberDB;
        const idx = req.query.index;

        $memberDB[idx].memberNo = req.query.memberNo;
        $memberDB[idx].memberName = req.query.memberName;
        $memberDB[idx].memberGrade = req.query.grade;
        $memberDB[idx].memberSubject = req.query.memberSubject;
        $memberDB[idx].memberHobby = req.query.hobby;
        $memberDB[idx].memberMemo = req.query.memo;

        req.session.memberDB = $memberDB;

        res.redirect('memberListMain');
    });

    app.get('/sortMemberList', (req, res) => {
        $memberDB = req.session.memberDB;
        const sortType = Number(req.query.sortType);
        const No = 0;
        const Name = 1;
        const Grade = 2;

        if (sortType === No) {
            $memberDB.sort((a, b) => a.memberNo - b.memberNo);
        }
        if (sortType === Name) {
            $memberDB.sort((a, b) => {
                if (a.memberName < b.memberName) return -1;
                if (a.memberName > b.memberName) return 1;  
                if (a.memberName === b.memberName) return 0;
            });
        }
        if (sortType === Grade) {
            $memberDB.sort((a, b) => a.memberGrade - b.memberGrade);
        }

        req.session.memberDB = $memberDB;
        res.redirect('memberListMain');
    });
}