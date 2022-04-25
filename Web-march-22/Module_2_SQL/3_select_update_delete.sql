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