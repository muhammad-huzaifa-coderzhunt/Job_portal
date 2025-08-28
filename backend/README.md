# Job Portal API

This is the backend API for the Job Portal application. It is built with Node.js, Express.js, and MongoDB.

## Features

*   User authentication (signup, login, logout) with JWT support.
*   Role-Based Access Control (RBAC) with 'user' and 'admin' roles.
*   User management functionalities for administrators (view, read, update, delete users).
*   User profile management for regular users (view, read, update own profile).
*   Job listings
*   Job search and filtering
*   Job application submission
*   Employer dashboard for managing job postings

## Tech Stack

*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **Authentication:** JSON Web Tokens (JWT)
*   **Password Hashing:** bcryptjs
*   **Input Validation:** express-validator

## Prerequisites

*   Node.js (v14 or later)
*   npm
*   MongoDB (running instance or connection string)

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/muhammad-huzaifa-coderzhunt/job-portal.git
    ```
2.  Navigate to the backend directory:
    ```bash
    cd job-portal/backend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file in the `backend` directory and add the following environment variables:

## Environment Variables

*   `PORT`: The port number for the server to listen on (e.g., `5000`).
*   `MONGO_URI`: Your MongoDB connection URI (e.g., `mongodb://localhost:27017/jobportal`).
*   `JWT_SECRET`: A secret key used for signing and verifying JWTs. Generate a strong, random string for this (e.g., `some_super_secret_jwt_key`).

Example `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=your_jwt_secret_key_here
```

## Usage

1.  Start the server:
    ```bash
    npm start
    ```
2.  The API will be running at `http://localhost:5000`.

## API Endpoints

### Authentication & User Profile

*   **`POST /api/v1/auth/register`**
    *   **Description:** Register a new user. Default role is 'user'.
    *   **Access:** Public
    *   **Request Body:** `{ "name": "string", "email": "string", ""password": "string" }`
    *   **Response:** `{ "token": "jwt_token_string" }`

*   **`POST /api/v1/auth/login`**
    *   **Description:** Authenticate user and get a JWT.
    *   **Access:** Public
    *   **Request Body:** `{ "email": "string", "password": "string" }`
    *   **Response:** `{ "token": "jwt_token_string" }`

*   **`GET /api/v1/auth/me`**
    *   **Description:** Get the profile of the currently logged-in user.
    *   **Access:** Private (User/Admin)
    *   **Headers:** `x-auth-token: <jwt_token>`
    *   **Response:** `{ "name": "string", "email": "string", "role": "string", ... }`

### User Management (Admin Only)

*   **`GET /api/v1/users`**
    *   **Description:** Get all registered users.
    *   **Access:** Private (Admin only)
    *   **Headers:** `x-auth-token: <jwt_token>`
    *   **Response:** `{ "success": true, "count": number, "data": [user_object, ...] }`

*   **`GET /api/v1/users/:id`**
    *   **Description:** Get a single user by ID.
    *   **Access:** Private (Admin only)
    *   **Headers:** `x-auth-token: <jwt_token>`
    *   **Response:** `{ "success": true, "data": user_object }`

*   **`PUT /api/v1/users/:id`**
    *   **Description:** Update a user's data by ID. Can update `name`, `email`, `password`, `role`, `isSuspended`.
    *   **Access:** Private (Admin only)
    *   **Headers:** `x-auth-token: <jwt_token>`, `Content-Type: application/json`
    *   **Request Body:** `{ "name": "string", "email": "string", "role": "user" | "admin", "isSuspended": true | false, ... }` (partial updates allowed)
    *   **Response:** `{ "success": true, "data": updated_user_object }`

*   **`DELETE /api/v1/users/:id`**
    *   **Description:** Delete a user by ID.
    *   **Access:** Private (Admin only)
    *   **Headers:** `x-auth-token: <jwt_token>`
    *   **Response:** `{ "success": true, "data": {} }`

### Job Listings (Placeholder - to be implemented)

*   **`GET /api/v1/jobs`** - Get all jobs
*   **`GET /api/v1/jobs/:id`** - Get a single job
*   **`POST /api/v1/jobs`** - Create a new job (Admin only)
*   **`PUT /api/v1/jobs/:id`** - Update a job
*   **`DELETE /api/v1/jobs/:id`** - Delete a job

## Role-Based Access Control (RBAC)

This API implements a simple RBAC system with two roles:

*   **`user`**: Standard users who can register, log in, view their own profile, and apply for jobs.
*   **`admin`**: Administrators who have all 'user' privileges plus the ability to manage all user accounts (view, update, delete, suspend/activate) and create new job listings.

Access to certain API endpoints is restricted based on the user's role, enforced by middleware.

## Project Structure

```
backend/
├── config/
│   └── db.js             # Database connection setup
├── controllers/
│   ├── jobs.js           # Job-related business logic
│   └── users.js          # User management business logic
├── middleware/
│   ├── auth.js           # JWT authentication middleware
│   └── authorize.js      # Role-based authorization middleware
├── models/
│   ├── Job.js            # Mongoose schema for Job
│   └── User.js           # Mongoose schema for User (with role and suspension status)
├── routes/
│   ├── auth.js           # Authentication and user profile routes
│   ├── jobs.js           # Job-related API routes
│   └── users.js          # User management API routes
├── .env                  # Environment variables (local)
├── .gitignore            # Git ignore rules
├── index.js              # Main server entry point
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
