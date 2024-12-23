import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,    // PostgreSQL username
  host: process.env.DB_HOST,    // Database host
  database: process.env.DB_NAME, // Name of the database
  password: process.env.DB_PASSWORD, // PostgreSQL password
  port: process.env.DB_PORT,    // PostgreSQL port
});

export default pool;
