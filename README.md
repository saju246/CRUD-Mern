# MERN CRUD Application

A simple CRUD (Create, Read, Update, Delete) application built with MongoDB, Express, React, and Node.js (MERN stack). This application allows users to manage their information, including name, email, and date of birth.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
Navigate to the project directory:

cd CRUD-Mern

Install the backend dependencies:

cd backend
npm install

Install the frontend dependencies:

cd ../frontend
npm install


Set up your environment variables for the backend:

In the backend folder, create a .env file:

PORT=3001

MONGO_URI=mongodb://127.0.0.1:27017/crud-app

```
```bash
Start the project:
# Run both backend and frontend servers
npm run dev

```
## Usage

Open your browser and go to http://localhost:3000 to access the frontend.
You can perform CRUD operations on users, including:
Add a new user
View all users
Edit user details (name, email, DOB)
Delete users
## Features


User Management: Create, edit, view, and delete users.
Date Management: The app ensures the date of birth is stored and displayed correctly (in yyyy-mm-dd format).
Confirmation Modal: A confirmation modal appears before deleting a user.
Responsive Design: The app is responsive and works on both desktop and mobile devices.

## Technologies
Frontend: React, Bootstrap
Backend: Node.js, Express
Database: MongoDB
Other Tools:
Axios for HTTP requests
React Router for routing

## Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/feature-name).
Open a pull request
Please make sure to update tests as appropriate.

## License
This project is licensed under the MIT License.
[MIT](https://choosealicense.com/licenses/mit/)