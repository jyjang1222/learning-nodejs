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
        res.render('member/memberChangePage.ejs');
    });

    app.get('/changeMemberInfo', (req, res) => {
        $memberDB = req.session.memberDB;
        const idx = req.query.index;

        $memberDB[idx].memberNo,
        $memberDB[idx].memberName,
        $memberDB[idx].memberGrade,
        $memberDB[idx].memberSubject,
        $memberDB[idx].memberHobby,
        $memberDB[idx].memberMemo


    });
}