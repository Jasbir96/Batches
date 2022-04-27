
CREATE TABLE DEPARTMENT
(
   DEPTCODE   INT(10) PRIMARY KEY ,
   DeptName   VARCHAR(15) UNIQUE,
   LOCATION VARCHAR(33) NOT NULL;

);

INSERT INTO DEPARTMENT VALUES (10, 'FINANCE', 'EDINBURGH'),
                              (20,'SOFTWARE','PADDINGTON'),
                              (30, 'SALES', 'MAIDSTONE'),
                              (40,'MARKETING', 'DARLINGTON'),
                              (50,'ADMIN', 'BIRMINGHAM');


SELECT * FROM department
INNER JOIN employee 
ON 
employee.DEPTCODE=department.DEPTCODE;