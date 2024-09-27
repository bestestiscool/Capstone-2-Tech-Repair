module.exports = {
  development: {
    username: process.env.SUPABASE_DB_USERNAME,
    password: process.env.SUPABASE_DB_PASSWORD,
    database: process.env.SUPABASE_DB_DATABASE,
    host: process.env.SUPABASE_DB_HOST,
    port: process.env.SUPABASE_DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // Enforce SSL connection
        rejectUnauthorized: false // This allows self-signed certificates (necessary in some environments like Supabase)
      }
    }
  },
  test: {
    username: "daniel",
    password: "2002",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.SUPABASE_DB_USERNAME,
    password: process.env.SUPABASE_DB_PASSWORD,
    database: process.env.SUPABASE_DB_DATABASE,
    host: process.env.SUPABASE_DB_HOST,
    port: process.env.SUPABASE_DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // Ensure SSL connection
        rejectUnauthorized: false
      }
    }
  }
};
