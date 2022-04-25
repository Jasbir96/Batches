CREATE TABLE  employee(
    -- unique and Not Null
    EmpCode INT(4) ,
    EmpFName VARCHAR(40) NOT NULL,
    EmpLName VARCHAR(40) ,
    JOB VARCHAR(50) NOT NULL,
    -- correct char to int 
     ManagerCode  CHAR(4),
     HireDate    DATE NOT NULL,
--    salary dataype add 
   Salary       INT(10) NOT NULL,
   Commission   INT(10),
   DEPTCODE     INT(3) NOT NULL
--    email
);


-- ALTER command (columns manipulate) 
    -- columns -> add, remove ,rename
        -- Add Column
            -- add column
                ALTER TABLE employee
                    ADD COLUMN email VARCHAR(50) NOT NULL;
            -- add column after
                ALTER TABLE employee
                    ADD COLUMN dob DATE
                    AFTER  EmpLName;
            --add column first
                ALTER TABLE employee
                    ADD COLUMN ManagerFName VARCHAR(40)   
                    FIRST ;
        -- Remove 
             ALTER TABLE employee
             DROP COLUMN ManagerFName;

        -- Multiple Remove 
            ALTER TABLE employee 
            DROP COLUMN dob
            DROP COLUMN ManagerFName; 
        --Rename column 
            ALTER TABLE  employee 
            CHANGE COLUMN JOB  designation VARCHAR(50) NOT NULL;
-- constraints-> 
        -- add , remove , modify
            ALTER TABLE employee
            CHANGE COLUMN  EmpCode EmpCode INT(4) UNIQUE NOT NULL;

            ALTER TABLE employee
            CHANGE COLUMN  Salary Salary FLOAT; 
         -- remove
            ALTER TABLE employee 
            CHANGE COLUMN  DEPTCODE  DEPTCODE    INT(3);
    --INSERT
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
    




    

