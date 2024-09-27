const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { Project, RepairCost, sequelize } = require('./models');  // Import both Github project model and Repaircost model and  sequelize instance

const app = express();

const cors = require('cors');
app.use(cors({
  origin: '*',  // Allow all origins or restrict to your React app's domain
})); 
app.use(express.json());  // Middleware to parse JSON bodies

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// All other routes should serve the index.html file from the build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Root route to check if API is running
app.get('/', (req, res) => {
  res.send('Welcome to the Projects API!');
});

// Route to fetch all projects using Sequelize
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.findAll();  // Use Sequelize to fetch all projects
    res.json(projects);  // Return the projects from the database
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to create a new project using Sequelize
app.post('/api/projects', async (req, res) => {
  try {
    const { name, description, code_link, live_demo_link } = req.body;
    const newProject = await Project.create({ name, description, code_link, live_demo_link });  // Use Sequelize to insert a new project
    res.json(newProject);  // Return the newly created project
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to fetch all repair costs
app.get('/api/repair-costs', async (req, res) => {
  try {
    const repairCosts = await RepairCost.findAll();  // Fetch all repair costs from the database
    res.json(repairCosts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
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
