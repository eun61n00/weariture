create table reviews (
   id int not null auto_increment primary key,
   createdAt varchar(50) not null,
   updatedAt varchar(50) not null,
   pro_name varchar(50) not null,
   cate varchar(15) not null,
   tit varchar(30) not null,
   cus_name varchar(15) not null,
   re_date varchar(15) not null,
   view varchar(15) not null,
   rec varchar(15) not null,
   rate varchar(15) not null);

INSERT INTO reviews (id, createdAt, updatedAt, deletedAt, pro_name, cate, tit, cus_name, re_date, view, rec, rate) VALUES
(10308,NOW(),NOW(),NULL,'Weariture Crop Jean','Bottom','Good','kim','2022-05-15','0','0','5'),
(10307,NOW(),NOW(),NULL,'Wearitue Straight Denim','Bottom','Good quality','Naver pay user','2022-05-15','0','0','5'),
(10306,NOW(),NOW(),NULL,'Weariture Denim Jacket','Top','Thanks','Naver Pay user','2022-05-15','1','0','5'),
(10305,NOW(),NOW(),NULL,'오버핏 반팔티','상의','오버핏 반팔티 너무 예쁘네요','네이버 페이 구매자','2022-05-15','0','0','4'),
(10304,NOW(),NOW(),NULL,'밴딩스트라이프팬츠','하의','정말 편한 것 같아요^^','노태형','2022-05-15','0','0','5'),
(10303,NOW(),NOW(),NULL,'와이드핏팬츠','하의','만족','네이버 페이 구매자','2022-05-14','3','0','5'),
(10302,NOW(),NOW(),NULL,'웨어리쳐 브랜드 로고티','상의','괜찮습니다~ 입기 편하구요','네이버 페이 구매자','2022-05-14','0','0','4'),
(10301,NOW(),NOW(),NULL,'숏기장티셔츠','상의','weariture 제품 후기','6393197@n','2022-05-13','3','0','5'),
(10300,NOW(),NOW(),NULL,'웨어리쳐브s랜드로고티','상의','웨어리쳐 믿고 입습니다','네이버 페이 구매자','2022-05-13','14','0','5'),
(10299,NOW(),NOW(),NULL,'웨어리쳐 업사이클링 `슈즈','신발','신발도 잘 만드네요','네이버 페이 구매자','2022-05-13','13','0','4'),
(10298,NOW(),NOW(),NULL,'웨어리쳐 로고 볼캡','잡화','모자 이쁘네요','네이버 페이 구매자','2022-05-13','7','0','5'),
(10297,NOW(),NOW(),NULL,'웨어리쳐 업사이클링 슈즈','신발','스테디셀러 제품','네이버 페이 구매자','2022-05-13','10','0','4'),
(10296,NOW(),NOW(),NULL,'웨어리쳐 스트레이트 데님','하의','웨어리쳐 제품후기','네이버 페이 구매자','2022-05-13','5','0','4'),
(10295,NOW(),NOW(),NULL,'오버핏반팔티','상의','너무 시원하다','네이버 페이 구매자','2022-05-13','9','0','5'),
(10294,NOW(),NOW(),NULL,'웨어리쳐 로고 볼캡','잡화','잘 쓸게요!!','네이버 페이 구매자','2022-05-13','5','0','3');

insert into 'reviews' values (10309, '테스트', '테스트', '테스트', 'test', sysdate(), '1', '1', '5점', sysdate(), sysdate());

+-----------+-------------+------+-----+---------+----------------+
| Field     | Type        | Null | Key | Default | Extra          |
+-----------+-------------+------+-----+---------+----------------+
| id        | int         | NO   | PRI | NULL    | auto_increment |
| pro_name  | varchar(50) | NO   |     | NULL    |                |
| cate      | varchar(15) | NO   |     | NULL    |                |
| tit       | varchar(30) | NO   |     | NULL    |                |
| cus_name  | varchar(15) | NO   |     | NULL    |                |
| re_date   | varchar(15) | NO   |     | NULL    |                |
| view      | varchar(15) | NO   |     | NULL    |                |
| rec       | varchar(15) | NO   |     | NULL    |                |
| rate      | varchar(15) | NO   |     | NULL    |                |
| createdAt | datetime    | NO   |     | NULL    |                |
| updatedAt | datetime    | NO   |     | NULL    |                |
| deletedAt | datetime    | YES  |     | NULL    |                |
+-----------+-------------+------+-----+---------+----------------+