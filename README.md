# Tasks Project

## Project Overview

This is a full-stack web application for task management, allowing users to register, log in, and manage their personal tasks. The application consists of a backend API built with Node.js and Express.js, and a frontend React application. Users can create, read, update, and delete tasks, with proper authentication and error handling to ensure a smooth user experience.

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **CORS**: Cross-Origin Resource Sharing for handling cross-domain requests.
- **File System (fs)**: For persistent data storage using JSON files.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **React Router**: For client-side routing and navigation.
- **Styled Components**: For component-level styling.
- **Axios/Fetch API**: For making HTTP requests to the backend.

### Other Technologies
- **npm**: Package manager for dependency management.
- **Postman**: For API testing and documentation (collection included).

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory.

2. **Install backend dependencies**:
   ```
   cd backend
   npm install
   ```

3. **Install frontend dependencies**:
   ```
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**:
   - In the `backend` directory, create a `.env` file with the following variables:
     ```
     PORT=5000
     JWT_SECRET=your_jwt_secret_key
     TASKS_FILE=tasks.json
     ```
   - In the `frontend` directory, create a `.env` file with:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```

5. **Start the backend server**:
   ```
   cd backend
   npm start
   ```

6. **Start the frontend development server** (in a new terminal):
   ```
   cd frontend
   npm start
   ```

7. **Access the application**:
   - Frontend: Open `http://localhost:3000` in your browser.
   - Backend API: Available at `http://localhost:5000`.

## Features

- **User Authentication**: Secure login and registration with JWT tokens.
- **Task Management**: Full CRUD operations for tasks (Create, Read, Update, Delete).
- **Protected Routes**: Certain pages require authentication to access.
- **Error Handling**: Frontend displays error messages on API failures; backend returns appropriate status codes.
- **Data Validation**: Dashboard handles empty or invalid data gracefully without crashing.
- **Responsive Design**: User-friendly interface for managing tasks.

## API Documentation

The API endpoints are documented in the included Postman collection (`postman_collection.json`). Import this file into Postman to test the endpoints.

### Key Endpoints
- `POST /register`: Register a new user.
- `POST /login`: Authenticate user and receive JWT token.
- `GET /tasks`: Retrieve all tasks for authenticated user.
- `POST /tasks`: Create a new task.
- `PUT /tasks/:id`: Update an existing task.
- `DELETE /tasks/:id`: Delete a task.

All task-related endpoints require a Bearer token in the Authorization header.

## Project Structure

```
Tasks/
├── README.md
├── package.json
├── package-lock.json
├── postman_collection.json
├── backend/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
└── frontend/
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── src/
        ├── App.css
        ├── App.js
        ├── index.css
        ├── index.js
        ├── assets/
        │   └── Manjundhar_adagiri_Resume.pdf
        ├── components/
        │   ├── ProtectedRoute.js
        │   ├── Login/
        │   │   ├── LoginForm.jsx
        │   │   └── LoginStyle.css
        │   └── Register/
        │       ├── Reg.css
        │       └── Register.jsx
        ├── pages/
        │   ├── About.css
        │   ├── About.jsx
        │   ├── Header.css
        │   ├── Header.jsx
        │   ├── Home.css
        │   ├── Home.jsx
        │   └── StyledHome.jsx
        └── utils/
            └── withRouter.js
```
