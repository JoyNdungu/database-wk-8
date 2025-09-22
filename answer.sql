-- Create a student's record database
CREATE DATABASE StudentRecords;
USE StudentRecords;

-- Create tables
-- Create Lectures table
CREATE TABLE LECTURERS (
    Lecturer_id INT AUTO_INCREMENT PRIMARY KEY,
    FrstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
   );

-- Create Students table
CREATE TABLE STUDENTS (
Student_id INT AUTO_INCREMENT PRIMARY KEY,
FirstName VARCHAR(100) NOT NULL,
LastName VARCHAR(100) NOT NULL,
email VARCHAR(255)NOT NULL UNIQUE,
DOB DATE,
enrollment_date DATE DEFAULT (CURRENT_DATE),
Course_id INT,
FOREIGN KEY (Course_id) REFERENCES COURSES (Course_id)
);

-- Create Courses table
CREATE TABLE COURSES (
    Course_id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    description TEXT    
    );
    
CREATE TABLE UNITS (
    Unit_code VARCHAR(20) NOT NULL PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    description TEXT,
    Course_id INT,
    Lecturer_id INT,
    FOREIGN KEY (Course_id) REFERENCES COURSES(Course_id),
    FOREIGN KEY (Lecturer_id) REFERENCES LECTURERS(Lecturer_id)
    );
    


-- Example data 
INSERT INTO LECTURERS (FrstName, LastName, email)
VALUES
('Alice', 'Mwangi', 'alice.mwangi@example.com'),
('John', 'Kimani', 'john.kimani@example.com');

INSERT INTO STUDENTS (FirstName, LastName, email, DOB, Course_id)
VALUES
('Joy', 'Ndungu', 'joy@example.com', '2002-06-10' ,2),
('Tessa', 'Grandeur', 'tessa@example.com', '2001-11-23',1);

INSERT INTO COURSES (Title, description)
VALUES
('Engineering', 'Software Engineering '),
('Engineering', 'Electrical Engineering');

INSERT INTO UNITS (Unit_code, title, description, Course_id, Lecturer_id)
VALUES
('S001' , 'Introduction To software Engineering', 'Introduction To software Engineering', 1, 1),
('S002' , 'Advanced software Engineering', 'Advanced software Engineering', 1, 1),
('E001' , 'Introduction to Electrical Engineering', 'Introduction to Electrical Engineering', 2, 2),
('E002' , 'Advanced Electrical Engineering', 'Advanced Electrical Engineering', 2, 2);



