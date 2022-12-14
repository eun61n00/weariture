CREATE TABLE IF NOT EXISTS products (
    id int(12) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    deletedAt DATE,
    product_name varchar(50) NOT NULL,
    model_name varchar(50) NOT NULL,
    price int(12) NOT NULL,
    img varchar(50),
    color varchar(50)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO products (id, createdAt, updatedAt, deletedAt, product_name, model_name, price, img, color) VALUES
(1,NOW(),NOW(),NULL,'51040 CANDIANI BIKAL JEANS [LONG WIDE STRAIGHT]','박OO',97850,'/images/1.jpg','etc'),
(2,NOW(),NOW(),NULL,'51037 CONE MYSTIC JEANS [EXTRA WIDE STRAIGHT]','김OO',73100,'/images/2.jpg','etc'),
(3,NOW(),NOW(),NULL,'2010 MAROON DENIM JACKET [BROWN]','조OO',13200,'/images/3.jpg','black'),
(4,NOW(),NOW(),NULL,'51036 CONE ONYX JEANS [EXTRA WIDE STRAIGHT]','이OO',20100,'/images/4.jpg','blue'),
(5,NOW(),NOW(),NULL,'1989 FALCON JEANS [CROP SLIM]','박OO',97850,'/images/5.jpg','blue'),
(6,NOW(),NOW(),NULL,'1885 MAROON JEANS [WIDE STRAIGHT]','박OO',120000,'/images/6.jpg','blue'),
(7,NOW(),NOW(),NULL,'1827 NIGHTHAWK JEANS [CROP STRAIGHT]','박OO',97850,'/images/7.jpg','etc'),
(8,NOW(),NOW(),NULL,'1811 VINTAGE INK JEANS [VINTAGE STRAIGHT]','박OO',97850,'/images/8.jpg','blue'),
(9,NOW(),NOW(),NULL,'605 HARD TWIST DENIM MOCHA BROWN JEANS [RELAX]','박OO',48300,'/images/9.jpg','etc'),
(10,NOW(),NOW(),NULL,'604 HARD TWIST DENIM BLACK WASHED JEANS [RELAX]','박OO',97850,'/images/10.jpg','blue'),
(11,NOW(),NOW(),NULL,'603 HARD TWIST DENIM BLACK 1WASH JEANS [RELAX]','박OO',17300,'/images/11.jpg','black'),
(12,NOW(),NOW(),NULL,'602 HARD TWIST DENIM INDIGO 1WASH JEANS [RELAX]','박OO',97850,'/images/12.jpg','black'),
(13,NOW(),NOW(),NULL,'51035 HISHITOMO DUEN JEANS [RELAX STRAIGHT]','박OO',97850,'/images/13.jpg','black'),
(14,NOW(),NOW(),NULL,'2010 MAROON DENIM JACKET [BROWN]','박OO',83900,'/images/14.jpg','black'),
(15,NOW(),NOW(),NULL,'51024 KURABO BLACK WASHED JEANS [ONE TUCK WIDE]','박OO',97850,'/images/15.jpg','etc'),
(16,NOW(),NOW(),NULL,'51023 KURABO LIGHT BLUE JEANS [ONE TUCK WIDE]','박OO',97850,'/images/16.jpg','etc'),
(17,NOW(),NOW(),NULL,'51022 CONE MOOD INDIGO JEANS [WIDE STRAIGHT]','박OO', 37000,'/images/17.jpg','black'),
(18,NOW(),NOW(),NULL,'51021 KURABO GHOST MIND JEANS [CROP STRAIGHT]','박OO', 50000,'/images/18.jpg','blue');