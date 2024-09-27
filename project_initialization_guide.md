
# Project Initialization Guide

## Step 1: Set Up Node.js Backend

1. **Initialize Node.js in the directory:**
   This will create a `package.json` file, which keeps track of your dependencies.

   ```bash
   npm init -y
   ```

2. **Install Express:**
   Express is a lightweight framework for handling HTTP requests, which you'll use for your backend.

   ```bash
   npm install express
   ```

3. **Create your `server.js` file:**
   Create a new file called `server.js` for your backend code.

   ```bash
   touch server.js
   ```

## Step 2: Set Up the React Frontend

1. **Create the React app:**
   Use the following command to create a React app named `client` inside your project directory.

   ```bash
   npx create-react-app client
   ```

2. **Navigate into the client directory:**

   ```bash
   cd client
   ```

3. **Start the React app:**
   Run the React development server.

   ```bash
   npm start
   ```

## Step 3: Connect React and Node.js

Now we need to ensure that React can communicate with the Node.js backend.

1. **Set up a proxy:**
   Open `client/package.json` and add the following line under `"scripts"`:

   ```json
   "proxy": "http://localhost:5000",
   ```

2. **Modify the React app to fetch data from the backend:**

   Open `client/src/App.js` and modify it to fetch a message from the backend:

   ```javascript
   import React, { useState, useEffect } from 'react';

   function App() {
     const [message, setMessage] = useState('');

     useEffect(() => {
       fetch('/api/message')
         .then((res) => res.json())
         .then((data) => setMessage(data.message));
     }, []);

     return (
       <div className="App">
         <h1>{message}</h1>
       </div>
     );
   }

   export default App;
   ```

3. **Update `server.js` to send JSON data:**
   Modify your backend (`server.js`) to respond with a message when the `/api/message` endpoint is hit:

   ```javascript
   app.get('/api/message', (req, res) => {
     res.json({ message: 'Welcome to the Repair Video Showcase!' });
   });
   ```

## Step 4: Test the Connection

1. Restart both the backend and frontend servers:

   - In the backend, run:

     ```bash
     node server.js
     ```

   - In the frontend (inside the `client` folder), run:

     ```bash
     npm start
     ```

2. Open your browser and visit `http://localhost:3000`. You should now see the message "Welcome to the Repair Video Showcase!" on your React page.


npm install axios
npm install react-router-dom