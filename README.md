# Expense Tracker App - Server

This is the server-side code for the Expense Tracker App. It provides the backend functionality for managing expenses and interacting with the database.

## Features

- RESTful API endpoints for creating, reading, updating, and deleting expenses.
- Store expense data in a MongoDB database.
- Input validation and error handling.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- TypeScript

## Getting Started

To get started with the server, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/NNJ16/node-budget-server.git
 
2. Install the dependencies:

   ```shell
   cd node-budget-server
   npm install

3. Set up environment variables:
       
    - Create a .env file in the project root.
    - Define the following environment variables in the .env file:
   
   ```shell
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/expense-tracker
   
4. Start the development server:

   ```shell
   npm start
