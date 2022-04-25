CREATE TABLE EMPLOYEE
(
   EmpCode      INT(4),
   EmpFName     VARCHAR(15),
   EmpLName     VARCHAR(15),
   Job          VARCHAR(45),
   Manager      CHAR(4),
   HireDate     DATE,
   Salary       INT(6),
   Commission   INT(6),
   DEPTCODE     INT(2)
);

-- Alter Table command (add rename and modify the columns  )
-- Alter also change the constraint of the table



-- there's not before in sql
-- 2 column add 
ALTER TABLE EMPLOYEE
ADD COLUMN Email VARCHAR(255);

--3 column add
ALTER TABLE EMPLOYEE
ADD COLUMN DOB DATE
AFTER EmpLName;
-- 1 column remove
ALTER TABLE EMPLOYEE
DROP COLUMN DOB;

--5 data add
ALTER TABLE EMPLOYEE
CHANGE COLUMN EmpCode EmpCode INT(4) NOT NULL;

-- 6 data change
ALTER TABLE EMPLOYEE
CHANGE COLUMN Salary Salary DECIMAL(6,2);





-- Insert

INSERT INTO EMPLOYEE  
VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20,"abc@gmail.com"),
       (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30,"abc@gmail.com"),    
       (9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20,"abc@gmail.com"),
       (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30,"abc@gmail.com"),
       (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10,"abc@gmail.com"),
       (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20,"abc@gmail.com"),
       (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10,"abc@gmail.com"),
       (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30,"abc@gmail.com"),
       (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20,"abc@gmail.com"),
       (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20,"abc@gmail.com"),
       (9902, 'ANDREW', 'FAULKNER', 'ANAYLYST', 7566, '1981-12-03', 3000,0, 10,"abc@gmail.com"),
       (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20,"abc@gmail.com"),
       (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30,"abc@gmail.com"),
       (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30,"abc@gmail.com"),
       (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL,"abc@gmail.com"),
       (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50,"abc@gmail.com"),
       (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50,"abc@gmail.com");

-- select
    -- everything
        SELECT * FROM employee; 
    -- columns
        SELECT EmpCode,EmpFName,EmpLName FROM employee;
    --where clause
        SELECT * FROM employee  
        WHERE    Salary > 2000; 
        -- operators :
            -- comparison  : =,>,<,,>=,<=
            -- Logical Operator: AND,OR,BETWEEN,NOT,LIKE
      --order by (By default asc )
         SELECT * FROM employee 
         ORDER BY Salary DESC;
         --with duplicate 
         SELECT * FROM employee 
         Order by Salary DESC ,name ASC;
      --aggregate functions: count,sum,Avg,max,min
      --group by : it is used to group multiple rows into one
      --  on the basis of dept
       -- : They are used with aggregate functions: count,sum,Avg,max,min
      --having : It is used with aggregate functions with group by 
            --salary 
 select  
 like
 ilike ''       