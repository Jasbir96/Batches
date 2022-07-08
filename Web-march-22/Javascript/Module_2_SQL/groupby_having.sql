-- 1. default 
-- only valid  single column is the one 
-- on the basis of which you made group by
SELECT designation FROM employee
-- i will make group on the basis of given column
GROUP BY designation;

-- 2. if you are group by : column aggregate data get -> get
-- grouped 
SELECT designation, Count(designation)  as "count per dep",
MAX(Salary) as "Max Salary" FROM employee
-- i will make group on the basis of given column
GROUP BY designation

-- having : to put condition on grouped data is 
            -- : always used with aggregate fn;
            -- comes after group by statement 
--  Que : designation tell me ki highest salary kya hai ??
--  but ignore where the highest salary is less then 3000?
SELECT designation, 
Count(designation)  as "count per dep",
MAX(Salary) as "Max Salary" FROM employee
-- i will make group on the basis of given column
GROUP BY designation
-- to put condition on group by ka output uspe condition lagane ke kaam 
HAVING MAX(Salary) >1600;


--  Que : designation tell me ki highest salary kya hai ??
-- i also don't want data of dept code 20
SELECT designation, 
Count(designation)  as "count per dep",
MAX(Salary) as "Max Salary" FROM employee
WHERE DEPTCODE <> 20
-- i will make group on the basis of given column
GROUP BY designation
-- to put condition on group by ka output uspe condition 
-- lagane ke kaam 


--  Que : designation tell me ki highest salary kya hai ??
-- i also don't want data of Salesman
SELECT designation, 
Count(designation)  as "count per dep",
MAX(Salary) as "Max Salary" FROM employee
WHERE designation <> "SALESMAN"
-- i will make group on the basis of given column
GROUP BY designation



--  Que : designation tell me ki highest salary kya hai ??
-- i also don't want data of Salesman
-- and max salaries dept wise should be greater then 3000
SELECT designation, 
Count(designation)  as "count per dep",
MAX(Salary) as "Max Salary" FROM employee
WHERE designation <> "SALESMAN"
-- i will make group on the basis of given column
GROUP BY designation
-- to put condition on group by ka output uspe condition 
-- lagane ke kaam
HAVING MAX(Salary)>3000
ORDER BY MAX(Salary) ;

-- Que -> give me the avg salaries of the employees
-- DEPTCODE wise where number of employess is more then 2
-- in increasing order ?? 