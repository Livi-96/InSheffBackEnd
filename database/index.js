import pg from "pg"
import 'dotenv/config'

//get database connection string from .env
const connectionString = process.env.DATABASE_URL;

// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
    throw new Error(
      "No DB_CONNECTION_STRING defined. Did you load in your env variables?"
    );
  }
  
  // Export a new instance of pg.Pool, which will be used to interact with the PostgreSQL database
  export const pool = new pg.Pool({
    // Pass the connection string to the pool, so it knows how to connect to your database
    connectionString,
  });
  