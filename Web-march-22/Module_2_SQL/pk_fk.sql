-- customers
CREATE TABLE  cust(
    cid INTEGER NOT NULL UNIQUE,
    phNo INTEGER NOT NULL UNIQUE ,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY(cid)
);
-- without parent you can't have child 
-- if you have  a fk then you can't delete or update the corresponding parent ki entry
-- CREATE TABLE orders(
--     oid INTEGER NOT NULL UNIQUE,
--     pName VARCHAR(255) NOT NULL,
--     cid INTEGER ,
-- FOREIGN KEY(cid) REFERENCES cust(cid)
-- )
-- DROP TABLE  orders;
-- jab bhi parent table me se aapka ko bhi entry remove hogi to uske associated data children se bhi remove ho jaaye
--   and same for update

CREATE TABLE orders(
oid INTEGER NOT NULL UNIQUE,
    pName VARCHAR(255) NOT NULL,
    cid INTEGER  INDEX,
FOREIGN KEY(cid) REFERENCES cust(cid) ON UPDATE CASCADE ON DELETE CASCADE
)
