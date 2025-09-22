// index.js
const mysql = require("mysql2");

// Create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",       
  password: "yourpassword", 
  database: "student_records",
  multipleStatements: true, // allows running multiple queries together
});

// SQL script
const sql = `
-- Create database
DROP DATABASE IF EXISTS StudentRecords;
CREATE DATABASE StudentRecords;
USE StudentRecords;

-- Create tables
CREATE TABLE LECTURERS (
    Lecturer_id INT AUTO_INCREMENT PRIMARY KEY,
    FrstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE COURSES (
    Course_id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE STUDENTS (
    Student_id INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(100) NOT NULL,
    LastName VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    DOB DATE,
    enrollment_date DATE DEFAULT (CURRENT_DATE),
    Course_id INT,
    FOREIGN KEY (Course_id) REFERENCES COURSES (Course_id)
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

-- Insert data
INSERT INTO LECTURERS (FrstName, LastName, email) VALUES
('Alice', 'Mwangi', 'alice.mwangi@example.com'),
('John', 'Kimani', 'john.kimani@example.com');

INSERT INTO COURSES (Title, description) VALUES
('Engineering', 'Software Engineering'),
('Engineering', 'Electrical Engineering');

INSERT INTO STUDENTS (FirstName, LastName, email, DOB, Course_id) VALUES
('Joy', 'Ndungu', 'joy@example.com', '2002-06-10', 2),
('Tessa', 'Grandeur', 'tessa@example.com', '2001-11-23', 1);

INSERT INTO UNITS (Unit_code, Title, description, Course_id, Lecturer_id) VALUES
('S001', 'Introduction To Software Engineering', 'Introduction To Software Engineering', 1, 1),
('S002', 'Advanced Software Engineering', 'Advanced Software Engineering', 1, 1),
('E001', 'Introduction to Electrical Engineering', 'Introduction to Electrical Engineering', 2, 2),
('E002', 'Advanced Electrical Engineering', 'Advanced Electrical Engineering', 2, 2);
`;

// Run queries
connection.query(sql, (err, results) => {
  if (err) {
    console.error("Error executing SQL:", err);
    return;
  }
  console.log("Database and tables created, sample data inserted successfully!");
});

// Close connection
connection.end();
