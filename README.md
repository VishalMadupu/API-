# FullStack project
# User Management System

This project is a simple User Management System built using React for the front-end and Express.js with MongoDB for the back-end. It allows users to add new users and displays the list of all users.

## Features

- Add a new user with first name, last name, gender, and phone number.
- Display a list of all users.

## Technologies Used

- **Front-end:** React, Axios
- **Back-end:** Node.js, Express.js, MongoDB, Mongoose

## Project Structure

The project is divided into two main parts: the front-end and the back-end.

### Front-end (React)

- **App.js:** The main React component handling the user interface, including a form to add new users and a section to display the list of all users.
- **axios:** Used for making HTTP requests to the back-end API endpoints.

### Back-end (Node.js and Express.js)

- **models/item.js:** Defines the Mongoose schema for user details.
- **server.js:** Sets up the Express server, connects to MongoDB, and defines the API routes for adding and retrieving users.

## How It Works

1. **Adding a New User:**
   - Users enter their first name, last name, gender, and phone number into the form provided in the front-end application.
   - Upon form submission, the data is sent to the back-end via a POST request to the `/adduser` endpoint.
   - The server saves this data to the MongoDB database and responds with the updated list of all users.
   - The front-end fetches this updated list and re-renders the user list.

2. **Displaying Users:**
   - The application fetches the list of all users from the back-end via a GET request to the `/getallusers` endpoint.
   - The front-end displays this list, updating automatically whenever a new user is added.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or a local MongoDB server)
- Internet connection for installing dependencies

### Installation

1. **Clone the repository:**

   ```
   git init -b main
   git clone https://github.com/your-username/user-management-system.git
   git add path
   git push origin main/branch/master
   
   cd user-management-system
2.**Install back-end dependencies:**

    cd backend.
    npm install.
    npm init.
    npm i express mongoose.
    npm i cors.
    
3.**Install front-end dependencies:**

    npm i axois.

### Configuration
1.Set up MongoDB:

    Create a MongoDB cluster on MongoDB Atlas (or use your local MongoDB server).
    Create a new database and obtain the connection string.

2.Configure the back-end:
    Create a .env file in the backend directory and add your MongoDB connection string:

### Usage
    Open your browser and navigate to http://localhost:3001.
    Add a new user by filling out the form and clicking "Add User".
    View the list of users below the form.

### user-management-system/
│
├── backend/
│   ├── models/
│   │   └── item.js          # Mongoose schema for user details
│   ├── server.js            # Express server setup and routes
│   └── package.json         # Back-end dependencies and scripts
│
├── frontend/
│   ├── src/.
│   │   └── App.js           # React component for the user interface
│   ├── public/
│   └── package.json         # Front-end dependencies and scripts
│
└── README.md                # Project documentation


### Conclusion
This User Management System serves as a basic example of how to create a full-stack application using React, Node.js, Express, and MongoDB. It demonstrates fundamental concepts such as creating and connecting a back-end server, handling HTTP requests, and managing state in a React application. This project can be a starting point for building more complex applications and learning how to integrate different technologies effectively.
