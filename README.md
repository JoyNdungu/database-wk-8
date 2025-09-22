# database-wk-8

Student Records Management System

It consists of:

A MySQL Database Schema for managing students, courses, lecturers, and units.

A Node.js CRUD Application (Express.js) connected to the database to perform operations.

📌 Features

Relational database design with proper constraints:

Students (enrolled in courses)

Lecturers (teaching units)

Courses (containing multiple units)

Units (linked to both courses and lecturers)

CRUD operations for Students and Courses.

REST API endpoints for managing data.

⚙️ Technologies Used

MySQL (Database)

Node.js + Express.js (Backend API)

dotenv (Environment variables)

npm (Dependency management)

🗄 Database Schema

The SQL script (answer.sql) creates the database and tables:

STUDENTS

COURSES

LECTURERS

UNITS

Run it using:

mysql -u youruser -p < answer.sql

📡 API Endpoints
Students

GET /students → Get all students

POST /students → Add a student

PUT /students/:id → Update student by ID

DELETE /students/:id → Delete student by ID

Courses

GET /courses → Get all courses

POST /courses → Add a course

PUT /courses/:id → Update course by ID

DELETE /courses/:id → Delete course by ID

📖 Example Data

The database script includes sample students, lecturers, courses, and units.
