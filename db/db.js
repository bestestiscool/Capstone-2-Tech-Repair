/** Database client for repair */

const { Client } = require('pg');
require('dotenv').config();

// Connect to PostgreSQL database using connection string
const client = new Client({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl:{
    rejectUnauthoried: false //If Supabase requires SSL
  }
  

  // "postgresql://postgres:2002@127.0.0.1:5432/techrepair_db"
});

// Connect to the database
client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err.stack));

module.exports = client;
