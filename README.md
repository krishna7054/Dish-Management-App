# Dish-Management-App
This project is a full-stack application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO for real-time updates. It allows you to manage and display dish information through a responsive dashboard.

## Features
- Fetch and display dishes from the database
- Toggle the published status of dishes
- Real-time updates using Socket.IO
- Responsive design for desktop, laptop, tablet, and mobile
  
## Technologies Used
- Frontend: Vite-React, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Socket.IO
  
## Setup and Installation
### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
### Backend
1. Clone the repository:
   ```sh
   git clone https://github.com/krishna7054/Dish-Management-App.git
   cd DishManagementApp/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
### Frontend
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
    npm install
    ```
3. Start the Vite development server:
   ```sh
   npm run dev
   ```

## Project Structure
```sh
Dish-Management-App
│
├── backend
│   ├── models
│   │   └── Dish.js
│   ├── routes
│   │   └── dishes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   
    ├── public
    ├── index.html
    └── package.json
```
