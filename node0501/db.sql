
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

-- DROP DATABASE _node_db_test;
CREATE DATABASE _node_db_test_2;

USE _node_db_test_2;

# 회원 테이블
CREATE TABLE member(
	memberNo INT,
    memberId VARCHAR(20),
    memberPw VARCHAR(20),
    memberName VARCHAR(20),
    memberEmail VARCHAR(50)
);

INSERT INTO member VALUES(1, 'hello', '1234', '김수혁', 'hello@naver.com');
INSERT INTO member VALUES(2, 'qwer', '1234', '홍길동', 'kim@daum.net');
INSERT INTO member VALUES(3, 'asdf', '1234', '이수정', 'lee@hotmail.com');
INSERT INTO member VALUES(4, 'gerg', '1234', '박수환', 'park@naver.com');
INSERT INTO member VALUES(5, 'hret', '1234', '장준하', 'jjh@daum.net');
INSERT INTO member VALUES(6, 'wede', '1234', '이주호', 'lee@hotmail.com');

SELECT MAX(memberNo) FROM member;
SELECT * FROM member;
DELETE FROM member WHERE memberNo=8; 












