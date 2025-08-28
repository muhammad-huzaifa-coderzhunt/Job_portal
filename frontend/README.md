# Job Portal Frontend

This is the frontend application for the Job Portal, built with React.js and Material-UI. It provides a user-friendly interface for job seekers and administrators to interact with the backend API.

## Features

*   **User Authentication:** Signup, login, and logout functionalities with JWT support.
*   **User Profile Management:** Users can view and update their own profile information.
*   **Role-Based Access Control (RBAC):**
    *   **User Role:** Standard users who can register, log in, view their dashboard, and manage their profile.
    *   **Admin Role:** Administrators have additional access to a user management panel where they can view, update, suspend, activate, and delete other user accounts.
*   **Responsive UI:** Built with Material-UI for a modern and responsive design.
*   **Client-Side Routing:** Uses React Router DOM for seamless navigation between pages.

## Tech Stack

*   **Frontend Framework:** React.js
*   **UI Library:** Material-UI (MUI)
*   **Routing:** React Router DOM
*   **HTTP Client:** Axios
*   **JWT Decoding:** jwt-decode

## Prerequisites

*   Node.js (v14 or later)
*   npm (Node Package Manager)
*   Backend API running (refer to `backend/README.md` for setup instructions)

## Installation

1.  Clone the repository (if you haven't already):
    ```bash
    git clone https://github.com/muhammad-huzaifa-coderzhunt/job-portal.git
    ```
2.  Navigate to the frontend directory:
    ```bash
    cd job-portal/frontend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file in the `frontend` directory and add the following environment variable:

*   `REACT_APP_API_URL`: The base URL of your backend API (e.g., `http://localhost:5000/api/v1`).

Example `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api/v1
```

## Usage

1.  Make sure your backend API is running.
2.  Start the frontend development server:
    ```bash
    npm start
    ```
3.  Open your browser and navigate to `http://localhost:3000` (or the port indicated in your console).

## Key Components and Pages

*   **`App.js`**: Main application component, sets up routing.
*   **`AppBar.js` (components)**: Navigation bar with conditional links for login, register, profile, logout, and admin user management.
*   **`Login.js` (pages)**: User login form.
*   **`Register.js` (pages)**: User registration form.
*   **`Dashboard.js` (pages)**: Simple dashboard for logged-in users, displaying their role.
*   **`Profile.js` (pages)**: Allows users to view and update their own profile.
*   **`UserManagement.js` (pages)**: Admin-only panel for managing user accounts (view, edit, delete, suspend/activate).
*   **`PrivateRoute.js` (components)**: A higher-order component to protect routes based on authentication status and user roles.

## Interaction with Backend

The frontend communicates with the backend API using Axios to perform various operations such as:
*   Registering and logging in users.
*   Fetching and updating user profiles.
*   Fetching, updating, and deleting user data (for admins).

## Role-Based UI

The user interface dynamically adjusts based on the logged-in user's role:
*   **Admin users** will see an additional "User Management" link in the navigation bar.
*   **Protected routes** are enforced using the `PrivateRoute` component, redirecting unauthorized users.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.