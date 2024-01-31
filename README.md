# User Management App

This project consists of a RESTful API built with Express.js for managing user data and a React app that interacts with the API to display a table list of users. Bootstrap is used for the frontend design.

## Backend (Express.js + MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Triptiskillz/todolist_mern.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

5. Start the server:

   ```bash
   npm start
   ```

### API Endpoints

- **GET /api/users**: Retrieve all users.
- **GET /api/users/:id**: Retrieve a user by ID.
- **POST /api/users**: Add a new user.
- **PUT /api/users/:id**: Update a user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

## Frontend (React + Bootstrap)

### Installation

1. Navigate to the frontend directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the React app:

   ```bash
   npm start
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the User Management App.

### Features

- Displays a table list of users with columns: ID, Name, Username, Email.
- Allows users to view details, edit user data, and delete user data.

## Technologies Used

- Backend: Express.js, MongoDB Atlas
- Frontend: React, Bootstrap
