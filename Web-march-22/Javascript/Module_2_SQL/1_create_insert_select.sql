-- create table query
CREATE TABLE emp(
    id INTEGER AUTO_INCREMENT UNIQUE,
    name VARCHAR(255) NOT NULL,
    phno BIGINT UNIQUE,
    salary FLOAT NOT NULL CHECK (salary>2500),
    dep VARCHAR(255),
    age INTEGER DEFAULT 25
    gender ENUM("M","F","TG")
);

-- DROP  -> table remove
DROP TABLE emp;

-- INSERT values enter  
--  certain column values
INSERT INTO emp (name,salary,gender)
VALUES("JASBIR",5000,"M");

-- you need to put all the entries
INSERT INTO emp VALUES(3,"Anuj",123456789,5000,"Tech",25,"M");
