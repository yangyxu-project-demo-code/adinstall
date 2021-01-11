# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 47.92.75.128 (MySQL 5.7.19-0ubuntu0.16.04.1)
# Database: zn_hc_auction
# Generation Time: 2017-08-26 01:49:10 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table zn_auction_merchant
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_merchant`;

CREATE TABLE `zn_auction_merchant` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `code` varchar(100) DEFAULT '',
  `alise` varchar(100) DEFAULT '',
  `name` varchar(100) DEFAULT '',
  `password` varchar(100) DEFAULT '',
  `star` decimal(10,2) DEFAULT '0.00',
  `status` int(10) DEFAULT '23',
  `province` int(10) DEFAULT '0',
  `city` int(10) DEFAULT '0',
  `lng` varchar(50) DEFAULT '',
  `lat` varchar(50) DEFAULT '',
  `address` varchar(50) DEFAULT '',
  `contact` varchar(15) DEFAULT '',
  `email` varchar(20) DEFAULT '',
  `phone` varchar(50) DEFAULT '',
  `hours` varchar(50) DEFAULT '',
  `businessLicense` varchar(100) DEFAULT '',
  `commentCount` int(10) DEFAULT '0',
  `tags` varchar(300) DEFAULT ',',
  `perCapita` decimal(10,2) DEFAULT '0.00',
  `announcement` varchar(300) DEFAULT '',
  `imgs` varchar(1000) DEFAULT ',',
  `avatarImage` varchar(50) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table zn_auction_merchant_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_merchant_user`;

CREATE TABLE `zn_auction_merchant_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `merchantId` int(10) DEFAULT '0',
  `name` varchar(100) DEFAULT '',
  `password` varchar(100) DEFAULT '',
  `status` int(10) DEFAULT '21',
  `phone` varchar(15) DEFAULT '',
  `email` varchar(50) DEFAULT '',
  `avatarImage` varchar(50) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table zn_auction_message
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_message`;

CREATE TABLE `zn_auction_message` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `userId` int(10) DEFAULT '0',
  `merchantId` int(10) DEFAULT '0',
  `link` varchar(100) DEFAULT '',
  `content` varchar(200) DEFAULT '',
  `type` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table zn_auction_order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_order`;

CREATE TABLE `zn_auction_order` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `orderCode` varchar(100) DEFAULT '',
  `userId` int(10) DEFAULT '0',
  `merchantId` int(10) DEFAULT '0',
  `productId` int(10) DEFAULT '0',
  `sessionId` int(10) DEFAULT '0',
  `addressId` int(10) DEFAULT '0',
  `status` int(10) DEFAULT '0',
  `price` decimal(10,2) DEFAULT '0.00',
  `increasePrice` decimal(10,2) DEFAULT '0.00',
  `brokerage` decimal(10,2) DEFAULT '0.00',
  `releaseTime` datetime DEFAULT NULL,
  `completeTime` datetime DEFAULT NULL,
  `expressCode` varchar(100) DEFAULT '',
  `bidId` int(10) DEFAULT '0',
  `bidCode` varchar(100) DEFAULT '',
  `bidTime` datetime DEFAULT NULL,
  `earnest` decimal(10,2) DEFAULT '0.00',
  `payEarnestLink` varchar(5000) DEFAULT '',
  `payEarnestWay` int(10) DEFAULT '0',
  `payEarnestTime` datetime DEFAULT NULL,
  `payOrderLink` varchar(5000) DEFAULT '',
  `payOrderWay` int(10) DEFAULT '0',
  `payOrderTime` datetime DEFAULT NULL,
  `payOrderInfo` varchar(5000) DEFAULT '',
  `payBidInfo` varchar(5000) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_auction_order` WRITE;
/*!40000 ALTER TABLE `zn_auction_order` DISABLE KEYS */;

INSERT INTO `zn_auction_order` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `orderCode`, `userId`, `merchantId`, `productId`, `sessionId`, `addressId`, `status`, `price`, `increasePrice`, `brokerage`, `releaseTime`, `completeTime`, `expressCode`, `bidId`, `bidCode`, `bidTime`, `earnest`, `payEarnestLink`, `payEarnestWay`, `payEarnestTime`, `payOrderLink`, `payOrderWay`, `payOrderTime`, `payOrderInfo`, `payBidInfo`)
VALUES
	(1,'','','2017-08-25 14:50:37',0,NULL,0,0,'','2503643837575990',1,0,2,0,1,1,0.00,0.00,0.00,NULL,NULL,'',0,'R2423',NULL,0.02,'https://openapi.alipay.com/gateway.do?app_id=2017062907601660&method=alipay.trade.wap.pay&charset=utf-8&sign_type=RSA2&sign=EP9HIV%2BZd9xHgio4wgSBwlB6ouGNFJ4trdWpJlXtk1mjyXkNoI6pAel1b%2BHYyaiw8fm%2BAp5qq0Krd%2BI%2F9Sz3sjIBkYGejXxmiV6K%2BnY7f7yQNnss7PfQAHVQY%2Bf1H12t0ki0sGOoNmeUQ433tJe3NIfrEY0RsoWvhlI26%2BwQje5%2BaVETYeplQmZmy0%2F1ITzWjsOi1DqJ9yV1OXZ9rQuITLyOC%2Bj5%2Bu1paLupgTpIFBxpepMYMq0axclAbHK5zUErPYfHxcucKP6A%2FaSk36gMe2B4zc0w5a1Ie%2FbDdNjuLOp4JDi1qC5pxN8eRXp29DxxbJkTHb13ytquDcw9%2FQiCBg%3D%3D&timestamp=2017-08-25 14:50:37&version=1.0&format=JSON&return_url=http://app.99zjpm.com/order_detail.html?orderCode=2503643837575990&notify_url=http://alipay.99zjpm.com/order_notify/bid&biz_content={\"subject\":\"拍品保证金支付\",\"product_code\":\"No.2\",\"out_trade_no\":\"R2423\",\"total_amount\":\"0.02\"}',0,'2017-08-26 00:16:14','',0,NULL,'','{\"gmt_create\":\"2017-08-25 14:50:48\",\"charset\":\"utf-8\",\"seller_email\":\"caoxianzhi96@163.com\",\"subject\":\"拍品保证金支付\",\"sign\":\"gvWgSe5o0bJNuHC2mRxOlpxJjuwKWp2NaMqMrgmlLaAPYmxx9xBFRLDO6dE31KYRaN1AO+vMOXAofLlkL60xvojJBvCBSWicTaR8VUp8B+a1fqzI1SqDg8JYUCFf/R8zH2wQvHajpVKfwOBYGwz106b9HtH1uKbH34WiQ/njzbTzq0UDaXky3hthnzzXpHF6C/o6cc219IrzsF/vvHvOCYCR0ZTNvytZqNecPFb0EAIFZnGHeAtN5KoKJ+Za4HI4ouO9NwF2JRPyI+sKg/hIearo5Htk1N5N0yOLj2tfkMLSxGpwvsTlE6jzz75IMAg6+FO8okhkWeOM3DN8Tt790g==\",\"buyer_id\":\"2088722542648882\",\"invoice_amount\":\"0.02\",\"notify_id\":\"21e1e4bda850b7143ae8686553d2165msi\",\"fund_bill_list\":\"[{\"amount\":\"0.02\",\"fundChannel\":\"ALIPAYACCOUNT\"}]\",\"notify_type\":\"trade_status_sync\",\"trade_status\":\"TRADE_SUCCESS\",\"receipt_amount\":\"0.02\",\"app_id\":\"2017062907601660\",\"buyer_pay_amount\":\"0.02\",\"sign_type\":\"RSA2\",\"seller_id\":\"2088721402073532\",\"gmt_payment\":\"2017-08-25 14:50:49\",\"notify_time\":\"2017-08-26 00:16:14\",\"version\":\"1.0\",\"out_trade_no\":\"R2423\",\"total_amount\":\"0.02\",\"trade_no\":\"2017082521001004880239952795\",\"auth_app_id\":\"2017062907601660\",\"buyer_logon_id\":\"189****6956\",\"point_amount\":\"0.00\"}');

/*!40000 ALTER TABLE `zn_auction_order` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_auction_order_bid
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_order_bid`;

CREATE TABLE `zn_auction_order_bid` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `userId` int(10) DEFAULT '0',
  `productId` int(10) DEFAULT '0',
  `status` int(10) DEFAULT '0',
  `price` decimal(10,2) DEFAULT '0.00',
  `increasePrice` decimal(10,2) DEFAULT '0.00',
  `brokerage` decimal(10,2) DEFAULT '0.00',
  `bidCode` varchar(100) DEFAULT '',
  `orderCode` varchar(100) DEFAULT '',
  `bidWaterCode` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_auction_order_bid` WRITE;
/*!40000 ALTER TABLE `zn_auction_order_bid` DISABLE KEYS */;

INSERT INTO `zn_auction_order_bid` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `userId`, `productId`, `status`, `price`, `increasePrice`, `brokerage`, `bidCode`, `orderCode`, `bidWaterCode`)
VALUES
	(1,'','','2017-08-25 14:52:06',0,NULL,0,0,'',1,2,-1,18340000.00,20000.00,0.00,'R2423','2503643837575990','R24231503643926416'),
	(2,'','','2017-08-25 14:52:54',0,NULL,0,0,'',1,2,1,18360000.00,20000.00,0.00,'R2423','2503643837575990','R24231503643974384');

/*!40000 ALTER TABLE `zn_auction_order_bid` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_auction_product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_product`;

CREATE TABLE `zn_auction_product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `alias` varchar(100) DEFAULT ',',
  `sessionId` int(10) DEFAULT '0',
  `masterId` int(10) DEFAULT '0',
  `auctionStatus` int(10) DEFAULT '0',
  `auctionType` int(10) DEFAULT '0',
  `auctionTypeId` int(10) DEFAULT '0',
  `typeId` int(10) DEFAULT '0',
  `types` varchar(500) DEFAULT ',',
  `merchantId` int(10) DEFAULT '0',
  `merchantTypeId` int(10) DEFAULT '0',
  `currentPrice` decimal(10,2) DEFAULT '0.00',
  `reservePrice` decimal(10,2) DEFAULT '0.00',
  `beginPrice` decimal(10,2) DEFAULT '0.00',
  `endPrice` decimal(10,2) DEFAULT '0.00',
  `brokerage` decimal(10,2) DEFAULT '0.00',
  `earnestMoney` decimal(10,2) DEFAULT '0.00',
  `increaseStep` decimal(10,2) DEFAULT '0.00',
  `evaluatePrice` decimal(10,2) DEFAULT '0.00',
  `unit` varchar(10) DEFAULT '个',
  `logo` varchar(500) DEFAULT '',
  `imgs` varchar(5000) DEFAULT ',',
  `videos` varchar(5000) DEFAULT ',',
  `beginTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `status` int(10) DEFAULT '0',
  `priceCount` int(10) DEFAULT '0',
  `applyCount` int(10) DEFAULT '0',
  `notifyCount` int(10) DEFAULT '0',
  `watchCount` int(10) DEFAULT '0',
  `collectCount` int(10) DEFAULT '0',
  `province` int(10) DEFAULT '0',
  `city` int(10) DEFAULT '0',
  `area` int(10) DEFAULT '0',
  `address` varchar(200) DEFAULT '',
  `delayPeriod` int(10) DEFAULT '0',
  `argv` varchar(5000) DEFAULT ',',
  `notifyUsers` varchar(2000) DEFAULT ',',
  `collectUsers` varchar(2000) DEFAULT ',',
  `gongGao` longtext,
  `xuZhi` longtext,
  `bangZhu` longtext,
  `vars` varchar(200) DEFAULT ',',
  `buyMethod` int(10) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_auction_product` WRITE;
/*!40000 ALTER TABLE `zn_auction_product` DISABLE KEYS */;

INSERT INTO `zn_auction_product` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `alias`, `sessionId`, `masterId`, `auctionStatus`, `auctionType`, `auctionTypeId`, `typeId`, `types`, `merchantId`, `merchantTypeId`, `currentPrice`, `reservePrice`, `beginPrice`, `endPrice`, `brokerage`, `earnestMoney`, `increaseStep`, `evaluatePrice`, `unit`, `logo`, `imgs`, `videos`, `beginTime`, `endTime`, `status`, `priceCount`, `applyCount`, `notifyCount`, `watchCount`, `collectCount`, `province`, `city`, `area`, `address`, `delayPeriod`, `argv`, `notifyUsers`, `collectUsers`, `gongGao`, `xuZhi`, `bangZhu`, `vars`, `buyMethod`)
VALUES
	(2,'','徐汇区凯滨路19弄14号P座2001号','2017-08-23 21:23:31',0,'2017-08-25 13:16:11',0,0,'<p> 房屋位于上海市徐汇区凯滨路19弄，所在小区为“尚海湾豪庭”，二梯三户。内给水、排水、通讯、燃气、电器等设备配置齐全，性能良好。 </p> <p> 交通通达度较好，周边主要有714路、41路、734路、轨道交通12号线等，交通便捷。 </p> <p> 所在区域公共服务设施集中，有徐汇区东二小学、东安公园、便利店、餐馆等。 </p>','',0,0,0,53,0,1,',',0,0,18360000.00,18110000.00,18110000.00,0.00,0.00,0.02,10000.00,18110000.00,'','/auction/uploads/catalog/upload_7b6724941b7ee1f69f17503f12d026c3.jpg','/auction/uploads/catalog/upload_3d450a336c184a9fb9678082ab19e1f7.jpg,/auction/uploads/catalog/upload_9eb6a81273595aefb36af052ef517b81.jpg,/auction/uploads/catalog/upload_c297ddd9e5689b7d97b42b1d035c406f.jpg,/auction/uploads/catalog/upload_73257581dc89305f7ca641391e3bb5fd.jpg,/auction/uploads/catalog/upload_642a78d32aa41ad67e685b6b3cea75ac.jpg,/auction/uploads/catalog/upload_3ce14fabcf3056d637d6164c28aab029.jpg,/auction/uploads/catalog/upload_212cd9949ea6348d856ac7dbf819c75f.jpg,','','2017-07-05 10:00:00','2017-08-31 10:00:00',1,17,8,0,0,0,40,46,0,'徐汇区凯滨路19弄14号P座2001号',300,'',',',',','','','',',29,',58),
	(3,'','普陀区武威东路479弄202室','2017-08-23 21:23:31',0,NULL,0,0,'<p> 普陀区武威东路479弄202室，建筑面积：136.32㎡，所在小区大华颐和华城。总层数6层，位于第2层，竣工日期：2004年。 </p> <p> 小区附近有公交78路、159路、510路、762路、112路、地铁11号线（李子园站），交通便捷度较好。 </p> <p> 周边有晋元高级中学附属学校、大华行知公园、奥特莱斯、巴黎春天、乐购、苏宁、家乐福、九百购物中心等，公建配套设施、生活服务设施较好。周边以居民住宅为主，住宅集聚度较高。 </p>','',0,0,0,53,0,1,',',0,0,0.01,8990000.00,0.01,0.00,0.00,0.01,0.00,0.01,'','/auction/uploads/catalog/upload_8af1ab186668f024f6afce9db477b98f.jpg','/auction/uploads/catalog/upload_eacbdb1aa75529a630ac35b2a9e7f283.jpg,/auction/uploads/catalog/upload_08cb8c9e7b975963e23c2ea4fa89864d.jpg,/auction/uploads/catalog/upload_52166e78023c83ba4e60fcbf37f9024b.jpg,/auction/uploads/catalog/upload_5a3a317561e3b4caa4d34834522531db.jpg,/auction/uploads/catalog/upload_4032419f824f2ba2d2786d7090e3d48f.jpg,/auction/uploads/catalog/upload_b9ed111eb66de82ed695dbbfe31a8a29.jpg,/auction/uploads/catalog/upload_48b59cae46848701d21188dec8404df1.jpg,/auction/uploads/catalog/upload_078b2b916fa4ba4d90dd4348f7d6dd92.jpg,','','2017-07-05 10:00:00','2017-08-13 10:00:00',1,8,11,0,0,0,40,46,0,'普陀区武威东路479弄202室',300,'',',',',','','','',',29,',59),
	(4,'','浦东新区张杨路188号12A-02室','2017-08-23 21:23:31',0,NULL,0,0,'<p> 办公楼坐落于浦东新区张杨路188号汤臣商务中心大厦，处于内环以内。 </p> <p> 所在大厦地上总层数28层，竣工日期1997年，外墙为玻璃幕墙，是集办公、商业为一体的综合楼。 </p> <p> 地处浦东陆家嘴金融、贸易、商业中心，30分钟直达浦东国际机场，周边以高档住宅小区为主，临近八佰伴商业区、新上海商业城、第一八佰伴、时代广场和新亚汤臣大酒店等，周边环境较好。 </p>','',0,0,0,53,0,1,',',0,0,7380000.00,7380000.00,7380000.00,0.00,0.00,0.02,0.00,7380000.00,'','/auction/uploads/catalog/upload_314f8549ed9c55b2736a47f3d5494a7a.jpg','/auction/uploads/catalog/upload_caae0c6dd4cb9d7244da8210a103c33d.jpg,/auction/uploads/catalog/upload_2140f291f5ec477be16b8851babd553f.jpg,/auction/uploads/catalog/upload_3b8d98631ac06ec9f6dfcd75813ec901.jpg,/auction/uploads/catalog/upload_306c8fd351d9ab3ce22dfeb9cba6456f.jpg,','','2017-07-06 10:00:00','2017-08-27 10:59:00',1,3,6,0,0,2,40,46,0,'浦东新区张杨路188号12A-02室',300,'',',',',1,','','','',',29,',59),
	(5,'','浦东新区高行镇东靖路51弄101室','2017-08-23 21:23:31',0,NULL,0,0,'<p>\n	&nbsp;所在小区浦煤新村，建造年代1997年，总层数6层，所在1层，建筑面积98.3㎡。\n</p>\n<p>\n	&nbsp;环境：附近主要为住宅区、老工业区，小区西侧于北侧为厂房，自然环境较差。\n</p>\n<p>\n	&nbsp;交通：周边主要有公交406路、971路、浦东15路等。距离地铁6号线约2公里，交通状况一般。\n</p>','',1,0,0,0,0,1,',',0,0,63000000.00,5250000.00,5250000.00,0.00,0.00,0.01,5250000.00,5250000.00,'','/auction/uploads/catalog/upload_0a87797f6c55841bd9677d1b4e76cf41.jpg','/auction/uploads/catalog/upload_29bb272d02d8d2830ae1a17323f14f8a.jpg,/auction/uploads/catalog/upload_1989bb672fd5c26d71a570837864a161.jpg,/auction/uploads/catalog/upload_157e4642accd5ced6a20c7c4e00ed9a9.jpg,/auction/uploads/catalog/upload_7ce53214b1ee2876a9d8cc440e8c5c2c.jpg,','','2017-07-06 10:00:00','2017-08-31 10:00:00',1,9,4,1,0,1,0,0,0,'',300,'',',1,',',1,','','','',',',0),
	(6,'','普陀区交通西路108弄1603室','2017-08-23 21:23:31',0,NULL,0,0,'普陀区交通西路108弄1603室住宅，所在小区为“盛世家园”。<br />\n所在建筑物竣工于1997年，外墙刷涂料，塑钢外窗，总层数为24层，位于第16层，配置2部电梯，建筑面积为70.78㎡。<br />\n周围公共配套设施较为齐全，其中有联华超市、好德便利店、新黄浦实验学校等，周边主要公交有140路、744路、117路、859路等线路。','',1,0,0,0,0,1,',',0,0,4320000.00,4320000.00,4320000.00,0.00,0.00,0.01,0.00,4320000.00,'','/auction/uploads/catalog/upload_9783a388f01dd028a99f3386a12063fd.jpg','/auction/uploads/catalog/upload_1b3c830dea51d7c7f8a1e1e5d27a25b8.jpg,/auction/uploads/catalog/upload_1b2eed4c816cb514ee75b7d40957fad2.jpg,/auction/uploads/catalog/upload_9f2d13d08f9b1b1a86790d3a3b13bf98.jpg,/auction/uploads/catalog/upload_0a6afc6ed9c349011ed0e2eae89c1bd3.jpg,/auction/uploads/catalog/upload_c8d49cb3684574a1b3ee826187a1fee3.jpg,/auction/uploads/catalog/upload_87366cc39e61bde22122c58224f2b654.jpg,','','2017-07-06 10:00:00','2017-08-31 10:00:00',1,3,1,1,0,0,0,0,0,'',300,'',',1,',',','','','',',',0);

/*!40000 ALTER TABLE `zn_auction_product` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_auction_product_type
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_product_type`;

CREATE TABLE `zn_auction_product_type` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `zn_tree_pid` int(11) DEFAULT '0',
  `zn_tree_depth` int(11) DEFAULT '0',
  `zn_tree_order` int(11) DEFAULT '0',
  `zn_tree_parent_path` varchar(250) DEFAULT ',',
  `zn_tree_son_count` int(11) DEFAULT '0',
  `zn_tree_max_son_count` int(11) DEFAULT '0',
  `zn_tree_extend` varchar(500) DEFAULT '',
  `zn_tree_type` int(11) DEFAULT '0',
  `typeId` int(10) DEFAULT '0',
  `href` varchar(50) DEFAULT '',
  `alias` varchar(200) DEFAULT '',
  `description` varchar(500) DEFAULT '',
  `img` varchar(300) DEFAULT '',
  `imgs` varchar(3000) DEFAULT ',',
  `icon` varchar(300) DEFAULT '',
  `tags` varchar(500) DEFAULT ',',
  `vars` varchar(500) DEFAULT ',',
  `status` int(10) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_auction_product_type` WRITE;
/*!40000 ALTER TABLE `zn_auction_product_type` DISABLE KEYS */;

INSERT INTO `zn_auction_product_type` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `zn_tree_pid`, `zn_tree_depth`, `zn_tree_order`, `zn_tree_parent_path`, `zn_tree_son_count`, `zn_tree_max_son_count`, `zn_tree_extend`, `zn_tree_type`, `typeId`, `href`, `alias`, `description`, `img`, `imgs`, `icon`, `tags`, `vars`, `status`)
VALUES
	(1,'','司法拍卖','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,0,',',0,0,'',0,0,'/product/list/sifa','国际指定拍卖机构','','/auction/uploads/catalog/upload_21508a86b3107f2d90b2a3b1c7055d84.png',',','',',',',17,18,19,20,21,22,23,',0),
	(2,'','资产处置','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,0,',',0,0,'',0,0,'/product/list/zichan','低价抛售','','/auction/uploads/catalog/upload_686bd68baf71a923b8677eafb6c0c23b.PNG',',','',',',',17,18,19,20,21,22,23,',0),
	(3,'','珍品拍卖','2017-08-23 21:23:31',0,NULL,0,0,'',0,1,1,',',3,0,'',0,0,'/product/list/zhenping','','','/auction/uploads/catalog/upload_864ca25c92fe6603c03521c407eae9f3.PNG',',','',',',',17,18,19,20,21,22,23,',0),
	(4,'','汽车','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,0,',',0,0,'',0,0,'','','','/auction/uploads/catalog/upload_0a59c2c368aecba7e4a83858b56bd0ab.png',',','',',',',17,18,19,20,21,22,23,',0),
	(5,'','古董字画','2017-08-23 21:23:31',0,NULL,0,0,'',3,2,1,',3,',0,0,'',0,0,'','','','/auction/uploads/catalog/upload_9eb7ac9d4b942583ffe7784d9aa48e09.PNG',',','',',',',',0),
	(6,'','瓷器','2017-08-23 21:23:31',0,NULL,0,0,'',3,2,2,',3,',0,0,'',0,0,'','','','/auction/uploads/catalog/upload_653a9effbe4a63d2bef03633daf0c4bc.png',',','',',',',',0),
	(7,'','宝石','2017-08-23 21:23:31',0,NULL,0,0,'',3,2,3,',3,',0,0,'',0,0,'','','','/auction/uploads/catalog/upload_a9ce964fa2d4e557396bbfd4cdb236e4.PNG',',','',',',',',0);

/*!40000 ALTER TABLE `zn_auction_product_type` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_auction_session
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_session`;

CREATE TABLE `zn_auction_session` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `isAdv` int(10) DEFAULT '0',
  `typeId` int(10) DEFAULT '0',
  `alias` varchar(200) DEFAULT '',
  `description` varchar(500) DEFAULT '',
  `img` varchar(300) DEFAULT '',
  `imgs` varchar(3000) DEFAULT ',',
  `videos` varchar(3000) DEFAULT ',',
  `icon` varchar(300) DEFAULT '',
  `tags` varchar(500) DEFAULT ',',
  `vars` varchar(500) DEFAULT ',',
  `beginTime` datetime DEFAULT NULL,
  `endTime` datetime DEFAULT NULL,
  `status` int(10) DEFAULT '0',
  `watchCount` int(10) DEFAULT '0',
  `notifyUsers` varchar(500) DEFAULT ',',
  `notifyCount` int(10) DEFAULT '0',
  `applyCount` int(10) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_auction_session` WRITE;
/*!40000 ALTER TABLE `zn_auction_session` DISABLE KEYS */;

INSERT INTO `zn_auction_session` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `isAdv`, `typeId`, `alias`, `description`, `img`, `imgs`, `videos`, `icon`, `tags`, `vars`, `beginTime`, `endTime`, `status`, `watchCount`, `notifyUsers`, `notifyCount`, `applyCount`)
VALUES
	(1,'','上海人民法院专场','2017-08-23 21:23:31',0,'2017-08-25 14:35:10',0,0,'',1,1,'','ggg','/auction/uploads/catalog/upload_e7bf517435759bd6c950b8ce2792fc9c.jpg','/auction/uploads/catalog/upload_7ae837c2c31e5b77e97235126e074ee4.jpg,/auction/uploads/catalog/upload_0803de904408731bc54dbb3b361ab7ec.jpg,/auction/uploads/catalog/upload_6789046649b788abe3212cc476b50a0e.jpg,/auction/uploads/catalog/upload_ab26d4924f9ffde01ba26f69a6d73667.jpg,/auction/uploads/catalog/upload_5f1fc5ce4ff3b1fde71c3287c896f272.jpg,,,/auction/uploads/catalog/upload_05fff24521efb0d0ecc6976537f4af83.jpg,/auction/uploads/catalog/upload_f9c277a321973c5e7d604716c64b2212.jpg,/auction/uploads/catalog/upload_cafc7b620ebb963cbb30e374ec901da0.jpg,/auction/uploads/catalog/upload_94dbe98bb402420006f22e57ad6a479c.jpg,/auction/uploads/catalog/upload_658ce162b7516bc751edc1dde3b09aa9.jpg,/auction/uploads/catalog/upload_ddd49cfcd36710d0d7e368eafd410e4e.jpg,',',','',',',',','2017-07-06 10:00:00','2017-08-31 10:00:00',1,6,',',0,0),
	(2,'','房产拍卖','2017-08-23 21:23:31',0,NULL,0,0,'',1,1,'','<p> 房产专场 </p> <p> <iframe src=\"http://app.99zjpm.com/kindeditor/plugins/baidumap/index.html?center=121.460193%2C31.255586&zoom=14&width=558&height=360&markers=121.460193%2C31.255586&markerStyles=l%2CA\" frameborder=\"0\" style=\"width:560px;height:362px;\"> </iframe> </p>','/auction/uploads/catalog/upload_75497964358c29ef1f51dff967c25c99.jpg','/auction/uploads/catalog/upload_40f7d11a0705ca1941a0aa085cab4ab3.jpg,/auction/uploads/catalog/upload_c40fdee6b8ecde069f28b864ab9a19ba.jpg,',',','',',',',','2017-08-09 00:00:00','2017-08-18 00:00:00',1,0,',',0,0);

/*!40000 ALTER TABLE `zn_auction_session` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_auction_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_user`;

CREATE TABLE `zn_auction_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `name` varchar(100) DEFAULT '',
  `password` varchar(100) DEFAULT '',
  `gesturePassword` varchar(50) DEFAULT '',
  `status` int(10) DEFAULT '21',
  `city` int(10) DEFAULT '0',
  `address` varchar(100) DEFAULT '',
  `alias` varchar(100) DEFAULT '',
  `age` int(10) DEFAULT '0',
  `sex` varchar(4) DEFAULT '男',
  `phone` varchar(15) DEFAULT '',
  `email` varchar(50) DEFAULT '',
  `avatarImage` varchar(50) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_auction_user` WRITE;
/*!40000 ALTER TABLE `zn_auction_user` DISABLE KEYS */;

INSERT INTO `zn_auction_user` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `name`, `password`, `gesturePassword`, `status`, `city`, `address`, `alias`, `age`, `sex`, `phone`, `email`, `avatarImage`)
VALUES
	(1,'','','2017-08-23 21:23:31',0,NULL,0,0,'','admin','1234','1&2&5&8',21,0,'','',0,'男','1234','1234',''),
	(2,'','','2017-08-23 21:23:31',0,NULL,0,0,'','','zhi960313','',31,0,'上海市宝山区共和新路4727号新陆大厦12楼','',21,'男','18702108845','1146932078@qq.com',''),
	(3,'','','2017-08-23 21:23:31',0,NULL,0,0,'','','123456','',31,0,'','',0,'男','18221005289','1229385975@qq.com',''),
	(4,'','','2017-08-23 21:23:31',0,NULL,0,0,'','','549378','',31,0,'','',0,'男','13916632625','773581384@qq.com',''),
	(5,'','','2017-08-23 21:23:31',0,NULL,0,0,'','','jmx780103','',31,0,'','',0,'男','17765171717','945347426@qq.com',''),
	(6,'','','2017-08-23 21:23:31',0,NULL,0,0,'','','698450okokok','',31,0,'','',0,'男','15032699888','734871948',''),
	(7,'','','2017-08-23 21:23:31',0,NULL,0,0,'','','19860129','',31,0,'','',0,'男','13695895988','68846717@qq.com',''),
	(8,'','','2017-08-23 21:23:31',0,NULL,0,0,'','','an56134607','',31,0,'','',0,'男','13524255333','179010949@qq.com',''),
	(9,'','','2017-08-23 21:23:31',0,NULL,0,0,'','','123456','',31,0,'','',0,'男','17717507168','284486662@qq.com',''),
	(10,'','','2017-08-25 14:38:42',0,NULL,0,0,'','','15221887643','',31,0,'','',0,'男','15221887643','1343723898@qq.com','');

/*!40000 ALTER TABLE `zn_auction_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_auction_user_address
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_user_address`;

CREATE TABLE `zn_auction_user_address` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `isDefault` int(10) DEFAULT '0',
  `userId` int(10) DEFAULT '0',
  `name` varchar(100) DEFAULT '',
  `phone` varchar(100) DEFAULT '',
  `province` int(10) DEFAULT '0',
  `city` int(10) DEFAULT '0',
  `area` int(10) DEFAULT '0',
  `postcode` varchar(10) DEFAULT '',
  `address` varchar(200) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_auction_user_address` WRITE;
/*!40000 ALTER TABLE `zn_auction_user_address` DISABLE KEYS */;

INSERT INTO `zn_auction_user_address` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `isDefault`, `userId`, `name`, `phone`, `province`, `city`, `area`, `postcode`, `address`)
VALUES
	(1,'94606150-929D-4D96-B53B-ED9C1A81FB55','','2017-08-25 00:05:05',0,NULL,0,0,'',1,1,'徐先生','12',5,9,12,'sss','sss');

/*!40000 ALTER TABLE `zn_auction_user_address` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_auction_user_collection
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_user_collection`;

CREATE TABLE `zn_auction_user_collection` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `userId` int(10) DEFAULT '0',
  `productId` int(10) DEFAULT '0',
  `collectionTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table zn_auction_user_remind
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_auction_user_remind`;

CREATE TABLE `zn_auction_user_remind` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `userId` int(10) DEFAULT '0',
  `productId` int(10) DEFAULT '0',
  `remindTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table zn_plugin_admin_config
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_plugin_admin_config`;

CREATE TABLE `zn_plugin_admin_config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `zn_rights_owner_id` int(11) DEFAULT '0',
  `zn_rights_enabled` int(4) DEFAULT '0',
  `zn_rights_users` varchar(250) DEFAULT ',',
  `zn_rights_roles` varchar(250) DEFAULT ',',
  `zn_rights_observe_users` varchar(250) DEFAULT ',',
  `zn_rights_observe_roles` varchar(250) DEFAULT ',',
  `_id` varchar(50) DEFAULT '',
  `_title` varchar(250) DEFAULT '',
  `_key` varchar(250) DEFAULT '',
  `_value` varchar(2000) DEFAULT '',
  `_rich_value` longtext,
  `ref_id` int(11) DEFAULT '0',
  `var_id` int(11) DEFAULT '0',
  `input_type` varchar(50) DEFAULT 'Input',
  `data_type` varchar(20) DEFAULT 'String',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_plugin_admin_config` WRITE;
/*!40000 ALTER TABLE `zn_plugin_admin_config` DISABLE KEYS */;

INSERT INTO `zn_plugin_admin_config` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `zn_rights_owner_id`, `zn_rights_enabled`, `zn_rights_users`, `zn_rights_roles`, `zn_rights_observe_users`, `zn_rights_observe_roles`, `_id`, `_title`, `_key`, `_value`, `_rich_value`, `ref_id`, `var_id`, `input_type`, `data_type`)
VALUES
	(1,'','','2017-08-23 21:23:18',0,NULL,0,0,'',0,0,',',',',',',',','zn.plugin.admin.base','企业标题','company_title','上海中建拍卖有限公司',NULL,0,0,'Input','String'),
	(2,'','','2017-08-23 21:23:18',0,NULL,0,0,'',0,0,',',',',',',',','zn.plugin.admin.base','企业Logo','company_logo','/zn.plugin.admin/uploads/catalog/upload_73050e807b0f36435f5df9ca6f1d39a8.png',NULL,0,0,'ImageUploader','String'),
	(3,'','','2017-08-23 21:23:18',0,NULL,0,0,'',0,0,',',',',',',',','zn.plugin.admin.base','企业网站','company_website','http://www.99zjpm.com',NULL,0,0,'Input','String'),
	(4,'','','2017-08-23 21:23:18',0,NULL,0,0,'',0,0,',',',',',',',','zn.plugin.admin.base','企业TM','company_tm','上海中建拍卖有限公司 @2016 - @2017',NULL,0,0,'Input','String'),
	(5,'','','2017-08-23 21:23:18',0,NULL,0,0,'',0,0,',',',',',',',','zn.plugin.admin.base','系统主页','main','/znpluginadmin.dashboard',NULL,0,0,'Input','String'),
	(6,'','','2017-08-23 21:23:18',0,NULL,0,0,'',0,0,',',',',',',',','zn.plugin.admin.base','登录页背景图','login_background_image','/zn.plugin.admin/uploads/catalog/upload_c97b187e1111c4735857863d571688b7.jpg',NULL,0,0,'ImageUploader','String'),
	(7,'','','2017-08-23 21:23:18',0,NULL,0,0,'',0,0,',',',',',',',','zn.plugin.admin.base','主页面背景图','main_background_image','/zn.plugin.admin/uploads/catalog/upload_fb475b96669cbfbdf0ffba7d36f1eb08.jpg',NULL,0,0,'ImageUploader','String'),
	(8,'','','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,',',',',',',',','zn.auction.setting','HOST','host','',NULL,0,0,'Input','String'),
	(9,'','','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,',',',',',',',','zn.auction.setting','PORT','port','',NULL,0,0,'Input','String'),
	(10,'','','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,',',',',',',',','zn.auction.setting','版本','version','',NULL,0,0,'Input','String'),
	(11,'','','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,',',',',',',',','zn.auction.setting','协议','protocol','',NULL,0,0,'Input','String'),
	(12,'','','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,',',',',',',',','zn.auction.setting','公告','gong_gao','',NULL,0,0,'Input','String'),
	(13,'','','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,',',',',',',',','zn.auction.setting','须知','xu_zhi','',NULL,0,0,'Input','String'),
	(14,'','','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,',',',',',',',','zn.auction.setting','帮助','bang_zhu','',NULL,0,0,'Input','String'),
	(15,'','','2017-08-23 21:23:31',0,NULL,0,0,'',0,0,',',',',',',',','zn.auction.setting','热线','hot_phone','',NULL,0,0,'Input','String');

/*!40000 ALTER TABLE `zn_plugin_admin_config` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_plugin_admin_menu
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_plugin_admin_menu`;

CREATE TABLE `zn_plugin_admin_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `zn_tag_vars` varchar(250) DEFAULT ',',
  `zn_tree_pid` int(11) DEFAULT '0',
  `zn_tree_depth` int(11) DEFAULT '0',
  `zn_tree_order` int(11) DEFAULT '0',
  `zn_tree_parent_path` varchar(250) DEFAULT ',',
  `zn_tree_son_count` int(11) DEFAULT '0',
  `zn_tree_max_son_count` int(11) DEFAULT '0',
  `zn_tree_extend` varchar(500) DEFAULT '',
  `zn_tree_type` int(11) DEFAULT '0',
  `zn_rights_owner_id` int(11) DEFAULT '0',
  `zn_rights_enabled` int(4) DEFAULT '0',
  `zn_rights_users` varchar(250) DEFAULT ',',
  `zn_rights_roles` varchar(250) DEFAULT ',',
  `zn_rights_observe_users` varchar(250) DEFAULT ',',
  `zn_rights_observe_roles` varchar(250) DEFAULT ',',
  `icon` varchar(50) DEFAULT '',
  `img` varchar(200) DEFAULT '',
  `url` varchar(200) DEFAULT '',
  `path` varchar(200) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_plugin_admin_menu` WRITE;
/*!40000 ALTER TABLE `zn_plugin_admin_menu` DISABLE KEYS */;

INSERT INTO `zn_plugin_admin_menu` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `zn_tag_vars`, `zn_tree_pid`, `zn_tree_depth`, `zn_tree_order`, `zn_tree_parent_path`, `zn_tree_son_count`, `zn_tree_max_son_count`, `zn_tree_extend`, `zn_tree_type`, `zn_rights_owner_id`, `zn_rights_enabled`, `zn_rights_users`, `zn_rights_roles`, `zn_rights_observe_users`, `zn_rights_observe_roles`, `icon`, `img`, `url`, `path`)
VALUES
	(1,'','管理平台','2017-08-23 21:23:18',0,NULL,0,0,'',',',0,0,0,',',0,0,'',0,0,0,',',',',',',',','','','',''),
	(2,'','数据管理中心','2017-08-23 21:23:18',0,NULL,0,0,'',',',0,1,1,',',1,0,'',0,0,0,',',',',',',',','','','',''),
	(3,'','系统设置','2017-08-23 21:23:18',0,NULL,0,0,'',',',2,2,1,',2,',5,0,'',0,0,0,',',',',',',',','fa-gear','','',''),
	(4,'','用户管理','2017-08-23 21:23:18',0,NULL,0,0,'',',',3,3,1,',2,3,',0,0,'',0,0,0,',',',',',',',','fa-user-md','','/znpluginadmin.user.list',''),
	(5,'','角色管理','2017-08-23 21:23:18',0,NULL,0,0,'',',',3,3,2,',2,3,',0,0,'',0,0,0,',',',',',',',','fa-graduation-cap','','/znpluginadmin.setting.role',''),
	(6,'','菜单管理','2017-08-23 21:23:18',0,NULL,0,0,'',',',3,3,3,',2,3,',0,0,'',0,0,0,',',',',',',',','fa-outdent','','/znpluginadmin.setting.menu',''),
	(7,'','资源及权限','2017-08-23 21:23:18',0,NULL,0,0,'',',',3,3,4,',2,3,',0,0,'',0,0,0,',',',',',',',','fa-list-ul','','/znpluginadmin.setting.var',''),
	(8,'','系统配置','2017-08-23 21:23:18',0,NULL,0,0,'',',',3,3,5,',2,3,',0,0,'',0,0,0,',',',',',',',','fa-gears','','/znpluginadmin.setting.base',''),
	(9,'','拍卖','2017-08-23 21:23:31',0,NULL,0,0,'',',',2,2,2,',2,',4,0,'',0,0,0,',',',',',',',','fa-legal','','',''),
	(10,'','拍品管理','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,3,1,',2,9,',0,0,'',0,0,0,',',',',',',',','fa-product-hunt','','/product.manager',''),
	(11,'','专场管理','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,3,2,',2,9,',0,0,'',0,0,0,',',',',',',',','fa-bell','','/product.session',''),
	(12,'','用户管理','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,3,3,',2,9,',0,0,'',0,0,0,',',',',',',',','fa-user','','/user.list','');

/*!40000 ALTER TABLE `zn_plugin_admin_menu` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_plugin_admin_project
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_plugin_admin_project`;

CREATE TABLE `zn_plugin_admin_project` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `zn_tag_vars` varchar(250) DEFAULT ',',
  `zn_tree_pid` int(11) DEFAULT '0',
  `zn_tree_depth` int(11) DEFAULT '0',
  `zn_tree_order` int(11) DEFAULT '0',
  `zn_tree_parent_path` varchar(250) DEFAULT ',',
  `zn_tree_son_count` int(11) DEFAULT '0',
  `zn_tree_max_son_count` int(11) DEFAULT '0',
  `zn_tree_extend` varchar(500) DEFAULT '',
  `zn_tree_type` int(11) DEFAULT '0',
  `zn_rights_owner_id` int(11) DEFAULT '0',
  `zn_rights_enabled` int(4) DEFAULT '0',
  `zn_rights_users` varchar(250) DEFAULT ',',
  `zn_rights_roles` varchar(250) DEFAULT ',',
  `zn_rights_observe_users` varchar(250) DEFAULT ',',
  `zn_rights_observe_roles` varchar(250) DEFAULT ',',
  `type` int(11) DEFAULT '0',
  `status` int(11) DEFAULT '0',
  `version` varchar(50) DEFAULT '',
  `priority` int(11) DEFAULT '0',
  `module` varchar(200) DEFAULT '',
  `files` varchar(2000) DEFAULT ',',
  `description` longtext,
  `begin_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `finished_time` datetime DEFAULT NULL,
  `workload` float DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table zn_plugin_admin_project_bug
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_plugin_admin_project_bug`;

CREATE TABLE `zn_plugin_admin_project_bug` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `zn_tag_vars` varchar(250) DEFAULT ',',
  `zn_rights_owner_id` int(11) DEFAULT '0',
  `zn_rights_enabled` int(4) DEFAULT '0',
  `zn_rights_users` varchar(250) DEFAULT ',',
  `zn_rights_roles` varchar(250) DEFAULT ',',
  `zn_rights_observe_users` varchar(250) DEFAULT ',',
  `zn_rights_observe_roles` varchar(250) DEFAULT ',',
  `project_id` int(11) DEFAULT '0',
  `version` varchar(50) DEFAULT '',
  `priority` int(11) DEFAULT '0',
  `owner` int(11) DEFAULT '0',
  `state` int(11) DEFAULT '0',
  `type` int(11) DEFAULT '0',
  `module` varchar(100) DEFAULT '',
  `description` longtext,
  `solution` longtext,
  `files` varchar(3000) DEFAULT ',',
  `begin_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `finished_time` datetime DEFAULT NULL,
  `workload` float DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table zn_plugin_admin_role
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_plugin_admin_role`;

CREATE TABLE `zn_plugin_admin_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `zn_tag_vars` varchar(250) DEFAULT ',',
  `zn_tree_pid` int(11) DEFAULT '0',
  `zn_tree_depth` int(11) DEFAULT '0',
  `zn_tree_order` int(11) DEFAULT '0',
  `zn_tree_parent_path` varchar(250) DEFAULT ',',
  `zn_tree_son_count` int(11) DEFAULT '0',
  `zn_tree_max_son_count` int(11) DEFAULT '0',
  `zn_tree_extend` varchar(500) DEFAULT '',
  `zn_tree_type` int(11) DEFAULT '0',
  `_id` varchar(100) DEFAULT '',
  `type` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_plugin_admin_role` WRITE;
/*!40000 ALTER TABLE `zn_plugin_admin_role` DISABLE KEYS */;

INSERT INTO `zn_plugin_admin_role` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `zn_tag_vars`, `zn_tree_pid`, `zn_tree_depth`, `zn_tree_order`, `zn_tree_parent_path`, `zn_tree_son_count`, `zn_tree_max_son_count`, `zn_tree_extend`, `zn_tree_type`, `_id`, `type`)
VALUES
	(1,'','集团','2017-08-23 21:23:18',0,NULL,0,0,'',',',0,1,1,',',2,0,'',0,'',0),
	(2,'','北京分公司','2017-08-23 21:23:18',0,NULL,0,0,'',',',1,2,1,',1,',1,0,'',0,'',0),
	(3,'','上海分公司','2017-08-23 21:23:18',0,NULL,0,0,'',',',1,2,2,',1,',3,0,'',0,'',0),
	(4,'','行政部','2017-08-23 21:23:18',0,NULL,0,0,'',',',2,3,1,',1,2,',0,0,'',0,'',0),
	(5,'','行政部','2017-08-23 21:23:18',0,NULL,0,0,'',',',3,3,1,',1,3,',0,0,'',0,'',0),
	(6,'','技术部','2017-08-23 21:23:18',0,NULL,0,0,'',',',3,3,2,',1,3,',0,0,'',0,'',0),
	(7,'','财务部','2017-08-23 21:23:18',0,NULL,0,0,'',',',3,3,3,',1,3,',0,0,'',0,'',0);

/*!40000 ALTER TABLE `zn_plugin_admin_role` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_plugin_admin_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_plugin_admin_user`;

CREATE TABLE `zn_plugin_admin_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `_id` varchar(100) DEFAULT '',
  `name` varchar(100) DEFAULT '',
  `password` varchar(100) DEFAULT '123456',
  `pin_yin` varchar(20) DEFAULT NULL,
  `pin_yin_first_char` varchar(20) DEFAULT NULL,
  `first_char` varchar(2) DEFAULT NULL,
  `role_ids` varchar(500) DEFAULT ',',
  `email` varchar(50) DEFAULT '',
  `phone` varchar(20) DEFAULT '',
  `address` varchar(250) DEFAULT '',
  `avatar_img` varchar(250) DEFAULT '',
  `last_login_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_plugin_admin_user` WRITE;
/*!40000 ALTER TABLE `zn_plugin_admin_user` DISABLE KEYS */;

INSERT INTO `zn_plugin_admin_user` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `_id`, `name`, `password`, `pin_yin`, `pin_yin_first_char`, `first_char`, `role_ids`, `email`, `phone`, `address`, `avatar_img`, `last_login_time`)
VALUES
	(1,'','','2017-08-23 21:23:18',0,NULL,0,0,'','','admin','1234',NULL,NULL,NULL,',','','','','',NULL);

/*!40000 ALTER TABLE `zn_plugin_admin_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table zn_plugin_admin_user_log
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_plugin_admin_user_log`;

CREATE TABLE `zn_plugin_admin_user_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `user_id` int(11) DEFAULT NULL,
  `address` varchar(250) DEFAULT '',
  `type` int(11) DEFAULT '0',
  `_sql` varchar(250) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table zn_plugin_admin_var
# ------------------------------------------------------------

DROP TABLE IF EXISTS `zn_plugin_admin_var`;

CREATE TABLE `zn_plugin_admin_var` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `zn_id` char(36) DEFAULT '',
  `zn_title` varchar(100) DEFAULT '',
  `zn_create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zn_create_user` int(11) DEFAULT '0',
  `zn_modify_time` datetime DEFAULT NULL,
  `zn_modify_user` int(11) DEFAULT '0',
  `zn_deleted` int(4) DEFAULT '0',
  `zn_note` varchar(250) DEFAULT '',
  `zn_tag_vars` varchar(250) DEFAULT ',',
  `zn_tree_pid` int(11) DEFAULT '0',
  `zn_tree_depth` int(11) DEFAULT '0',
  `zn_tree_order` int(11) DEFAULT '0',
  `zn_tree_parent_path` varchar(250) DEFAULT ',',
  `zn_tree_son_count` int(11) DEFAULT '0',
  `zn_tree_max_son_count` int(11) DEFAULT '0',
  `zn_tree_extend` varchar(500) DEFAULT '',
  `zn_tree_type` int(11) DEFAULT '0',
  `zn_rights_owner_id` int(11) DEFAULT '0',
  `zn_rights_enabled` int(4) DEFAULT '0',
  `zn_rights_users` varchar(250) DEFAULT ',',
  `zn_rights_roles` varchar(250) DEFAULT ',',
  `zn_rights_observe_users` varchar(250) DEFAULT ',',
  `zn_rights_observe_roles` varchar(250) DEFAULT ',',
  `_id` varchar(50) DEFAULT '',
  `_key` varchar(200) DEFAULT '',
  `_value` varchar(2000) DEFAULT '',
  `menu_id` int(11) DEFAULT '0',
  `type` int(11) DEFAULT '0',
  `icon` varchar(100) DEFAULT '',
  `img` varchar(100) DEFAULT '',
  `url` varchar(100) DEFAULT '',
  `path` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8;

LOCK TABLES `zn_plugin_admin_var` WRITE;
/*!40000 ALTER TABLE `zn_plugin_admin_var` DISABLE KEYS */;

INSERT INTO `zn_plugin_admin_var` (`id`, `zn_id`, `zn_title`, `zn_create_time`, `zn_create_user`, `zn_modify_time`, `zn_modify_user`, `zn_deleted`, `zn_note`, `zn_tag_vars`, `zn_tree_pid`, `zn_tree_depth`, `zn_tree_order`, `zn_tree_parent_path`, `zn_tree_son_count`, `zn_tree_max_son_count`, `zn_tree_extend`, `zn_tree_type`, `zn_rights_owner_id`, `zn_rights_enabled`, `zn_rights_users`, `zn_rights_roles`, `zn_rights_observe_users`, `zn_rights_observe_roles`, `_id`, `_key`, `_value`, `menu_id`, `type`, `icon`, `img`, `url`, `path`)
VALUES
	(1,'','系统常量','2017-08-23 21:23:31',0,NULL,0,0,'',',',0,0,1,',',1,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(2,'','业务常量','2017-08-23 21:23:31',0,NULL,0,0,'',',',0,1,2,',',3,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(3,'','地址城镇区域','2017-08-23 21:23:31',0,NULL,0,0,'',',',2,2,1,',2,',2,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(4,'','北京','2017-08-23 21:23:31',0,NULL,0,0,'',',',3,3,2,',2,3,',1,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(5,'','上海','2017-08-23 21:23:31',0,NULL,0,0,'',',',3,3,1,',2,3,',1,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(6,'','北京市','2017-08-23 21:23:31',0,NULL,0,0,'',',',4,4,1,',2,3,4,',2,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(7,'','朝阳区','2017-08-23 21:23:31',0,NULL,0,0,'',',',6,5,1,',2,3,4,6,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(8,'','海淀区','2017-08-23 21:23:31',0,NULL,0,0,'',',',6,5,2,',2,3,4,6,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(9,'','上海市','2017-08-23 21:23:31',0,NULL,0,0,'',',',5,4,1,',2,3,5,',16,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(10,'','黄埔区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,1,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(11,'','静安区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,2,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(12,'','徐汇区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,3,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(13,'','经营城镇区域','2017-08-23 21:23:31',0,NULL,0,0,'',',',2,2,2,',2,',2,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(14,'','北京','2017-08-23 21:23:31',0,NULL,0,0,'',',',13,3,1,',2,13,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(15,'','上海','2017-08-23 21:23:31',0,NULL,0,0,'',',',13,3,2,',2,13,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(16,'','拍品常规属性集','2017-08-23 21:23:31',0,NULL,0,0,'',',',2,2,3,',2,',7,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(17,'','查询排序','2017-08-23 21:23:31',0,NULL,0,0,'',',',16,3,1,',2,16,',4,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(18,'','拍品类型','2017-08-23 21:23:31',0,NULL,0,0,'',',',16,3,2,',2,16,',11,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(19,'','所在地','2017-08-23 21:23:31',0,NULL,0,0,'',',',16,3,3,',2,16,',6,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(20,'','拍卖/变卖','2017-08-23 21:23:31',0,NULL,0,0,'',',',16,3,4,',2,16,',5,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(21,'','购买方式','2017-08-23 21:23:31',0,NULL,0,0,'',',',16,3,5,',2,16,',2,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(22,'','拍卖状态','2017-08-23 21:23:31',0,NULL,0,0,'',',',16,3,6,',2,16,',5,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(23,'','司法拍卖类型','2017-08-23 21:23:31',0,NULL,0,0,'',',',16,3,7,',2,16,',2,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(24,'','当前价格由高到底','2017-08-23 21:23:31',0,NULL,0,0,'',',',17,4,1,',2,16,17,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(25,'','当前价格由低到高','2017-08-23 21:23:31',0,NULL,0,0,'',',',17,4,2,',2,16,17,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(26,'','出价次数由高到底','2017-08-23 21:23:31',0,NULL,0,0,'',',',17,4,3,',2,16,17,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(27,'','最新发布','2017-08-23 21:23:31',0,NULL,0,0,'',',',0,1,3,',',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(28,'','最新发布','2017-08-23 21:23:31',0,NULL,0,0,'',',',17,4,4,',2,16,17,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(29,'','房产','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,1,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(30,'','机动车','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,2,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(31,'','资产','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,3,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(32,'','土地','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,4,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(33,'','股权','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,5,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(34,'','无形资产','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,6,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(35,'','林权','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,7,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(36,'','船舶','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,8,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(37,'','矿权','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,9,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(38,'','工程','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,10,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(39,'','其他','2017-08-23 21:23:31',0,NULL,0,0,'',',',18,4,11,',2,16,18,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(40,'','上海','2017-08-23 21:23:31',0,NULL,0,0,'',',',19,4,1,',2,16,19,',1,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(41,'','福建','2017-08-23 21:23:31',0,NULL,0,0,'',',',19,4,2,',2,16,19,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(42,'','浙江','2017-08-23 21:23:31',0,NULL,0,0,'',',',19,4,3,',2,16,19,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(43,'','江苏','2017-08-23 21:23:31',0,NULL,0,0,'',',',19,4,4,',2,16,19,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(44,'','河南','2017-08-23 21:23:31',0,NULL,0,0,'',',',19,4,5,',2,16,19,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(45,'','广东','2017-08-23 21:23:31',0,NULL,0,0,'',',',19,4,6,',2,16,19,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(46,'','上海','2017-08-23 21:23:31',0,NULL,0,0,'',',',40,5,1,',2,16,19,40,',6,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(47,'','黄埔','2017-08-23 21:23:31',0,NULL,0,0,'',',',46,6,1,',2,16,19,40,46,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(48,'','徐汇','2017-08-23 21:23:31',0,NULL,0,0,'',',',46,6,2,',2,16,19,40,46,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(49,'','静安','2017-08-23 21:23:31',0,NULL,0,0,'',',',46,6,3,',2,16,19,40,46,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(50,'','闸北','2017-08-23 21:23:31',0,NULL,0,0,'',',',46,6,4,',2,16,19,40,46,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(51,'','宝山','2017-08-23 21:23:31',0,NULL,0,0,'',',',46,6,5,',2,16,19,40,46,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(52,'','闵行','2017-08-23 21:23:31',0,NULL,0,0,'',',',46,6,6,',2,16,19,40,46,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(53,'','一拍','2017-08-23 21:23:31',0,NULL,0,0,'',',',20,4,1,',2,16,20,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(54,'','二拍','2017-08-23 21:23:31',0,NULL,0,0,'',',',20,4,2,',2,16,20,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(55,'','三拍','2017-08-23 21:23:31',0,NULL,0,0,'',',',20,4,3,',2,16,20,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(56,'','变更','2017-08-23 21:23:31',0,NULL,0,0,'',',',20,4,4,',2,16,20,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(57,'','重新拍卖','2017-08-23 21:23:31',0,NULL,0,0,'',',',20,4,5,',2,16,20,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(58,'','可贷款','2017-08-23 21:23:31',0,NULL,0,0,'',',',21,4,1,',2,16,21,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(59,'','不限购','2017-08-23 21:23:31',0,NULL,0,0,'',',',21,4,2,',2,16,21,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(60,'','正在进行','2017-08-23 21:23:31',0,NULL,0,0,'',',',22,4,1,',2,16,22,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(61,'','即将开始','2017-08-23 21:23:31',0,NULL,0,0,'',',',22,4,2,',2,16,22,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(62,'','已结束','2017-08-23 21:23:31',0,NULL,0,0,'',',',22,4,3,',2,16,22,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(63,'','中止','2017-08-23 21:23:31',0,NULL,0,0,'',',',22,4,4,',2,16,22,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(64,'','撤回','2017-08-23 21:23:31',0,NULL,0,0,'',',',22,4,5,',2,16,22,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(65,'','破产类','2017-08-23 21:23:31',0,NULL,0,0,'',',',23,4,1,',2,16,23,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(66,'','执行类','2017-08-23 21:23:31',0,NULL,0,0,'',',',23,4,2,',2,16,23,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(67,'','杨浦区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,4,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(68,'','虹口区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,5,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(69,'','普陀区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,6,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(70,'','长宁区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,7,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(71,'','宝山区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,8,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(72,'','闵行区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,9,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(73,'','浦东新区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,10,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(74,'','松江区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,11,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(75,'','嘉定区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,12,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(76,'','青浦区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,13,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(77,'','奉贤区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,14,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(78,'','金山区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,15,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','',''),
	(79,'','崇明区','2017-08-23 21:23:31',0,NULL,0,0,'',',',9,5,16,',2,3,5,9,',0,0,'',0,0,0,',',',',',',',','','','',0,0,'','','','');

/*!40000 ALTER TABLE `zn_plugin_admin_var` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
