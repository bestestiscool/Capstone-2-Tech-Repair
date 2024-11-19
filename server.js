const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

// Set the database source based on environment variables (default to local)
const DB_SOURCE = process.env.DB_SOURCE || 'local';

// Initialize Prisma Clients with better error handling and logging
const localPrisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || '',  // Fallback to empty string if not set
    },
  },
});

const supabasePrisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.SUPABASE_DATABASE_URL || '',  // Fallback to empty string if not set
    },
  },
});

// Function to get the correct Prisma Client based on DB_SOURCE
function getPrismaClient() {
  return DB_SOURCE === 'supabase' ? supabasePrisma : localPrisma;
}

// Log the selected database and connection string for debugging
const prisma = getPrismaClient();
console.log(`Using ${DB_SOURCE} database with connection string: ${prisma.$connect ? process.env.SUPABASE_DATABASE_URL : process.env.DATABASE_URL}`);

// Handle invalid URLs for better error reporting
if (!process.env.DATABASE_URL && DB_SOURCE === 'local') {
  console.error("Error: No DATABASE_URL set for local database.");
}
if (!process.env.SUPABASE_DATABASE_URL && DB_SOURCE === 'supabase') {
  console.error("Error: No SUPABASE_DATABASE_URL set for Supabase database.");
}

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://techrepair-experts.onrender.com'],
}));
app.use(express.json());  // Middleware to parse JSON bodies

// API Routes

// Get all projects
// app.get('/api/projects', async (req, res) => {
//   try {
//     const projects = await prisma.project.findMany();
//     console.log("Projects from DB:", projects);
//     if (!projects.length) {
//       return res.status(404).json({ message: 'No projects found.' });
//     }
//     res.json(projects);
//   } catch (err) {
//     console.error('Error fetching projects:', err.message);
//     return res.status(500).json({ error: 'Failed to fetch projects', details: err.message });
//   }
// });

// Get all repair costs
app.get('/api/repair-costs', async (req, res) => {
  try {
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
  await prisma.$disconnect();
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
