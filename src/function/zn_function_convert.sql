set global log_bin_trust_function_creators = 1;
----
DROP FUNCTION IF EXISTS adinstall_convert_user;
CREATE FUNCTION adinstall_convert_user($id int(11))
RETURNS VARCHAR(50)
BEGIN
DECLARE _temp varchar(50);
select name INTO _temp from zn_adinstall_user where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS adinstall_convert_project;
CREATE FUNCTION adinstall_convert_project($id int(11))
RETURNS VARCHAR(50)
BEGIN
DECLARE _temp varchar(50);
select zn_title INTO _temp from zn_adinstall_project where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS adinstall_convert_brand;
CREATE FUNCTION adinstall_convert_brand($id int(11))
RETURNS VARCHAR(50)
BEGIN
DECLARE _temp varchar(50);
select zn_title INTO _temp from zn_adinstall_brand where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS adinstall_convert_brand_shop;
CREATE FUNCTION adinstall_convert_brand_shop($id int(11))
RETURNS VARCHAR(100)
BEGIN
DECLARE _temp varchar(100);
select concat(zn_title, '【', address, '】') INTO _temp from zn_adinstall_brand_shop where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS adinstall_convert_brand_shop_title;
CREATE FUNCTION adinstall_convert_brand_shop_title($id int(11))
RETURNS VARCHAR(100)
BEGIN
DECLARE _temp varchar(100);
select zn_title INTO _temp from zn_adinstall_brand_shop where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS adinstall_convert_brand_shop_address;
CREATE FUNCTION adinstall_convert_brand_shop_address($id int(11))
RETURNS VARCHAR(100)
BEGIN
DECLARE _temp varchar(100);
select address INTO _temp from zn_adinstall_brand_shop where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS adinstall_convert_brand_logo;
CREATE FUNCTION adinstall_convert_brand_logo($id int(11))
RETURNS VARCHAR(200)
BEGIN
DECLARE _temp varchar(200);
select logo INTO _temp from zn_adinstall_brand where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS adinstall_convert_brand_shop_logo;
CREATE FUNCTION adinstall_convert_brand_shop_logo($id int(11))
RETURNS VARCHAR(200)
BEGIN
DECLARE _temp varchar(200);
select logo INTO _temp from zn_adinstall_brand_shop where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS adinstall_convert_admin_user_openid;
CREATE FUNCTION adinstall_convert_admin_user_openid($id int(11))
RETURNS VARCHAR(200)
BEGIN
DECLARE _temp varchar(200);
select zn_plugin_wechat_open_id INTO _temp from zn_plugin_admin_user where id=IFNULL($id, 0);
RETURN _temp;
END
----
DROP FUNCTION IF EXISTS adinstall_convert_supplier_openid;
CREATE FUNCTION adinstall_convert_supplier_openid($openid varchar(100))
RETURNS VARCHAR(1000)
BEGIN
DECLARE _temp varchar(1000);
SET _temp = '';
select concat(name, '&&__zn__&&', avatar, '&&__zn__&&', zn_id) INTO _temp from zn_adinstall_supplier where openid=IFNULL($openid, '__null__') and $openid<>'';
RETURN _temp;
END
