const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { Project, RepairCost, sequelize } = require('./models');  // Import models and Sequelize instance

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://techrepair-experts.onrender.com'],
}));

app.use(express.json());  // Middleware to parse JSON bodies

// API Routes
app.get('/api/projects', async (req, res) => {
  try {
    console.log('Fetching projects from DB...');
    const projects = await Project.findAll();
    if (projects.length > 0) {
      console.log('Projects fetched:', projects);
      res.json(projects);  // Send the projects as a response
    } else {
      console.log('No projects found in the database.');
      res.status(404).json({ message: 'No projects found.' });
    }
  } catch (err) {
    console.error('Error fetching projects:', err.message);
    res.status(500).send('Server Error');
  }
});

app.get('/api/repair-costs', async (req, res) => {
  try {
    const repairCosts = await RepairCost.findAll();  // Fetch all repair costs from the database
    res.json(repairCosts);
  } catch (err) {
    console.error('Error fetching repair costs:', err.message);
    res.status(500).send('Server Error');
  }
});

// Test API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Serve static files from the React app AFTER API routes
app.use(express.static(path.join(__dirname, 'client/build')));

// Wildcard route - Serve React's index.html for any other routes not handled by the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Define the port
const PORT = process.env.PORT || 5002;  // Use environment variable PORT if available

// Sync the database and then start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to sync the database:', err);
});
