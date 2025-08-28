# Job Portal API

This is the backend API for the Job Portal application. It is built with Node.js, Express.js, and MongoDB.

## Features

*   User authentication (signup, login, logout)
*   Job listings
*   Job search and filtering
*   Job application submission
*   Employer dashboard for managing job postings

## Tech Stack

*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **Authentication:** JWT

## Prerequisites

*   Node.js (v14 or later)
*   npm
*   MongoDB

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
    ```
    PORT=5000
    MONGO_URI=<your_mongodb_uri>
    JWT_SECRET=<your_jwt_secret>
    ```

## Usage

1.  Start the server:
    ```bash
    npm start
    ```
2.  The API will be running at `http://localhost:5000`.

## API Endpoints

*   `POST /api/auth/register` - Register a new user
*   `POST /api/auth/login` - Login a user
*   `GET /api/jobs` - Get all jobs
*   `GET /api/jobs/:id` - Get a single job
*   `POST /api/jobs` - Create a new job
*   `PUT /api/jobs/:id` - Update a job
*   `DELETE /api/jobs/:id` - Delete a job

## Project Structure

```
backend/
├── config/
│   └── db.js
├── controllers/
│   └── jobs.js
├── models/
│   └── Job.js
├── routes/
│   └── jobs.js
├── utils/
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.