const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

// Set the database source manually here ('local' or 'supabase')
const DB_SOURCE = 'local';  // Change to 'supabase' or 'local' when needed 

// Initialize Prisma Clients
const localPrisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,  // Local PostgreSQL database connection
    },
  },
});

const supabasePrisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.SUPABASE_DATABASE_URL,  // Supabase PostgreSQL database connection
    },
  },
});

// Select Prisma client based on the manually set DB_SOURCE variable
function getPrismaClient() {
  return DB_SOURCE === 'supabase' ? supabasePrisma : localPrisma;
}

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://techrepair-experts.onrender.com'],
}));

app.use(express.json());  // Middleware to parse JSON bodies

// API Routes

// Get all projects
app.get('/api/projects', async (req, res) => {
  const prisma = getPrismaClient();  // Get the correct Prisma client

  try {
    console.log(`Fetching projects from ${DB_SOURCE} DB...`);
    const projects = await prisma.project.findMany();
    if (projects.length > 0) {
      res.json(projects);
    } else {
      res.status(404).json({ message: 'No projects found.' });
    }
  } catch (err) {
    console.error('Error fetching projects:', err.message);
    res.status(500).send('Server Error');
  }
});

// Get all repair costs
app.get('/api/repair-costs', async (req, res) => {
  const prisma = getPrismaClient();  // Get the correct Prisma client

  try {
    console.log(`Fetching repair costs from ${DB_SOURCE} DB...`);
    const repairCosts = await prisma.repairCost.findMany();
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

// Graceful shutdown of Prisma on server close
async function gracefulShutdown() {
  console.log('Shutting down server...');
  await localPrisma.$disconnect();
  await supabasePrisma.$disconnect();
  process.exit(0);
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Define the port
const PORT = process.env.PORT || 5000;  // Use environment variable PORT if available

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} using ${DB_SOURCE} database`);
});
