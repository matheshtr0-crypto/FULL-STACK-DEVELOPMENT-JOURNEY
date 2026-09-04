-- crud prjct final

CREATE DATABASE student_manager;

use student_manager;

CREATE TABLE students(
    id int PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    course VARCHAR(100)
);

INSERT INTO students
(id,name,age,course)
-- VALUES
-- (1,'Arun',22,'MERN'),
-- (2,'Priya',21,'Java'),
-- (3,'Karthik',23,'Python')

SELECT * FROM students;