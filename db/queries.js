const { Client } = require('pg');
/* const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString,
  ssl: true,
}); */
/* const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
}); */

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();
module.exports = client;
