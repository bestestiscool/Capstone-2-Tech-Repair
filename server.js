const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

// Set the database source based on environment variables (default to local)
const DB_SOURCE = process.env.DB_SOURCE || 'local';

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

// Select Prisma client based on the environment or DB_SOURCE variable
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
    if (!projects.length) {
      return res.status(404).json({ message: 'No projects found.' });
    }
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err.message);
    return res.status(500).json({ error: 'Failed to fetch projects', details: err.message });
  }
});

// Get all repair costs
app.get('/api/repair-costs', async (req, res) => {
  const prisma = getPrismaClient();  // Get the correct Prisma client

  try {
    console.log(`Fetching repair costs from ${DB_SOURCE} DB...`);
    const repairCosts = await prisma.repairCost.findMany();
    if (!repairCosts.length) {
      return res.status(404).json({ message: 'No repair costs found.' });
    }
    res.json(repairCosts);
  } catch (err) {
    console.error('Error fetching repair costs:', err.message);
    return res.status(500).json({ error: 'Failed to fetch repair costs', details: err.message });
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
  if (DB_SOURCE === 'local') {
    await localPrisma.$disconnect();
  } else if (DB_SOURCE === 'supabase') {
    await supabasePrisma.$disconnect();
  }
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
