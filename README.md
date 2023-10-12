# React-Springboot-Simple-CRUD-Project
# Student Management System

## Description
This is a simple Student Management System that allows you to perform basic CRUD (Create, Read, Update, Delete) operations for student records. The system consists of a backend developed using Spring Boot and a frontend developed using React. MySQL Workbench is used as the database management system for storing student information.

## Features
- Add a new student with details such as name, age, and grade.
- View a list of all students.
- Update the information of an existing student.
- Delete a student from the system.

## Technologies Used
- **Backend**: Spring Boot
- **Frontend**: React
- **Database**: MySQL (Managed with MySQL Workbench)
- **Integrated Development Environment (IDE)**:
  - Frontend: Visual Studio Code
  - Backend: Spring Tool Suite 4

## Project Structure
The project is divided into two main components: the backend and the frontend.

### Backend
The backend is built using Spring Boot and provides RESTful API endpoints for CRUD operations on student records. It includes the following key components:

- `src/main/java/com.example.studentmanagementsystem`: The main Java package where the Spring Boot application class and controller classes are located.
- `src/main/resources`: Configuration files, including `application.properties` for database configuration.
- `pom.xml`: Maven project configuration file.

### Frontend
The frontend is developed using React and provides a user-friendly interface for interacting with the student management system. It includes the following key components:

- `src/components`: React components for rendering and managing the user interface.
- `src/App.js`: The main application component.
- `package.json`: Node.js project configuration file.

## Getting Started
To run the Student Management System on your local machine, follow these steps:

### Prerequisites
1. Ensure you have Node.js and npm (Node Package Manager) installed.
2. Install MySQL and MySQL Workbench on your machine.
3. Install Visual Studio Code (for the frontend) and Spring Tool Suite 4 (for the backend).

### Installation
1. Clone this GitHub repository to your local machine.

   ```shell
   git clone https://github.com/yourusername/student-management-system.git

## Getting Started

1. **Navigate to the backend directory** and open it in Spring Tool Suite 4.

2. **Create a MySQL database** using MySQL Workbench and update the database configuration in `application.properties` under `src/main/resources` in the backend project.

3. **Run the Spring Boot backend application**.

   *Note: The backend should run on a separate port (e.g., 8080).*

4. **Navigate to the frontend directory** and open it in Visual Studio Code.

5. **Install the required frontend dependencies**:

   ```shell
   npm install

6. **Update the API base URL in the frontend code (usually found in a configuration file) to match the backend server's URL (e.g., http://localhost:8080).**

7. **Start the React development server.**

   ```shell
   npm start

8. **Access the application in your web browser at http://localhost:3000.**

### Usage
You can use the web interface to perform CRUD operations on student records:

1. Add a new student: Fill out the student's details and click the "Add Student" button.
2. View all students: You can see a list of all students.
3. Update a student: Click the "Edit" button next to a student's record to update their information.
4. Delete a student: Click the "Delete" button next to a student's record to remove them from the system.
5. You can also 'VIEW' a particular student's information by clicking 'VIEW' next to a student's record.


### Author
Muhammad Mubinur Rahman (MubinLikhon)

### Acknowledgments
Special thanks to the Spring Boot and React communities for providing excellent documentation and resources. Feel free to contribute to this project by submitting issues or pull requests. 
