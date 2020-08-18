-- creat new database
CREATE DATABASE DBpart2;
USE DBpart2;
CREATE TABLE class (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(50) NOT NULL,
`begins` DATETIME,
`ends` DATETIME
);

-- part 2, school database
CREATE TABLE student (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(50) NOT NULL,
`email` VARCHAR(50) NOT NULL,
`phone` INT NOT NULL
);

-- relational table
CREATE TABLE class_students (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`class_id` INT NOT NULL,
`student_id` INT NOT NULL,
FOREIGN KEY (class_id) REFERENCES class(id),
FOREIGN KEY (student_id) REFERENCES student(id)
);

-- create an index
CREATE INDEX idx_students
ON student(name);

-- adding new column
ALTER TABLE class
ADD COLUMN status ENUM('not started', 'ongoing', 'finished') default('ongoing');
