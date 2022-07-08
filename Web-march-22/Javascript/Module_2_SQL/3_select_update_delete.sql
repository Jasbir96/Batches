-- select,
    -- everything
        SELECT * FROM employee; 
    -- columns
        SELECT EmpCode,EmpFName,EmpLName FROM employee;
    
    --where clause
        SELECT * FROM employee  
        WHERE    Salary > 2000; 
    -- manager code 7566
     SELECT EmpFName,EmpLName,DEPTCODE from employee 
     WHERE ManagerCode=7566;  

        -- operators :
            -- comparison  : =,>,<,>=,<=,
            -- <>-> not Equals
            -- Logical Operator: AND,OR,BETWEEN,NOT,LIKE
    --ORDER BY -> used for ordering on the basis of a column  
    -- by default ordering asc
    SELECT * FROM employee 
    ORDER BY Salary;

    -- Desc order 
     SELECT * FROM employee 
    ORDER BY Salary DESC;

    -- in the case of common order data
     SELECT * FROM employee 
    ORDER BY Salary DESC, DEPTCODE ASC;

    -- using with where clause
     SELECT * FROM employee 
     WHERE Salary > 2000
    ORDER BY Salary DESC, DEPTCODE ASC;
--aggregate functions: count,sum,Avg,max,min

-- count number of employees
SELECT Count(*) from employee;
-- count average salary
SELECT AVG(Salary) from employee;
--  highest earner data
SELECT MAX(Salary) from employee;
-- min salary
SELECT MIN(Salary) from employee;
--  total salary 
SELECT SUM(Salary) from employee;







-- get dpt -
-- it is used to get data on the basis of a group 
-- it give summary of a group 
-- it also applies those aggregate functions on that group only 
-- group by on the basis of dept
SELECT DEPTCODE from employee
GROUP BY DEPTCODE;
-- count number of employees in each deptcode
SELECT DEPTCODE,COUNT(DEPTCODE) from employee
GROUP BY DEPTCODE;
-- calculate maximum salary dept wise 
SELECT DEPTCODE,MAX(Salary) from employee
GROUP BY DEPTCODE;

-- dept code -> min salary -> min salary >2000

-- Group by 
-- 1. on the basis if which you are going to do group by 
-- -> i will print it only once if you select it

-- 2. aggregate function ka output dega group wise

-- 3. rest of the entries except 
-- aggregate function i will just print randomly


SELECT DEPTCODE,EmpLName,MIN(Salary) from employee
GROUP BY DEPTCODE
HAVING MIN(Salary)>2000;







SELECT DEPTCODE,MIN(Salary) from employee
GROUP BY DEPTCODE
-- aggrgate functions 
HAVING MIN(salary)>2000

















    
